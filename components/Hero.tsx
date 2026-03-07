import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Hero logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/simon-lind-logo.svg"
            alt="Simon Lind logotyp"
            width={400}
            height={160}
            className="h-24 sm:h-32 w-auto object-contain"
            priority
            unoptimized
          />
        </div>
        <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Webbutvecklare
        </p>
        <h2 className="text-xl sm:text-2xl text-gray-700 font-medium mb-4 italic">
          &quot;Jag skapar moderna hemsidor för företag&quot;
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Snabba, mobilanpassade &amp; professionella webbplatser<br className="hidden sm:block" />
          som hjälper ditt företag att växa online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[44px]"
            aria-label="Se mitt arbete - scrolla till portfolio"
          >
            Se mitt arbete ↓
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[44px]"
            aria-label="Kontakta mig - scrolla till kontaktformuläret"
          >
            Kontakta mig →
          </a>
        </div>
      </div>
    </section>
  )
}
