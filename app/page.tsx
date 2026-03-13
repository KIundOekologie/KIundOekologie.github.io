import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════════════════
          HERO — Full-Bleed Bildlandschaft
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        {/* Hintergrundbild */}
        <img
          src="/Bild9.jpg"
          alt="Mongolische Steppe – weite Landschaft mit Fluss und Pferden"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "sepia(12%) contrast(95%) brightness(82%)" }}
        />
        {/* Gradientüberlagerung */}
        <div className="absolute inset-0 bg-gradient-to-b from-text-main/30 via-transparent to-text-main/75" />

        {/* Obere Metadaten-Zeile */}
        <div className="absolute top-0 left-0 right-0 z-10 px-6 sm:px-10 lg:px-16 pt-5 sm:pt-6">
          <div className="flex items-center justify-between border-b border-white/20 pb-3">
            <span className="font-body text-[10px] sm:text-xs text-white/55 uppercase tracking-[0.22em]">
              Vol. I — 2026
            </span>
            <span className="font-body text-[10px] sm:text-xs text-white/55 uppercase tracking-[0.22em]">
              Cyber Valley — Tübingen
            </span>
          </div>
        </div>

        {/* Titel – unten links positioniert */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-20">
          <p className="font-body text-[10px] sm:text-xs text-white/45 uppercase tracking-[0.28em] mb-4 sm:mb-6">
            Ein literarisch-ökologischer Pfad
          </p>
          <h1
            className="font-heading text-white font-normal leading-[0.88]"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", letterSpacing: "-0.03em" }}
          >
            Digitaler
            <br />
            <span className="italic">Garten</span>
          </h1>
          <div className="mt-6 sm:mt-8 flex items-center gap-5">
            <p className="font-body text-xs sm:text-sm text-white/50 tracking-[0.12em]">
              KI — Natur — Ecocriticism
            </p>
          </div>
        </div>

        {/* Scroll-Hinweis rechts unten */}
        <div className="absolute bottom-10 right-8 sm:right-12 z-10">
          <span
            className="font-body text-[10px] text-white/35 uppercase tracking-[0.2em]"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          EINLEITUNG — Editorial zweispaltig
      ══════════════════════════════════════════════════════════ */}
      <section className="section-container-wide py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">

          {/* Linke Spalte: Text */}
          <div className="col-span-12 lg:col-span-7">
            {/* Abschnittsbezeichnung */}
            <div className="flex items-center gap-3 mb-8 sm:mb-12">
              <span className="font-body text-[10px] uppercase tracking-[0.22em] text-accent-terra">
                Leitartikel
              </span>
              <div className="h-px flex-1 bg-border-color" />
            </div>

            <h2
              className="font-heading text-text-main font-normal leading-[1.05] mb-10 sm:mb-14"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              KI und Natur –
              <br />
              <span className="italic">eine neue Beziehung</span>
            </h2>

            {/* Eingebettetes Zitatblock */}
            <div className="border-l-2 border-accent-terra pl-6 mb-10 py-2">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl text-text-main italic leading-relaxed">
                „Der Garten ist ein inhärent hybrider Raum, der die strikte
                Dichotomie von Natur und Kultur auflöst."
              </p>
            </div>

            {/* Fließtext mit Drop Cap */}
            <div className="flow-text-justified drop-cap">
              <p className="mb-6">
                Im Rahmen dieses Projektmoduls dient der Begriff des{" "}
                <span className="italic-heading text-accent-terra">
                  „Digitalen Gartens"
                </span>{" "}
                als zentrale kulturtheoretische Leitmetapher und
                Erkenntnismodell. Historisch betrachtet, markiert der Garten
                keine unberührte Natur, sondern fungiert als Kontaktzone, in
                der Natur und Kulturtechnik aufeinandertreffen – geformt durch
                intentionale menschliche Eingriffe.
              </p>
              <p className="mb-6">
                Übertragen auf das Cyber Valley ermöglicht dieses Bild einen
                entscheidenden Perspektivwechsel: An diesem Ort werden primär
                Datennetze, Algorithmen und Rechenmodelle{" "}
                <span className="italic-heading text-accent-flora">
                  „kultiviert"
                </span>
                . So wie ein physischer Garten untrennbar mit dem Boden und den
                Nährstoffen verbunden ist, ist auch die digitale Kultivierung
                tief mit materiellen und geologischen Prozessen verwoben.
              </p>
            </div>
          </div>

          {/* Rechte Spalte: Bild als wissenschaftliches Exponat */}
          <div className="col-span-12 lg:col-span-5 lg:pt-20">
            <div className="relative grainy-image overflow-hidden">
              <img
                src="/Bild12.jpg"
                alt="Mineralkristall – seltene Erden als Grundlage digitaler Technologie"
                className="w-full object-cover vintage-filter"
                style={{ aspectRatio: "3/4" }}
              />
              <div className="absolute inset-0 bg-bg-base/5" />
            </div>
            <div className="mt-3 flex items-start gap-2">
              <div className="w-3 h-px bg-text-main/30 mt-2 flex-shrink-0" />
              <p className="font-body text-[10px] text-text-main/45 leading-relaxed italic">
                Mineralkristall. Seltene Erden und Mineralien bilden die
                physische Grundlage digitaler Infrastruktur – die vermeintlich
                immaterielle Cloud hat immer einen Körper.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          PULL QUOTE — Vollbreite mit Textur-Hintergrund
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Hintergrundtextur: Bild7 orange Flüssigkeit */}
        <img
          src="/Bild7.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "sepia(25%) contrast(105%)", opacity: 0.12 }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(244,241,234,0.88)" }} />

        <div className="relative z-10 section-container-narrow text-center">
          <div className="h-px bg-border-color mb-12 sm:mb-16" />
          <p
            className="font-heading text-text-main italic font-normal leading-[1.45]"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.6rem)" }}
          >
            „Die vermeintlich immaterielle digitale Arbeit manifestiert sich in
            massiver ökologischer Materialität – vom Abbau seltener Erden bis
            hin zu den direkten Auswirkungen auf das globale Klimasystem."
          </p>
          <div className="h-px bg-border-color mt-12 sm:mt-16" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          DIE STATIONEN — Magazin-Spread
      ══════════════════════════════════════════════════════════ */}
      <section className="section-container-wide py-20 lg:py-28">

        {/* Abschnittsheader */}
        <div className="flex items-end justify-between mb-12 sm:mb-16 pb-5 border-b border-border-color">
          <div>
            <span className="font-body text-[10px] text-text-main/40 uppercase tracking-[0.22em] block mb-2">
              Inhalt
            </span>
            <h2
              className="font-heading text-text-main font-normal"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Die Stationen
            </h2>
          </div>
          <span className="font-body text-xs text-text-main/40 pb-1 tracking-[0.1em]">
            6 Stationen
          </span>
        </div>

        {/* Reihe 1: Station 1 (groß, 7/12) + Station 2 (schmal, 5/12) */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-3 sm:mb-4">

          {/* Station 1 — Leitartikel */}
          <Link
            href="/station-1"
            className="group col-span-12 lg:col-span-7 block overflow-hidden grainy-image"
            style={{ height: "clamp(320px, 55vw, 620px)" }}
          >
            <div className="relative w-full h-full">
              <img
                src="/Bild11.jpg"
                alt="Geschichtetes Gestein"
                className="absolute inset-0 w-full h-full object-cover vintage-filter transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em] block mb-2">
                  Station 01
                </span>
                <h3 className="font-heading text-white font-normal leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                  Begriffe und<br />Theorien
                </h3>
              </div>
            </div>
          </Link>

          {/* Station 2 */}
          <Link
            href="/station-2"
            className="group col-span-12 lg:col-span-5 block overflow-hidden grainy-image"
            style={{ height: "clamp(320px, 55vw, 620px)" }}
          >
            <div className="relative w-full h-full">
              <img
                src="/Bild1.jpg"
                alt="Quarzkristalle"
                className="absolute inset-0 w-full h-full object-cover vintage-filter transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em] block mb-2">
                  Station 02
                </span>
                <h3 className="font-heading text-white font-normal leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                  Körperliche<br />KI
                </h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Reihe 2: Station 3 (schmal, 5/12) + Station 4 (groß, 7/12) */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-3 sm:mb-4">

          {/* Station 3 */}
          <Link
            href="/station-3"
            className="group col-span-12 lg:col-span-5 block overflow-hidden grainy-image"
            style={{ height: "clamp(280px, 42vw, 520px)" }}
          >
            <div className="relative w-full h-full">
              <img
                src="/Bild4.jpg"
                alt="Luftaufnahme Waldkrone"
                className="absolute inset-0 w-full h-full object-cover vintage-filter transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em] block mb-2">
                  Station 03
                </span>
                <h3 className="font-heading text-white font-normal leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                  Die unsichtbaren<br />Gärtner
                </h3>
              </div>
            </div>
          </Link>

          {/* Station 4 — Featured */}
          <Link
            href="/station-4"
            className="group col-span-12 lg:col-span-7 block overflow-hidden grainy-image"
            style={{ height: "clamp(280px, 42vw, 520px)" }}
          >
            <div className="relative w-full h-full">
              <img
                src="/Bild10.jpg"
                alt="Verflochtene Baumwurzeln"
                className="absolute inset-0 w-full h-full object-cover vintage-filter transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em] block mb-2">
                  Station 04
                </span>
                <h3 className="font-heading text-white font-normal leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                  Bio-logische<br />Netzwerke
                </h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Reihe 3: Station 5 — Vollbreite, panoramisch */}
        <div className="mb-3 sm:mb-4">
          <Link
            href="/station-5"
            className="group block overflow-hidden grainy-image"
            style={{ height: "clamp(220px, 30vw, 400px)" }}
          >
            <div className="relative w-full h-full">
              <img
                src="/Bild8.jpg"
                alt="Langzeitbelichtung – verwischte Welle und Küstenlandschaft"
                className="absolute inset-0 w-full h-full object-cover vintage-filter transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-text-main/65 via-text-main/20 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 sm:p-12 lg:p-16">
                  <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em] block mb-3">
                    Station 05
                  </span>
                  <h3
                    className="font-heading text-white font-normal leading-tight"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
                  >
                    Blick in die Sterne
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Reihe 4: Station 6 — Zentriert, intim */}
        <div className="grid grid-cols-12">
          <Link
            href="/station-6"
            className="group col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-4 block overflow-hidden grainy-image"
            style={{ height: "clamp(260px, 38vw, 440px)" }}
          >
            <div className="relative w-full h-full">
              <img
                src="/Bild5.jpg"
                alt="Wasserreflexion mit Pflanzensilhouetten"
                className="absolute inset-0 w-full h-full object-cover vintage-filter transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/85 via-text-main/25 to-text-main/10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                <span className="font-body text-[10px] text-white/45 uppercase tracking-[0.22em] block mb-2">
                  Station 06
                </span>
                <h3
                  className="font-heading text-white font-normal"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  Perspektive
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          DIE TOUR — Beschreibungstext, asymmetrisch
      ══════════════════════════════════════════════════════════ */}
      <section className="section-container-wide py-16 lg:py-24 border-t border-border-color">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Linke Spalte: Überschrift */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-body text-[10px] uppercase tracking-[0.22em] text-accent-terra">
                Die Tour
              </span>
              <div className="h-px flex-1 bg-border-color" />
            </div>
            <p
              className="font-heading text-text-main font-normal italic leading-[1.15]"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Physischer Raum,<br />digitale Reflexion
            </p>
          </div>

          {/* Rechte Spalte: Fließtext */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="flow-text-justified">
              <p className="mb-5">
                Die konzipierte digitale Tour greift diese theoretische Prämisse
                didaktisch auf. Die Besucher*innen bewegen sich physisch durch
                reale Landschaftselemente in unmittelbarer Nähe zur
                Hochtechnologie-Infrastruktur des Cyber Valley. Angeleitet durch
                das Smartphone interagieren sie an spezifischen Stationen mit
                Texten, die aus der Perspektive des Ecocriticism und der
                Medienökologie beleuchten, wie die digitale Welt eben jene
                physische Natur durchdringt und formt.
              </p>
              <p>
                Ziel ist es, die oft unsichtbare Materialität und die
                ökologischen Verflechtungen von KI am konkreten Ort greifbar zu
                machen und zu reflektieren, wie sich Natur und Technik im
                Anthropozän zunehmend zu neuen, untrennbaren hybriden Systemen
                verschränken.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="section-container">
        <div className="border-t border-border-color pt-14 pb-20 text-center">
          <Link
            href="/station-1"
            className="btn-vintage text-xs sm:text-sm px-10 sm:px-14 py-4 sm:py-5"
            style={{ letterSpacing: "0.18em" }}
          >
            Zur Ersten Station →
          </Link>
        </div>
      </section>


      {/* Footer */}
      <footer className="section-container border-t border-border-color py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <p className="font-body text-[10px] text-text-main/40 uppercase tracking-[0.18em]">
            Digitaler Garten — 2026
          </p>
          <div className="font-body text-[10px] text-text-main/35 leading-relaxed sm:text-right">
            <p>Ein Projekt im Rahmen des Masterstudienganges</p>
            <p>Literatur- und Kulturtheorie</p>
            <p className="mt-1">Eberhard Karls Universität Tübingen</p>
            <p className="mt-2 text-text-main/25">In freundlicher Zusammenarbeit mit der Cyber Valley GmbH</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
