import { Link } from 'react-router-dom'
import { ctaTargets, forms } from '../data/siteData'

const counselling = [
  'School Counselling',
  'Family Counselling',
  'Pre-Marriage Counselling',
  'Career Counselling',
  'Vocational Guidance',
  'Old Age Counselling',
  'Mental Health Counselling',
  'Corporate Counselling',
  'Psychotherapy',
  'Psychometrics',
  'Psychological Tests (IQ, DQ, EQ, SQ, Anxiety)',
]

const therapies = [
  'Occupational Therapy',
  'Physio Therapy',
  'Speech Therapy',
  'Behavior Therapy',
  'Psychological Therapy',
  'Yoga Therapy',
  'Music Therapy',
  'Stress Management',
]

const specialCards = [
  {
    title: 'Special Conditions',
    items: [
      'Intellectual Disability',
      'ADHD',
      'Cerebral Palsy',
      'Autism',
      'Multiple Disability',
      'Hearing Impairment',
      'Mental Illness',
    ],
  },
  {
    title: 'Therapy Services',
    items: [
      'Occupational Therapy',
      'Physio Therapy',
      'Speech Therapy',
      'Behavior Therapy',
      'Psychological Therapy',
    ],
  },
  {
    title: 'Holistic Therapies',
    items: ['Yoga Therapy', 'Music Therapy', 'Stress Management'],
  },
]

function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden text-white">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/hero-video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-40 pb-24">
          <div className="max-w-5xl text-left">
            <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-sky-300">Happiness Depends on Thought</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Vijayanand Foundation — working for Social, Psychological, Educational, Medical,
              Research & Rehabilitation for all.
            </p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <Link
                to={ctaTargets.admissionRoute}
                className="inline-flex items-center gap-4 rounded-full bg-white px-7 py-3.5 font-medium text-slate-900 transition hover:bg-slate-100"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white">
                  <i className="bx bx-file text-xl" />
                </span>
                Admission Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
          <div>
            <span className="text-sm font-medium text-white">Join our community today!</span>
            <span className="ml-2 hidden text-white/80 sm:inline">
              Become a member of Vijayanand Foundation
            </span>
          </div>
          <a
            href={forms[1].href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-600 transition hover:bg-slate-50"
          >
            <i className="bx bx-user-plus" />
            Membership Form
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Comprehensive Counselling & Therapy Support
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <i className="bx bx-conversation text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Counselling Services</h3>
              </div>
              <ul className="space-y-3 text-base text-slate-700">
                {counselling.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white transition hover:shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                  <i className="bx bx-health text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Therapy & Rehabilitation</h3>
              </div>
              <ul className="space-y-3 text-base text-white/90">
                {therapies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Specialized Care
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Therapy & Special Services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specialCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-2xl p-6 text-white ${
                  index === 0
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                    : index === 1
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                      : 'bg-gradient-to-br from-amber-500 to-orange-600'
                }`}
              >
                <h3 className="mb-4 text-lg font-semibold">{card.title}</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <div className="mb-16 max-w-4xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              About Vijayanand Trust
            </h2>
          </div>
          <div className="mb-20 flex flex-wrap gap-4">
            {['Social', 'Psychological', 'Educational', 'Medical', 'Research', 'Rehabilitation'].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <p className="mb-12 max-w-5xl text-base leading-relaxed text-white/85 sm:text-lg">
            Our trust is work on Social, Psychological, Educational, Medical, Research and
            Rehabilitation for all. Everyone have Well-being of mental, physical and economical
            domain, Our society is representing to diversity and diversity need to equality of
            thought, then we can achieve to destination of Life.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold">Vision</h3>
              <p className="leading-relaxed text-white/85">
                Behavioural, Social, Educational and Economic transformation for all towards
                Rehabilitation.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold">Mission</h3>
              <p className="leading-relaxed text-white/85">
                Use optimum level of resources in society for solution of the problems of all
                persons with special need as well as normal.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold">Goal</h3>
              <p className="leading-relaxed text-white/85">Our goal is to improve access and quality of life.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-50 to-indigo-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Our Specialized Centre
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Vijayanand Child Counseling and Therapy Centre
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Empowering lives, one step at a time. Come see the difference compassionate care can
            make at Vijayanand Child Counseling and Therapy Centre.
          </p>
          <a
            href="https://vijayanandcenter.odoo.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-4 rounded-full bg-sky-600 px-8 py-4 font-medium text-white shadow-lg transition hover:bg-sky-700"
          >
            <i className="bx bx-link-external text-xl" />
            Visit Our Centre Website
          </a>
        </div>
      </section>
    </>
  )
}

export default HomePage
