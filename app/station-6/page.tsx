"use client";

import Link from "next/link";
import { useState } from "react";

export default function Station6Page() {
  const [showInsight, setShowInsight] = useState(false);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 6
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          Die Perspektive
        </h1>

        <p className="font-heading text-base sm:text-lg text-accent-terra italic mb-8">
          (Platz mit Aussicht auf die Alb)
        </p>
      </section>

      {/* Intro */}
      <section className="section-container">
        <div className="margin-note">
          <p className="font-body text-sm mb-2">
            <strong>Metapher:</strong> Der Ausblick als Moment der Reflexion – was haben wir gesehen, was bleibt?
          </p>
          <p className="font-body text-sm text-text-main/60">
            <strong>Theoretischer Bezug:</strong> Donna Haraway – Staying with the Trouble; Bruno Latour – Facing Gaia
          </p>
        </div>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Auf dem Weg über den Campus haben wir gesehen, dass die alte Erzählung eines fundamentalen Gegensatzes von Technik und Natur nicht länger trägt. Der Campus selbst ist ein „Garten" im wörtlichen Sinne: Ein Ort, an dem Natur und Kultur kooperieren, wo Bäume und Server, wo Insekten und Algorithmen, wo Menschen und Daten in komplexen Beziehungen zueinander stehen. Diese Beziehungen sind nicht immer harmonisch – sie sind geprägt von Kontrolle, von Optimierung, von Ausbeutung, aber auch von Kooperation, von Kreativität, von emergence.
          </p>

          <p className="mb-6">
            Das Startup Polybot, das hier auf dem Campus ansässig ist, ist ein besonders deutliches Beispiel für diese Verschränkung: Polybot entwickelt KI-gestützte Pflanzenanalyse, die precision farming ermöglicht, Ernteerträge optimiert, Ressourcen sparen soll. Auf den ersten Blick ist das eine klassische „Tech-for-Good"-Story: KI hilft, Landwirtschaft nachhaltiger zu machen. Auf den zweiten Blick wird die Komplexität sichtbar: Die Daten, die Polybot sammelt, gehören den Farmern? Oder dem Startup? Die Algorithmen, die Ernte vorhersagen, sind transparent? Oder black boxes? Die Optimierung, die hier stattfindet, wessen Interessen dient? Den Farmern? Den Investoren? Den Konsumierenden?
          </p>

          <p className="mb-6">
            Diese Fragen haben keine einfachen Antworten – sie verweisen auf strukturelle Spannungen, die nicht durch „mehr Transparenz" oder „bessere Regulierung" allein gelöst werden können. Sie zeigen, dass KI nicht „neben" der Natur existiert, sondern in Natur eingreift, Natur transformiert, Natur reproduziert – und dass diese Eingriffe immer auch Machtverhältnisse reflektieren, verstärken, verändern.
          </p>

          <p className="mb-6">
            Gleichzeitig eröffnen sich neue Möglichkeiten: KI kann helfen, Ökosysteme zu verstehen, zu schützen, zu regenerieren. Sie kann Monitoring-Tools für endangered species entwickeln, Wasserqualität in Echtzeit messen, Desertifikation vorhersagen. Sie kann „digital twins" von Ökosystemen schaffen, die Szenarien simulieren, bevor sie in der Realität passieren. In diesem Sinne ist KI nicht nur ein Werkzeug der Kontrolle, sondern auch ein Werkzeug der curiosity, der care, der Koexistenz.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Fazit */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Fazit: Der Digitale Garten als neue Metapher
        </h2>

        <div className="content-text">
          <p className="mb-6">
            Der „Digitale Garten" ist, wie wir gesehen haben, mehr als eine Metapher – er ist ein Modell für die Beziehung zwischen Mensch, Natur und Technik im Anthropozän. Der Garten war schon immer ein Ort der Kooperation, ein Ort, an dem Natur und Kultur nicht getrennt sind, sondern in komplexe Beziehungen zueinander treten. KI erweitert diesen Garten um eine neue Dimension: Sie wird zu einer „Gartentechnik" der besonderen Art, zu einem Werkzeug, das nicht nur in die Natur eingreift, sondern selbst zu Natur wird – zu einer techno-ökologischen Assemblage, die menschliche und nicht-menschliche agency verbindet.
          </p>

          <p className="mb-6">
            Was bedeutet das für die Zukunft? Eine Möglichkeit ist, dass KI Teil einer „regenerativen" Kultur wird – einer Kultur, die nicht nur Ressourcen extrahiert, sondern regeneriert, die nicht nur kontrol wants, sondern kultiviert, die nicht nur optimiert, sondern diversifiziert. Eine andere Möglichkeit ist, dass KI die alten Muster der Ausbeutung, der Externalisierung, der dominance reproduziert – nur effizienter, unsichtbarer, globaler.
          </p>

          <p className="mb-6">
            Die Entscheidung liegt nicht bei der KI, sondern bei uns. Der Digitale Garten ist, wie jeder Garten, ein Ort der Gestaltung – und damit ein Ort der Verantwortung. Wenn KI Teil der Natur wird, dann sind wir es auch – nicht als separate „masters", sondern als Teilnehmer in Ökologien, die nicht mehr ausschließlich menschlich sind. Das ist keine Absage an menschliche agency, sondern eine Neuverhandlung derselben: Wie wollen wir in Hyperobjekten leben? Wie wollen wir mit KI koexistieren? Wie wollen wir Gärten bauen, die nicht nur Menschen, sondern auch Nicht-Menschen berücksichtigen?
          </p>

          {/* Der Text soll als normaler Fließtext stehen, nicht als Zitat */}
          <p className="mb-6">
            Gleichzeitig dürfen wir uns keinen harmonischen Illusionen hingeben. Die Koexistenz von Mensch, Natur und Technik ist nicht per se „natürlich" oder „gut" – sie ist geprägt von Konflikten, von trade-offs, von unintended consequences. Data Centers verbrauchen Energie; KI-Modelle werden mit trainingsdaten gefüttert, die biases enthalten; precision farming kann Bauern in Abhängigkeiten bringen. Der Digitale Garten ist kein Paradies – er ist ein Ort der Arbeit, der Auseinandersetzung, der negotiation.
          </p>

          <p className="mb-6">
            In diesem Sinne ist der Digitale Garten eine Metapher für eine world ohne einfache Lösungen: Eine world, in der Natur und Technik verschränkt sind, in der agency verteilt ist, in der Verantwortung geteilt wird – und die trotzdem gestaltbar bleibt. Nicht durch Kontrolle, sondern durch curiosity. Nicht durch dominance, sondern durch dialogue. Nicht durch isolation, sondern durch participation.
          </p>

          <p className="italic text-text-main/80">
            The task is to become capable, with other humans and nonhumans, of weaving symchthonous stories that open up possibilities for flourishing and enduring livability. It is time to grow up and become responsible for the consequences of our technologies and our stories.
          </p>
          <p className="font-body text-sm text-text-main/60 mt-2">
            — Donna Haraway, Staying with the Trouble
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Abschluss-Reflexion */}
      <section className="section-container">
        <div className="fact-box bg-accent-flora/5 text-center">
          <h3 className="font-heading text-lg sm:text-xl text-text-main mb-4">
            Was nehmen Sie mit?
          </h3>
          <p className="font-body text-base text-text-main/80 mb-6">
            Bevor Sie die Tour beenden, noch eine Frage: Hat dieser Spaziergang Ihre Sicht auf KI und Natur verändert? Wenn ja, wie? Wenn nein, was fehlt?
          </p>

          <button
            onClick={() => setShowInsight(!showInsight)}
            className="font-body text-sm text-accent-flora underline underline-offset-2 hover:no-underline"
          >
            {showInsight ? 'Verstecken' : 'Eine Abschlussreflexion anzeigen'}
          </button>

          {showInsight && (
            <div className="mt-6 text-left">
              <p className="font-body text-sm text-text-main/70 italic leading-relaxed">
                Der Digitale Garten ist, ganz am Ende, auch eine Einladung: Einladung, nicht nur KI zu nutzen, sondern über sie nachzudenken. Nicht nur Natur zu genießen, sondern zu verstehen, wie sie mit Technik verflochten ist. Nicht nur „draußen" zu sein, sondern zu erkennen, dass „draußen" und „drinnen", „Natur" und „Technik", „Mensch" und „Nicht-Mensch" keine getrennten Welten sind – sondern Aspekte einer einzigen, komplexen, schönen, erschreckenden world.
              </p>
            </div>
          )}
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-5" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück
          </Link>
          <Link href="/feedback" className="btn-vintage">
            Zur Feedback-Seite
          </Link>
        </div>
      </section>
    </div>
  );
}
