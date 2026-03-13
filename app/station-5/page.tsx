"use client";

import Link from "next/link";
import { Accordion } from "@/components/Accordion";

export default function Station5Page() {
  const accordionItems = [
    {
      title: "Hyperobjekte",
      content: (
        <div className="flow-text-justified">
          <p className="mb-4">
            Massive Phänomene wie der Klimawandel oder das Internet. Sie sind in Zeit und Raum so weit verteilt, dass sie für den Menschen <span className="italic-body">"nicht-lokal"</span> sind. Man kann sie nie als Ganzes sehen, sondern nur in ihren punktuellen Auswirkungen (wie Regentropfen oder ein lokaler Datentransfer) wahrnehmen.
          </p>
          <p className="mb-4">
            Sie besitzen eine <span className="font-heading text-accent-flora">Viskosität</span>, die bewirkt, dass sie an uns <span className="italic-body">"kleben"</span>; wir können uns nicht von ihnen distanzieren.
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
              "Hyperobjects are real whether or not someone is thinking of them. Indeed ... hyperobjects end the possibility of transcendental leaps 'outside' physical reality."
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
            Wenn Hyperobjekte aufgrund ihrer Größe und Komplexität für menschliche Wahrnehmung unzugänglich sind, wird KI zu einem neuen Sinnesorgan – einem externen Sensorium, das Muster und Zusammenhänge sichtbar macht, die unseren Sinnen verborgen bleiben.
          </p>
          <div className="fact-box">
            <div className="space-y-4">
              <div className="border-b border-border-color pb-4">
                <span className="fact-heading block mb-2">
                  Atmosphäre
                </span>
                <p className="font-body text-base sm:text-lg text-text-main">
                  KI analysiert Klimadaten über Jahrhunderte und erkennt Muster, die auf den Klimawandel hinweisen – lange bevor diese lokal spürbar werden.
                </p>
              </div>

              <div className="border-b border-border-color pb-4">
                <span className="fact-heading block mb-2">
                  Ozeane
                </span>
                <p className="font-body text-base sm:text-lg text-text-main">
                  Algorithmen überwachen Meeresströmungen, Temperaturen und Ökosysteme in einer Skala, die für menschliche Forscher unmöglich wäre.
                </p>
              </div>

              <div>
                <span className="fact-heading block mb-2">
                  Genetische Sequenzen
                </span>
                <p className="font-body text-base sm:text-lg text-text-main">
                  Mustererkennung in DNA und RNA offenbart Zusammenhänge zwischen Arten, die traditionelle Taxonomien sprengen.
                </p>
              </div>
            </div>
          </div>
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
            Blick in die Sterne
          </h1>
          <p className="font-heading text-sm text-white/40 italic mt-3">(Sternwarte)</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container pt-10 sm:pt-14">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Die Sternwarte steht für klassischen Forschergeist: beobachten, messen, deuten. Doch viele Phänomene der Gegenwart entziehen sich menschlicher Wahrnehmung, weil sie zu groß, zu komplex und räumlich-zeitlich zu verteilt sind. <span className="font-heading text-accent-terra">Timothy Morton</span> nennt solche Phänomene <span className="italic-heading text-accent-flora">"Hyperobjekte"</span> – etwa den Klimawandel, aber auch technische Systeme.
          </p>

          <p className="mb-6">
            Diese sind so gewaltig und komplex, dass sie für die menschliche Wahrnehmung unsichtbar bleiben. Wir spüren das Wetter, aber wir sehen nicht das Klima. Hier kommt die KI ins Spiel. Sie ist kein Teleskop, das vergrößert, sondern kann ein Sensorium für Hyperobjekte darstellen. Sie erkennt Muster in der Atmosphäre, in den Ozeanen und in genetischen Sequenzen, die wir nur schwer wahrnehmen könnten und bereitet diese für uns auf.
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
          Das Paradox der Wahrnehmung
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Die Sternwarte war der Ort, von dem aus wir den Kosmos beobachteten – ferne Objekte, die durch Teleskope sichtbar gemacht wurden. Heute beobachten wir Hyperobjekte, die nicht fern sind, sondern uns umgeben, durchdringen, konstituieren.
          </p>

          <p className="mb-6">
            Das Paradox: Wir brauchen KI, um diese Phänomene wahrzunehmen – aber KI selbst ist ein Hyperobjekt, das Teil der Phänomene ist, die wir wahrnehmen wollen. Es gibt kein <span className="italic-body">"draußen"</span>, keinen Beobachterstandpunkt außerhalb der Hyperobjekte. Wir sind immer schon mittendrin.
          </p>
        </div>

        <div className="bordered-box bg-accent-terra/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            Die Frage:
          </p>
          <p className="font-body text-base text-text-main/80">
            Wie können wir in einer Welt leben, die von Hyperobjekten geprägt ist, ohne die Illusion eines <span className="italic-body">"externen"</span> Beobachters? Wie können wir Verantwortung übernehmen, wenn wir nie das Ganze überblicken können?
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-4" className="btn-vintage-outline">
            Zurück
          </Link>
          <Link href="/station-6" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
