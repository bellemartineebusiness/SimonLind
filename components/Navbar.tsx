'use client'

import { useState, useEffect } from 'react'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Simon Lind – till toppen"
            onClick={handleNavClick}
          >
            <Image
              src="/simon-lind-logo.svg"
              alt="Simon Lind – Webbutvecklare logotyp"
              width={200}
              height={80}
              className="h-14 w-auto object-contain"
              priority
              unoptimized
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SIMON LIND
              </span>
              <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                Webbutvecklare
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Huvudnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 min-h-[40px] focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Kom igång – scrolla till kontakt"
            >
              Kom igång →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg"
        >
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobilnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={handleNavClick}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-purple-500"
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
