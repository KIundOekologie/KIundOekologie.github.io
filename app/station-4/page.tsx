"use client";

import Link from "next/link";
import { NetworkTinder } from "@/components/NetworkTinder";

export default function Station4Page() {
  return (
    <div className="w-full">
      {/* Station Hero Header */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 42vh, 480px)" }}>
        <img
          src="/Bild10.jpg"
          alt="Verflochtene Baumwurzeln – rhizomatische Netzwerke"
          className="absolute inset-0 w-full h-full object-cover vintage-filter"
          style={{ filter: "sepia(8%) contrast(95%) brightness(72%)", objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/25 to-text-main/35" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em]">Station 04</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h1
            className="font-heading text-white font-normal leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.025em" }}
          >
            Bio-logische Netzwerke
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Unter Ihren Füßen findet gerade eine Rechenleistung statt, die wir erst langsam zu verstehen beginnen. Das <span className="font-heading text-accent-flora">Myzel</span>, das fadenförmige Netzwerk der Pilze, tauscht zwischen Bäumen Nährstoffe und Informationen über Schädlingsbefall aus. Es ist ein dezentrales, lernfähiges System, eine Intelligenz ohne Gehirn.
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
            <span className="font-heading text-accent-terra">Donna Haraway</span> würde die Bezeichnung „künstlich" kritisch sehen, weil diese die Trennung von Natur und Technik voraussetzt. In ihrem Denken sind Cyborgs, und damit auch KI, keine bloßen Maschinen oder simplen Hybride, sondern <span className="font-semibold italic-heading">„implodierte Entitäten"</span>: dichte, materielle und zugleich bedeutungsvolle Dinge, in denen Maschinen, Energiesysteme, menschliche Praktiken und nichtmenschliche Akteure untrennbar zusammenhängen.
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
            Statt Biomimikry als einseitige Imitation betont Haraway „Sympoiesis": gemeinsames Hervorbringen („making-with") in kollektiven Systemen ohne klare Grenzen.
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
            Die Biologin und Philosophin <span className="font-heading text-accent-terra">Donna Haraway</span> fordert uns auf, die Illusion des autarken Individuums aufzugeben und stattdessen das Konzept der „Sympoiesis", des gemeinsamen Erschaffens, zu verinnerlichen. In ihrem Denken sind alle Lebewesen, einschließlich des Menschen, sogenannte „Holobionten": symbiotische Arrangements, die untrennbar mit Mikroben, Technologien und anderen Arten verwoben sind.
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
          Netzwerke erkennen
        </h3>

        <div className="margin-note mb-4">
          <p className="font-body text-sm">
            
          </p>
          <p className="font-body text-xs text-text-main/60 mt-1">
            
          </p>
        </div>

        <NetworkTinder />

        <div className="divider" />
      </section>

      {/* Literatur */}
      <section className="section-container pb-8">
        <div className="border border-border-color p-6 sm:p-8">
          <span className="fact-heading block mb-3">Literatur</span>
          <p className="font-body text-sm text-text-main/80 leading-relaxed">
            Haraway, D. J. (2020). <span className="italic">Staying with the Trouble: Making Kin in the Chthulucene</span>.
          </p>
        </div>
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
