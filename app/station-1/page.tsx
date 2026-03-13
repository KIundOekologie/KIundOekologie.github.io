import Link from "next/link";
import { NatureCultureSlider } from "@/components/NatureCultureSlider";

export default function Station1Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 1
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          Einführung in Begriffe und Theorien
        </h1>
      </section>

      {/* Anthropozän */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Anthropozän
        </h2>

        {/* Fakten-Box wie eine alte wissenschaftliche Akte */}
        <div className="fact-box">
          <div className="space-y-4 sm:space-y-5">
            <div className="border-b border-border-color pb-4">
              <span className="font-heading text-xs sm:text-sm text-accent-terra uppercase tracking-wider block mb-1">
                Kernidee
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Das Anthropozän ist ein vorgeschlagenes Erdzeitalter, in dem der Mensch zur dominierenden geologischen Kraft geworden ist.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="font-heading text-xs sm:text-sm text-accent-terra uppercase tracking-wider block mb-1">
                Namensgeber
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Der Begriff wurde 2000 von <span className="font-semibold">Paul Crutzen</span> (Nobelpreisträger für Chemie) geprägt.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="font-heading text-xs sm:text-sm text-accent-terra uppercase tracking-wider block mb-1">
                Geologischer Status
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                (noch) keine offizielle geologische Epoche – die AWG (Anthropocene Working Group) hat jedoch eine formale Definition beantragt.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="font-heading text-xs sm:text-sm text-accent-terra uppercase tracking-wider block mb-1">
                Startpunkt
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Vorschlag: Mitte 20. Jahrhundert (~1950) – „Great Acceleration" mit raschem Anstieg von Bevölkerung, Energieverbrauch und CO₂.
              </p>
            </div>

            <div>
              <span className="font-heading text-xs sm:text-sm text-accent-terra uppercase tracking-wider block mb-1">
                Geologische Nachweise
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Mikroplastik, Radionuklide (Atomwaffentests), Technofossilien, Beton, Aluminium, Kunststoffe im Sedimentgestein.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Trennung von Mensch und Natur */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Trennung von Mensch und Natur – und ihre Infragestellung
        </h2>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Im alltäglichen Sprachgebrauch fällt die Unterscheidung zwischen Natur und Kultur meist leicht: Natur ist „draußen", wild, unberührt; Kultur ist „drinnen", geschaffen, menschengemacht. Diese Trennung wird in der westlichen Philosophie seit Jahrhunderten reproduziert – von Descartes' Trennung von res cogitans und res extensa bis zur modernen Naturwissenschaft, die Natur als objektiven, beobachtbaren Gegenstand treats.
          </p>

          <p className="mb-6">
            Im Anthropozän gerät diese Trennung jedoch unter Druck. Wenn der Mensch zum geologischen Faktor wird, wenn Atome im Gestein die jüngste Geschichte speichern, wenn jede Windrichtung, jedes pH-Wert im Meer, jedes Artsterben von menschlichen Aktivitäten beeinflusst ist – was ist dann noch „natürlich"?
          </p>

          <p className="mb-6">
            Der Ecocriticism und die neue Objektphilosophie (z.B. Jane Bennett, Bruno Latour) haben diese Trennung kritisiert. Nicht nur Menschen handeln, argumentieren sie: auch Materie, Dinge, Tiere, Klimasysteme üben agency aus. „Vibrant Matter" (Bennett) beschreibt, wie Dinge nicht bloß passiv sind, sondern aktiv in Prozesse eingreifen. Auch KI als Artefakt kann in diesem Sinne nicht als „rein technisch" und damit „gegenüber Natur" gedacht werden – sie ist aus Silizium, Energie, Daten, all das ist geologisch, ökologisch, materiell.
          </p>

          <p className="mb-6">
            Timothy Morton geht noch weiter: Er spricht von „Hyperobjekten" (Klimawandel, Plastik, globale Ökosysteme), die so riesig, zeitlich ausgedehnt und komplex sind, dass sie menschliche Vorstellungskraft sprengen. In der Dark Ecology gibt es kein Außen mehr, keinen reinen Naturraum, in den man retreated. Wir sind immer mittendrin – und müssen neue Denkweisen entwickeln, die nicht auf der alten Natur/Kultur-Dichotomie beruhen.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktiver Element Placeholder - Drag & Drop Slider */}
      <section className="section-container">
        <h3 className="font-heading text-lg sm:text-xl text-text-main mb-4 sm:mb-6 tracking-tight">
          Natur vs. Kultur – wo verläuft die Grenze?
        </h3>

        <div className="margin-note">
          <p className="text-sm italic mb-3">
            Metapher: Früher blickten wir in die Sterne, um die Welt zu verstehen – heute in den Algorithmus.
          </p>
          <p className="font-body text-sm text-text-main/60">
            Theoretischer Bezug: Timothy Morton, Dark Ecology; Bruno Latour, Actor-Network-Theory; Jane Bennett, Vibrant Matter.
          </p>
        </div>

        {/* Drag & Drop Slider - Analog Scale Design */}
        <NatureCultureSlider />

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück zur Tour
          </Link>
          <Link href="/station-2" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
