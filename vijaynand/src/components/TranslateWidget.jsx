import { useEffect } from 'react'

let scriptLoaded = false

function TranslateWidget() {
  useEffect(() => {
    if (window.google?.translate) {
      window.googleTranslateElementInit?.()
      return
    }

    if (scriptLoaded) return

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return
      const target = document.getElementById('google_translate_element')
      if (!target || target.childElementCount > 0) return
      // Keep one widget instance across route transitions.
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,mr',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element',
      )
    }

    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
    scriptLoaded = true
  }, [])

  return <div id="google_translate_element" aria-label="Translate this page" />
}

export default TranslateWidget
