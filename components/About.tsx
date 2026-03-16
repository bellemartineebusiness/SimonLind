export default function About() {
  return (
    <section id="om-mig" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-16">
          Om <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mig</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image placeholder */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-lg" aria-label="Profilbild placeholder">
              <span className="text-6xl" aria-hidden="true">👨‍💻</span>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
             Hej! Jag heter Simon Lind. Jag levererar 50 000 kronors kvalitet för mellan 5 000 och 12 000 kronor genom att arbeta direkt i koden.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Mina sidor får A-betyg i säkerhet, vilket de flesta dyra sajter missar. Du får en blixtsnabb sida som du enkelt uppdaterar själv.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Vill du ha en hemsida i världsklass? Hör av dig för en offert!
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[44px]"
              aria-label="Kontakta Simon Lind"
            >
              Kontakta mig →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
