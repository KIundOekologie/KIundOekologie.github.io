"use client";

import Link from "next/link";
import { useState } from "react";

const TERMS = [
  { id: 1, name: "Streuobstwiese" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Blumen" },
  { id: 4, name: "CO₂" },
  { id: 5, name: "Wildbrücke" },
  { id: 6, name: "Datenzentrum" },
];

function HybridSlider() {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [placements, setPlacements] = useState<Record<number, number>>({});
  const [showHybridMessage, setShowHybridMessage] = useState(false);

  const currentTerm = TERMS[currentTermIndex];

  const handleSliderChange = (value: number) => {
    setPlacements({ ...placements, [currentTerm.id]: value });
  };

  const handleNext = () => {
    if (currentTermIndex < TERMS.length - 1) {
      setCurrentTermIndex(currentTermIndex + 1);
    } else {
      setShowHybridMessage(true);
    }
  };

  if (showHybridMessage) {
    return (
      <div className="border border-border-color p-6 sm:p-8 my-6 sm:my-8 bg-bg-base/50 text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-accent-flora" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl text-text-main mb-4">
          Im Anthropozän verschwindet die Trennlinie
        </h3>
        <p className="font-body text-base sm:text-lg text-text-main/80 italic-body">
          Alles ist hybrid.
        </p>
        <button
          onClick={() => {
            setShowHybridMessage(false);
            setCurrentTermIndex(0);
            setPlacements({});
          }}
          className="mt-6 btn-vintage-outline text-sm"
        >
          Erneut versuchen
        </button>
      </div>
    );
  }

  return (
    <div className="border border-border-color p-6 sm:p-8 my-6 sm:my-8 bg-bg-base/50">
      <p className="font-body text-sm text-center text-text-main/70 mb-4">
        Begriff {currentTermIndex + 1} von {TERMS.length}
      </p>

      <div className="text-center mb-8">
        <span className="font-heading text-2xl sm:text-3xl text-text-main block">
          {currentTerm.name}
        </span>
      </div>

      {/* Analog Scale Slider */}
      <div className="relative py-8 mb-6">
        {/* Skala mit Teilstrichen */}
        <div className="relative h-12 sm:h-16">
          {/* Hauptlinie */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-text-main transform -translate-y-1/2" />

          {/* Teilstriche */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-1">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className={`bg-text-main ${
                  i % 5 === 0 ? 'w-px h-4 sm:h-6' : 'w-px h-2 sm:h-3'
                }`}
              />
            ))}
          </div>

          {/* Labels */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between font-heading text-xs sm:text-sm text-text-main/70 px-1">
            <span>100% Natur</span>
            <span>100% Kultur/Technik</span>
          </div>
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onChange={(e) => handleSliderChange(parseInt(e.target.value))}
          className="absolute top-1/2 left-0 right-0 w-full opacity-0 cursor-ew-resize transform -translate-y-1/2 z-10"
          style={{ marginTop: '-2px' }}
          aria-label="Natur vs Kultur Skala"
        />

        {/* Marker (visuell) - wird durch CSS hover Effekt gesteuert */}
        <div
          className="absolute top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent-flora transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out pointer-events-none"
          style={{ left: `${placements[currentTerm.id] ?? 50}%` }}
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleNext}
          className="btn-vintage"
        >
          {currentTermIndex < TERMS.length - 1 ? 'Nächster Begriff' : 'Auflösen'}
        </button>
      </div>
    </div>
  );
}

export default function Station1Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="micro-copy text-accent-terra">Station 1</span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="hero-text text-text-main leading-tight mb-8 sm:mb-12">
          Begriffe und Theorien
        </h1>
      </section>

      {/* Anthropozän */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Anthropozän
        </h2>

        {/* Fakten-Box wie eine alte wissenschaftliche Akte */}
        <div className="fact-box">
          <div className="space-y-4 sm:space-y-5">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Kernidee
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Das Anthropozän (von altgriechisch ánthropos „Mensch" und kainós „neu") ist ein vorgeschlagenes Erdzeitalter, in dem der Mensch zum entscheidenden geologischen Faktor geworden ist. Der Begriff verdeutlicht, dass menschliche Aktivitäten die biologischen, geologischen und atmosphärischen Prozesse der Erde mittlerweile stärker prägen als natürliche Kräfte.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Namensgeber
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Der Begriff wurde im Jahr 2000 vom Nobelpreisträger <span className="font-semibold">Paul Crutzen</span> populär gemacht.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Geologischer Status
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Es ist (noch) keine offizielle Epoche. Ein Fachgremium lehnte die Aufnahme in die Erdzeitskala im März 2024 ab; wir leben offiziell weiterhin im Holozän.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Startpunkt
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Meist wird das Jahr 1950 („Große Beschleunigung") oder der Beginn der Industriellen Revolution (um 1800) genannt.
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">
                Nachweise
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Das Anthropozän wird unter anderem durch bleibende Spuren in den Erdschichten definiert, die auch in Millionen von Jahren noch nachweisbar sein werden. Dazu zählen Hinterlassenschaften wie Plastik, Radioaktivität, Beton und der massive Anstieg von CO₂, die in den Bodenschichten dauerhaft nachweisbar bleiben.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Trennung von Mensch und Natur */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Trennung von Mensch und Natur – und ihre Infragestellung
        </h2>

        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Im alltäglichen Sprachgebrauch fällt die Unterscheidung zwischen Natur und Kultur meist leicht. Der Baum im Garten, die Blumenwiese, das ist Natur. Das Fenster, welches mich davon trennt oder das Smartphone, das ich zum Bestimmen der Blumen nutze, gehört zu dem Bereich der vom Menschen hergestellten Dinge und somit zur Kultur. Diese Unterscheidung ist eine Selbstverständlichkeit, die unseren Alltag bestimmt und unser Wissen strukturiert. So stellt man den Geisteswissenschaften, die sich mit Geschichte, Kunst, Ideen und somit den Produkten des menschlichen Geistes befassen, traditionell die Naturwissenschaften gegenüber.
          </p>

          <p className="mb-6">
            Dahinter steht die Annahme, dass sich Natur und Kultur in ihrem Wesen unterscheiden, zwei ontologische Kategorien, unterschiedliche Existenzweisen bezeichnen.
          </p>

          <p className="mb-6">
            Die Debatte um das Anthropozän stellt diese Trennung jedoch in Frage: <span className="italic-heading text-accent-flora">„Wenn die Menschheit selbst zur Naturgewalt geworden ist und das Erdsystem in seiner Gesamtheit verändert, dann verliert die Scheidung von Natur und Kultur ihren Sinn".</span> Das Ersetzen natürlicher Umwelten durch Künstliche zählte auch Anthony Giddens zu einem Charakteristikum der Moderne.
          </p>

          <p className="mb-6">
            Deutlich wird dies im Umweltschutz, der Natur meist nicht als Natur bewahrt, sondern vielmehr auf das Management von Prozessen hinausläuft. Hier vermischen sich Natürliches und Technisch-Kulturelles zunehmend in Form von Krötentunneln, Schadstoffgrenzwerten und Wildbrücken. Merkmal der Gegenwart ist somit nicht (nur) ein Verschwinden von Natur, sondern eine Ausbreitung des <span className="font-semibold">„Hybriden"</span>.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktive Aufgabe */}
      <section className="section-container">
        <h3 className="section-title mb-4 sm:mb-6">
          Begriffe sortieren
        </h3>

        <div className="margin-note">
          <p className="font-body text-sm mb-2">
            Welche dieser Dinge ordnest du spontan der Natur zu und welche der Kultur?
          </p>
        </div>

        <HybridSlider />

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/" className="btn-vintage-outline">
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
