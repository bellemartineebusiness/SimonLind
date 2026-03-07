import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-1">Simon Lind</h2>
          <p className="text-gray-400 mb-6">Webbutvecklare</p>
          <p className="text-gray-500 text-sm mb-4">
            © 2026 Simon Lind. Alla rättigheter förbehållna.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              aria-label="Läs integritetspolicyn"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              aria-label="Läs cookie-policyn"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
