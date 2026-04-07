import { Link } from 'react-router-dom'
import { ctaTargets } from '../data/siteData'

function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-900 via-indigo-900 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Our Blog</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Latest articles and insights from Vijayanand Foundation.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">Latest Articles & Insights</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-slate-900">Vijayanand Foundation Blog</h3>
              <p className="mt-3 text-slate-600">
                Read stories and practical guidance from our counselling and therapy practice.
              </p>
              <Link
                to={ctaTargets.blogRoute}
                className="mt-5 inline-flex rounded-full bg-indigo-600 px-6 py-2.5 font-medium text-white"
              >
                Visit Blog
              </Link>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-semibold text-slate-900">Blog Feed</h3>
              <div className="mt-4 grid h-56 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                Feed placeholder (source page uses placeholder iframe)
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
