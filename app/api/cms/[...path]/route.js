import { cms } from '@/lib/cms'

/**
 * Every CMS endpoint — the public insights feed, studio sign-in and the
 * studio's read/write API — is served from this one catch-all. The handlers
 * live in packages/insights-cms; see its README for the route list.
 */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const { GET, POST, PATCH, DELETE } = cms.routes
