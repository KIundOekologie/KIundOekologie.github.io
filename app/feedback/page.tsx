"use client";

import Link from "next/link";
import { useState } from "react";

const OPTIONS_Q2 = [
  "Dass KI aus physischen Rohstoffen der Erde besteht (Geologie der Medien).",
  "Dass hinter der KI menschliche Klick-Arbeit steckt (Ghost Work).",
  "Die Parallelen zwischen Pilznetzwerken und neuronalen Netzen.",
  "Dass wir im Anthropozän Natur und Technik nicht mehr trennen können.",
];

const OPTIONS_Q3 = [
  "Sehr gut – Smartphone und Umgebung haben sich toll ergänzt.",
  "Okay – Aber ich habe mehr auf den Bildschirm als in die Natur geschaut.",
  "Schwierig – Das Lesen am Handy hat mich eher von der Umgebung abgelenkt.",
];

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [q2Answer, setQ2Answer] = useState("");
  const [q3Answer, setQ3Answer] = useState("");
  const [q4Answer, setQ4Answer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, q2Answer, q3Answer, q4Answer });
    alert("Vielen Dank für dein Feedback!");
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="micro-copy text-accent-terra">Station 7</span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="hero-text text-text-main leading-tight mb-8 sm:mb-12">
          Feedback
        </h1>

        <p className="font-body text-base sm:text-lg text-text-main/70 mb-8 sm:mb-12 max-w-readable">
          Dieser Fragebogen hilft uns, die Tour weiterzuentwickeln. Deine Antworten werden anonym gespeichert.
        </p>
      </section>

      {/* Formular */}
      <section className="section-container">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {/* Frage 1 - Rating mit Rauten */}
          <div className="mb-10 sm:mb-12">
            <label className="block font-heading text-base sm:text-lg text-text-main mb-4 sm:mb-6">
              <span className="text-accent-terra">1.</span> Hat diese Tour deine Sichtweise auf das Verhältnis von KI und Natur verändert?
            </label>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="w-10 h-10 sm:w-12 sm:h-12 relative focus:outline-none"
                  aria-label={`Bewertung ${value} von 5`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-full h-full transition-colors ${
                      rating >= value ? "fill-text-main" : "fill-none"
                    }`}
                  >
                    <path
                      d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z"
                      className="stroke-text-main stroke-[1px]"
                    />
                  </svg>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-3 px-2">
              <span className="font-body text-xs text-text-main/60">Gar nicht</span>
              <span className="font-body text-xs text-text-main/60">Sehr stark</span>
            </div>
          </div>

          <div className="divider" />

          {/* Frage 2 - Single Choice mit Klammern */}
          <div className="mb-10 sm:mb-12">
            <label className="block font-heading text-base sm:text-lg text-text-main mb-4 sm:mb-6">
              <span className="text-accent-terra">2.</span> Welcher der folgenden Gedanken wird dir nach diesem Spaziergang am ehesten im Gedächtnis bleiben?
            </label>

            <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
              {OPTIONS_Q2.map((option, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="q2"
                    value={option}
                    checked={q2Answer === option}
                    onChange={(e) => setQ2Answer(e.target.value)}
                    className="sr-only"
                  />
                  <span className={`font-mono text-base sm:text-lg ${q2Answer === option ? "text-text-main" : "text-text-main/50"}`}>
                    {q2Answer === option ? "[ X ]" : "[   ]"}
                  </span>
                  <span className={`flex-1 ${q2Answer === option ? "text-text-main" : "text-text-main/70 group-hover:text-text-main/90"}`}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Frage 3 - Format-Frage */}
          <div className="mb-10 sm:mb-12">
            <label className="block font-heading text-base sm:text-lg text-text-main mb-4 sm:mb-6">
              <span className="text-accent-terra">3.</span> Wie hat das Format (Texte am Smartphone + physischer Spaziergang im Cyber Valley) für dich funktioniert?
            </label>

            <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
              {OPTIONS_Q3.map((option, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="q3"
                    value={option}
                    checked={q3Answer === option}
                    onChange={(e) => setQ3Answer(e.target.value)}
                    className="sr-only"
                  />
                  <span className={`font-mono text-base sm:text-lg ${q3Answer === option ? "text-text-main" : "text-text-main/50"}`}>
                    {q3Answer === option ? "[ X ]" : "[   ]"}
                  </span>
                  <span className={`flex-1 ${q3Answer === option ? "text-text-main" : "text-text-main/70 group-hover:text-text-main/90"}`}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Frage 4 - Textarea mit Linien */}
          <div className="mb-10 sm:mb-12">
            <label className="block font-heading text-base sm:text-lg text-text-main mb-4 sm:mb-6">
              <span className="text-accent-terra">4.</span> Offenes Feld: Lass uns gerne deine Gedanken und Anmerkungen zur Tour hier ... (Optional)
            </label>

            <div className="relative">
              <textarea
                value={q4Answer}
                onChange={(e) => setQ4Answer(e.target.value)}
                rows={6}
                className="w-full font-body text-base sm:text-lg leading-8 bg-transparent text-text-main resize-none focus:outline-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #D1CEC5 31px, #D1CEC5 32px)',
                  backgroundSize: '100% 32px',
                  minHeight: '192px',
                  paddingTop: '4px',
                }}
                placeholder="Deine Gedanken..."
              />
            </div>
          </div>

          <div className="divider" />

          {/* Submit Button */}
          <div className="text-center py-6 sm:py-8">
            <button
              type="submit"
              className="btn-vintage"
            >
              Absenden
            </button>
          </div>
        </form>

        <div className="divider" />
      </section>

      {/* Navigation */}
      <section className="section-container">
        <div className="text-center py-6 sm:py-8">
          <Link href="/" className="btn-vintage-outline">
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}
