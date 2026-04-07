import { useEffect, useRef, useState } from 'react'
import { forms } from '../data/siteData'

function FloatingActions() {
  const [open, setOpen] = useState(false)
  const popRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        open &&
        !popRef.current?.contains(event.target) &&
        !btnRef.current?.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  return (
    <div className="float-wrap">
      {open && (
        <div ref={popRef} className="forms-pop" id="floatingFormsMenu">
          {forms.map((form) => (
            <a key={form.href} href={form.href} target="_blank" rel="noreferrer">
              {form.label}
            </a>
          ))}
        </div>
      )}
      <button
        ref={btnRef}
        id="floatingFormsBtn"
        type="button"
        className="fab forms"
        aria-label="Open forms menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <i className="bx bx-file-blank" />
      </button>
      <a
        href="https://wa.me/919922156948"
        target="_blank"
        rel="noreferrer"
        className="fab whatsapp"
        aria-label="Open WhatsApp chat"
      >
        <i className="bx bxl-whatsapp" />
      </a>
    </div>
  )
}

export default FloatingActions
