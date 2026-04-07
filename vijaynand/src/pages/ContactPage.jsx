function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Reach us for counselling support, therapy appointments and guidance.
          </p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Pune Office</h2>
            <p className="mt-3 text-slate-600">
              Head Office – Pune. Counselling and therapy support centre.
            </p>
            <a href="tel:+918598262885" className="mt-5 inline-block text-sky-700">
              +91 85982 62885
            </a>
          </article>
          <article className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Chiplun Office</h2>
            <p className="mt-3 text-slate-600">Sub Branch – Chiplun.</p>
            <a href="tel:+919922156948" className="mt-5 inline-block text-sky-700">
              +91 99221 56948
            </a>
          </article>
        </div>
      </section>
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">Quick Contact</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <a
              href="https://wa.me/919922156948"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-50 p-6 text-slate-800"
            >
              WhatsApp
            </a>
            <a href="tel:+919922156948" className="rounded-2xl bg-sky-50 p-6 text-slate-800">
              Call
            </a>
            <a
              href="mailto:vijayanandtrust@gmail.com"
              className="rounded-2xl bg-indigo-50 p-6 text-slate-800"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
