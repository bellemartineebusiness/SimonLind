'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted')
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem('cookies-accepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-samtycke"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">🍪 Denna webbplats använder cookies</p>
          <p className="text-sm text-gray-600">
            Vi använder endast nödvändiga cookies för kontaktformulär, inga spårningscookies.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            href="/cookies"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-blue-600 border-2 border-blue-200 rounded-full hover:bg-blue-50 transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Läs mer om hur vi använder cookies"
          >
            Läs mer om cookies
          </Link>
          <button
            onClick={handleAccept}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Acceptera cookies och stäng denna banner"
          >
            Jag Förstår ✓
          </button>
        </div>
      </div>
    </div>
  )
}
