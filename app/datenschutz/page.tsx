"use client";

import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <div className="w-full">
      <section className="section-container pt-12 sm:pt-16 pb-16">
        <div className="max-w-2xl">
          <h1
            className="font-heading font-normal mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 font-body text-base text-text-main/80 leading-relaxed">

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Einleitung und Überblick</h2>
              <p>
                Wir haben diese Datenschutzerklärung (Fassung 23.03.2026-313202051) verfasst, um Ihnen gemäß der
                Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu
                erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns
                beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und
                welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu
                verstehen. Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Rechtsgrundlagen</h2>
              <p className="mb-4">
                In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen
                Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns
                ermöglichen, personenbezogene Daten zu verarbeiten. Was das EU-Recht betrifft, beziehen wir uns auf
                die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016.
              </p>
              <p className="mb-4">Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Vertrag (Art. 6 Abs. 1 lit. b DSGVO):</strong> Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</strong> Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor.</span>
                </li>
              </ul>
              <p className="mt-4">
                Zusätzlich zu der EU-Verordnung gelten auch nationale Gesetze, insbesondere das
                Bundesdatenschutzgesetz (BDSG) in Deutschland.
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Kontaktdaten des Verantwortlichen</h2>
              <p className="mb-3">
                Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie
                nachfolgend die Kontaktdaten des Verantwortlichen gemäß Artikel 4 Absatz 7 DSGVO:
              </p>
              <p>Helene Eder</p>
              <p>Im Öschle 35</p>
              <p>72070 Tübingen</p>
              <p className="mt-2">
                E-Mail:{" "}
                <a href="mailto:helene.victoria@web.de" className="text-accent-terra hover:underline">
                  helene.victoria@web.de
                </a>
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Speicherdauer</h2>
              <p>
                Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer
                Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das
                bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht
                mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch
                nach Wegfall des ursprünglichen Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Rechte laut Datenschutz-Grundverordnung</h2>
              <p className="mb-4">
                Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht darauf zu erfahren, ob und welche Daten wir von Ihnen verarbeiten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, fehlerhafte Daten berichtigen zu lassen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie können verlangen, dass wir Ihre Daten nur noch speichern, aber nicht mehr verwenden.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Wir stellen Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Datenverarbeitung widersprechen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-terra mt-1 shrink-0">→</span>
                  <span><strong className="font-heading text-text-main">Beschwerderecht (Art. 77 DSGVO):</strong> Sie können sich jederzeit bei der zuständigen Datenschutzbehörde beschweren.</span>
                </li>
              </ul>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Zuständige Datenschutzbehörde</h2>
              <p className="mb-3">Baden-Württemberg Datenschutzbehörde</p>
              <p>Landesbeauftragter für Datenschutz: Prof. Dr. Tobias Keber</p>
              <p>Lautenschlagerstraße 20, 70173 Stuttgart</p>
              <p>Telefon: 07 11/61 55 41-0</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:poststelle@lfdi.bwl.de" className="text-accent-terra hover:underline">
                  poststelle@lfdi.bwl.de
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-terra hover:underline"
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Sicherheit der Datenverarbeitung</h2>
              <p>
                Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische
                Maßnahmen umgesetzt. Wir verwenden HTTPS (TLS-Verschlüsselung) zur sicheren Übertragung aller
                Daten. Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem
                Webserver abgesichert ist.
              </p>
            </div>

            <div className="divider" />

            <div>
              <h2 className="font-heading text-xl text-text-main mb-3">Google-Formular Datenschutzerklärung</h2>
              <p className="mb-3">
                Wir nutzen für unsere Website ein Google-Formular, ein Service für Google-Cloud-Formulare.
                Dienstanbieter ist das amerikanische Unternehmen Google Inc. Für den europäischen Raum ist das
                Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich.
              </p>
              <p className="mb-3">
                Google verarbeitet Daten von Ihnen u.a. auch in den USA. Google ist aktiver Teilnehmer des EU-US
                Data Privacy Frameworks, wodurch der korrekte und sichere Datentransfer personenbezogener Daten von
                EU-Bürgern in die USA geregelt wird.
              </p>
              <p>
                Mehr über die Daten, die durch die Verwendung von Google verarbeitet werden, erfahren Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-terra hover:underline"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </div>

            <div className="divider" />

            <p className="text-sm text-text-main/50">
              Alle Texte sind urheberrechtlich geschützt. Quelle: Datenschutzerklärung erstellt mit dem Datenschutz
              Generator für Deutschland von AdSimple.
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
