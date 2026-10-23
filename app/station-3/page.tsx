"use client";

import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Station3Page() {
  const { lang } = useLanguage();

  const accordionItems = lang === "de"
    ? [
        {
          title: "Verschleierung durch Terminologie",
          content: (
            <div className="flow-text-justified">
              <p className="mb-4">
                Der Begriff „Künstliche Intelligenz" suggeriert hierbei eine „rein technische" und „nicht natürliche" Technologie und verbirgt die zugrundeliegende menschliche Arbeit und die natürlichen Rohstoffe.
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
                Der „Körper" der KI beginnt in den Minen des Globalen Südens, wo Rohstoffe wie Lithium oder Coltan abgebaut werden. Diese harte körperliche Arbeit bildet die materielle Basis für die Hardware, die wir im Globalen Norden nutzen.
              </p>
              <p>
                Damit KI-Systeme „intelligent" wirken, müssen riesige Datenmengen von Menschen vorsortiert und markiert werden (<span className="font-heading text-accent-flora">Data Labeling</span>). Diese Arbeit wird oft in Niedriglohnländer ausgelagert und als „kognitive Sweatshops" bezeichnet.
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
                Auch das Design von KI (Stimmen, Aussehen von Robotern) spiegelt oft westliche Ideale wider. <span className="font-heading text-accent-terra">„Whiteness"</span> wird als Norm gesetzt, was dazu führt, dass Menschen im Globalen Süden oder People of Color durch Biases in den Systemen häufiger diskriminiert werden (z. B. bei der Gesichtserkennung).
              </p>
            </div>
          ),
        },
      ]
    : [
        {
          title: "Concealment through Terminology",
          content: (
            <div className="flow-text-justified">
              <p className="mb-4">
                The term "Artificial Intelligence" suggests a "purely technical" and "non-natural" technology, concealing the underlying human labour and natural raw materials.
              </p>
              <p>
                The <span className="font-heading text-accent-terra">illusion of autonomy</span>: the idea that knowledge and intelligence can be fully outsourced to a machine is critically contested, as humans remain present at every stage of development.
              </p>
            </div>
          ),
        },
        {
          title: "The Global South",
          content: (
            <div className="flow-text-justified">
              <p className="mb-4">
                The "body" of AI begins in the mines of the Global South, where raw materials such as lithium or coltan are extracted. This hard physical labour forms the material basis for the hardware we use in the Global North.
              </p>
              <p>
                For AI systems to appear "intelligent", vast quantities of data must be pre-sorted and labelled by human workers (<span className="font-heading text-accent-flora">Data Labeling</span>). This work is often outsourced to low-wage countries and has been described as "cognitive sweatshops".
              </p>
            </div>
          ),
        },
        {
          title: "The Global North",
          content: (
            <div className="flow-text-justified">
              <p className="mb-4">
                While the Global South bears the ecological and social costs, the benefits lie primarily in the Global North. The biggest winners of the AI boom are tech giants in the US and China, and to a lesser extent Europe.
              </p>
              <p>
                The design of AI (voices, the appearance of robots) often reflects Western ideals. <span className="font-heading text-accent-terra">"Whiteness"</span> is set as the norm, which leads to people in the Global South or people of colour being more frequently discriminated against through biases in the systems (e.g. in facial recognition).
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
            {lang === "de" ? "Die unsichtbaren Gärtner" : "The Invisible Gardeners"}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            {lang === "de" ? (
              <>
                Oft erscheint uns die Künstliche Intelligenz als autonom. Ein System, das wie durch Zauberei lernt. Doch die Forscherin <span className="font-heading text-accent-terra">Kate Crawford</span> erinnert uns daran: KI ist weder rein künstlich noch von Natur aus intelligent. Hinter jedem „smarten" Algorithmus verbirgt sich eine gigantische Anzahl von Menschen. In der Fachwelt spricht man von <span className="font-heading text-accent-flora">„Ghost Work"</span> (Geisterarbeit).
              </>
            ) : (
              <>
                Artificial Intelligence often appears to us as autonomous – a system that learns as if by magic. Yet the researcher <span className="font-heading text-accent-terra">Kate Crawford</span> reminds us: AI is neither purely artificial nor inherently intelligent. Behind every "smart" algorithm lies a vast number of human beings. In academic discourse, this is referred to as <span className="font-heading text-accent-flora">"Ghost Work"</span>.
              </>
            )}
          </p>

          <p className="mb-6">
            {lang === "de" ? (
              <>
                Stellen Sie sich diesen Garten vor. Damit er so ordentlich aussieht, muss jemand das Unkraut jäten. In der Welt der KI bedeutet das: <span className="font-semibold">Data Labeling</span>. Millionen von Menschen im Globalen Süden sitzen vor Bildschirmen und markieren Bilder, damit ein Auto lernt, was ein Baum ist oder was ein Mensch.
              </>
            ) : (
              <>
                Imagine this garden. For it to look so tidy, someone has to pull the weeds. In the world of AI, that means: <span className="font-semibold">Data Labeling</span>. Millions of people in the Global South sit in front of screens and label images so that a car can learn what a tree is, or what a human being looks like.
              </>
            )}
          </p>

          <p className="mb-6">
            {lang === "de"
              ? "Denn KI ist ein System, welches tief in physischen Prozessen und menschlicher Arbeit verwurzelt ist."
              : "For AI is a system deeply rooted in physical processes and human labour."}
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
          {lang === "de" ? "Mögliche Lösungsansätze" : "Possible Solutions"}
        </h2>

        <div className="bordered-box bg-accent-flora/5 mb-6">
          <p className="font-body text-base text-text-main/80 italic-body mb-4">
            {lang === "de"
              ? "Große Teile der KI-Industrie sind in ihrer derzeitigen Form weder wünschenswert noch akzeptabel."
              : "Large parts of the AI industry are, in their current form, neither desirable nor acceptable."}
          </p>
          <p className="font-body text-sm text-text-main/60">
            {lang === "de" ? "Nach Anne Burkhardt" : "After Anne Burkhardt"}
          </p>
        </div>

        <div className="fact-box">
          <div className="space-y-5">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "1. Politische und strukturelle Maßnahmen" : "1. Political and Structural Measures"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? "Regulierung von Big Tech, Boykott bestimmter Technologien, Aufklärung, die ein Bewusstsein für die Problematik schafft."
                  : "Regulation of Big Tech, boycotts of certain technologies, and public education that raises awareness of the issues involved."}
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "2. Epistemische und wissenschaftliche Lösungen" : "2. Epistemic and Scientific Solutions"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de" ? (
                  <>
                    Marginalisierte Perspektiven und Wissensbestände gezielt „annehmen" und von ihnen lernen. Stärkung von Organisationen wie <span className="font-heading text-accent-flora">Black in AI</span> oder <span className="font-heading text-accent-flora">LatinX in AI</span>, um die Sichtbarkeit und Teilhabe unterrepräsentierter Gruppen in der Forschung zu erhöhen.
                  </>
                ) : (
                  <>
                    Deliberately "adopting" marginalised perspectives and bodies of knowledge and learning from them. Strengthening organisations such as <span className="font-heading text-accent-flora">Black in AI</span> or <span className="font-heading text-accent-flora">LatinX in AI</span> to increase the visibility and participation of underrepresented groups in research.
                  </>
                )}
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">
                {lang === "de" ? "3. Aktivismus und Solidarität" : "3. Activism and Solidarity"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de" ? (
                  <>
                    Grassroots-Bewegungen: Netzwerke wie <span className="font-heading text-accent-flora">Tierra Común</span> oder das feministische Kollektiv <span className="font-heading text-accent-flora">Coding Rights</span> arbeiten aktiv an der Aufdeckung von Diskriminierung und der Kreation gerechterer technologischer Visionen.
                  </>
                ) : (
                  <>
                    Grassroots movements: networks such as <span className="font-heading text-accent-flora">Tierra Común</span> or the feminist collective <span className="font-heading text-accent-flora">Coding Rights</span> actively work to expose discrimination and to create more just technological visions.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>


      {/* Literatur */}
      <section className="section-container pb-8">
        <div className="border border-border-color p-6 sm:p-8">
          <span className="fact-heading block mb-3">{lang === "de" ? "Literatur" : "Literature"}</span>
          <p className="font-body text-sm text-text-main/80 leading-relaxed">
            Burkhardt, A. <span className="italic">Centering the South(s): Dekoloniale Perspektiven auf Künstliche Intelligenz</span>.
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-2" className="btn-vintage-outline">
            {lang === "de" ? "Zurück" : "Back"}
          </Link>
          <Link href="/station-4" className="btn-vintage">
            {lang === "de" ? "Zur nächsten Station" : "To the Next Station"}
          </Link>
        </div>
      </section>
    </div>
  );
}
