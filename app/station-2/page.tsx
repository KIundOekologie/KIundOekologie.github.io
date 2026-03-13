import Link from "next/link";

export default function Station2Page() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 2
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          Campus als Garten
        </h1>
      </section>

      {/* Campus-Intro */}
      <section className="section-container">
        <div className="margin-note">
          <p className="font-body text-sm">
            <strong>Ort:</strong> Vor dem Hauptgebäude des Cyber Valley Campus
          </p>
          <p className="font-body text-sm text-text-main/60 mt-1">
            Metapher: Der Campus selbst als „Digitaler Garten" – ein Ort, an dem Natur und Code verschränkt sind
          </p>
        </div>

        <div className="content-text drop-cap">
          <p className="mb-6">
            Das Wort Campus stammt vom lateinischen „campus" – das Feld. Ursprünglich bezeichnete es ein offenes Land, eine Ebene. In der römischen Antike war der Campus Martius ein Platz außerhalb der Stadtmauern, ein Ort für militärische Übungen, aber auch für Versammlungen, Wahlen, kulturelle Veranstaltungen. Campus war also nie reine Natur; es war immer ein Raum, in dem soziale, politische und militärische Praktiken stattfanden.
          </p>

          <p className="mb-6">
            Heute ist „Campus" zur Bezeichnung für Universitätsgebiete geworden – und diese sind bewusst „gärtnerisch" gestaltet: Rasenflächen, Baumalleen, Sitzgruppen im Freien, Wege, die zum Flanieren einladen. Der moderne Campus simuliert Natur, um Konzentration, Kreativität, Wohlbefinden zu fördern. Gleichzeitig ist er hochtechnologisiert: WLAN flutet die Außenbereiche, Sensoren steuern Licht und Temperatur, Smart Buildings regeln Energie, Lüftung, Raumbelegung.
          </p>

          <p className="mb-6">
            Der Cyber Valley Campus ist ein extremes Beispiel dieser Verschränkung: Hier wird an KI geforscht, während um das Gebäude herum Bäume wachsen, Vögel singen, Insekten durch die Luft flirren. Die Forschung findet in klimatisierten Räumen statt, während draußen Wetter, Jahreszeiten, ökologische Prozesse ihren Lauf nehmen. Beides hängt zusammen: Die Gebäude brauchen Energie, die Server kühlung, die Menschen frische Luft, grüne Ausblicke, Pausen im Freien.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Der Garten als Metapher */}
      <section className="section-container">
        <h2 className="font-heading text-xl sm:text-2xl text-text-main mb-6 sm:mb-8 tracking-tight">
          Der Garten als Metapher
        </h2>

        <div className="content-text">
          <p className="mb-6">
            Der Garten ist seit jeher ein Symbol für die Beziehung zwischen Mensch und Natur. Im antiken Griechenland war der „Garten des Epicur" ein Ort der Philosophie – ein Rückzugsort für Gespräche, Reflexion, Gemeinschaft. Im christlichen Mittelalter wurde der Garten zum Paradies-Garten, zum Bild für den ursprünglichen Zustand der Welt vor dem Sündenfall. In der Renaissance wurde der Garten zum geometrischen Kunstwerk, zur Manifestation menschlicher Kontrolle über Natur (französische Barockgärten). In der Romantik wurde der Garten zum naturnahen, „wilden" Garten, zum Ort der Sentimentalität, der Melancholie.
          </p>

          <p className="mb-6">
            Der „Digitale Garten" als Metapher greift diese Tradition auf, verschiebt aber die Akzente: Es geht nicht mehr nur um die Beziehung zwischen Mensch und Natur, sondern um die Dreiecksbeziehung zwischen Mensch, Natur und Technik. KI als neue „Gartentechnik"? Daten als „Samen"? Algorithmen als „Wachstumsregeln"? Diese Übertragungen sind nicht bloß metaphorisch – sie verweisen auf reale Verbindungen: KI wird in der Landschaftsarchitektur eingesetzt, um Wasserverbrauch zu optimieren; Smart Gardens nutzen Sensoren, um Feuchtigkeit, Licht, Nährstoffe zu messen; precision agriculture steuert Düngung, Ernte, Anbau algorithmisch.
          </p>

          <p className="mb-6">
            Gleichzeitig ist der Garten auch ein Ort der Kooperation: Pflanzen, Insekten, Bodenorganismen, Menschen, Werkzeuge, Techniken bilden ein Geflecht aus Beziehungen. Der Begriff des „Gartens" erinnert daran, dass Natur nicht „draußen" ist, sondern immer schon mit menschlicher Praxis verschränkt – und dass Technik nicht „jenseits" von Natur steht, sondern Teil von Ökologien sein kann.
          </p>
        </div>

        <div className="divider" />
      </section>

      {/* Praktische Aufgabe */}
      <section className="section-container">
        <div className="fact-box bg-accent-flora/5">
          <h3 className="font-heading text-base sm:text-lg text-text-main mb-3">
            Beobachtungsaufgabe
          </h3>
          <p className="font-body text-sm sm:text-base text-text-main/80 mb-4">
            Verweilen Sie einen Moment am aktuellen Standort und achten Sie auf:
          </p>
          <ul className="font-body text-sm sm:text-base text-text-main/70 space-y-2 ml-4">
            <li>• Welche „natürlichen" Elemente sehen Sie? (Bäume, Gräser, Insekten, Vögel, Boden)</li>
            <li>• Welche „technischen" Elemente fallen auf? (Gebäude, WLAN, Lampen, Kameras, Sensoren)</li>
            <li>• Wo überschneiden sich beide Bereiche? (Kabel im Rasen, Smart-Home-Steckdosen, PV-Module auf Dächern)</li>
          </ul>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation Buttons */}
      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center py-6 sm:py-8">
          <Link href="/station-1" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück
          </Link>
          <Link href="/station-3" className="btn-vintage">
            Zur nächsten Station
          </Link>
        </div>
      </section>
    </div>
  );
}
