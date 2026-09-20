#!/usr/bin/env node
/**
 * insights-cms CLI — accounts and content imports.
 *
 * Reads MONGODB_URI / MONGODB_DB / CMS_COLLECTION_PREFIX from the environment,
 * loading .env.local then .env from the current directory if they exist.
 */

import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createInsightsCms } from '../src/index.js'
import { CmsError } from '../src/errors.js'
import { cleanBody, publishErrors, validatePost } from '../src/schema.js'

const HELP = `insights-cms <command> [options]

Accounts
  create-user --email <email> --name <name>   Create a studio login (prompts for a password)
  set-password --email <email>                Reset a password and sign that account out everywhere
  remove-user --email <email>                 Delete a login
  list-users                                  Show all logins

Content
  import <file> [--status published|draft] [--dry-run]
      Upsert posts by slug from a .js/.mjs module (default export or \`insights\`)
      or a .json array. Re-running updates the same posts rather than duplicating them.

Environment
  MONGODB_URI (required), MONGODB_DB (default "insights"), CMS_COLLECTION_PREFIX (default "cms_")
  .env.local and .env in the current directory are loaded if present.

Passwords can be piped on stdin for scripted use.`

/* -------------------------------------------------------------- env/args */

for (const file of ['.env.local', '.env']) {
  if (existsSync(file) && typeof process.loadEnvFile === 'function') {
    try {
      process.loadEnvFile(file) // never overrides variables already set
    } catch {}
  }
}

function parseArgs(argv) {
  const positional = []
  const flags = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith('--')) {
      const [k, inline] = a.slice(2).split('=')
      if (inline !== undefined) flags[k] = inline
      else if (argv[i + 1] && !argv[i + 1].startsWith('--')) flags[k] = argv[++i]
      else flags[k] = true
    } else positional.push(a)
  }
  return { positional, flags }
}

const fail = (msg) => {
  console.error(`\n  ✖ ${msg}\n`)
  process.exit(1)
}

function requireFlag(flags, name) {
  if (typeof flags[name] !== 'string' || !flags[name].trim()) fail(`--${name} is required.`)
  return flags[name].trim()
}

/* -------------------------------------------------------------- password */

let pipedLines
async function readPipedLine() {
  if (!pipedLines) {
    const chunks = []
    for await (const c of process.stdin) chunks.push(c)
    pipedLines = Buffer.concat(chunks).toString('utf8').split(/\r?\n/)
  }
  return pipedLines.shift() ?? ''
}

function promptHidden(question) {
  if (!process.stdin.isTTY) return readPipedLine()
  return new Promise((resolvePrompt, reject) => {
    const { stdin, stdout } = process
    let value = ''
    const cleanup = () => {
      stdin.setRawMode(false)
      stdin.pause()
      stdin.off('data', onData)
    }
    const onData = (chunk) => {
      for (const ch of chunk) {
        if (ch === '\r' || ch === '\n') {
          cleanup()
          stdout.write('\n')
          return resolvePrompt(value)
        }
        if (ch === '') {
          cleanup()
          stdout.write('\n')
          return reject(new Error('Cancelled.'))
        }
        if (ch === '' || ch === '\b') value = value.slice(0, -1)
        else value += ch
      }
    }
    stdout.write(question)
    stdin.setRawMode(true)
    stdin.setEncoding('utf8')
    stdin.resume()
    stdin.on('data', onData)
  })
}

async function askNewPassword() {
  const first = await promptHidden('Password (min 10 characters): ')
  if (process.stdin.isTTY) {
    const again = await promptHidden('Repeat password: ')
    if (first !== again) fail('Passwords did not match.')
  }
  return first
}

/* -------------------------------------------------------------- import */

async function loadPosts(file) {
  const path = resolve(file)
  if (!existsSync(path)) fail(`No file at ${path}`)
  if (path.endsWith('.json')) return JSON.parse(readFileSync(path, 'utf8'))
  const mod = await import(pathToFileURL(path).href)
  const posts = mod.default ?? mod.insights
  if (!Array.isArray(posts)) fail('The module must export an array (default export or `insights`).')
  return posts
}

