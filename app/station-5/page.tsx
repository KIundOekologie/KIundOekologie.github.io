import Link from "next/link";

export default function Station5Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 5
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          Der Blick in die Sterne
        </h1>

        <p className="font-heading text-base sm:text-lg text-accent-terra italic mb-8">
          (Alte Sternwarte)
        </p>
      </section>

      {/* Intro-Info-Block */}
      <section className="section-container">
        <div className="margin-note">
          <p className="font-body text-sm mb-2">
            <strong>Metapher:</strong> Früher blickten wir in die Sterne, um die Welt zu verstehen – heute in den Algorithmus.
          </p>
          <p className="font-body text-sm text-text-main/60">
            <strong>Theoretischer Bezug:</strong> Timothy Morton – Dark Ecology / Hyperobjects Philosophy
          </p>
        </div>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Die Sternwarte steht für klassischen Forschergeist: beobachten, messen, deuten. Seit Jahrhunderten haben Menschen hier die Nacht beobachtet, Planeten verfolgt, Sterne katalogisiert. Die Astronomie war die erste Wissenschaft, die systematisch Daten sammelte, Muster suchte, Modelle baute – lange bevor es „Big Data" oder „Machine Learning" gab. Was früher der Sternwarte vorbehalten war, passiert heute in Data Centern: Algorithmen analysieren Datensätze, die für Menschen unüberschaubar sind, finden Muster, die menschliche Wahrnehmung übersteigen, generieren Vorhersagen, die ohne KI unmöglich wären.
          </p>

          <p className="mb-6">
            Aber es gibt einen entscheidenden Unterschied: Astronomie beobachtet objects, die weit weg sind – Sterne, Planeten, Galaxien. KI beobachtet Prozesse, die hier und jetzt stattfinden – und die doch oft genauso schwer zu fassen sind. Das Klimasystem ist ein solches „Hyperobjekt": Es ist überall und nirgends, es erstreckt sich über globale Skalen und Jahrtausende, es wirkt in lokalen Wetterphänomenen und in langfristigen Trends, aber es ist nie als Ganzes erfahrbar. Timothy Morton beschreibt Hyperobjekte als „things that are so massive and distributed in time and space that they defeat our normal ways of perceiving objects".
          </p>

          <p className="mb-6">
            KI selbst ist ein Hyperobjekt: Sie besteht aus Code, der auf Servern weltweit läuft; sie lernt aus Daten, die über Kontinente verstreut sind; sie wirkt in Entscheidungen, die Menschen oft nicht verstehen, nicht kontrollieren, nicht einmal wahrnehmen. Wie das Klimasystem ist KI nicht an einen Ort gebunden – sie ist eine „nonlocal" Entität, die gleichzeitig überall wirkt. Aber anders als das Klima ist KI ein Kunstprodukt, ein menschengemachtes System – und damit auch ein Ort der Verantwortung, der Reflexion, der Gestaltung.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Hyperobjekte */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Hyperobjekte und Nonlocality
        </h2>

        <div className="content-text">
          <p className="mb-6">
            Hyperobjekte sind nach Morton durch vier Merkmale gekennzeichnet: Sie sind viscosity (viskos), molten (geschmolzen), nonlocal (nicht-lokal) und phasing (phasenverschiebend). Viscosity bedeutet, dass Hyperobjekte nicht einfach „durchschnitten" werden können – sie sind so komplex, so verstrickt, dass jede Veränderung Rückwirkungen hat, die kaum vorhersehbar sind. Molten meint, dass Hyperobjekte keine klaren Grenzen haben – sie fließen über categories hinweg, verbinden unterschiedliche Skalen, Ebenen, Dimensionen. Nonlocal bedeutet, dass Hyperobjekte nicht auf einen Ort beschränkt sind – sie sind gleichzeitig hier und dort, überall und nirgends. Phasing meint, dass Hyperobjekte in verschiedenen „Zeitzonen" existieren – sie haben temporal extension, die menschliche Wahrnehmung sprengt.
          </p>

          <p className="mb-6">
            Das Klimasystem ist das Paradebeispiel eines Hyperobjekts: Es ist viscous (jede lokale Veränderung hat globale Effekte), molten (es verbindet Atmosphäre, Ozeane, Land, Leben), nonlocal (es wirkt überall gleichzeitig), phasing (es operates auf Zeitskalen von Tagen bis Jahrtausenden). KI ist ein anderes Hyperobjekt: Sie ist viscous (jeder Algorithmus hat ripple effects), molten (sie verbindet Code, Daten, Hardware, Menschen), nonlocal (sie ist überall im Netz), phasing (sie operates in milliseconds und in years).
          </p>

          <p className="mb-6">
            Was bedeutet es, in einer Welt zu leben, die von Hyperobjekten geprägt ist? Morton argumentiert, dass die alte Mensch/Natur-Dichotomie in dieser Welt nicht mehr funktioniert – es gibt kein „draußen", keine „reine Natur", zu der man retreated. Wir sind immer mittendrin in Hyperobjekten: Wir atmen das Klima, wir nutzen KI, wir leben in Ökologien, die von menschlicher activity geprägt sind. Dark Ecology ist Morton's Antwort auf diese Situation: Es geht nicht um optimism oder pessimism, sondern um eine „coexistence with the nonhuman", die nicht auf Harmonie aus ist, sondern auf eine „ethical responsiveness" in einer world ohne klare Grenzen.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Von der Sternwarte zum Algorithmus */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Von der Sternwarte zum Algorithmus
        </h2>

        <div className="content-text">
          <p className="mb-6">
            Der Übergang von der Sternwarte zum Algorithmus markiert einen Wandel in der Weise, wie Menschen Wissen produzieren: Früher beobachtete man die Natur, um sie zu verstehen – heute produziert man Daten, um Muster zu finden, die nicht sichtbar sind. Dieser Wandel ist nicht nur methodisch, sondern auch ontologisch: Was früher als „natürliche Ordnung" galt, wird heute als „computational pattern" verstanden – und umgekehrt.
          </p>

          <p className="mb-6">
            Die Frage ist nicht, ob diese Entwicklung „gut" oder „schlecht" ist – sondern wie sie gestaltet werden kann: Wie können KI-Systeme so designed werden, dass sie transparent, accountable, fair sind? Wie können Menschen agency in einer Welt behalten, in der Algorithmen immer mehr Entscheidungen treffen? Wie kann „Ecology" neu gedacht werden, wenn Natur und Technik nicht mehr getrennt sind? Diese Fragen sind nicht nur theoretisch – sie haben praktische Konsequenzen: für Regulierung, für Design, für Bildung, für everyday life.
          </p>

          <p className="mb-6">
            Die Sternwarte erinnert daran, dass Beobachtung immer schon eine Form von participation war: Wer den Himmel beobachtet, verändert nicht die Sterne – aber verändert sein Verständnis von ihnen, seine Beziehung zu ihnen, seine actions in Bezug auf sie. KI ist ähnlich: Sie ist ein Werkzeug der Beobachtung, der Analyse, der intervention – und damit auch ein Werkzeug der Verantwortung. Dark Ecology bedeutet nicht resignation, sondern engagement: Es geht darum, Hyperobjekte nicht zu beherrschen, sondern mit ihnen zu leben – in einer Weise, die ethisch, ästhetisch, politisch reflektiert ist.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Zitat-Box */}
      <section className="section-container">
        <div className="fact-box bg-accent-flora/5">
          <p className="font-heading text-lg sm:text-xl text-text-main italic leading-relaxed">
            „Hyperobjects are massive, distributed, and viscous. They are not objects in the traditional sense, but rather assemblages that defy our usual ways of thinking about things."
          </p>
          <p className="font-body text-sm text-text-main/60 mt-4">
            — Timothy Morton, Dark Ecology
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-4" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück
          </Link>
          <Link href="/station-6" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
