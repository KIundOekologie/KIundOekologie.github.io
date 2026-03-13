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
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main leading-tight mb-4 sm:mb-6">
              Digitaler Garten
            </h1>
            <p className="font-body text-base sm:text-lg text-text-main/80 max-w-2xl">
              Ein literarisch-ökologischer Pfad durch das Cyber Valley
            </p>
          </div>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-text-main mb-6 sm:mb-8 tracking-tight">
          KI und Natur – eine neue Beziehung
        </h2>

        <div className="content-text drop-cap mb-6">
          <p className="mb-4">
            Ecocriticism, Technik und Natur als Gegenspieler? Neue Narrative – Kann KI Teil der Natur sein?
          </p>
        </div>

        <div className="content-text">
          <p className="mb-4">
            Das Projekt verbindet Künstliche Intelligenz und Natur aus Perspektiven von Ecocriticism, Medien- und Kulturtheorie. Im Zentrum steht die Frage, ob Technik und Natur wirklich Gegenspieler sind oder voneinander getrennt existieren – oder ob wir im Anthropozän neue Erzählweisen brauchen.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Die Tour */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Die Tour
        </h2>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Im Rahmen dieses Projektmoduls dient der Begriff des „Digitalen Gartens" als zentrale kulturtheoretische Leitmetapher und Erkenntnismodell. Historisch und kulturwissenschaftlich betrachtet, markiert der Garten keinen unberührten Naturraum, sondern fungiert als klassische Kontaktzone, in der Natur und menschliche Kulturtechnik aufeinandertreffen.
          </p>

          <p className="mb-6">
            Der Garten ist seit Jahrhunderten ein Ort, an dem Mensch und Natur kooperieren – aber eben auch: steuern, formen, optimieren. Hier zeigt sich eine paradoxe Dynamik: Wir „pflegen" Natur, indem wir in sie eingreifen; wir „schönstrecken" Landschaften, um sie natürlicher erscheinen zu lassen. Was bedeutet das nun für KI?
          </p>

          <p className="mb-6">
            KI wird oft als das genaue Gegenteil von Natur imaginiert: reines Produkt menschlicher Technik, abstrakt, immateriell, global. In der historischen Perspektive war der Garten aber schon immer eine Art „extended organ" – ein technisches Hilfsmittel, um Natur kontrollierbar, nutzbar, ästhetisch verfügbar zu machen. KI könnte also gar nicht jenseits von Natur stehen, sondern als eine neue Form von Gartentechnik betrachtet werden: als Algorithmus, der auf Ökologien einwirkt – oder als Ökologie selbst.
          </p>
        </div>

        <div className="divider" />

        {/* Stationen Übersicht */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="font-heading text-lg sm:text-xl text-text-main tracking-tight">
            Die Stationen
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/station-1" className="group border border-border-color p-4 sm:p-5 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="font-heading text-sm text-accent-terra block mb-1">Station 1</span>
              <span className="font-body text-text-main group-hover:text-accent-flora">Anthropozän & Begriffe</span>
            </Link>

            <Link href="/station-2" className="group border border-border-color p-4 sm:p-5 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="font-heading text-sm text-accent-terra block mb-1">Station 2</span>
              <span className="font-body text-text-main group-hover:text-accent-flora">Campus als Garten</span>
            </Link>

            <Link href="/station-3" className="group border border-border-color p-4 sm:p-5 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="font-heading text-sm text-accent-terra block mb-1">Station 3</span>
              <span className="font-body text-text-main group-hover:text-accent-flora">KI & Pflanzenwelt</span>
            </Link>

            <Link href="/station-4" className="group border border-border-color p-4 sm:p-5 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="font-heading text-sm text-accent-terra block mb-1">Station 4</span>
              <span className="font-body text-text-main group-hover:text-accent-flora">Data Center</span>
            </Link>

            <Link href="/station-5" className="group border border-border-color p-4 sm:p-5 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="font-heading text-sm text-accent-terra block mb-1">Station 5</span>
              <span className="font-body text-text-main group-hover:text-accent-flora">Sternwarte & Hyperobjekte</span>
            </Link>

            <Link href="/station-6" className="group border border-border-color p-4 sm:p-5 hover:border-accent-flora transition-colors cursor-pointer">
              <span className="font-heading text-sm text-accent-terra block mb-1">Station 6</span>
              <span className="font-body text-text-main group-hover:text-accent-flora">Die Perspektive</span>
            </Link>
          </div>
        </div>

        <div className="divider" />

        <div className="content-text">
          <p className="mb-6">
            Ziel der Tour ist es, nicht nur zu informieren, sondern auch zu irritieren: Warum nennt man Hochtechnologie „Campus"? Was haben Algorithmen mit Kompost zu tun? Und was verändert sich an unserem Naturbegriff, wenn KI immer stärker in ökologische Prozesse eingreift?
          </p>

          <p className="mb-8">
            Los geht der Spaziergang – hier draußen, wo Code und Kompost aufeinandertreffen.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center py-6 sm:py-8">
          <Link href="/station-1" className="btn-vintage">
            Zur Ersten Station
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container border-t border-border-color">
        <p className="font-body text-sm text-text-main/60 text-center">
          Ein Projektmodul im Cyber Valley – 2025
        </p>
      </footer>
    </div>
  );
}
