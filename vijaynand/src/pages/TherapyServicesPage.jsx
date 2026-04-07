const services = [
  'Counselling of School Children',
  'Career Counselling',
  'Mental Health Counselling',
  'Family Counselling',
  'Corporate Counselling',
  'Old Age Counselling',
  'Psychotherapy',
  'Psychometrics',
  'Special Education Support',
]

const tests = [
  'IQ Testing',
  'Aptitude Testing',
  'Personality Assessment',
  'Anxiety & Stress Testing',
  'Career Guidance Assessment',
  'Learning Disability Screening',
]

function TherapyServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Psychological Services</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Child-focused and adult counseling services designed for practical outcomes.
          </p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Counselling of School Children</h2>
          <p className="mt-4 max-w-4xl text-slate-600">
            Supporting students, parents and teachers through guidance, emotional support and
            developmental interventions.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Services We Offer</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Psychological Testing & Treatment
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tests.map((item) => (
              <article
                key={item}
                className="rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 p-6 text-white"
              >
                <h3 className="text-lg font-semibold">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TherapyServicesPage
