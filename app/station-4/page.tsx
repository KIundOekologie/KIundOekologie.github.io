"use client";

import Link from "next/link";
import { NetworkTinder } from "@/components/NetworkTinder";

export default function Station4Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="micro-copy text-accent-terra">Station 4</span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="hero-text text-text-main leading-tight mb-8 sm:mb-12">
          Bio-logische Netzwerke
        </h1>
      </section>

      {/* Intro */}
      <section className="section-container">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Unter Ihren Füßen findet gerade eine Rechenleistung statt, die wir erst langsam zu verstehen beginnen. Das <span className="font-heading text-accent-flora">Myzel</span>, das fadenförmige Netzwerk der Pilze, tauscht zwischen den Bäumen dieser Wiese Nährstoffe und Informationen über Schädlingsbefall aus. Es ist ein dezentrales, lernfähiges System, eine Intelligenz ohne Gehirn.
          </p>

          <p className="mb-6">
            In der Informatik nutzen wir künstliche neuronale Netze, die von der Biologie inspiriert sind. Wir programmieren Computer nicht mehr stur logisch (Wenn-Dann), sondern wir bauen Neuronale Netze, die lernen wie ein Organismus: durch Versuch, Irrtum und Anpassung. Doch während KI auf mathematischer Optimierung und elektrischen Impulsen basiert, basiert die Natur auf biochemischer Kommunikation und Jahrmillionen der Evolution.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Die Frage nach KI */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Ist KI ein Fremdkörper?
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Neuronale Netze sind von biologischen Systemen inspiriert, beruhen aber auf anderen Materialien und Mechanismen. Daraus entsteht die Frage: Ist KI ein Fremdkörper oder eine Fortsetzung evolutionärer Prinzipien?
          </p>

          <p className="mb-6">
            <span className="font-heading text-accent-terra">Donna Haraway</span> würde die Bezeichnung "künstlich" kritisch sehen, weil diese die Trennung von Natur und Technik voraussetzt. In ihrem Denken sind <span className="italic-heading">Cyborgs</span>, und damit auch KI, keine bloßen Maschinen oder simplen Hybride, sondern <span className="font-semibold italic-heading">"implodierte Entitäten"</span>: dichte, materielle und zugleich bedeutungsvolle Dinge, in denen Maschinen, Energiesysteme, menschliche Praktiken und nichtmenschliche Akteure untrennbar zusammenhängen.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Sympoiesis */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Sympoiesis – gemeinsames Erschaffen
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Statt Biomimikry als einseitige Imitation betont Haraway <span className="italic-heading">„Sympoiesis"</span>: gemeinsames Hervorbringen (<span className="italic-body">"making-with"</span>) in kollektiven Systemen ohne klare Grenzen.
          </p>
        </div>

        <div className="fact-box">
          <div className="space-y-4">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Chthuluzän
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Ein Zeitalter enger Verflechtung, in dem Menschen nur eine Kraft unter vielen sind.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Multispecies muddle
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Ein multispezifisches Durcheinander von Akteur*innen. Auch KI kann hier ein Mit-Akteur sein, der mit biologischen und geologischen Systemen verwoben ist.
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">
                Holobiont
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Ein Wesen nicht als Individuum, sondern als symbiotisches Arrangement vieler Partner.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Donna Haraway Konzept */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Holobionten & Sympoiesis
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Die Biologin und Philosophin <span className="font-heading text-accent-terra">Donna Haraway</span> fordert uns auf, die Illusion des autarken Individuums aufzugeben und stattdessen das Konzept der <span className="italic-heading">„Sympoiesis"</span>, des gemeinsamen Erschaffens, zu verinnerlichen. In ihrem Denken sind alle Lebewesen, einschließlich des Menschen, sogenannte <span className="font-semibold italic-heading">„Holobionten"</span>: symbiotische Arrangements, die untrennbar mit Mikroben, Technologien und anderen Arten verwoben sind.
          </p>
        </div>

        <div className="bordered-box bg-accent-flora/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            Der neue Horizont:
          </p>
          <p className="font-body text-base text-text-main/80">
            KI als biomimetische Fortsetzung der Natur. Wir sind nicht die Erfinder der Intelligenz, sondern lediglich ihre neuesten Übersetzer.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktive Aufgabe */}
      <section className="section-container">
        <h3 className="section-title mb-4 sm:mb-6">
          Tinder für Netzwerke
        </h3>

        <div className="margin-note mb-4">
          <p className="font-body text-sm">
            Ein schnelles Spiel, um Haraways Konzept aufzulockern.
          </p>
          <p className="font-body text-xs text-text-main/60 mt-1">
            Entscheide: Biologie (Pilznetzwerk) oder Technologie (KI-Netzwerk)?
          </p>
        </div>

        <NetworkTinder />

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-3" className="btn-vintage-outline">
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
