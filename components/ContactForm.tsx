'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)
    const json = Object.fromEntries(data.entries())

    try {
      const response = await fetch('/api/web3forms-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(json),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4" aria-hidden="true">✅</div>
        <p className="text-lg font-semibold text-green-600">
          Tack! Ditt meddelande har skickats. Jag återkommer inom 24 timmar.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* subject is handled here; access_key is injected server-side by the proxy */}
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
          placeholder="Berätta om ditt projekt..."
          aria-required="true"
        ></textarea>
      </div>

      {status === 'error' && (
        <div
          className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
          role="alert"
        >
          Något gick fel. Försök igen eller maila direkt till{' '}
          <a href="mailto:Simonlind06@icloud.com" className="underline font-medium">
            Simonlind06@icloud.com
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
        aria-label="Skicka meddelande"
      >
        {status === 'loading' ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 12 0 12 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Skickar...
          </>
        ) : (
          'Skicka Meddelande →'
        )}
      </button>

      {/* GDPR notice */}
      <p className="mt-3 text-xs text-gray-500 text-center">
        Genom att skicka godkänner du att dina uppgifter hanteras enligt vår{' '}
        <a
          href="/privacy"
          aria-label="Läs vår integritetspolicy"
          className="underline hover:text-gray-700 transition-colors duration-200"
        >
          Integritetspolicy
        </a>
        .
      </p>
    </form>
  )
}
