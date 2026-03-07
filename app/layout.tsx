import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Simon Lind - Webbutvecklare | Moderna Hemsidor',
  description: 'Webbutvecklare som skapar moderna, snabba och mobilanpassade hemsidor för företag. GDPR-kompatibla lösningar hostade på Vercel.',
  keywords: 'webbutvecklare, hemsidor, webbdesign, Next.js, Vercel, GDPR, mobil-anpassning',
  openGraph: {
    title: 'Simon Lind - Webbutvecklare',
    description: 'Moderna hemsidor för företag',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
