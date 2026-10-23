"use client";

import Link from "next/link";
import { useState } from "react";
import { ChipXRay } from "@/components/ChipXRay";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Station2Page() {
  const { lang } = useLanguage();
  const [telegrafieOpen, setTelegrafieOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Station Hero Header */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 42vh, 480px)" }}>
        <img
          src="/Bild1.jpg"
          alt="Quarzkristalle – mineralische Grundlage digitaler Technologie"
          className="absolute inset-0 w-full h-full object-cover vintage-filter"
          style={{ filter: "sepia(10%) contrast(95%) brightness(78%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/20 to-text-main/35" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em]">Station 02</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h1
            className="font-heading text-white font-normal leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.025em" }}
          >
            {lang === "de" ? "Körperliche KI" : "Physical AI"}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            {lang === "de" ? (
              <>
                Wenn wir über Künstliche Intelligenz sprechen, nutzen wir oft Metaphern des Ätherischen: die Cloud, der virtuelle Raum, das drahtlose Netz. Doch der Medienarchäologe <span className="font-heading text-accent-terra">Jussi Parikka</span> lehrt uns einen anderen Blick: <span className="font-normal">Technologie ist Geologie.</span> Jedes Rechenzentrum ist ein Archiv seltener Erden.
              </>
            ) : (
              <>
                When we talk about Artificial Intelligence, we often use metaphors of the ethereal: the Cloud, virtual space, the wireless network. Yet the media archaeologist <span className="font-heading text-accent-terra">Jussi Parikka</span> teaches us a different perspective: <span className="font-normal">Technology is geology.</span> Every data centre is an archive of rare earths.
              </>
            )}
          </p>

          <p className="mb-6">
            {lang === "de" ? (
              <>
                Die Cloud ist dabei eine der erfolgreichsten Metaphern unserer Zeit, weil sie uns glauben lässt, Information sei gewichtslos, getrennt von unserer Welt. Doch das Gegenteil ist wahr. Künstliche Intelligenz hat einen massiven, physischen Körper. Dieser Körper besteht aus Silizium-Minen in China, Lithium-Feldern in Chile und riesigen Rechenzentren. In der Kulturtheorie spricht man von der <span className="font-heading text-accent-flora">Geologie der Medien</span>: Jedes Smartphone, jede KI ist ein Stück umgeformte Erde.
              </>
            ) : (
              <>
                The Cloud is one of the most successful metaphors of our time precisely because it makes us believe that information is weightless, detached from our world. But the opposite is true. Artificial Intelligence has a massive, physical body. That body consists of silicon mines in China, lithium fields in Chile and enormous data centres. In cultural theory, this is referred to as the <span className="font-heading text-accent-flora">geology of media</span>: every smartphone, every AI is a piece of reshaped earth.
              </>
            )}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Medianatures */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Medianatures
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            {lang === "de" ? (
              <>
                In Anlehnung an Donna Haraways <span className="italic-heading">Naturecultures</span> beschreibt Parikkas Begriff die totale Verflechtung von Technik und Natur. Es gibt keine Trennung mehr zwischen der „physischen Welt" und der „digitalen Welt". Umgekehrt gilt: Die Erde ermöglicht Medien überhaupt erst – durch Mineralien, Materialien, geophysikalische Bedingungen.
              </>
            ) : (
              <>
                Drawing on Donna Haraway&apos;s concept of <span className="italic-heading">Naturecultures</span>, Parikka&apos;s term describes the total entanglement of technology and nature. There is no longer any separation between the "physical world" and the "digital world". Conversely: it is the earth that makes media possible in the first place – through minerals, materials and geophysical conditions.
              </>
            )}
          </p>

          <blockquote className="quote-box">
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-main">
              And conversely, it is the earth that provides for media and enables it: the minerals, materials off the ground, the affordances of its geophysical reality that make technical media happen. This is the double bind – which I call the sphere of medianatures.
            </p>
            <cite className="font-body text-sm text-text-main/60 not-italic mt-4 block">
              — Jussi Parikka
            </cite>
          </blockquote>
        </div>

        <div className="divider" />
      </section>

      {/* Die mineralische Basis */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de" ? "Die mineralische Basis der Hardware" : "The Mineral Basis of Hardware"}
        </h2>

        <div className="flow-text-justified mb-8">
          <p className="mb-6">
            {lang === "de"
              ? "Digitale Technologie existiert nicht im luftleeren Raum, sondern basiert auf einer massiven Mobilisierung der Erdkruste."
              : "Digital technology does not exist in a vacuum, but is based on a massive mobilisation of the Earth's crust."}
          </p>
        </div>

        <div className="fact-box">
          <div className="space-y-4">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">{lang === "de" ? "1. Chemische Komplexität" : "1. Chemical Complexity"}</span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de" ? (
                  <>
                    Ein moderner Computerchip besteht aus bis zu <span className="font-semibold text-accent-flora">60 verschiedenen Elementen</span>, darunter Edelmetalle wie Gold und Silber sowie kritische Stoffe wie Indium, Gallium und Seltene Erden.
                  </>
                ) : (
                  <>
                    A modern computer chip is made up of up to <span className="font-semibold text-accent-flora">60 different elements</span>, including precious metals such as gold and silver as well as critical materials like indium, gallium and rare earth elements.
                  </>
                )}
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">{lang === "de" ? "2. Geologische Extrakte" : "2. Geological Extracts"}</span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? <>Jedes Smartphone ist ein „geologischer Extrakt". Wenn wir ein Gerät in der Tasche tragen, tragen wir faktisch Stücke von Afrika wie Coltan aus dem Kongo oder Zink aus Alaska bei uns.</>
                  : <>Every smartphone is a &quot;geological extract&quot;. When we carry a device in our pocket, we are factually carrying pieces of Africa – coltan from the Congo or zinc from Alaska – along with us.</>}
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">3. Mining vs. Data Mining</span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? <>Während wir oft über „Data Mining" als Metapher sprechen, basiert die Existenz dieser Daten auf tatsächlichem Bergbau.</>
                  : <>While we often speak of &quot;data mining&quot; as a metaphor, the very existence of that data rests on actual physical mining.</>}
              </p>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-text-main/80 italic-body text-center mt-6 mb-4">
          {lang === "de"
            ? "Die Materialität des Digitalen ist ein Thema von höchster Dringlichkeit, das unser herkömmliches Verständnis von Technologie, als etwas flüchtiges oder virtuelles, grundlegend infrage stellt."
            : "The materiality of the digital is a matter of the utmost urgency, one that fundamentally challenges our conventional understanding of technology as something fleeting or virtual."}
        </p>

        <div className="divider" />
      </section>

      {/* Gedankenexperiment */}
      <section className="section-container">
        <div className="border border-border-color">
          <button
            onClick={() => setTelegrafieOpen(!telegrafieOpen)}
            className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-text-main/5 transition-colors"
            aria-expanded={telegrafieOpen}
          >
            <h2 className="section-title text-text-main pr-4">
              {lang === "de" ? "Gedankenexperiment: Die Telegrafie" : "Thought Experiment: The Telegraph"}
            </h2>
            <span className={`text-accent-terra text-2xl sm:text-3xl transition-transform duration-200 flex-shrink-0 ${telegrafieOpen ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${telegrafieOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
              <div className="flow-text-justified">
                <p className="mb-6">
                  {lang === "de" ? (
                    <>
                      Um die fundamentale Verflechtung von Technologie und Natur zu begreifen, lohnt ein Blick auf das 19. Jahrhundert und auf die <span className="font-semibold">Telegrafie</span>, das erste globale Telekommunikationsnetzwerk.
                    </>
                  ) : (
                    <>
                      To grasp the fundamental entanglement of technology and nature, it is worth looking back to the 19th century and to the <span className="font-semibold">telegraph</span>, the first global telecommunications network.
                    </>
                  )}
                </p>

                <p className="mb-6">
                  {lang === "de" ? (
                    <>
                      In ihrer Grundfunktion basierte die Telegrafie auf der Übertragung elektrischer Impulse über weite geografische Distanzen. Ein klassischer Stromkreis erfordert hierfür physisch zwei Leiter: einen für den Hinweg und einen für den Rückweg des Signals. Um jedoch die immensen infrastrukturellen und ökonomischen Hürden zu überwinden, Tausende Kilometer Kabel verlegen zu müssen, bedienten sich die Ingenieure einer ebenso pragmatischen wie konzeptionell radikalen Lösung: der sogenannten <span className="font-heading text-accent-flora">Erdrückleitung</span>.
                    </>
                  ) : (
                    <>
                      In its basic function, the telegraph relied on the transmission of electrical impulses across vast geographical distances. A conventional circuit physically requires two conductors: one for the outward signal and one for the return path. To overcome the immense infrastructural and economic hurdles of laying thousands of kilometres of cable, engineers employed a solution as pragmatic as it was conceptually radical: the so-called <span className="font-heading text-accent-flora">earth return</span>.
                    </>
                  )}
                </p>

                <p className="mb-6">
                  {lang === "de"
                    ? <>An den jeweiligen Enden der Telegrafenstationen wurden Metallplatten im Boden vergraben. Der elektrische Impuls nutzte dadurch die natürliche Leitfähigkeit unseres Planeten, die sogenannten „tellurischen Ströme", um wieder zum Ursprungsort zurückzufließen und den Stromkreis zu schließen. Man sparte sich schlichtweg das zweite Kabel, indem man den Planeten selbst als Leiter einsetzte.</>
                    : <>At each end of the telegraph stations, metal plates were buried in the ground. The electrical impulse then made use of the natural conductivity of our planet – the so-called &quot;telluric currents&quot; – to flow back to its point of origin and close the circuit. The second cable was simply dispensed with by using the planet itself as the conductor.</>}
                </p>

                <p className="mb-6">
                  {lang === "de" ? (
                    <>
                      In genau diesem Moment der Technologiegeschichte wandelte sich die Erde von einem passiven Untergrund zu einem <span className="font-semibold">aktiven technologischen Bauteil</span>. In der kulturwissenschaftlichen Betrachtung erscheint die Telegrafie somit als das erste technologische Nervensystem des Planeten: Die oberirdischen Drähte bildeten die Nervenfasern, doch der planetare „Körper", der den Kreislauf vollendete und die Signale trug, war die Erde selbst.
                    </>
                  ) : (
                    <>
                      At precisely this moment in the history of technology, the Earth transformed from a passive substrate into an <span className="font-semibold">active technological component</span>. From a cultural-scientific perspective, the telegraph thus appears as the planet&apos;s first technological nervous system: the above-ground wires formed the nerve fibres, but the planetary "body" that completed the circuit and carried the signals was the Earth itself.
                    </>
                  )}
                </p>
              </div>

              <div className="bordered-box bg-accent-flora/5 my-6">
                <p className="font-heading text-lg text-text-main mb-3">
                  {lang === "de"
                    ? "Hier offenbart sich die absolute Verschmelzung von Technik und Geosphäre zu einem Hybriden."
                    : "Here the absolute fusion of technology and geosphere into a hybrid is revealed."}
                </p>
                <p className="font-body text-base text-text-main/80">
                  {lang === "de"
                    ? "Ein Telegrafensystem bestand faktisch zur Hälfte aus technologischen Artefakten (Batterien, Kupferdrähten, Schaltern) und zur Hälfte aus geologischen Gegebenheiten (Bodenbeschaffenheit, Grundwasser, Mineralien)."
                    : "A telegraph system consisted, factually, of one half technological artefacts (batteries, copper wires, switches) and one half geological conditions (soil composition, groundwater, minerals)."}
                </p>
              </div>

              <div className="flow-text-justified">
                <p className="mb-6">
                  {lang === "de"
                    ? "Dieses historische Paradigma veranschaulicht präzise Parikkas Konzept der Medianatures: Die Erde ist nicht nur ein passives Reservoir, aus dem wir Ressourcen für unsere Hardware abbauen. Sie war und ist das fundamentale physische Medium, das unsere technologischen Netzwerke – von der frühen Telegrafie bis zur heutigen globalen Infrastruktur der Künstlichen Intelligenz – überhaupt erst operativ macht."
                    : "This historical paradigm illustrates Parikka&apos;s concept of Medianatures with precision: the Earth is not merely a passive reservoir from which we extract resources for our hardware. It was and remains the fundamental physical medium that makes our technological networks operative in the first place – from early telegraphy to today's global infrastructure of Artificial Intelligence."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktive Aufgabe */}
      <section className="section-container">
        <h3 className="section-title mb-4 sm:mb-6">
          {lang === "de" ? "Der Röntgenblick" : "The X-Ray View"}
        </h3>

        <div className="margin-note mb-4">
          <p className="font-body text-sm">

          </p>
          <p className="font-body text-xs text-text-main/60 mt-1">

          </p>
        </div>

        <ChipXRay />

        <div className="divider" />
      </section>

      {/* Literatur */}
      <section className="section-container pb-8">
        <div className="border border-border-color p-6 sm:p-8">
          <span className="fact-heading block mb-3">{lang === "de" ? "Literatur" : "Literature"}</span>
          <p className="font-body text-sm text-text-main/80 leading-relaxed">
            Parikka, J. (2015). <span className="italic">A Geology of Media</span>.
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-1" className="btn-vintage-outline">
            {lang === "de" ? "Zurück" : "Back"}
          </Link>
          <Link href="/station-3" className="btn-vintage">
            {lang === "de" ? "Zur nächsten Station" : "To the Next Station"}
          </Link>
        </div>
      </section>
    </div>
  );
}
