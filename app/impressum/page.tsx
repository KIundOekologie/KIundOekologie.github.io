"use client";

import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="w-full">
      <section className="section-container pt-12 sm:pt-16 pb-16">
        <div className="max-w-2xl">
          <h1
            className="font-heading font-normal mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Impressum
          </h1>

          <div className="space-y-8 font-body text-base text-text-main/80 leading-relaxed">

            <div>
              <p>Helene Eder</p>
              <p>Im Öschle 35</p>
              <p>72070 Tübingen</p>
              <p className="mt-2">
                <a href="mailto:Helene.victoria@web.de" className="text-accent-terra hover:underline">
                  Helene.victoria@web.de
                </a>
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Urheberrechtshinweis</h2>
              <p>
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte) unterliegen dem Urheberrecht der Bundesrepublik
                Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen
                oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden
                wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
              </p>
              <p className="mt-3">
                Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns
                zu kontaktieren.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Haftung für Inhalte dieser Website</h2>
              <p>
                Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für
                eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen
                verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser
                Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als
                Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten
                oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-3">
                Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen
                bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.
              </p>
              <p className="mt-3">
                Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu
                kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im
                Impressum.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Bildnachweis</h2>
              <p>Die auf dieser Website verwendeten Bilder stammen von den Plattformen:</p>
              <ul className="mt-2 space-y-1 ml-4">
                <li>
                  <a
                    href="https://unsplash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-terra hover:underline"
                  >
                    Unsplash (unsplash.com)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-terra hover:underline"
                  >
                    Pixabay (pixabay.com)
                  </a>
                </li>
              </ul>
            </div>

            <div className="divider" />

            <p className="text-sm text-text-main/50">
              Quelle: Erstellt mit dem Impressum Generator von AdSimple
            </p>
          </div>

          <div className="mt-10">
            <Link href="/" className="btn-vintage-outline">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
