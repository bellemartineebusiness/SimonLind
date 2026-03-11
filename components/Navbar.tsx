'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#om-mig', label: 'Om Mig' },
  { href: '#tjänster', label: 'Tjänster' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let rafId: number

    function handleScroll() {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-0 sm:px-2 lg:px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Simon Lind – till toppen"
            onClick={handleNavClick}
          >
            <Image
              src="/simon-lind-logo.svg"
              alt="Simon Lind – Webbutvecklare logotyp"
              width={320}
              height={128}
              className="h-20 w-auto object-contain"
              priority
              unoptimized
            />
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Huvudnavigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#kontakt"
              className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Kom igång – scrolla till kontakt"
            >
              Kom igång →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white/95 shadow-lg backdrop-blur-md md:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-4 py-4"
            aria-label="Mobilnavigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#kontakt"
              onClick={handleNavClick}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Kom igång – scrolla till kontakt"
            >
              Kom igång →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}