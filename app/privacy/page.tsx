import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integritetspolicy | Simon Lind - Webbutvecklare',
  description: 'Läs om hur Simon Lind hanterar dina personuppgifter i enlighet med GDPR.',
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Integritetspolicy (Privacy Policy)</h1>
        <p className="text-gray-500 mb-12">Senast uppdaterad: Mars 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Om denna webbplats</h2>
            <p>
              Denna webbplats tillhör Simon Lind, en webbutvecklare baserad i Sverige. Webbplatsen finns
              till för att presentera Simon Linds tjänster och göra det enkelt för företag och
              privatpersoner att komma i kontakt med honom för webbprojekt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Personuppgiftsansvarig</h2>
            <p className="mb-2">
              Personuppgiftsansvarig för behandlingen av dina personuppgifter är:
            </p>
            <ul className="list-none space-y-1 ml-2">
              <li><strong>Namn:</strong> Simon Lind</li>
              <li><strong>E-post:</strong>{' '}
                <a href="mailto:Simonlind06@icloud.com" className="text-blue-600 hover:underline">
                  Simonlind06@icloud.com
                </a>
              </li>
              <li><strong>Land:</strong> Sverige</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontaktformulär</h2>
            <p className="mb-3">
              När du skickar ett meddelande via kontaktformuläret samlar jag in:
            </p>
            <ul className="list-none space-y-1 ml-2">
              <li>• Namn</li>
              <li>• E-postadress</li>
              <li>• Meddelande</li>
            </ul>
            <p className="mt-3">
              <strong>Ändamål:</strong> Uppgifterna används uteslutande för att svara på ditt meddelande.
            </p>
            <p className="mt-2">
              <strong>Rättslig grund:</strong> Behandlingen grundar sig på berättigat intresse (GDPR art. 6.1 f)
              – att kunna kommunicera med dig som kontaktat mig.
            </p>
            <p className="mt-2">
              <strong>Lagringstid:</strong> Dina uppgifter sparas inte längre än nödvändigt och raderas
              senast 90 dagar efter att ärendet är avslutat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Tredjepartsleverantörer</h2>
            <p className="mb-3">
              Kontaktformuläret skickar meddelanden via <strong>Web3Forms</strong> (web3forms.com),
              en extern tjänst för formulärhantering. Web3Forms vidarebefordrar formulärdata till
              angiven e-postadress och lagrar inte dina uppgifter permanent.
            </p>
            <p>
              Inga andra tredjepartsleverantörer används på denna webbplats. Inga analys-, spårnings-
              eller marknadsföringsverktyg från tredje part är installerade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p>
              Denna webbplats använder endast nödvändiga cookies för kontaktformulär, inga spårningscookies.{' '}
              <Link href="/cookies" className="text-blue-600 hover:underline">
                Läs mer i vår Cookie Policy.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Lagring och säkerhet</h2>
            <p>
              Dina uppgifter delas aldrig med tredje part i kommersiellt syfte, säljs inte och används
              inte för marknadsföring. Uppgifterna hanteras konfidentiellt och skyddas med rimliga
              tekniska och organisatoriska åtgärder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Dina rättigheter (GDPR)</h2>
            <p className="mb-3">Enligt GDPR (dataskyddsförordningen) har du rätt att:</p>
            <ul className="list-none space-y-1 ml-2">
              <li>• <strong>Tillgång</strong> – begära information om vilka uppgifter jag har om dig</li>
              <li>• <strong>Rättelse</strong> – begära att felaktiga uppgifter korrigeras</li>
              <li>• <strong>Radering</strong> – begära att dina uppgifter raderas (&quot;rätten att bli glömd&quot;)</li>
              <li>• <strong>Invändning</strong> – invända mot behandling baserad på berättigat intresse</li>
              <li>• <strong>Dataportabilitet</strong> – få ut dina uppgifter i ett strukturerat, maskinläsbart format</li>
              <li>• <strong>Begränsning</strong> – begära begränsad behandling i vissa fall</li>
            </ul>
            <p className="mt-3">
              För att utöva dina rättigheter, kontakta mig via e-post nedan. Jag svarar inom 30 dagar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Klagomål</h2>
            <p>
              Om du anser att dina personuppgifter behandlas felaktigt har du rätt att lämna klagomål
              till <strong>Integritetsskyddsmyndigheten (IMY)</strong>:
            </p>
            <p className="mt-2">
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.imy.se
              </a>
              {' '}| imy@imy.se | Tel: 08-657 61 00
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontakt</h2>
            <p className="mb-2">
              För frågor om hur jag hanterar dina personuppgifter, kontakta mig på:
            </p>
            <p className="font-medium">Simon Lind</p>
            <a
              href="mailto:Simonlind06@icloud.com"
              className="text-blue-600 hover:underline"
              aria-label="Maila Simon Lind på Simonlind06@icloud.com"
            >
              E-post: Simonlind06@icloud.com
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
