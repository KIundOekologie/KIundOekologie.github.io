"use client";

import { useState } from "react";

interface Fact {
  id: number;
  fact: string;
  answer: string;
  explanation: string;
}

const FACTS: Fact[] = [
  {
    id: 1,
    fact: "Lernt durch Versuch, Irrtum und Anpassung.",
    answer: "Beides",
    explanation: "KI ahmt diesen biologischen Prozess nach – neuronale Netze sind von biologischen Systemen inspiriert.",
  },
  {
    id: 2,
    fact: "Tauscht Informationen über elektrische Impulse und chemische Signale aus.",
    answer: "Biologie (Myzel)",
    explanation: "Pilznetzwerke nutzen chemische Signale zur Kommunikation. KI nutzt elektrische Impulse.",
  },
  {
    id: 3,
    fact: "Verbraucht große Mengen an Wasser.",
    answer: "Technologie (Rechenzentren)",
    explanation: "Rechenzentren benötigen enorme Mengen Wasser für Kühlung. Auch die Natur verbraucht Wasser – aber in einem anderen Kreislauf.",
  },
];

export function NetworkTinder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"biologie" | "technologie" | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [completedIndices, setCompletedIndices] = useState<Set<number>>(new Set());

  const currentFact = FACTS[currentIndex];

  const handleAnswer = (answer: "biologie" | "technologie") => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNext = () => {
    setCompletedIndices(prev => new Set([...prev, currentIndex]));
    setShowResult(false);
    setSelectedAnswer(null);

    if (currentIndex < FACTS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isComplete = currentIndex === FACTS.length - 1 && showResult;

  return (
    <div className="border border-border-color p-6 sm:p-8 my-6 sm:my-8 bg-bg-base/50">
      <p className="font-body text-sm text-text-main/70 mb-4 text-center">
        Entscheide: Biologie (Pilznetzwerk) oder Technologie (KI-Netzwerk)?– Klicke auf deine Antwort
      </p>

      <p className="font-body text-sm text-text-main/60 text-center mb-6">
        Kartensatz {currentIndex + 1} von {FACTS.length}
      </p>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {FACTS.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-1 rounded-full transition-colors ${
              completedIndices.has(i) || currentIndex === i
                ? 'bg-accent-flora'
                : 'bg-border-color'
            }`}
          />
        ))}
      </div>

      {!isComplete ? (
        <>
          {/* Fact Card */}
          <div className="bordered-box bg-white/30 mb-6 min-h-[120px] flex items-center justify-center">
            <p className="font-body text-lg text-text-main text-center px-4">
              {currentFact.fact}
            </p>
          </div>

          {/* Answer Buttons */}
          {!showResult ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer("biologie")}
                className="btn-vintage py-4 text-sm sm:text-base"
              >
                🍄 Biologie
                <br />
                <span className="text-xs opacity-70">(Pilznetzwerk)</span>
              </button>
              <button
                onClick={() => handleAnswer("technologie")}
                className="btn-vintage py-4 text-sm sm:text-base"
              >
                🤖 Technologie
                <br />
                <span className="text-xs opacity-70">(KI-Netzwerk)</span>
              </button>
            </div>
          ) : (
            <>
              {/* Result */}
              <div className="bordered-box bg-accent-flora/10 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${
                    currentFact.answer === "Beides"
                      ? 'bg-accent-terra'
                      : currentFact.answer === "Biologie (Myzel)"
                      ? 'bg-accent-flora'
                      : 'bg-text-main'
                  }`} />
                  <span className="font-heading text-lg text-text-main">
                    {currentFact.answer}
                  </span>
                </div>
                <p className="font-body text-base text-text-main/80">
                  {currentFact.explanation}
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="btn-vintage-outline"
                >
                  {currentIndex < FACTS.length - 1 ? 'Nächste Karte' : 'Abschließen'}
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-accent-flora" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl text-text-main mb-4">
            Die Grenzen verschwimmen
          </h3>
          <p className="font-body text-base text-text-main/80 max-w-md mx-auto mb-6">
            Wie du gesehen hast: Biologie und Technologie sind nicht so leicht zu trennen.
            KI ist von biologischen Systemen inspiriert – und beide sind Teil derselben ökologischen und evolutionären Prozesse.
          </p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setShowResult(false);
              setSelectedAnswer(null);
              setCompletedIndices(new Set());
            }}
            className="btn-vintage-outline text-sm"
          >
            Erneut spielen
          </button>
        </div>
      )}
    </div>
  );
}
