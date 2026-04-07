import { useEffect, useState } from 'react'

const galleryGroups = [
  {
    title: 'Workshop Rorschach Inkblot Test',
    items: Array.from({ length: 4 }, (_, idx) => `Workshop ${idx + 1}`),
  },
  { title: 'Book Inaugural', items: Array.from({ length: 4 }, (_, idx) => `Book ${idx + 1}`) },
  { title: 'More Moments', items: Array.from({ length: 4 }, (_, idx) => `Moment ${idx + 1}`) },
]

function GalleryPage() {
  const [activeItem, setActiveItem] = useState('')

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') setActiveItem('')
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-white/80">Photo Gallery</p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          {galleryGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">{group.title}</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {group.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="aspect-[4/3] rounded-xl border border-slate-200 bg-slate-100 text-sm text-slate-600"
                    onClick={() => setActiveItem(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {activeItem && (
            <div className="fixed inset-0 z-[1500] grid place-items-center bg-slate-950/80" onClick={() => setActiveItem('')}>
              <div className="w-[min(540px,90vw)] rounded-2xl bg-white p-6 text-center" onClick={(event) => event.stopPropagation()}>
                <h3 className="text-xl font-semibold text-slate-900">{activeItem}</h3>
                <p className="mt-3 text-slate-600">Lightbox preview (asset slots pending exact images)</p>
                <button
                  type="button"
                  className="mt-5 rounded-full bg-indigo-600 px-6 py-2.5 font-medium text-white"
                  onClick={() => setActiveItem('')}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default GalleryPage
