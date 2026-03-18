"use client";

import Link from "next/link";
import { NetworkTinder } from "@/components/NetworkTinder";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Station4Page() {
  const { lang } = useLanguage();

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
            {lang === "de" ? "Bio-logische Netzwerke" : "Bio-logical Networks"}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            {lang === "de" ? (
              <>
                Unter Ihren Füßen findet gerade eine Rechenleistung statt, die wir erst langsam zu verstehen beginnen. Das <span className="font-heading text-accent-flora">Myzel</span>, das fadenförmige Netzwerk der Pilze, tauscht zwischen Bäumen Nährstoffe und Informationen über Schädlingsbefall aus. Es ist ein dezentrales, lernfähiges System, eine Intelligenz ohne Gehirn.
              </>
            ) : (
              <>
                Beneath your feet, a form of computation is taking place that we are only just beginning to understand. The <span className="font-heading text-accent-flora">mycelium</span>, the thread-like network of fungi, exchanges nutrients and information about pest infestations between trees. It is a decentralised, adaptive system – an intelligence without a brain.
              </>
            )}
          </p>

          <p className="mb-6">
            {lang === "de"
              ? "In der Informatik nutzen wir künstliche neuronale Netze, die von der Biologie inspiriert sind. Wir programmieren Computer nicht mehr stur logisch (Wenn-Dann), sondern wir bauen Neuronale Netze, die lernen wie ein Organismus: durch Versuch, Irrtum und Anpassung. Doch während KI auf mathematischer Optimierung und elektrischen Impulsen basiert, basiert die Natur auf biochemischer Kommunikation und Jahrmillionen der Evolution."
              : "In computer science, we use artificial neural networks inspired by biology. We no longer programme computers with rigid logic (if–then), but instead build neural networks that learn like an organism: through trial, error and adaptation. Yet while AI is based on mathematical optimisation and electrical impulses, nature is based on biochemical communication and millions of years of evolution."}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Die Frage nach KI */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de" ? "Ist KI ein Fremdkörper?" : "Is AI a Foreign Body?"}
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            {lang === "de"
              ? "Neuronale Netze sind von biologischen Systemen inspiriert, beruhen aber auf anderen Materialien und Mechanismen. Daraus entsteht die Frage: Ist KI ein Fremdkörper oder eine Fortsetzung evolutionärer Prinzipien?"
              : "Neural networks are inspired by biological systems, but rest on different materials and mechanisms. This raises the question: is AI a foreign body, or a continuation of evolutionary principles?"}
          </p>

          <p className="mb-6">
            {lang === "de" ? (
              <>
                <span className="font-heading text-accent-terra">Donna Haraway</span> würde die Bezeichnung „künstlich" kritisch sehen, weil diese die Trennung von Natur und Technik voraussetzt. In ihrem Denken sind Cyborgs, und damit auch KI, keine bloßen Maschinen oder simplen Hybride, sondern <span className="font-semibold italic-heading">„implodierte Entitäten"</span>: dichte, materielle und zugleich bedeutungsvolle Dinge, in denen Maschinen, Energiesysteme, menschliche Praktiken und nichtmenschliche Akteure untrennbar zusammenhängen.
              </>
            ) : (
              <>
                <span className="font-heading text-accent-terra">Donna Haraway</span> would view the label "artificial" critically, because it presupposes a separation between nature and technology. In her thinking, cyborgs – and thus AI as well – are not mere machines or simple hybrids, but <span className="font-semibold italic-heading">"imploded entities"</span>: dense, material and simultaneously meaningful things in which machines, energy systems, human practices and non-human actors are inseparably intertwined.
              </>
            )}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Sympoiesis */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de" ? "Sympoiesis – gemeinsames Erschaffen" : "Sympoiesis – Creating Together"}
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            {lang === "de"
              ? <>Statt Biomimikry als einseitige Imitation betont Haraway „Sympoiesis": gemeinsames Hervorbringen („making-with") in kollektiven Systemen ohne klare Grenzen.</>
              : <>Rather than biomimicry as a one-sided imitation, Haraway emphasises &quot;sympoiesis&quot;: collective making-with in systems without clear boundaries.</>}
          </p>
        </div>

        <div className="fact-box">
          <div className="space-y-4">
            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                {lang === "de" ? "Chthuluzän" : "Chthulucene"}
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? "Ein Zeitalter enger Verflechtung, in dem Menschen nur eine Kraft unter vielen sind."
                  : "An epoch of close entanglement, in which humans are only one force among many."}
              </p>
            </div>

            <div className="border-b border-border-color pb-4">
              <span className="fact-heading block mb-2">
                Multispecies muddle
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? "Ein multispezifisches Durcheinander von Akteur*innen. Auch KI kann hier ein Mit-Akteur sein, der mit biologischen und geologischen Systemen verwoben ist."
                  : "A multispecies muddle of actors. AI too can be a co-actor here, intertwined with biological and geological systems."}
              </p>
            </div>

            <div>
              <span className="fact-heading block mb-2">
                Holobiont
              </span>
              <p className="font-body text-base sm:text-lg text-text-main">
                {lang === "de"
                  ? "Ein Wesen nicht als Individuum, sondern als symbiotisches Arrangement vieler Partner."
                  : "A being understood not as an individual, but as a symbiotic arrangement of many partners."}
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* Donna Haraway Konzept */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de" ? "Holobionten & Sympoiesis" : "Holobionts & Sympoiesis"}
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            {lang === "de" ? (
              <>
                Die Biologin und Philosophin <span className="font-heading text-accent-terra">Donna Haraway</span> fordert uns auf, die Illusion des autarken Individuums aufzugeben und stattdessen das Konzept der „Sympoiesis", des gemeinsamen Erschaffens, zu verinnerlichen. In ihrem Denken sind alle Lebewesen, einschließlich des Menschen, sogenannte „Holobionten": symbiotische Arrangements, die untrennbar mit Mikroben, Technologien und anderen Arten verwoben sind.
              </>
            ) : (
              <>
                The biologist and philosopher <span className="font-heading text-accent-terra">Donna Haraway</span> calls on us to relinquish the illusion of the self-sufficient individual and instead to internalise the concept of "sympoiesis" – of making-with. In her thinking, all living beings, including humans, are so-called "holobionts": symbiotic arrangements inseparably intertwined with microbes, technologies and other species.
              </>
            )}
          </p>
        </div>

        <div className="bordered-box bg-accent-flora/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            {lang === "de" ? "Der neue Horizont:" : "The new horizon:"}
          </p>
          <p className="font-body text-base text-text-main/80">
            {lang === "de"
              ? "KI als biomimetische Fortsetzung der Natur. Wir sind nicht die Erfinder der Intelligenz, sondern lediglich ihre neuesten Übersetzer."
              : "AI as a biomimetic continuation of nature. We are not the inventors of intelligence, but merely its most recent translators."}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Interaktive Aufgabe */}
      <section className="section-container">
        <h3 className="section-title mb-4 sm:mb-6">
          {lang === "de" ? "Netzwerke erkennen" : "Identifying Networks"}
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
          <span className="fact-heading block mb-3">{lang === "de" ? "Literatur" : "Literature"}</span>
          <p className="font-body text-sm text-text-main/80 leading-relaxed">
            Haraway, D. J. (2020). <span className="italic">Staying with the Trouble: Making Kin in the Chthulucene</span>.
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-3" className="btn-vintage-outline">
            {lang === "de" ? "Zurück" : "Back"}
          </Link>
          <Link href="/station-5" className="btn-vintage">
            {lang === "de" ? "Zur nächsten Station" : "To the Next Station"}
          </Link>
        </div>
      </section>
    </div>
  );
}
