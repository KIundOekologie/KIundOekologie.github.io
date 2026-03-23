"use client";

import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Station5Page() {
  const { lang } = useLanguage();

  const accordionItems = lang === "de"
    ? [
        {
          title: "Hyperobjekte",
          content: (
            <div className="flow-text-justified">
              <p className="mb-4">
                Massive Phänomene wie der Klimawandel oder das Internet. Sie sind in Zeit und Raum so weit verteilt, dass sie für den Menschen „nicht-lokal" sind. Man kann sie nie als Ganzes sehen, sondern nur in ihren punktuellen Auswirkungen (wie Regentropfen oder ein lokaler Datentransfer) wahrnehmen.
              </p>
              <p className="mb-4">
                Sie besitzen eine <span className="font-heading text-accent-flora">Viskosität</span>, die bewirkt, dass sie an uns „kleben"; wir können uns nicht von ihnen distanzieren.
              </p>
              <p>
                Auch KI-Systeme und globale Netzwerke sind Hyperobjekte.
              </p>
            </div>
          ),
        },
        {
          title: "Nonlocality – Die Nicht-Ortlichkeit",
          content: (
            <div className="flow-text-justified">
              <p className="mb-6">
                Die Eigenschaft von Hyperobjekten, dass ihre lokale Manifestation (z. B. ein Smartphone) nicht identisch mit dem Objekt selbst (das globale Netzwerk) ist.
              </p>
              <div className="quote-box">
                <p className="text-xl sm:text-2xl lg:text-3xl">
                  Hyperobjects are real whether or not someone is thinking of them. Indeed [...] hyperobjects end the possibility of transcendental leaps outside physical reality.
                </p>
                <cite className="font-body text-sm text-text-main/60 not-italic mt-4 block">
                  — Timothy Morton
                </cite>
              </div>
            </div>
          ),
        },
        {
          title: "KI als Sensorium für das Unsichtbare",
          content: (
            <div className="flow-text-justified mb-6">
              <p className="mb-6">
                Wenn Hyperobjekte aufgrund ihrer Größe und Komplexität für menschliche Wahrnehmung unzugänglich sind, kann KI zu einem neuen Sinnesorgan werden – einem externen Sensorium, das Muster und Zusammenhänge sichtbar macht, die unseren Sinnen verborgen bleiben.
              </p>
            </div>
          ),
        },
      ]
    : [
        {
          title: "Hyperobjects",
          content: (
            <div className="flow-text-justified">
              <p className="mb-4">
                Massive phenomena such as climate change or the internet. They are so widely distributed in time and space that they are "non-local" for humans. They can never be seen as a whole, but only perceived in their localised effects (such as a raindrop or a local data transfer).
              </p>
              <p className="mb-4">
                They possess a <span className="font-heading text-accent-flora">viscosity</span> that causes them to "stick" to us; we cannot distance ourselves from them.
              </p>
              <p>
                AI systems and global networks are also hyperobjects.
              </p>
            </div>
          ),
        },
        {
          title: "Nonlocality – The Non-Locality",
          content: (
            <div className="flow-text-justified">
              <p className="mb-6">
                The property of hyperobjects whereby their local manifestation (e.g. a smartphone) is not identical to the object itself (the global network).
              </p>
              <div className="quote-box">
                <p className="text-xl sm:text-2xl lg:text-3xl">
                  Hyperobjects are real whether or not someone is thinking of them. Indeed [...] hyperobjects end the possibility of transcendental leaps outside physical reality.
                </p>
                <cite className="font-body text-sm text-text-main/60 not-italic mt-4 block">
                  — Timothy Morton
                </cite>
              </div>
            </div>
          ),
        },
        {
          title: "AI as a Sensorium for the Invisible",
          content: (
            <div className="flow-text-justified mb-6">
              <p className="mb-6">
                When hyperobjects are inaccessible to human perception due to their size and complexity, AI becomes a new sense organ – an external sensorium that makes visible the patterns and connections that remain hidden from our senses.
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
          src="/Bild8.jpg"
          alt="Langzeitbelichtung – verwischte Welle und Küste"
          className="absolute inset-0 w-full h-full object-cover vintage-filter"
          style={{ filter: "sepia(10%) contrast(95%) brightness(78%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/20 to-text-main/30" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em]">Station 05</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h1
            className="font-heading text-white font-normal leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.025em" }}
          >
            {lang === "de" ? "Blick in die Sterne" : "Looking at the Stars"}
          </h1>
          <p className="font-heading text-sm text-white/40 italic mt-3"></p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            {lang === "de" ? (
              <>
                Die Sternwarte steht für klassischen Forschergeist: beobachten, messen, deuten. Doch viele Phänomene der Gegenwart entziehen sich menschlicher Wahrnehmung, weil sie zu groß, zu komplex und räumlich-zeitlich zu verteilt sind. <span className="font-heading text-accent-terra">Timothy Morton</span> nennt solche Phänomene Hyperobjekte – etwa den Klimawandel, aber auch technische Systeme.
              </>
            ) : (
              <>
                The observatory stands for the classical spirit of inquiry: observe, measure, interpret. Yet many phenomena of the present elude human perception because they are too large, too complex and too widely distributed in time and space. <span className="font-heading text-accent-terra">Timothy Morton</span> calls such phenomena hyperobjects – including climate change, but also technical systems.
              </>
            )}
          </p>

          <p className="mb-6">
            {lang === "de"
              ? "Diese sind so gewaltig und komplex, dass sie für die menschliche Wahrnehmung unsichtbar bleiben. Wir spüren das Wetter, aber wir sehen nicht das Klima. Hier kommt die KI ins Spiel. Sie ist kein Teleskop, das vergrößert, sondern kann ein Sensorium für Hyperobjekte darstellen. Sie erkennt Muster in der Atmosphäre, in den Ozeanen und in genetischen Sequenzen, die wir nur schwer wahrnehmen könnten und bereitet diese für uns auf."
              : "These are so vast and complex that they remain invisible to human perception. We feel the weather, but we cannot see the climate. This is where AI comes in. It is not a telescope that magnifies, but can serve as a sensorium for hyperobjects. It detects patterns in the atmosphere, in the oceans and in genetic sequences that we would struggle to perceive, and processes them for us."}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Accordion Sections */}
      <section className="section-container">
        <Accordion items={accordionItems} />

        <div className="divider" />
      </section>

      {/* Das Paradox */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          {lang === "de" ? "Das Paradox der Wahrnehmung" : "The Paradox of Perception"}
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            {lang === "de"
              ? "Die Sternwarte war der Ort, von dem aus wir den Kosmos beobachteten – ferne Objekte, die durch Teleskope sichtbar gemacht wurden. Heute beobachten wir Hyperobjekte, die nicht fern sind, sondern uns umgeben, durchdringen, konstituieren."
              : "The observatory was the place from which we observed the cosmos – distant objects made visible through telescopes. Today we observe hyperobjects that are not distant, but rather surround, permeate and constitute us."}
          </p>

          <p className="mb-6">
            {lang === "de"
              ? <>Das Paradox: Wir scheinen KI zu brauchen, um diese Phänomene wahrzunehmen – aber KI selbst ist ein Hyperobjekt, das Teil der Phänomene ist, die wir wahrnehmen wollen. Es gibt kein „draußen", keinen Beobachterstandpunkt außerhalb der Hyperobjekte. Wir sind immer schon mittendrin.</>
              : <>The paradox: we seem to need AI to perceive these phenomena – but AI itself is a hyperobject, part of the very phenomena we wish to perceive. There is no &quot;outside&quot;, no observer&apos;s standpoint beyond the hyperobjects. We are always already in the midst of them.</>}
          </p>
        </div>

        <div className="bordered-box bg-accent-terra/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            {lang === "de" ? "Frage:" : "Question:"}
          </p>
          <p className="font-body text-base text-text-main/80">
            {lang === "de"
              ? "Angenommen wir leben in einer Welt, die von Hyperobjekten geprägt ist: Wie können wir Verantwortung übernehmen, wenn wir nie das Ganze überblicken können?"
              : "Suppose we live in a world shaped by hyperobjects: How can we take responsibility when we can never grasp the whole?"}
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Literatur */}
      <section className="section-container pb-8">
        <div className="border border-border-color p-6 sm:p-8">
          <span className="fact-heading block mb-3">{lang === "de" ? "Literatur" : "Literature"}</span>
          <div className="space-y-2">
            <p className="font-body text-sm text-text-main/80 leading-relaxed">
              Morton, T. (2013). <span className="italic">Hyperobjects: Philosophy and Ecology after the End of the World</span>.
            </p>
            <p className="font-body text-sm text-text-main/80 leading-relaxed">
              Morton, T. (2016). <span className="italic">Dark Ecology: For a Logic of Future Coexistence</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-4" className="btn-vintage-outline">
            {lang === "de" ? "Zurück" : "Back"}
          </Link>
          <Link href="/station-6" className="btn-vintage">
            {lang === "de" ? "Zur nächsten Station" : "To the Next Station"}
          </Link>
        </div>
      </section>
    </div>
  );
}
