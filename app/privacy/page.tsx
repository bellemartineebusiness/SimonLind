import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integritetspolicy | Simon Lind - Webbutvecklare',
  description: 'Läs om hur Simon Lind hanterar dina personuppgifter enligt GDPR.',
}

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Integritetspolicy</h1>
        <p className="text-gray-500 mb-12">Senast uppdaterad: Mars 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Företagsinformation</h2>
            <p className="mb-2">Denna webbplats drivs av:</p>
            <address className="not-italic ml-2 space-y-1">
              <p className="font-medium">Simon Lind</p>
              <p>Organisationsnummer: 20060101-XXXX</p>
              <p>Postadress: Exempelgatan 1, 123 45 Stockholm</p>
              <p>
                E-post:{' '}
                <a href="mailto:Simonlind06@icloud.com" className="text-blue-600 hover:underline">
                  Simonlind06@icloud.com
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Personuppgifter</h2>
            <p>
              Simon Lind (&quot;jag&quot;, &quot;mig&quot;) respekterar din integritet och är engagerad i att skydda dina personuppgifter i enlighet med Dataskyddsförordningen (GDPR, EU 2016/679).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontaktformulär</h2>
            <p className="mb-3">När du skickar ett meddelande via kontaktformuläret samlar jag in:</p>
            <ul className="list-none space-y-1 ml-2">
              <li>• Namn</li>
              <li>• E-postadress</li>
              <li>• Meddelande</li>
            </ul>
            <p className="mt-3">
              Denna information används <strong>endast</strong> för att besvara din förfrågan. Den rättsliga grunden för behandlingen är ditt samtycke (artikel 6(1)(a) GDPR), vilket du lämnar via kryssrutan i formuläret.
            </p>
            <p className="mt-3">
              Formuläret hanteras via tjänsten{' '}
              <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Web3Forms
              </a>
              , som vidarebefordrar meddelandet direkt till min e-postadress. Web3Forms lagrar inte dina uppgifter efter att meddelandet har levererats. Behandlingen sker i enlighet med GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hur länge sparas uppgifterna?</h2>
            <p>
              Dina uppgifter (namn, e-post och meddelande) sparas i min e-postinkorg under den tid som krävs för att besvara din förfrågan och hantera eventuell uppföljning, normalt sett <strong>högst 12 månader</strong> efter att ärendet avslutats. Därefter raderas de.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p>
              Denna webbplats använder endast nödvändiga cookies för grundläggande funktionalitet.{' '}
              <Link href="/cookies" className="text-blue-600 hover:underline">
                Läs mer i vår Cookie Policy.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Dina rättigheter</h2>
            <p className="mb-3">Enligt GDPR har du rätt att:</p>
            <ul className="list-none space-y-1 ml-2">
              <li>• Få information om vilka uppgifter jag har om dig</li>
              <li>• Få dina uppgifter rättade</li>
              <li>• <strong>Begära radering</strong> av dina uppgifter (&quot;rätten att bli glömd&quot;)</li>
              <li>• Invända mot behandling av dina uppgifter</li>
              <li>• Återkalla ditt samtycke när som helst</li>
              <li>• Få ut dina uppgifter i ett strukturerat, maskinläsbart format</li>
              <li>• Lämna in klagomål till Integritetsskyddsmyndigheten (IMY) på{' '}
                <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  imy.se
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Begäran om radering eller åtkomst</h2>
            <p>
              För att begära radering, rättelse eller åtkomst till dina uppgifter, skicka ett e-postmeddelande till{' '}
              <a
                href="mailto:Simonlind06@icloud.com"
                className="text-blue-600 hover:underline"
              >
                Simonlind06@icloud.com
              </a>{' '}
              med ämnesraden <em>&quot;GDPR-begäran&quot;</em> och ange vad du önskar. Jag besvarar din begäran inom 30 dagar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontakt</h2>
            <p className="mb-2">
              För frågor om hur jag hanterar dina personuppgifter, kontakta mig på:
            </p>
            <address className="not-italic ml-2 space-y-1">
              <p className="font-medium">Simon Lind</p>
              <p>Organisationsnummer: 20060101-XXXX</p>
              <p>Postadress: Exempelgatan 1, 123 45 Stockholm</p>
              <a
                href="mailto:Simonlind06@icloud.com"
                className="text-blue-600 hover:underline"
                aria-label="Maila Simon Lind på Simonlind06@icloud.com"
              >
                E-post: Simonlind06@icloud.com
              </a>
            </address>
          </section>
        </div>
      </div>
    </main>
  )
}
