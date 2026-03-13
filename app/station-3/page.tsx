import Link from "next/link";

export default function Station3Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 3
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          KI & Pflanzenwelt
        </h1>
      </section>

      {/* Intro */}
      <section className="section-container">
        <div className="margin-note">
          <p className="font-body text-sm">
            <strong>Ort:</strong> Am Grüngürtel / zwischen Gebäuden
          </p>
          <p className="font-body text-sm text-text-main/60 mt-1">
            Fokus: Pflanzenkenntnis-Apps, Smart Farming, KI-gestützte Biologie
          </p>
        </div>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Wer schon einmal eine Pflanze mit einer App identifiziert hat, hat KI als „gartentechnisches Hilfsmittel" erlebt: Ein Foto vom Blatt, ein Klick, seconds später der Name der Art, Familie, Gattung – manchmal sogar Pflegehinweise, Giftigkeit, Verbreitung. Apps wie PlantNet, Flora Incognita, iNaturalist nutzen Bilderkennung, um Pflanzenbestimmung zu demokratisieren: Was früher Botanikern vorbehalten war, ist nun für alle zugänglich.
          </p>

          <p className="mb-6">
            Aber diese Entwicklung ist nicht so simpel, wie sie scheint. Die Apps lernen aus Millionen von Bildern, die von Menschen gelabelt wurden – sie reproduzieren also menschliches (und oft westliches, koloniales) Wissen. Eine Pflanze ist für die App ein Objekt, ein Datensatz, ein Muster aus Pixeln – nicht ein Lebewesen mit Ökologie, Geschichte, kultureller Bedeutung. Die App weiß nichts über die Beziehung dieser Pflanze zu Insekten, zu Boden, zu Klima, zu Menschen – sie weiß nur, wie sie „aussieht".
          </p>

          <p className="mb-6">
            In der Landwirtschaft geht KI noch weiter: Precision Agriculture steuert Düngung, Bewässerung, Ernte algorithmisch; Drohnen scannen Felder auf Schädlinge, Nährstoffmangel, Wasserverbrauch; Smart Sensoren messen Feuchtigkeit, pH-Wert, Temperatur im Boden. KI wird zu einer „extended organ" der Pflanze – ein externes Nervensystem, das Wahrnehmung, Analyse, Reaktion übernimmt. Was bedeutet das für die Pflanze selbst? Für ihre „agency", ihre Autonomie, ihre Evolution?
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* KI als „Extended Organ" */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          KI als „Extended Organ"
        </h2>

        <div className="content-text">
          <p className="mb-6">
            Der Philosoph Andy Clark argumentiert, dass Menschen schon immer „extended minds" haben – Werkzeuge, Sprachen, Notizen, Smartphones, die kognitive Prozesse auslagern, erweitern, transformieren. Warum sollte das nicht auch für Pflanzen gelten? Eine Pflanze hat Wurzeln, Blätter, Stängel – aber sie hat keine Augen, keine Ohren, kein zentrales Nervensystem. KI könnte eine Art „künstliches Sinnesorgan" werden: Ein Sensor im Boden misst Feuchtigkeit, eine Drohne oben überm Feld erkennt Stress, ein Algorithmus berechnet optimalen Erntezeitpunkt.
          </p>

          <p className="mb-6">
            Aber diese Erweiterung ist nicht neutral: Wer kontrolliert den Sensor? Wer schreibt den Algorithmus? Wer profitiert von den Daten? Ein Bauernhof, der KI-gestützte Precision Agriculture nutzt, wird abhängig von Software-Updates, von Datenlizenzierungen, von tech companies. Die Pflanze wird zum Datengenerator – ihr Wachstum, ihr Zustand, ihre Gesundheit werden commodifiziert. Das wirft Fragen nach ownership, nach agency, nach power auf: Wenn KI entscheidet, wann gegossen wird, wer ist dann der „Gärtner"? Der Mensch? Der Algorithmus? Die Pflanze selbst?
          </p>

          <p className="mb-6">
            Auch in der Forschung verändert KI die Beziehung zwischen Mensch und Pflanze: Pflanzenforschung nutzt Machine Learning, um Genomdaten zu analysieren, um Kreuzungen vorherzusagen, um Wuchsformen zu simulieren. KI kann Millionen von Genomsequenzen durchsuchen und Muster finden, die Menschen nie entdecken würden – sie kann „denken" wie eine Pflanze,或者说 sie kann Pflanzen in code „übersetzen". Aber diese Übersetzung ist eine Interpretation: KI projiziert menschliche Konzepte (Muster, Optimierung, Kontrolle) auf pflanzliche Realität – und produziert damit neue Bilder von „Natur", die nicht mehr „draußen" sind, sondern in Algorithmen verkörpert.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Theoretischer Hintergrund */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Theoretischer Hintergrund
        </h2>

        <div className="fact-box">
          <div className="space-y-4">
            <div className="border-b border-border-color pb-3">
              <span className="font-heading text-xs text-accent-terra uppercase tracking-wider block mb-1">
                Jane Bennett – Vibrant Matter
              </span>
              <p className="font-body text-sm text-text-main/80">
                Materie ist nicht passiv; Dinge haben agency, Vitalität, Handlungsmacht. Auch Pflanzen, auch Algorithmen.
              </p>
            </div>

            <div className="border-b border-border-color pb-3">
              <span className="font-heading text-xs text-accent-terra uppercase tracking-wider block mb-1">
                Natasha Myers – Photosynthesis
              </span>
              <p className="font-body text-sm text-text-main/80">
                Pflanzenwahrnehmung und Kommunikation als Modell für nicht-anthropozentrische Epistemologie.
              </p>
            </div>

            <div className="border-b border-border-color pb-3">
              <span className="font-heading text-xs text-accent-terra uppercase tracking-wider block mb-1">
                Donna Haraway – Staying with the Trouble
              </span>
              <p className="font-body text-sm text-text-main/80">
                „Kinship" mit Nicht-Menschen; Koexistenz statt Dominanz; „Situated Knowledges" auch für KI-Natur-Verhältnisse.
              </p>
            </div>

            <div>
              <span className="font-heading text-xs text-accent-terra uppercase tracking-wider block mb-1">
                Andy Clark – Extended Mind
              </span>
              <p className="font-body text-sm text-text-main/80">
                Kognitive Prozesse finden nicht nur im Gehirn statt – Werkzeuge, Medien, Techniken erweitern den Geist.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-2" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück
          </Link>
          <Link href="/station-4" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
