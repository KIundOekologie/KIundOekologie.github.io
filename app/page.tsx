import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-gradient-to-br from-bg-base via-[#E8E4DA] to-[#DCD6C8]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-base/50 z-10" />
        {/* Abstract landscape pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="hill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6A7B59', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#B85D43', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
            <path d="M0,400 Q200,350 400,380 T800,360 T1200,400 L1200,600 L0,600 Z" fill="url(#hill-grad)" />
            <path d="M0,450 Q300,420 500,440 T900,420 T1200,450 L1200,600 L0,600 Z" fill="#6A7B59" fillOpacity="0.15" />
            <circle cx="900" cy="120" r="40" fill="#B85D43" fillOpacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-0 z-20 flex items-end pb-12 sm:pb-16 lg:pb-20">
          <div className="section-container w-full">
            <h1 className="hero-text-tight text-text-main leading-tight mb-4 sm:mb-6">
              Digitaler Garten
            </h1>
            <p className="font-body text-base sm:text-lg text-text-main/80 max-w-2xl">
              Ein literarisch-ökologischer Pfad durch das Cyber Valley
            </p>
          </div>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section-container section-spaced-sm">
        <h2 className="section-title-with-border mb-8 sm:mb-12">
          KI und Natur – eine neue Beziehung
        </h2>

        <div className="flow-text-justified drop-cap mb-8">
          <p className="mb-6">
            Im Rahmen dieses Projektmoduls dient der Begriff des <span className="italic-heading text-accent-terra">„Digitalen Gartens"</span> als zentrale kulturtheoretische Leitmetapher und Erkenntnismodell. Historisch und kulturwissenschaftlich betrachtet, markiert der Garten keinen unberührten Naturraum, sondern fungiert als klassische Kontaktzone, in der Natur und menschliche Kulturtechnik aufeinandertreffen. Natur wird im Garten nicht sich selbst überlassen, sondern durch intentionale menschliche Eingriffe (Werkzeuggebrauch, architektonische Planung und Züchtung) geformt und kultiviert. Der Garten ist somit ein inhärent hybrider Raum, der die strikte Dichotomie von <span className="italic-body">„Natur"</span> und <span className="italic-body">„Kultur"</span> auflöst.
          </p>

          <p className="mb-6">
            Übertragen auf den Forschungsstandort Cyber Valley und die Entwicklung Künstlicher Intelligenz ermöglicht dieses Bild einen entscheidenden Perspektivwechsel: An diesem Ort werden primär Datennetze, Algorithmen und Rechenmodelle <span className="italic-heading text-accent-flora">„kultiviert"</span>. Der gängige Diskurs um Digitalisierung und KI nutzt oft Metaphern des Ätherischen und Immateriellen (wie z. B. die Cloud), die eine Entkopplung von der physischen Welt suggerieren. Die Metapher des Gartens korrigiert dieses Narrativ.
          </p>

          <p className="mb-6">
            So wie ein physischer Garten untrennbar mit dem Boden, dem Wasser und den Nährstoffen verbunden ist, in denen er wurzelt, ist auch die digitale Kultivierung im Cyber Valley tief mit materiellen und geologischen Prozessen verbunden. Die vermeintlich immaterielle digitale Arbeit manifestiert sich in massiver ökologischer Materialität – vom Abbau seltener Erden für Hardware über den enormen Energie- und Wasserverbrauch von Rechenzentren bis hin zu den direkten Auswirkungen auf das globale Klimasystem.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Die Tour */}
      <section className="section-container section-spaced-sm">
        <h2 className="section-title-with-border mb-8 sm:mb-12">
          Die Tour
        </h2>

        <div className="flow-text-justified mb-8">
          <p className="mb-6">
            Die konzipierte digitale Tour greift diese theoretische Prämisse didaktisch auf. Die Besucher*innen bewegen sich physisch durch reale Landschaftselemente (Wiesen, Waldrand) in unmittelbarer Nähe zur Hochtechnologie-Infrastruktur. Angeleitet durch das Smartphone lesen und interagieren sie an spezifischen Stationen mit Texten, die aus der Perspektive des Ecocriticism und der Medienökologie beleuchten, wie die digitale Welt eben jene physische Natur durchdringt und formt (und andersherum).
          </p>

          <p className="mb-6">
            Ziel der Tour ist es, die oft unsichtbare Materialität und die ökologischen Verflechtungen von KI am konkreten Ort greifbar zu machen und zu reflektieren, wie sich Natur und Technik im Anthropozän zunehmend zu neuen, untrennbaren hybriden Systemen verschränken.
          </p>
        </div>

        <div className="divider" />

        {/* Stationen Übersicht */}
        <div className="mt-12">
          <h3 className="section-title mb-8">
            Die Stationen
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/station-1" className="group border border-border-color p-5 sm:p-6 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="micro-copy text-accent-terra block mb-2">Station 1</span>
              <span className="font-body text-text-main group-hover:text-accent-flora text-lg">Begriffe und Theorien</span>
            </Link>

            <Link href="/station-2" className="group border border-border-color p-5 sm:p-6 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="micro-copy text-accent-terra block mb-2">Station 2</span>
              <span className="font-body text-text-main group-hover:text-accent-flora text-lg">Körperliche KI</span>
            </Link>

            <Link href="/station-3" className="group border border-border-color p-5 sm:p-6 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="micro-copy text-accent-terra block mb-2">Station 3</span>
              <span className="font-body text-text-main group-hover:text-accent-flora text-lg">Die unsichtbaren Gärtner</span>
            </Link>

            <Link href="/station-4" className="group border border-border-color p-5 sm:p-6 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="micro-copy text-accent-terra block mb-2">Station 4</span>
              <span className="font-body text-text-main group-hover:text-accent-flora text-lg">Bio-logische Netzwerke</span>
            </Link>

            <Link href="/station-5" className="group border border-border-color p-5 sm:p-6 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="micro-copy text-accent-terra block mb-2">Station 5</span>
              <span className="font-body text-text-main group-hover:text-accent-flora text-lg">Blick in die Sterne</span>
            </Link>

            <Link href="/station-6" className="group border border-border-color p-5 sm:p-6 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="micro-copy text-accent-terra block mb-2">Station 6</span>
              <span className="font-body text-text-main group-hover:text-accent-flora text-lg">Perspektive</span>
            </Link>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* CTA Button */}
      <section className="section-container">
        <div className="text-center py-8 sm:py-12">
          <Link href="/station-1" className="btn-vintage text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
            Zur Ersten Station
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container border-t border-border-color">
        <p className="font-body text-sm text-text-main/60 text-center">
          Ein Projektmodul im Cyber Valley – 2026
        </p>
      </footer>
    </div>
  );
}
