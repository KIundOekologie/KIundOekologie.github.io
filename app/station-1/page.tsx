"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TERMS = [
  { id: 1, name: "Streuobstwiese" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Blumen" },
  { id: 4, name: "CO₂" },
  { id: 5, name: "Wildbrücke" },
  { id: 6, name: "Datenzentrum" },
];

function HybridSlider() {
  const { lang } = useLanguage();
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
          {lang === "de" ? "Im Anthropozän verschwindet die Trennlinie" : "In the Anthropocene, the dividing line disappears"}
        </h3>
        <p className="font-body text-base sm:text-lg text-text-main/80 italic-body">
          {lang === "de" ? "Alles ist hybrid." : "Everything is hybrid."}
        </p>
        <button
          onClick={() => {
            setShowHybridMessage(false);
            setCurrentTermIndex(0);
            setPlacements({});
          }}
          className="mt-6 btn-vintage-outline text-sm"
        >
          {lang === "de" ? "Erneut versuchen" : "Try again"}
        </button>
      </div>
    );
  }

  return (
    <div className="border border-border-color p-6 sm:p-8 my-6 sm:my-8 bg-bg-base/50">
      <p className="font-body text-sm text-center text-text-main/70 mb-4">
        {lang === "de"
          ? `Begriff ${currentTermIndex + 1} von ${TERMS.length}`
          : `Term ${currentTermIndex + 1} of ${TERMS.length}`}
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
            <span>{lang === "de" ? "100% Natur" : "100% Nature"}</span>
            <span>{lang === "de" ? "100% Kultur/Technik" : "100% Culture/Technology"}</span>
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
          aria-label={lang === "de" ? "Natur vs Kultur Skala" : "Nature vs Culture Scale"}
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
          {currentTermIndex < TERMS.length - 1
            ? (lang === "de" ? 'Nächster Begriff' : 'Next Term')
            : (lang === "de" ? 'Auflösen' : 'Reveal')}
        </button>
      </div>
    </div>
  );
}

