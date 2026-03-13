import Link from "next/link";

export default function Station4Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 4
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          Data Center & Energie
        </h1>
      </section>

      {/* Intro */}
      <section className="section-container">
        <div className="margin-note">
          <p className="font-body text-sm">
            <strong>Ort:</strong> Blick auf das Data Center / Servergebäude
          </p>
          <p className="font-body text-sm text-text-main/60 mt-1">
            Fokus: Energieverbrauch, Kühlung, infrastrukturelle Verbindungen
          </p>
        </div>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Data Center sind die „fabrics" der digitalen Welt: Hier laufen die Server, die Algorithmen, die Datenströme, die KI trainieren und deployen. Diese Gebäude sind hochtechnologisierte Ökosysteme: Klimaanlagen kühlen die Serverräume auf konstante Temperaturen; Notstromgeneratoren bereiten sich auf Ausfälle vor; Feuerlöschsysteme, Überwachung, physische Sicherheit sind permanent aktiv. Ein Data Center verbraucht so viel Energie wie eine kleine Stadt – und diese Energie kommt aus somewhere: aus Kraftwerken, aus erneuerbaren Quellen, aus Netzen, die über hunderte Kilometer reichen.
          </p>

          <p className="mb-6">
            Das Cyber Valley Data Center ist ein particularly sichtbares Beispiel dieser Verbindungen: Hier werden KI-Modelle trainiert, die Millionen von Parameter haben, Terabytes an Daten verarbeiten, Rechenleistung verbrauchen, die in traditionellen Maßstäben unvorstellbar wäre. Die Forschung, die hier stattfindet, ist also nicht „immateriell" – sie hat material effects: Energieverbrauch, CO₂-Emissionen, Wärme, Lärm, physische Infrastruktur.
          </p>

          <p className="mb-6">
            Gleichzeitig ist das Data Center ein Ort der „Unsichtbarkeit": Was hier passiert, ist für die meisten Menschen nicht direkt erfahrbar. Algorithmen laufen in black boxes; Daten fließen durch Kabel, die im Boden verborgen sind; Energie wird aus unsichtbaren Quellen geholt. Data Centers sind wie riesige Ökosysteme, die parallel zu den menschlichen Ökosystemen existieren – aber sie sind selten in deren Wahrnehmung integriert. Nur wenn der Internet ausfällt, wenn der Server nicht reagiert, wenn die Cloud „down" ist, werden diese infrastrukturellen Zusammenhänge spürbar.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Die Ökologie der Infrastruktur */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Die Ökologie der Infrastruktur
        </h2>

        <div className="content-text">
          <p className="mb-6">
            KI hat eine ökologische footprint: Das Training eines großen Sprachmodells verbraucht so viel Energie wie fünf Autos in deren gesamten Lebenszeit; ein ChatGPT-Aufruf verbraucht mehr Strom als eine Google-Suche; Data Centers weltweit verbrauchen etwa 1% des globalen Stroms (und diese Zahl wächst rapide). Diese Zahlen sind nicht trivial – sie verweisen auf reale ökologische Effekte: CO₂-Emissionen, Wasserverbrauch (für Kühlung), Abbau von seltenen Erden (für Hardware), elektronischer Abfall.
          </p>

          <p className="mb-6">
            Aber diese footprint ist nicht gleichmäßig verteilt: Data Centers sind oft in Regionen mit günstiger Energie (und schwacher Regulierung) angesiedelt; Hardware wird in Ländern produziert, where Arbeitskräfte billig und Umweltauflagen lax sind; elektroscher Abfall wird oft in den Globalen South exportiert. Die „Ökologie der Infrastruktur" ist also auch eine geopolitische Ökologie: Die exteriorisierten Kosten der digitalen Ökonomie werden unsichtbar gemacht, ausgelagert, externalisiert.
          </p>

          <p className="mb-6">
            Gleichzeitig gibt es Bemühungen, diese Ökologie nachhaltiger zu gestalten: „Green Computing" versucht, Energieeffizienz zu steigern; „Renewable Energy" wird genutzt, um Netze zu grünen; „Circular Economy" versucht, Hardware länger zu nutzen, zu recyceln, zu refurbish. Diese Ansätze sind wichtig, aber sie können nicht darüber hinwegtäuschen, dass KI ein materiell-energetisches System ist – und dass ihre „immaterielle" Erscheinung (Worte, Bilder, Codes) immer auf materialen Prozessen beruht.
          </p>

          <p className="mb-6">
            In diesem Sinne ist das Data Center ein „Garten" der besonderen Art: Ein ökologisches System, in dem Energie, Materie, Information in komplexen Zyklen zirkulieren – ein System, das von Menschen gestaltet wird, aber auch eigene Dynamiken entfaltet: Fehler, Ausfälle, Hacks, Updates, crashes. Das Data Center ist nicht „jenseits" von Natur – es ist eine neue Form von Natur, eine „techno-ökologische" Assemblage, die menschliche und nicht-menschliche agency verbindet.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Zahlen & Fakten */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Energieverbrauch im Vergleich
        </h2>

        <div className="fact-box">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="font-heading text-2xl sm:text-3xl text-accent-terra">1</span>
              <div>
                <p className="font-body text-sm text-text-main/70 mb-1">Training eines großen LLM</p>
                <p className="font-body text-base text-text-main">≈ 300.000 kg CO₂ (entspricht ~5 Autos im Lebenszyklus)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-heading text-2xl sm:text-3xl text-accent-terra">2</span>
              <div>
                <p className="font-body text-sm text-text-main/70 mb-1">Ein ChatGPT-Aufruf</p>
                <p className="font-body text-base text-text-main">≈ 0.2-0.5 Wh (≈ 10x Google-Suche)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-heading text-2xl sm:text-3xl text-accent-terra">3</span>
              <div>
                <p className="font-body text-sm text-text-main/70 mb-1">Data Centers weltweit</p>
                <p className="font-body text-base text-text-main">≈ 1% des globalen Stromverbrauchs (wachsend)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-heading text-2xl sm:text-3xl text-accent-terra">4</span>
              <div>
                <p className="font-body text-sm text-text-main/70 mb-1">Kühlung</p>
                <p className="font-body text-base text-text-main">≈ 30-40% des Energieverbrauchs eines Data Centers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Theoretischer Bezug */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Theoretischer Bezug
        </h2>

        <div className="margin-note">
          <p className="font-body text-sm text-text-main/70 mb-2">
            <strong>Jussi Parikka – A Geology of Media</strong>
          </p>
          <p className="font-body text-sm text-text-main/70 mb-2">
            Medien sind nicht immateriell – sie basieren auf geologischen Schichten: Erden, Metalle, Energie. Das „Deep Time" der Technik.
          </p>
        </div>

        <div className="margin-note">
          <p className="font-body text-sm text-text-main/70 mb-2">
            <strong>Nicole Starosielski – The Undersea Network</strong>
          </p>
          <p className="font-body text-sm text-text-main/70 mb-2">
            Die physischen Infrastrukturen des Internets: Kabel, Reparaturstationen, Routen – eine Ökologie aus Meeren, Küsten, Arbeit.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-3" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück
          </Link>
          <Link href="/station-5" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
