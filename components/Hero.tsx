import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute top-40 left-1/2 h-80 w-80 rounded-full bg-pink-200 opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Hero logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/simon-lind-logo.svg"
            alt="Simon Lind logotyp"
            width={400}
            height={160}
            className="h-24 w-auto object-contain sm:h-32"
            priority
            unoptimized
          />
        </div>

        <p className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
          Webbutvecklare
        </p>

        <h2 className="mb-4 text-xl font-medium italic text-gray-700 sm:text-2xl">
          &quot;Jag skapar moderna hemsidor för företag&quot;
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Snabba, mobilanpassade &amp; professionella webbplatser
          <br className="hidden sm:block" />
          som hjälper ditt företag att växa online.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            aria-label="Se mitt arbete - scrolla till portfolio"
          >
            Se mitt arbete ↓
          </a>

          <a
            href="#kontakt"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            aria-label="Kontakta mig - scrolla till kontaktformuläret"
          >
            Kontakta mig →
          </a>
        </div>
      </div>
    </section>
  );
}