function dryRun(posts, status) {
  let bad = 0
  for (const input of posts) {
    const { value, errors } = validatePost(input)
    const blockers = status === 'published' ? publishErrors({ ...value, body: cleanBody(value.body) }) : {}
    const problems = { ...errors, ...blockers }
    if (Object.keys(problems).length) {
      bad++
      console.log(`  ✖ ${input.slug ?? '(no slug)'}`)
      for (const [k, v] of Object.entries(problems)) console.log(`      ${k}: ${v}`)
    } else {
      console.log(`  ✓ ${value.slug}  (${value.body.length} blocks, ${value.date})`)
    }
  }
  console.log(`\n${posts.length - bad} of ${posts.length} valid. Nothing was written (--dry-run).`)
  if (bad) process.exit(1)
}

/* -------------------------------------------------------------- main */

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2))
  const [command, ...rest] = positional
  if (!command || flags.help || command === 'help') {
    console.log(HELP)
    return
  }

  if (command === 'import' && flags['dry-run']) {
    if (!rest[0]) fail('Usage: insights-cms import <file> [--status published|draft] [--dry-run]')
    return dryRun(await loadPosts(rest[0]), flags.status === 'draft' ? 'draft' : 'published')
  }

  if (!process.env.MONGODB_URI) fail('MONGODB_URI is not set (in the environment, .env.local or .env).')
  const cms = createInsightsCms({
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB || undefined,
    collectionPrefix: process.env.CMS_COLLECTION_PREFIX || undefined,
  })

  try {
    switch (command) {
      case 'create-user': {
        const email = requireFlag(flags, 'email')
        const name = requireFlag(flags, 'name')
        const user = await cms.auth.createUser({ email, name, password: await askNewPassword() })
        console.log(`\n  ✓ Created ${user.name} <${user.email}>. They can sign in at /studio.\n`)
        break
      }
      case 'set-password': {
        const email = requireFlag(flags, 'email')
        const user = await cms.auth.setPassword(email, await askNewPassword())
        console.log(`\n  ✓ Password updated for ${user.email}; existing sessions signed out.\n`)
        break
      }
      case 'remove-user': {
        const user = await cms.auth.removeUser(requireFlag(flags, 'email'))
        console.log(`\n  ✓ Removed ${user.email}.\n`)
        break
      }
      case 'list-users': {
        const users = await cms.auth.listUsers()
        if (!users.length) console.log('No accounts yet. Create one with `create-user`.')
        for (const u of users) {
          const last = u.lastLoginAt ? new Date(u.lastLoginAt).toISOString().slice(0, 16).replace('T', ' ') : 'never'
          console.log(`  ${u.email.padEnd(40)} ${u.name.padEnd(28)} last sign-in: ${last}`)
        }
        break
      }
      case 'import': {
        if (!rest[0]) fail('Usage: insights-cms import <file> [--status published|draft] [--dry-run]')
        const status = flags.status === 'draft' ? 'draft' : 'published'
        const posts = await loadPosts(rest[0])
        let n = 0
        for (const post of posts) {
          const { slug, action } = await cms.repo.upsertBySlug(post, { status })
          console.log(`  ✓ ${action.padEnd(8)} ${slug}`)
          n++
        }
        console.log(`\n${n} post${n === 1 ? '' : 's'} imported as ${status}.`)
        console.log('Deployed sites refresh within the hour, or at once on the next publish from the studio.')
        break
      }
      default:
        fail(`Unknown command "${command}". Run with --help.`)
    }
  } finally {
    await cms.close()
  }
}

main().catch((err) => {
  if (err instanceof CmsError) {
    const details = err.details
      ? '\n' + Object.entries(err.details).filter(([, v]) => v).map(([k, v]) => `      ${k}: ${v}`).join('\n')
      : ''
    fail(`${err.message}${details}`)
  }
  fail(err?.message || String(err))
})
