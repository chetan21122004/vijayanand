function PacePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">PACE Institute of Yoga</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Promoting holistic development through yoga, psychological assessment and guidance.
          </p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Holistic Development</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            We support physical, mental and emotional growth through structured yoga and counselling
            modules.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Our Yoga Services / Why Yoga</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              'Therapeutic Yoga',
              'Meditation & Breath Work',
              'Stress Management Yoga',
              'Lifestyle Corrective Modules',
            ].map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Courses Offered</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {['Certificate Courses', 'Weekend Programs', 'Advanced Modules'].map((item) => (
              <article key={item} className="rounded-2xl bg-emerald-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Psychological Assessment and Guidance
          </h2>
          <p className="mt-4 max-w-4xl text-slate-600">
            Aptitude, interest and psychological assessments for students and adults.
          </p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Contact Us</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSduZvdT-8Z2eVdeYlC0H6MZrP2fkWuLoJZIjqftMcEGpTzNZw/viewform"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-emerald-600 px-8 py-3 font-medium text-white hover:bg-emerald-700"
          >
            Admission Open - Enroll Now
          </a>
        </div>
      </section>
    </>
  )
}

export default PacePage
