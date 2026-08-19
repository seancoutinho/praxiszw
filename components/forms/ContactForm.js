'use client'

import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { sendEnquiry } from '@/lib/emailjs'
import { services } from '@/lib/site'

const EMPTY = { name: '', email: '', phone: '', organisation: '', subject: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle')

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendEnquiry({
        username: values.name,
        email: values.email,
        phone: values.phone,
        subject: `${values.subject}${values.organisation ? ` — ${values.organisation}` : ''}`,
        message: values.message,
      })
      setValues(EMPTY)
      setStatus('sent')
    } catch (error) {
      console.error('Contact enquiry failed to send:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="stack-lg">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="c-name">Full name</label>
          <input id="c-name" name="name" className="input" required autoComplete="name"
            value={values.name} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="c-org">Organisation <span className="hint">(optional)</span></label>
          <input id="c-org" name="organisation" className="input" autoComplete="organization"
            value={values.organisation} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email address</label>
          <input id="c-email" name="email" type="email" className="input" required autoComplete="email"
            value={values.email} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone number</label>
          <input id="c-phone" name="phone" type="tel" className="input" required autoComplete="tel"
            placeholder="+263 …" value={values.phone} onChange={update} />
        </div>
        <div className="field span-2">
          <label htmlFor="c-subject">What is this about?</label>
          <select id="c-subject" name="subject" className="select" required value={values.subject} onChange={update}>
            <option value="" disabled>Choose the closest match…</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="General enquiry">General enquiry</option>
            <option value="Careers">Careers</option>
          </select>
        </div>
        <div className="field span-2">
          <label htmlFor="c-message">Your message</label>
          <textarea id="c-message" name="message" className="textarea" required rows={7}
            placeholder="The more detail you can give — entity type, year end, deadlines already running, current state of your records — the more useful our first reply will be."
            value={values.message} onChange={update} />
          <span className="hint">
            Please do not send confidential financial records through this form. We will tell you
            how to send them securely once we have replied.
          </span>
        </div>
      </div>

      <div className="stack">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
          {status !== 'sending' && <Icon name="arrowRight" size={18} />}
        </button>
        {status === 'sent' && (
          <p className="form-status" data-tone="ok" role="status">
            Thank you — your message has been sent. We normally reply within one business day.
          </p>
        )}
        {status === 'error' && (
          <p className="form-status" data-tone="error" role="alert">
            Something went wrong sending your message. Please email or call us directly instead.
          </p>
        )}
      </div>
    </form>
  )
}
