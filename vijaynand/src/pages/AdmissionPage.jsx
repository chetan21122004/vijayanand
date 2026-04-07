import { useState } from 'react'

const initialData = {
  fullName: '',
  age: '',
  email: '',
  phone: '',
  city: '',
  supportType: 'Counselling',
  note: '',
}

function AdmissionPage() {
  const [form, setForm] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialData)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Admission Form</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Submit your admission details. This mirrors existing source behavior.
          </p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <form className="rounded-2xl border border-slate-200 bg-slate-50 p-8" onSubmit={onSubmit}>
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">Personal Information</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-slate-300 px-3 py-2" name="fullName" placeholder="Full Name" value={form.fullName} onChange={onChange} required />
              <input className="rounded-lg border border-slate-300 px-3 py-2" name="age" placeholder="Age" value={form.age} onChange={onChange} />
              <input className="rounded-lg border border-slate-300 px-3 py-2" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
              <input className="rounded-lg border border-slate-300 px-3 py-2" name="phone" placeholder="Phone Number" value={form.phone} onChange={onChange} required />
            </div>
            <h3 className="mt-8 mb-4 text-xl font-semibold text-slate-900">Address Information</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-slate-300 px-3 py-2" name="city" placeholder="City" value={form.city} onChange={onChange} />
              <select className="rounded-lg border border-slate-300 px-3 py-2" name="supportType" value={form.supportType} onChange={onChange}>
                <option>Counselling</option>
                <option>Therapy</option>
                <option>Psychological Test</option>
                <option>Workshop Program</option>
              </select>
            </div>
            <h3 className="mt-8 mb-4 text-xl font-semibold text-slate-900">Course/Service Selection</h3>
            <textarea className="min-h-28 w-full rounded-lg border border-slate-300 px-3 py-2" name="note" placeholder="Share your concern" value={form.note} onChange={onChange} />
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-indigo-600 px-6 py-2.5 font-medium text-white hover:bg-indigo-700">Submit Admission Form</button>
            </div>
            {submitted && <p className="mt-4 text-sky-700">Submitted successfully.</p>}
          </form>
          <div className="mt-8 rounded-xl bg-slate-100 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Need Help?</h3>
            <p className="mt-2 text-slate-700">
              Contact us at <a href="tel:+919922156948" className="text-indigo-700">+91 99221 56948</a> or{' '}
              <a href="mailto:vijayanandtrust@gmail.com" className="text-indigo-700">vijayanandtrust@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdmissionPage
