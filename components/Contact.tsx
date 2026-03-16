'use client'

import { useState, FormEvent, useRef } from 'react'

// OBS: Sätt NEXT_PUBLIC_WEB3FORMS_KEY i din .env.local-fil.
// Skapa en gratis nyckel på https://web3forms.com (tar 2 minuter).
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '??'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [gdprAccepted, setGdprAccepted] = useState(false)
  const [gdprError, setGdprError] = useState(false)
  const gdprRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!gdprAccepted) {
      setGdprError(true)
      gdprRef.current?.focus()
      return
    }
    setGdprError(false)
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)
    const json = Object.fromEntries(data.entries())

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(json),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Kontakta <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mig</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Behöver du en hemsida? Fyll i formuläret nedan så återkommer jag inom 24 timmar.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4" aria-hidden="true">✅</div>
              <p className="text-lg font-semibold text-green-600">
                Tack! Ditt meddelande har skickats. Jag återkommer inom 24 timmar.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="Nytt meddelande från Simon Linds portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Namn <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="Ditt namn"
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-post <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="din@email.se"
                  aria-required="true"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Meddelande <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Berätta om ditt projekt..."
                  aria-required="true"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm" role="alert">
                  Något gick fel. Försök igen eller maila direkt till{' '}
                  <a href="mailto:Simonlind06@icloud.com" className="underline font-medium">
                    Simonlind06@icloud.com
                  </a>
                </div>
              )}

              {/* GDPR-samtycke – krävs enligt GDPR */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    ref={gdprRef}
                    type="checkbox"
                    id="gdpr"
                    name="gdpr_consent"
                    required
                    checked={gdprAccepted}
                    onChange={(e) => setGdprAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0"
                    aria-required="true"
                  />
                  <span className="text-sm text-gray-600">
                    Jag har läst och godkänner{' '}
                    <a href="/privacy" className="underline text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      integritetspolicyn
                    </a>{' '}
                    och samtycker till att mina uppgifter behandlas för att besvara min förfrågan.{' '}
                    <span className="text-pink-500" aria-label="obligatoriskt">*</span>
                  </span>
                </label>
                {gdprError && (
                  <p className="mt-1 text-xs text-red-500" role="alert">Du måste godkänna integritetspolicyn för att skicka formuläret.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                aria-label="Skicka meddelande"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 12 0 12 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Skickar...
                  </>
                ) : (
                  'Skicka Meddelande →'
                )}
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
            className="inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200 break-all"
            aria-label="Maila Simon Lind på Simonlind06@icloud.com"
          >
            📧 Simonlind06@icloud.com
          </a>
        </div>
      </div>
    </section>
  )
}
