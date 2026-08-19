'use client'

import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { sendEnquiry } from '@/lib/emailjs'
import { services } from '@/lib/site'

const EMPTY = { name: '', email: '', phone: '', service: services[0].title, notes: '' }

/**
 * Short-form consultation request.
 *
 * The previous version of this form called `emailjs.send(...)` without ever
 * importing emailjs, so every submission threw a ReferenceError and silently
 * failed. Delivery now goes through `lib/emailjs`, shared with the contact form.
 */
export default function ConsultationForm() {
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
        subject: `Consultation request — ${values.service}`,
        message: values.notes || '(No additional notes provided.)',
      })
      setValues(EMPTY)
      setStatus('sent')
    } catch (error) {
      console.error('Consultation request failed to send:', error)
      setStatus('error')
    }
  }

  return (
    <form className="stack-lg" onSubmit={onSubmit} noValidate={false}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">Full name</label>
          <input id="cf-name" className="input" name="name" required autoComplete="name"
            value={values.name} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email address</label>
          <input id="cf-email" className="input" name="email" type="email" required autoComplete="email"
            value={values.email} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone number</label>
          <input id="cf-phone" className="input" name="phone" type="tel" required autoComplete="tel"
            placeholder="+263 …" value={values.phone} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="cf-service">What do you need help with?</label>
          <select id="cf-service" className="select" name="service" value={values.service} onChange={update}>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Something else">Something else</option>
          </select>
        </div>
        <div className="field span-2">
          <label htmlFor="cf-notes">Anything we should know first? <span className="hint">(optional)</span></label>
          <textarea id="cf-notes" className="textarea" name="notes" rows={4}
            style={{ minHeight: '6rem' }}
            placeholder="Year end date, entity type, deadlines already running…"
            value={values.notes} onChange={update} />
        </div>
      </div>

      <div className="stack">
        <button type="submit" className="btn btn--accent btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Request a consultation'}
          {status !== 'sending' && <Icon name="arrowRight" size={18} />}
        </button>
        {status === 'sent' && (
          <p className="form-status" data-tone="ok" role="status">
            Thank you — your request has been sent. We normally reply within one business day.
          </p>
        )}
        {status === 'error' && (
          <p className="form-status" data-tone="error" role="alert">
            Something went wrong sending your request. Please email us directly instead.
          </p>
        )}
      </div>
    </form>
  )
}
