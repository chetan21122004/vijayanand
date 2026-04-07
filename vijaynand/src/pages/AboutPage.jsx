function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">About Us</h1>
          <p className="mt-5 max-w-2xl text-white/80">
            Vijayanand Foundation works for social, psychological, educational, medical, research
            and rehabilitation support for all.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            About Vijayanand Foundation
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            Our trust focuses on child development, women empowerment, youth education, support for
            senior citizens and long-term wellbeing through evidence-based counselling and therapy.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Child Development',
              'Education For Young',
              'Support To Women',
              'Care For Old Age People',
              'Marriage Guidance',
              'PACE Institute Courses',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Our Specialized Centre
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Vijayanand Child Counseling and Therapy Centre
          </h2>
          <a
            href="https://vijayanandcenter.odoo.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-sky-600 px-8 py-4 font-medium text-white transition hover:bg-sky-700"
          >
            <i className="bx bx-link-external text-xl" />
            Visit Our Centre Website
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Vision</h3>
              <p className="leading-relaxed text-slate-700">
                We aim to achieve behavioural, social, educational and economic transformation for
                all towards rehabilitation.
              </p>
            </article>
            <article className="rounded-2xl border border-sky-200 bg-sky-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Mission</h3>
              <p className="leading-relaxed text-slate-700">
                Use optimum resources in society for solving problems of persons with special needs
                as well as normal.
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Goal</h3>
              <p className="leading-relaxed text-slate-700">
                Improve quality of life through practical, accessible and compassionate support.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
