'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    try {
      const response = await fetch('/api/web3forms-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const json = await response.json()

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(json?.error ?? 'Okänt fel')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(String(err))
    }
  }

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Kontakta <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mig</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Behöver du en hemsida? Fyll i formuläret nedan så återkommer jag inom 24 timmar.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4" aria-hidden="true">✅</div>
              <p className="text-lg font-semibold text-green-600">
                Meddelandet skickades!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="cf-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Namn <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                </label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="Ditt namn"
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="cf-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-post <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                </label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="din@email.se"
                  aria-required="true"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="cf-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Meddelande <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Berätta om ditt projekt..."
                  aria-required="true"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm" role="alert">
                  Fel: {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                aria-label="Skicka meddelande"
              >
                {status === 'loading' ? 'Skickar...' : 'Skicka Meddelande →'}
              </button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                🔒 Ditt meddelande skickas och hanteras säkert enligt{' '}
                <a href="/privacy" className="underline hover:text-gray-700 transition-colors duration-200">
                  GDPR och vår integritetspolicy
                </a>
                . Uppgifterna används endast för att svara på din förfrågan.
              </p>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Eller maila direkt:</p>
          <a
            href="mailto:Simonlind06@icloud.com"
            className="inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
            aria-label="Maila Simon Lind på Simonlind06@icloud.com"
          >
            📧 Simonlind06@icloud.com
          </a>
        </div>
      </div>
    </section>
  )
}
