'use client'

import ContactForm from '@/components/ContactForm'

export default function Contact() {
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
          <ContactForm />
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