export default function Station1Page() {
  const { lang } = useLanguage();

  return (
    <div className="w-full">
      {/* Station Hero Header */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 42vh, 480px)" }}>
        <img
          src="/Bild11.jpg"
          alt="Geschichtetes Gestein – geologische Schichten"
          className="absolute inset-0 w-full h-full object-cover vintage-filter"
          style={{ filter: "sepia(10%) contrast(95%) brightness(78%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/20 to-text-main/35" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em]">Station 01</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h1
            className="font-heading text-white font-normal leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.025em" }}
          >
            {lang === "de" ? "Begriffe und Theorien" : "Concepts and Theories"}
          </h1>
        </div>
      </section>

      {/* Anthropozän */}
      <section className="section-container pt-10 sm:pt-14">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de" ? "Anthropozän" : "Anthropocene"}
        </h2>

        {/* Fakten-Box wie eine alte wissenschaftliche Akte */}
        <div className="fact-box">
          <div className="space-y-4 sm:space-y-5">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "Kernidee" : "Core Concept"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? <>Das Anthropozän (von altgriechisch ánthropos „Mensch" und kainós „neu") ist ein vorgeschlagenes Erdzeitalter, in dem der Mensch zum entscheidenden geologischen Faktor geworden ist. Der Begriff verdeutlicht, dass menschliche Aktivitäten die biologischen, geologischen und atmosphärischen Prozesse der Erde mittlerweile stärker prägen als natürliche Kräfte.</>
                  : <>The Anthropocene (from Ancient Greek ánthropos &quot;human&quot; and kainós &quot;new&quot;) is a proposed geological epoch in which humans have become the decisive geological force. The concept highlights that human activities now shape the Earth's biological, geological and atmospheric processes more profoundly than natural forces.</>}
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "Namensgeber" : "Named by"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de" ? (
                  <>Der Begriff wurde im Jahr 2000 vom Nobelpreisträger <span className="font-semibold">Paul Crutzen</span> populär gemacht.</>
                ) : (
                  <>The term was popularised in 2000 by Nobel Prize laureate <span className="font-semibold">Paul Crutzen</span>.</>
                )}
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "Geologischer Status" : "Geological Status"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? "Es ist (noch) keine offizielle Epoche. Ein Fachgremium lehnte die Aufnahme in die Erdzeitskala im März 2024 ab; wir leben offiziell weiterhin im Holozän."
                  : "It is not (yet) an official epoch. A scientific committee rejected its inclusion in the geological time scale in March 2024; we officially still live in the Holocene."}
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "Startpunkt" : "Starting Point"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? <>Meist wird das Jahr 1950 („Große Beschleunigung") oder der Beginn der Industriellen Revolution (um 1800) genannt.</>
                  : <>Most commonly cited is the year 1950 (&quot;Great Acceleration&quot;) or the beginning of the Industrial Revolution (around 1800).</>}
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">
                {lang === "de" ? "Nachweise" : "Evidence"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? "Das Anthropozän wird unter anderem durch bleibende Spuren in den Erdschichten definiert, die auch in Millionen von Jahren noch nachweisbar sein werden. Dazu zählen Hinterlassenschaften wie Plastik, Radioaktivität, Beton und der massive Anstieg von CO₂, die in den Bodenschichten dauerhaft nachweisbar bleiben."
                  : "The Anthropocene is defined in part by permanent traces in the Earth's strata that will remain detectable millions of years from now. These include remnants such as plastic, radioactivity, concrete and the massive rise in CO₂, all of which leave lasting marks in geological layers."}
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Trennung von Mensch und Natur */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de"
            ? "Trennung von Mensch und Natur – und ihre Infragestellung"
            : "The Separation of Humans and Nature – and its Questioning"}
        </h2>

        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            {lang === "de"
              ? "Im alltäglichen Sprachgebrauch fällt die Unterscheidung zwischen Natur und Kultur meist leicht. Der Baum im Garten, die Blumenwiese, das ist Natur. Das Fenster, welches mich davon trennt oder das Smartphone, das ich zum Bestimmen der Blumen nutze, gehört zu dem Bereich der vom Menschen hergestellten Dinge und somit zur Kultur. Diese Unterscheidung ist eine Selbstverständlichkeit, die unseren Alltag bestimmt und unser Wissen strukturiert. So stellt man den Geisteswissenschaften, die sich mit Geschichte, Kunst, Ideen und somit den Produkten des menschlichen Geistes befassen, traditionell die Naturwissenschaften gegenüber."
              : "In everyday language, the distinction between nature and culture usually seems obvious. The tree in the garden, the wildflower meadow – that is nature. The window separating me from it, or the smartphone I use to identify the flowers, belongs to the realm of things made by humans, and thus to culture. This distinction is taken for granted; it shapes our daily lives and structures our knowledge. The humanities, which concern themselves with history, art, ideas and thus the products of the human mind, are traditionally contrasted with the natural sciences."}
          </p>

          <p className="mb-6">
            {lang === "de"
              ? "Dahinter steht die Annahme, dass sich Natur und Kultur in ihrem Wesen unterscheiden, zwei ontologische Kategorien, unterschiedliche Existenzweisen bezeichnen."
              : "Behind this lies the assumption that nature and culture differ in their very essence – that they represent two ontological categories, two distinct modes of existence."}
          </p>

          <p className="mb-6">
            {lang === "de" ? (
              <>
                Die Debatte um das Anthropozän stellt diese Trennung jedoch in Frage. So schreiben Eva Horn und Hannes Bergthaller: <span className="italic-heading text-accent-flora">„Wenn die Menschheit selbst zur Naturgewalt geworden ist und das Erdsystem in seiner Gesamtheit verändert, dann verliert die Scheidung von Natur und Kultur ihren Sinn".</span> Das Ersetzen natürlicher Umwelten durch Künstliche zählte auch Anthony Giddens zu einem Charakteristikum der Moderne.
              </>
            ) : (
              <>
                The debate around the Anthropocene, however, calls this separation into question. As Eva Horn and Hannes Bergthaller write: <span className="italic-heading text-accent-flora">"When humanity itself has become a force of nature and has altered the Earth system as a whole, then the distinction between nature and culture loses its meaning."</span> The replacement of natural environments with artificial ones was also identified by Anthony Giddens as a characteristic feature of modernity.
              </>
            )}
          </p>

          <p className="mb-6">
            {lang === "de" ? (
              <>
                Deutlich wird dies etwa im Umweltschutz, der Natur meist nicht als Natur bewahrt, sondern vielmehr auf das Management von Prozessen hinausläuft. Hier vermischen sich Natürliches und Technisch-Kulturelles zunehmend in Form von Krötentunneln, Schadstoffgrenzwerten und Wildbrücken. Merkmal der Gegenwart ist somit nicht (nur) ein Verschwinden von Natur, sondern eine Ausbreitung des <span className="font-semibold">„Hybriden"</span>.
              </>
            ) : (
              <>
                This is clearly visible in environmental protection, which rarely preserves nature as nature, but rather amounts to the management of processes. Here, the natural and the techno-cultural increasingly merge in the form of toad tunnels, pollution limits and wildlife crossings. The defining feature of the present is therefore not (only) a disappearance of nature, but an expansion of the <span className="font-semibold">"hybrid"</span>.
              </>
            )}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktive Aufgabe */}
      <section className="section-container">
        <h3 className="section-title mb-4 sm:mb-6">
          {lang === "de" ? "Begriffe sortieren" : "Sort Concepts"}
        </h3>

        <div className="margin-note">
          <p className="font-body text-sm mb-2">
            {lang === "de"
              ? "Welche dieser Dinge ordnest du spontan der Natur zu und welche der Kultur?"
              : "Which of these things would you instinctively assign to nature and which to culture?"}
          </p>
        </div>

        <HybridSlider />

        <div className="divider" />
      </section>

      {/* Literatur */}
      <section className="section-container pb-8">
        <div className="border border-border-color p-6 sm:p-8">
          <span className="fact-heading block mb-3">{lang === "de" ? "Literatur" : "Literature"}</span>
          <p className="font-body text-sm text-text-main/80 leading-relaxed">
            Horn, E. &amp; Bergthaller, H. (2020). <span className="italic">Anthropozän zur Einführung</span>.
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/" className="btn-vintage-outline">
            {lang === "de" ? "Zurück zur Tour" : "Back to Tour"}
          </Link>
          <Link href="/station-2" className="btn-vintage">
            {lang === "de" ? "Zur nächsten Station" : "To the Next Station"}
          </Link>
        </div>
      </section>
    </div>
  );
}
