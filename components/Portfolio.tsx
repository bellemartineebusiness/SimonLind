const projects = [
  {
    title: 'Projektgaranti Stockholm AB',
    description: 'En professionell hemsida för Projektgaranti Stockholm AB, ett bygggarantiföretag som tillhandahåller entreprenad- och konsultgarantier.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://projektgarantiab.se',
    comingSoon: false,
  },
  {
    title: 'Exempel Projekt',
    description: 'En modern webbplats med fokus på användarvänlighet och snabb laddningstid.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: null,
    comingSoon: true,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Mina <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projekt</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">Exempel på hemsidor jag har byggt</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                <span className="text-6xl" aria-hidden="true">🖥️</span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.comingSoon ? (
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-400 bg-gray-100 rounded-full cursor-not-allowed min-h-[44px]"
                    aria-label="Kommer snart - länk ej tillgänglig ännu"
                  >
                    Kommer Snart
                  </button>
                ) : (
                  <a
                    href={project.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 min-h-[44px]"
                    aria-label={`Se demo av ${project.title} - öppnas i ny flik`}
                  >
                    Se Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
