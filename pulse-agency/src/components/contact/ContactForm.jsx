import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Button from '../common/Button'
import ScrollReveal from '../common/ScrollReveal'
import { site } from '../../data/site'
import { serviceOptions, budgets, planOptions } from '../../data/services'

// ---- API INTEGRATION POINT ------------------------------------------------
// Set VITE_FORM_ENDPOINT in .env (Formspree, Web3Forms, or your own backend route).
// Never put private API keys in frontend code; keep secrets on a server.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const codes = ['+91', '+1', '+44', '+971', '+61', '+65', '+49']

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid work email, like name@company.com.'
  if (!/^\d{7,12}$/.test(v.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter 7 to 12 digits, without the country code.'
  if (v.company.trim().length < 2) e.company = 'Enter your company or brand name.'
  if (!v.service) e.service = 'Choose a service.'
  if (!v.budget) e.budget = 'Choose a budget range.'
  if (v.details.trim().length < 15) e.details = 'Tell us a bit more (at least 15 characters).'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [params] = useSearchParams()
  const q = params.get('plan')
  const [v, setV] = useState({ name: '', email: '', code: '+91', phone: '', company: '', service: '', budget: '', plan: planOptions.includes(q) ? q : '', details: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [msg, setMsg] = useState('')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const ap = (k) => ({ id: k, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined, className: `input ${errors[k] ? '!border-red-500' : ''}` })

  const submit = async (e) => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) { document.getElementById(Object.keys(er)[0])?.focus(); return }
    if (!ENDPOINT) { setStatus('error'); setMsg('The form is not connected yet. Add VITE_FORM_ENDPOINT to your .env file, or email us directly.'); return }
    setStatus('loading')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...v, phone: `${v.code} ${v.phone}` }) })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setStatus('success')
    } catch (err) { setStatus('error'); setMsg('We could not send your inquiry. Check your connection and try again, or email us directly.') }
  }

  return (
              <ScrollReveal className="glass rounded-[2rem] p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} role="status" className="py-16 text-center">
                  <CheckCircle2 className="mx-auto text-violet" size={56} aria-hidden /><h2 className="mt-4 text-xl font-bold">Inquiry sent</h2>
                  <p className="mt-2 text-ink/70">Thanks, {v.name.split(' ')[0]}. We will reply to {v.email} soon.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2" exit={{ opacity: 0 }}>
                  <Field id="name" label="Full name" error={errors.name}><input {...ap('name')} autoComplete="name" /></Field>
                  <Field id="email" label="Work email" error={errors.email}><input {...ap('email')} type="email" autoComplete="email" /></Field>
                  <Field id="phone" label="Phone number" error={errors.phone}>
                    <div className="flex gap-2">
                      <select aria-label="Country code" value={v.code} onChange={set('code')} className="input !w-24 shrink-0 px-2">{codes.map(c => <option key={c}>{c}</option>)}</select>
                      <input {...ap('phone')} type="tel" inputMode="tel" autoComplete="tel-national" />
                    </div>
                  </Field>
                  <Field id="company" label="Company or brand name" error={errors.company}><input {...ap('company')} autoComplete="organization" /></Field>
                  <Field id="service" label="Service" error={errors.service}><select {...ap('service')}><option value="">Select a service</option>{serviceOptions.map(s => <option key={s}>{s}</option>)}</select></Field>
                  <Field id="budget" label="Budget range" error={errors.budget}><select {...ap('budget')}><option value="">Select a range</option>{budgets.map(s => <option key={s}>{s}</option>)}</select></Field>
                  <div className="sm:col-span-2"><Field id="plan" label="Selected pricing plan (optional)"><select id="plan" value={v.plan} onChange={set('plan')} className="input"><option value="">No plan selected</option>{planOptions.map(p => <option key={p}>{p}</option>)}</select></Field></div>
                  <div className="sm:col-span-2"><Field id="details" label="Project details" error={errors.details}><textarea {...ap('details')} rows={5} placeholder="What are you trying to achieve?" /></Field></div>
                  <div className="sm:col-span-2">
                    {status === 'error' && <p role="alert" className="mb-4 flex gap-2 rounded-2xl bg-red-50 p-4 text-red-700"><AlertCircle className="shrink-0" size={20} aria-hidden />{msg}</p>}
                    <Button type="submit" arrow disabled={status === 'loading'} className="w-full disabled:opacity-60 sm:w-auto">
                      {status === 'loading' ? <><Loader2 className="animate-spin" size={18} aria-hidden /> Sending…</> : 'Send Project Inquiry'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
  )
}
