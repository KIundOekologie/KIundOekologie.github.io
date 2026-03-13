"use client";

import Link from "next/link";
import { useState } from "react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [q2Answer, setQ2Answer] = useState("");
  const [q3Answer, setQ3Answer] = useState("");
  const [q4Answer, setQ4Answer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Formular-Verarbeitung stattfinden
    console.log({ rating, q2Answer, q3Answer, q4Answer });
    alert("Vielen Dank für Ihr Feedback!");
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-container">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="font-heading text-sm text-accent-terra tracking-wider uppercase">
            Station 7
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-main leading-tight mb-8 sm:mb-12 tracking-tight">
          Feedback
        </h1>

        <p className="font-body text-base sm:text-lg text-text-main/70 mb-8 sm:mb-12">
          Dieser Fragebogen hilft uns, die Tour weiterzuentwickeln. Ihre Antworten werden anonym gespeichert.
        </p>
      </section>

      {/* Formular */}
      <section className="section-container">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {/* Frage 1 - Rating mit Rauten */}
          <div className="mb-10 sm:mb-12">
            <label className="block font-heading text-base sm:text-lg text-text-main mb-4 sm:mb-6">
              <span className="text-accent-terra">1.</span> Hat diese Tour Ihre Sichtweise auf KI und Natur verändert?
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
              <span className="font-body text-xs text-text-main/60">Überhaupt nicht</span>
              <span className="font-body text-xs text-text-main/60">Sehr stark</span>
            </div>
          </div>

          <div className="divider" />

          {/* Frage 2 - Single Choice mit Klammern */}
          <div className="mb-10 sm:mb-12">
            <label className="block font-heading text-base sm:text-lg text-text-main mb-4 sm:mb-6">
              <span className="text-accent-terra">2.</span> Welcher der folgenden Gedanken hat Sie am meisten beschäftigt?
            </label>

            <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
              {[
                "Die Verbindung von Garten und KI als Metapher",
                "Der Energieverbrauch von Data Centern",
                "Hyperobjekte und nicht-lokale Phänomene",
                "Die Frage nach Agency in KI-Systemen",
                "Die eigene Rolle im Anthropozän"
              ].map((option, index) => (
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
              <span className="text-accent-terra">3.</span> Wie hat das Format „Audiowalk mit Website" für Sie funktioniert?
            </label>

            <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
              {[
                "Sehr gut – die Kombination war genau richtig",
                "Gut – aber ich hätte mir mehr Audio-Inhalte gewünscht",
                "Eher schwach – Text war draußen schwer zu lesen",
                "Nicht gut – ich hätte ein anderes Format bevorzugt"
              ].map((option, index) => (
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
              <span className="text-accent-terra">4.</span> Offenes Feld: Was würden Sie verbessern oder ergänzen?
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
                placeholder="Ihre Antwort..."
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
          <Link href="/" className="btn-vintage bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-bg-base">
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}
