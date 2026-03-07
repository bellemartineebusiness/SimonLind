import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | Simon Lind - Webbutvecklare',
  description: 'Läs om hur Simon Lind använder cookies på sin webbplats.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Tillbaka till startsidan"
        >
          ← Tillbaka
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-gray-500 mb-12">Senast uppdaterad: Mars 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Vad är cookies?</h2>
            <p>
              Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De hjälper webbplatsen att
              komma ihåg dina preferenser och förbättra din upplevelse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Vilka cookies använder denna webbplats?</h2>
            <p className="mb-3">
              Denna webbplats använder endast nödvändiga cookies för grundläggande funktionalitet, såsom:
            </p>
            <ul className="list-none space-y-1 ml-2">
              <li>• Att komma ihåg att du accepterat cookie-policyn</li>
              <li>• Grundläggande webbplatsfunktionalitet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Vi använder INTE:</h2>
            <ul className="list-none space-y-1 ml-2">
              <li>• Spårningscookies</li>
              <li>• Marknadsföringscookies</li>
              <li>• Analyscookies från tredje part</li>
              <li>• Cookies för personlig profilering</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hantera cookies</h2>
            <p>
              Du kan när som helst rensa cookies i din webbläsares inställningar. Observera att vissa funktioner på
              webbplatsen kan påverkas om du blockerar cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontakt</h2>
            <p className="mb-2">För frågor om vår cookie-hantering, kontakta:</p>
            <p className="font-medium">Simon Lind</p>
            <a
              href="mailto:Simonlind06@icloud.com"
              className="text-blue-600 hover:underline"
              aria-label="Maila Simon Lind angående cookies"
            >
              E-post: Simonlind06@icloud.com
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
