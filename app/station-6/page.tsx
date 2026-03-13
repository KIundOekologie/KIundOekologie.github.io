"use client";

import Link from "next/link";

export default function Station6Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="micro-copy text-accent-terra">Station 6</span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="hero-text text-text-main leading-tight mb-8 sm:mb-12">
          Perspektive
        </h1>

        <p className="font-heading text-base sm:text-lg text-accent-terra italic-heading mb-8">
          (Ausblick)
        </p>
      </section>

      {/* Intro */}
      <section className="section-container">
        <div className="flow-text-justified drop-cap">
          <p className="mb-6">
            Auf dem Weg über den Campus haben wir gesehen, dass die alte Erzählung eines fundamentalen Gegensatzes von Technik und Natur nicht länger trägt. In einer Welt begrenzter Ressourcen können wir uns eine (gedankliche) Trennung dieser beiden Sphären schlichtweg nicht mehr leisten. Eine tiefe Vernetzung der Systeme scheint unausweichlich. Dabei zeigen viele positive Beispiele, welche gewinnbringenden Lösungen aus diesen Verbindungen entstehen können.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Polybot Beispiel */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Ein Beispiel: Polybot
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            So möchte das Startup <span className="font-heading text-accent-flora">Polybot</span> mit der Entwicklung kleiner, autonomer und intelligenter Roboter, die in Mischkulturen (Polykulturen) arbeiten können, eine Revolution der herkömmlichen Landwirtschaft erzielen. Die KI kann Pflanzen <span className="italic-body">"sehen"</span>, Unkraut erkennen und entfernen oder reifes Obst und Gemüse pflücken. So werden auch vielfältige Mischkulturen wirtschaftlich rentabel gemacht und ein Beitrag zur Nachhaltigkeit geleistet.
          </p>
        </div>

        <div className="bordered-box bg-accent-flora/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            Die Möglichkeit:
          </p>
          <p className="font-body text-base text-text-main/80">
            KI als Werkzeug der Regeneration – nicht nur der Extraktion.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Keine harmonischen Illusionen */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Staying with the Trouble
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Gleichzeitig dürfen wir uns keinen harmonischen Illusionen hingeben. Weder der Sehnsucht nach einer unberührten <span className="italic-body">"reinen Natur"</span>, noch dem blinden Glauben an eine allrettende Technologie. Es gibt keinen einfachen Ausweg durch sogenannte Technofixes.
          </p>

          <p className="mb-6">
            Stattdessen müssen wir, im Sinne der Wissenschaftsphilosophin <span className="font-heading text-accent-terra">Donna Haraway</span>, lernen, mit den ökologischen wie sozialen Widersprüchen <span className="font-heading text-accent-flora">unruhig zu bleiben</span> (<span className="italic-body">"staying with the trouble"</span>) – ebenso wie ein oft unbequemes Hinterfragen der Strukturen, die unsere Technologie formen.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Verantwortung */}
      <section className="section-container">
        <h2 className="section-title-with-border mb-6 sm:mb-8">
          Verantwortung im Netzwerk
        </h2>

        <div className="flow-text-justified">
          <p className="mb-6">
            Diese Unruhe erfordert von uns, neue, hybride Verbindungen mit technologischen Akteuren einzugehen – aber eben auch, diese permanent kritisch zu hinterfragen. Wenn wir KI als Heilsbringer betrachten, müssen wir im selben Atemzug fragen: Was tun wir eigentlich derzeit für sie und die Konzerne dahinter?
          </p>
        </div>

        <div className="fact-box">
          <p className="font-heading text-lg text-text-main mb-4">
            Wir sind nicht nur passive Profiteure, sondern der Treibstoff dieser Systeme.
          </p>
          <ul className="font-body text-base text-text-main/80 space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent-terra mt-1">→</span>
              <span>Wir nähren sie ununterbrochen durch unsere Datenspenden.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-terra mt-1">→</span>
              <span>Durch unsichtbare menschliche Arbeitskraft beim Trainieren der Algorithmen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-terra mt-1">→</span>
              <span>Durch den massiven Abbau planetarer Ressourcen für ihre Hardware.</span>
            </li>
          </ul>
        </div>

        <div className="bordered-box bg-accent-terra/5 my-6">
          <p className="font-heading text-lg text-text-main mb-3">
            "Unruhig bleiben" bedeutet daher:
          </p>
          <p className="font-body text-base text-text-main/80">
            Verantwortung in genau diesem komplexen Netz aus planetaren und ökonomischen Abhängigkeiten zu übernehmen.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Abschluss-Zitat */}
      <section className="section-container">
        <div className="quote-box">
          <p className="text-xl sm:text-2xl lg:text-3xl">
            "The task is to become capable, with each other in all of our bumptious kinds, of response... staying with the trouble requires learning to be truly present."
          </p>
          <cite className="font-body text-sm text-text-main/60 not-italic mt-4 block">
            — Donna Haraway, Staying with the Trouble
          </cite>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-5" className="btn-vintage-outline">
            Zurück
          </Link>
          <Link href="/feedback" className="btn-vintage">
            Zum Feedback
          </Link>
        </div>
      </section>
    </div>
  );
}
