"use client";

import Link from "next/link";
import { Accordion } from "@/components/Accordion";

export default function Station3Page() {
  const accordionItems = [
    {
      title: "Verschleierung durch Terminologie",
      content: (
        <div className="flow-text-justified">
          <p className="mb-4">
            Der Begriff <span className="italic-body">"Künstliche Intelligenz"</span> suggeriert hierbei eine "rein technische" und "nicht natürliche" Technologie und verbirgt die zugrundeliegende menschliche Arbeit und die natürlichen Rohstoffe.
          </p>
          <p>
            Die <span className="font-heading text-accent-terra">Illusion der Autonomie</span>: Die Vorstellung, dass Wissen und Intelligenz vollständig an eine Maschine ausgelagert werden können, wird als streitbar kritisiert, da der Mensch in jeder Phase der Entwicklung präsent bleibt.
          </p>
        </div>
      ),
    },
    {
      title: "Der Globale Süden",
      content: (
        <div className="flow-text-justified">
          <p className="mb-4">
            Der <span className="italic-body">"Körper"</span> der KI beginnt in den Minen des Globalen Südens, wo Rohstoffe wie Lithium oder Coltan abgebaut werden. Diese harte körperliche Arbeit bildet die materielle Basis für die Hardware, die wir im Globalen Norden nutzen.
          </p>
          <p>
            Damit KI-Systeme <span className="italic-body">"intelligent"</span> wirken, müssen riesige Datenmengen von Menschen vorsortiert und markiert werden (<span className="font-heading text-accent-flora">Data Labeling</span>). Diese Arbeit wird oft in Niedriglohnländer ausgelagert und als <span className="italic-body">"kognitive Sweatshops"</span> bezeichnet.
          </p>
        </div>
      ),
    },
    {
      title: "Der Globale Norden",
      content: (
        <div className="flow-text-justified">
          <p className="mb-4">
            Während der Globale Süden die ökologischen und sozialen Kosten trägt, liegen die Vorteile primär im Globalen Norden. Die großen Gewinner des KI-Booms sind Tech-Giganten in den USA und China sowie in geringerem Maße Europa.
          </p>
          <p>
            Auch das Design von KI (Stimmen, Aussehen von Robotern) spiegelt oft westliche Ideale wider. <span className="font-heading text-accent-terra">"Whiteness"</span> wird als Norm gesetzt, was dazu führt, dass Menschen im Globalen Süden oder People of Color durch Biases in den Systemen häufiger diskriminiert werden (z. B. bei der Gesichtserkennung).
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Station Hero Header */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 42vh, 480px)" }}>
        <img
          src="/Bild4.jpg"
          alt="Luftaufnahme Waldkrone – der verwaltete Naturraum von oben"
          className="absolute inset-0 w-full h-full object-cover vintage-filter"
          style={{ filter: "sepia(8%) contrast(95%) brightness(75%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/20 to-text-main/35" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em]">Station 03</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h1
            className="font-heading text-white font-normal leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.025em" }}
          >
            Die unsichtbaren Gärtner
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Oft erscheint uns die Künstliche Intelligenz als autonom. Ein System, das wie durch Zauberei lernt. Doch die Forscherin <span className="font-heading text-accent-terra">Kate Crawford</span> erinnert uns daran: KI ist weder rein künstlich noch von Natur aus intelligent. Hinter jedem <span className="italic-body">"smarten"</span> Algorithmus verbirgt sich eine gigantische Anzahl von Menschen. In der Fachwelt spricht man von <span className="font-heading text-accent-flora">"Ghost Work"</span> (Geisterarbeit).
          </p>

          <p className="mb-6">
            Stellen Sie sich diesen Garten vor. Damit er so ordentlich aussieht, muss jemand das Unkraut jäten. In der Welt der KI bedeutet das: <span className="font-semibold">Data Labeling</span>. Millionen von Menschen im Globalen Süden sitzen vor Bildschirmen und markieren Bilder, damit ein Auto lernt, was ein Baum ist oder was ein Mensch.
          </p>

          <p className="mb-6">
            Denn KI ist ein System, welches tief in physischen Prozessen und menschlicher Arbeit verwurzelt ist.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Accordion Sections */}
      <section className="section-container">
        <Accordion items={accordionItems} />

        <div className="divider" />
      </section>

      {/* Lösungen */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Mögliche Lösungsansätze
        </h2>

        <div className="bordered-box bg-accent-flora/5 mb-6">
          <p className="font-body text-base text-text-main/80 italic-body mb-4">
            Große Teile der KI-Industrie sind in ihrer derzeitigen Form weder wünschenswert noch akzeptabel.
          </p>
          <p className="font-body text-sm text-text-main/60">
            Nach Anne Burkhardt
          </p>
        </div>

        <div className="fact-box">
          <div className="space-y-5">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                1. Politische und strukturelle Maßnahmen
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Regulierung von Big Tech, Boykott bestimmter Technologien, Aufklärung, die ein Bewusstsein für die Problematik schärfen soll.
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                2. Epistemische und wissenschaftliche Lösungen
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Marginalisierte Perspektiven und Wissensbestände gezielt <span className="italic-body">"annehmen"</span> und von ihnen lernen. Stärkung von Organisationen wie <span className="font-heading text-accent-flora">Black in AI</span> oder <span className="font-heading text-accent-flora">LatinX in AI</span>, um die Sichtbarkeit und Teilhabe unterrepräsentierter Gruppen in der Forschung zu erhöhen.
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">
                3. Aktivismus und Solidarität
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                Grassroots-Bewegungen: Netzwerke wie <span className="font-heading text-accent-flora">Tierra Común</span> oder das feministische Kollektiv <span className="font-heading text-accent-flora">Coding Rights</span> arbeiten aktiv an der Aufdeckung von Diskriminierung und der Kreation gerechterer technologischer Visionen.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Zitat Box */}
      <section className="section-container">
        <div className="quote-box">
          <p className="text-xl sm:text-2xl lg:text-3xl">
            Hinter jedem "smarten" Algorithmus verbirgt sich eine gigantische Anzahl von Menschen.
          </p>
          <cite className="font-body text-sm text-text-main/60 not-italic mt-4 block">
            — Kate Crawford, Ghost Work
          </cite>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-2" className="btn-vintage-outline">
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
