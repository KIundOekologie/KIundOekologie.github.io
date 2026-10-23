"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { lang } = useLanguage();

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
            {lang === "de" ? "Ein literarisch-ökologischer Pfad" : "A literary-ecological walk"}
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
              {lang === "de" ? "KI — Natur — Ecocriticism" : "AI — Nature — Ecocriticism"}
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
                {lang === "de" ? "Leitartikel" : "Editorial"}
              </span>
              <div className="h-px flex-1 bg-border-color" />
            </div>

            <h2
              className="font-heading text-text-main font-normal leading-[1.05] mb-10 sm:mb-14"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              {lang === "de" ? (
                <>KI und Natur –<br /><span className="italic">eine neue Beziehung</span></>
              ) : (
                <>AI and Nature –<br /><span className="italic">a new relationship</span></>
              )}
            </h2>

            {/* Eingebettetes Zitatblock */}
            <div className="border-l-2 border-accent-terra pl-6 mb-10 py-2">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl text-text-main italic leading-relaxed">
                {lang === "de"
                  ? <>„Der Garten ist ein inhärent hybrider Raum, der die strikte Dichotomie von Natur und Kultur auflöst."</>
                  : <>The garden is an inherently hybrid space that dissolves the strict dichotomy between nature and culture.</>}
              </p>
            </div>

            {/* Fließtext mit Drop Cap */}
            <div className="flow-text-justified drop-cap">
              <p className="mb-6">
                {lang === "de" ? (
                  <>
                    Im Rahmen dieses Projekts, welches als Teil des Masterstudiengangs Literatur- und Kulturtheorie an der Universität Tübingen entstanden ist, dient der Begriff des{" "}
                    <span className="italic-heading text-accent-terra">
                      Digitalen Gartens
                    </span>{" "}
                    als zentrale kulturtheoretische Leitmetapher und
                    Erkenntnismodell. Historisch betrachtet, markiert der Garten
                    keine unberührte Natur, sondern fungiert als Kontaktzone, in
                    der Natur und Kulturtechnik aufeinandertreffen – geformt durch
                    intentionale menschliche Eingriffe.
                  </>
                ) : (
                  <>
                    This project, developed as part of the Master&apos;s programme in Literary and Cultural Theory at the University of Tübingen, uses the concept of the{" "}
                    <span className="italic-heading text-accent-terra">
                      Digital Garden
                    </span>{" "}
                    as a central cultural-theoretical guiding metaphor and
                    model of understanding. Historically, the garden does not mark
                    untouched nature, but functions as a contact zone where nature
                    and cultural technique meet – shaped by intentional human
                    interventions.
                  </>
                )}
              </p>
              <p className="mb-6">
                {lang === "de" ? (
                  <>
                    Übertragen auf das Cyber Valley in Tübingen und die Entwicklung Künstlicher Intelligenz ermöglicht dieses Bild einen
                    Perspektivwechsel: An diesem Ort werden primär
                    Datennetze, Algorithmen und Rechenmodelle{" "}
                    <span className="italic-heading text-accent-flora">
                      „kultiviert"
                    </span>
                    . Der gängige Diskurs um Digitalisierung und KI nutzt dabei oft Metaphern des Ätherischen und Immateriellen (wie z. B. die Cloud), die eine Entkopplung von der physischen Welt suggerieren. Die Metapher des Gartens korrigiert dieses Narrativ. So wie ein physischer Garten untrennbar mit dem Boden und den
                    Nährstoffen verbunden ist, in denen er wurzelt, ist auch die digitale Kultivierung
                    tief mit materiellen und geologischen Prozessen verwoben.
                  </>
                ) : (
                  <>
                    Applied to the Cyber Valley in Tübingen and the development of Artificial Intelligence, this image enables a change of perspective: it is primarily data networks, algorithms and computational models that are being{" "}
                    <span className="italic-heading text-accent-flora">
                      „cultivated"
                    </span>{" "}
                    here. The prevailing discourse around digitalisation and AI often uses metaphors of the ethereal and immaterial (such as the Cloud), which suggest a decoupling from the physical world. The metaphor of the garden corrects this narrative. Just as a physical garden is inseparably connected to the soil and nutrients in which it is rooted, digital cultivation is also deeply intertwined with material and geological processes.
                  </>
                )}
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
                {lang === "de"
                  ? "Mineralkristall. Seltene Erden und Mineralien bilden die physische Grundlage digitaler Infrastruktur – die vermeintlich immaterielle Cloud hat immer einen Körper."
                  : "Mineral crystal. Rare earths and minerals form the physical basis of digital infrastructure – the supposedly immaterial cloud always has a body."}
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
            {lang === "de"
              ? <>Die vermeintlich immaterielle digitale Arbeit manifestiert sich in massiver ökologischer Materialität.</>
              : <>The supposedly immaterial digital work manifests itself in massive ecological materiality.</>}
          </p>
          <div className="h-px bg-border-color mt-12 sm:mt-16" />
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
                {lang === "de" ? "Die Tour" : "The Tour"}
              </span>
              <div className="h-px flex-1 bg-border-color" />
            </div>
            <p
              className="font-heading text-text-main font-normal italic leading-[1.15]"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              {lang === "de" ? (
                <>Physischer Raum,<br />digitale Reflexion</>
              ) : (
                <>Physical Space,<br />Digital Reflection</>
              )}
            </p>
          </div>

          {/* Rechte Spalte: Fließtext */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="flow-text-justified">
              <p className="mb-5">
                {lang === "de"
                  ? "Die konzipierte digitale Tour greift diese theoretische Prämisse didaktisch auf. Die Besucherinnen und Besucher bewegen sich physisch durch reale Landschaftselemente des Cyber Valley Innovationscampus in unmittelbarer Nähe zur Hochtechnologie-Infrastruktur. Angeleitet durch das Smartphone interagieren sie an spezifischen Stationen mit Texten, die aus der Perspektive des Ecocriticism und der Medienökologie beleuchten, wie die digitale Welt eben jene physische Natur durchdringt und formt (und andersherum). Unabhängig davon steht die gesamte Tour auch zum Entdecken auf dieser Website bereit."
                  : "The digital tour takes up this theoretical premise didactically. Visitors move physically through real landscape elements of the Cyber Valley Innovation Campus in the immediate vicinity of the high-tech infrastructure. Guided by their smartphone, they interact at specific stations with texts that illuminate, from the perspective of Ecocriticism and media ecology, how the digital world penetrates and shapes that very physical nature (and vice versa). The entire tour is also available to explore on this website."}
              </p>
              <p>
                {lang === "de"
                  ? "Ziel ist es, die oft unsichtbare Materialität und die ökologischen Verflechtungen von KI an konkreten Ort greifbar zu machen und zu reflektieren, wie sich Natur und Technik im Anthropozän zunehmend zu neuen, untrennbaren hybriden Systemen verschränken."
                  : "The aim is to make the often invisible materiality and the ecological entanglements of AI tangible at a specific location and to reflect on how nature and technology in the Anthropocene are increasingly intertwining into new, inseparable hybrid systems."}
              </p>
            </div>
          </div>
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
              {lang === "de" ? "Inhalt" : "Contents"}
            </span>
            <h2
              className="font-heading text-text-main font-normal"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {lang === "de" ? "Die Stationen" : "The Stations"}
            </h2>
          </div>
          <span className="font-body text-xs text-text-main/40 pb-1 tracking-[0.1em]">
            {lang === "de" ? "6 Stationen" : "6 Stations"}
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
                  {lang === "de" ? (<>Begriffe und<br />Theorien</>) : (<>Concepts and<br />Theories</>)}
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
                  {lang === "de" ? (<>Körperliche<br />KI</>) : (<>Physical<br />AI</>)}
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
                  {lang === "de" ? (<>Die unsichtbaren<br />Gärtner</>) : (<>The Invisible<br />Gardeners</>)}
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
                  {lang === "de" ? (<>Bio-logische<br />Netzwerke</>) : (<>Bio-logical<br />Networks</>)}
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
                    {lang === "de" ? "Blick in die Sterne" : "Looking at the Stars"}
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
                  {lang === "de" ? "Perspektive" : "Perspective"}
                </h3>
              </div>
            </div>
          </Link>
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
            {lang === "de" ? "Zur Ersten Station →" : "To the First Station →"}
          </Link>
        </div>
      </section>


      {/* Footer */}
      <footer className="section-container border-t border-border-color py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="font-body text-[10px] text-text-main/60 leading-relaxed">
            <p className="uppercase tracking-[0.18em] mb-3">Digitaler Garten — 2026</p>
            <Link href="/impressum" className="block hover:text-text-main transition-colors uppercase tracking-[0.18em]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="block hover:text-text-main transition-colors uppercase tracking-[0.18em] mt-1">
              Datenschutz
            </Link>
          </div>
          <div className="font-body text-[10px] text-text-main/60 leading-relaxed sm:text-right">
            <p>{lang === "de" ? "Ein Projekt im Rahmen des Masterstudienganges" : "A project within the Master's programme"}</p>
            <p>{lang === "de" ? "Literatur- und Kulturtheorie" : "Literary and Cultural Theory"}</p>
            <p className="mt-1">Eberhard Karls Universität Tübingen</p>
            <p className="mt-2">{lang === "de" ? "In freundlicher Zusammenarbeit mit der Cyber Valley GmbH" : "In friendly collaboration with Cyber Valley GmbH"}</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
