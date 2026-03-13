"use client";

import Link from "next/link";
import { ChipXRay } from "@/components/ChipXRay";

export default function Station2Page() {
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
            Körperliche KI
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Wenn wir über Künstliche Intelligenz sprechen, nutzen wir oft Metaphern des Ätherischen: die Cloud, der virtuelle Raum, das drahtlose Netz. Doch der Medienarchäologe <span className="font-heading text-accent-terra">Jussi Parikka</span> lehrt uns einen anderen Blick: <span className="font-normal">Technologie ist Geologie.</span> Jedes Rechenzentrum ist ein Archiv seltener Erden.
          </p>

          <p className="mb-6">
            Die Cloud ist dabei eine der erfolgreichsten Metaphern unserer Zeit, weil sie uns glauben lässt, Information sei gewichtslos, getrennt von unserer Welt. Doch das Gegenteil ist wahr. Künstliche Intelligenz hat einen massiven, physischen Körper. Dieser Körper besteht aus Silizium-Minen in China, Lithium-Feldern in Chile und riesigen Rechenzentren. In der Kulturtheorie spricht man von der <span className="font-heading text-accent-flora">Geologie der Medien</span>: Jedes Smartphone, jede KI ist ein Stück umgeformte Erde.
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
            In Anlehnung an Donna Haraways <span className="italic-heading">„Naturecultures"</span> beschreibt Parikkas Begriff die totale Verflechtung von Technik und Natur. Es gibt keine Trennung mehr zwischen der <span className="italic-body">„physischen Welt"</span> und der <span className="italic-body">„digitalen Welt"</span>. Umgekehrt gilt: Die Erde ermöglicht Medien überhaupt erst – durch Mineralien, Materialien, geophysikalische Bedingungen.
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
          Die mineralische Basis der Hardware
        </h2>

        <div className="flow-text-justified mb-8">
          <p className="mb-6">
            Digitale Technologie existiert nicht im luftleeren Raum, sondern basiert auf einer massiven Mobilisierung der Erdkruste.
          </p>
        </div>

        <div className="fact-box">
          <div className="space-y-4">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">1. Chemische Komplexität</span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Ein moderner Computerchip besteht aus bis zu <span className="font-semibold text-accent-flora">60 verschiedenen Elementen</span>, darunter Edelmetalle wie Gold und Silber sowie kritische Stoffe wie Indium, Gallium und Seltene Erden.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">2. Geologische Extrakte</span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Jedes Smartphone ist ein <span className="italic-body">"geologisches Extrakt"</span>. Wenn wir ein Gerät in der Tasche tragen, tragen wir faktisch Stücke von Afrika (wie Coltan aus dem Kongo) oder Zink aus Alaska bei uns.
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">3. Mining vs. Data Mining</span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Während wir oft über <span className="italic-body">"Data Mining"</span> als Metapher sprechen, basiert die Existenz dieser Daten auf tatsächlichem Bergbau.
              </p>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-text-main/80 italic-body text-center mt-6 mb-4">
          Die Materialität des Digitalen ist ein Thema von höchster Dringlichkeit, das unser herkömmliches Verständnis von Technologie, als etwas flüchtiges oder virtuelles, grundlegend infrage stellt.
        </p>

        <div className="divider" />
      </section>

      {/* Gedankenexperiment */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Gedankenexperiment: Die Telegrafie
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Um die fundamentale Verflechtung von Technologie und Natur zu begreifen, lohnt ein Blick auf das 19. Jahrhundert und auf die <span className="font-semibold">Telegrafie</span>, das erste globale Telekommunikationsnetzwerk.
          </p>

          <p className="mb-6">
            In ihrer Grundfunktion basierte die Telegrafie auf der Übertragung elektrischer Impulse über weite geografische Distanzen. Ein klassischer Stromkreis erfordert hierfür physisch zwei Leiter: einen für den Hinweg und einen für den Rückweg des Signals. Um jedoch die immensen infrastrukturellen und ökonomischen Hürden zu überwinden, Tausende Kilometer Kabel verlegen zu müssen, bedienten sich die Ingenieure einer ebenso pragmatischen wie konzeptionell radikalen Lösung: der sogenannten <span className="font-heading text-accent-flora">Erdrückleitung</span>.
          </p>

          <p className="mb-6">
            An den jeweiligen Enden der Telegrafenstationen wurden Metallplatten im Boden vergraben. Der elektrische Impuls nutzte dadurch die natürliche Leitfähigkeit unseres Planeten, die sogenannten <span className="italic-body">„tellurischen Ströme"</span>, um wieder zum Ursprungsort zurückzufließen und den Stromkreis zu schließen. Man sparte sich schlichtweg das zweite Kabel, indem man den Planeten selbst als Leiter einsetzte.
          </p>

          <p className="mb-6">
            In genau diesem Moment der Technologiegeschichte wandelte sich die Erde von einem passiven Untergrund zu einem <span className="font-semibold">aktiven technologischen Bauteil</span>. In der kulturwissenschaftlichen Betrachtung erscheint die Telegrafie somit als das erste technologische Nervensystem des Planeten: Die oberirdischen Drähte bildeten die Nervenfasern, doch der planetare <span className="italic-body">„Körper"</span>, der den Kreislauf vollendete und die Signale trug, war die Erde selbst.
          </p>
        </div>

        <div className="bordered-box bg-accent-flora/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            Hier offenbart sich die absolute Verschmelzung von Technik und Geosphäre zu einem Hybriden.
          </p>
          <p className="font-body text-base text-text-main/80">
            Ein Telegrafensystem bestand faktisch zur Hälfte aus technologischen Artefakten (Batterien, Kupferdrähten, Schaltern) und zur Hälfte aus geologischen Gegebenheiten (Bodenbeschaffenheit, Grundwasser, Mineralien).
          </p>
        </div>

        <div className="flow-text-justified">
          <p className="mb-6">
            Dieses historische Paradigma veranschaulicht präzise Parikkas Konzept der Medianatures: Die Erde ist nicht nur ein passives Reservoir, aus dem wir Ressourcen für unsere Hardware abbauen. Sie war und ist das fundamentale physische Medium, das unsere technologischen Netzwerke – von der frühen Telegrafie bis zur heutigen globalen Infrastruktur der Künstlichen Intelligenz – überhaupt erst operativ macht.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktive Aufgabe */}
      <section className="section-container">
        <h3 className="section-title mb-4 sm:mb-6">
          Der Röntgenblick
        </h3>

        <div className="margin-note mb-4">
          <p className="font-body text-sm">
            Schätzfrage: Wie viele chemische Elemente können in einem modernen Chip stecken?
          </p>
          <p className="font-body text-xs text-text-main/60 mt-1">
            Antwort: Bis zu ~60
          </p>
        </div>

        <ChipXRay />

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-1" className="btn-vintage-outline">
            Zurück
          </Link>
          <Link href="/station-3" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
