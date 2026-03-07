import Image from 'next/image'

const services = [
  {
    icon: '🎨',
    title: 'Webbdesign',
    description: 'Moderna, responsiva hemsidor som får ditt företag att sticka ut. Varje design är skräddarsydd för dina behov och din målgrupp.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '⚡',
    title: 'Snabb Hosting',
    description: 'Dina hemsidor hostas via Vercel för maximal hastighet och säkerhet. 99.9% uptime garanterad.',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: '📱',
    title: 'Mobil-anpassning',
    description: 'Perfekt användarupplevelse på alla enheter - mobil, surfplatta och desktop. Responsiv design som standard.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⚖️',
    title: 'GDPR & Cookies',
    description: 'Alla hemsidor är lagliga från dag 1 med korrekt cookie-hantering och integritetspolicy som följer svensk och EU-lag.',
    gradient: 'from-green-500 to-teal-500',
  },
]

export default function Services() {
  return (
    <section id="tjänster" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Vad Jag <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Erbjuder</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">Allt du behöver för en professionell närvaro online</p>
        {/* Cloud-nodes decorative icon */}
        <div className="flex justify-center mb-12">
          <Image
            src="/cloud-nodes.svg"
            alt="Molnbaserade tjänster med noder – dekorativ ikon"
            width={144}
            height={108}
            className="w-36 h-auto object-contain opacity-90"
            unoptimized
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-md`}>
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
