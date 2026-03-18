"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Fact {
  id: number;
  fact: string;
  answer: string;
  explanation: string;
}

const FACTS_DE: Fact[] = [
  { id: 1, fact: "Lernt durch Versuch, Irrtum und Anpassung.", answer: "Beides", explanation: "KI ahmt diesen biologischen Prozess nach – neuronale Netze sind von biologischen Systemen inspiriert." },
  { id: 2, fact: "Tauscht Informationen über elektrische Impulse und chemische Signale aus.", answer: "Biologie (Myzel)", explanation: "Pilznetzwerke nutzen chemische Signale zur Kommunikation. KI nutzt elektrische Impulse." },
  { id: 3, fact: "Verbraucht große Mengen an Wasser.", answer: "Technologie (Rechenzentren)", explanation: "Rechenzentren benötigen enorme Mengen Wasser für Kühlung. Auch die Natur verbraucht Wasser – aber in einem anderen Kreislauf." },
];

const FACTS_EN: Fact[] = [
  { id: 1, fact: "Learns through trial, error and adaptation.", answer: "Both", explanation: "AI mimics this biological process – neural networks are inspired by biological systems." },
  { id: 2, fact: "Exchanges information via electrical impulses and chemical signals.", answer: "Biology (Mycelium)", explanation: "Fungal networks use chemical signals for communication. AI uses electrical impulses." },
  { id: 3, fact: "Consumes large quantities of water.", answer: "Technology (Data Centres)", explanation: "Data centres require enormous amounts of water for cooling. Nature also consumes water – but in a different cycle." },
];

export function NetworkTinder() {
  const { lang } = useLanguage();
  const FACTS = lang === "de" ? FACTS_DE : FACTS_EN;

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
        {lang === "de"
          ? "Entscheide: Biologie (Pilznetzwerk) oder Technologie (KI-Netzwerk)? – Klicke auf deine Antwort"
          : "Decide: Biology (fungal network) or Technology (AI network)? – Click on your answer"}
      </p>

      <p className="font-body text-sm text-text-main/60 text-center mb-6">
        {lang === "de" ? `Kartensatz ${currentIndex + 1} von ${FACTS.length}` : `Card ${currentIndex + 1} of ${FACTS.length}`}
      </p>

      <div className="flex justify-center gap-2 mb-6">
        {FACTS.map((_, i) => (
          <div key={i} className={`w-8 h-1 rounded-full transition-colors ${completedIndices.has(i) || currentIndex === i ? 'bg-accent-flora' : 'bg-border-color'}`} />
        ))}
      </div>

      {!isComplete ? (
        <>
          <div className="bordered-box bg-white/30 mb-6 min-h-[120px] flex items-center justify-center">
            <p className="font-body text-lg text-text-main text-center px-4">{currentFact.fact}</p>
          </div>

          {!showResult ? (
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => handleAnswer("biologie")} className="btn-vintage py-4 text-sm sm:text-base">
                🍄 {lang === "de" ? "Biologie" : "Biology"}
                <br /><span className="text-xs opacity-70">{lang === "de" ? "(Pilznetzwerk)" : "(Fungal network)"}</span>
              </button>
              <button onClick={() => handleAnswer("technologie")} className="btn-vintage py-4 text-sm sm:text-base">
                🤖 {lang === "de" ? "Technologie" : "Technology"}
                <br /><span className="text-xs opacity-70">{lang === "de" ? "(KI-Netzwerk)" : "(AI network)"}</span>
              </button>
            </div>
          ) : (
            <>
              <div className="bordered-box bg-accent-flora/10 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${currentFact.answer === "Beides" || currentFact.answer === "Both" ? 'bg-accent-terra' : currentFact.answer === "Biologie (Myzel)" || currentFact.answer === "Biology (Mycelium)" ? 'bg-accent-flora' : 'bg-text-main'}`} />
                  <span className="font-heading text-lg text-text-main">{currentFact.answer}</span>
                </div>
                <p className="font-body text-base text-text-main/80">{currentFact.explanation}</p>
              </div>
              <div className="text-center">
                <button onClick={handleNext} className="btn-vintage-outline">
                  {currentIndex < FACTS.length - 1
                    ? (lang === "de" ? "Nächste Karte" : "Next Card")
                    : (lang === "de" ? "Abschließen" : "Finish")}
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
            {lang === "de" ? "Die Grenzen verschwimmen" : "The Boundaries Blur"}
          </h3>
          <p className="font-body text-base text-text-main/80 max-w-md mx-auto mb-6">
            {lang === "de"
              ? "Wie du gesehen hast: Biologie und Technologie sind nicht so leicht zu trennen. KI ist von biologischen Systemen inspiriert – und beide sind Teil derselben ökologischen und evolutionären Prozesse."
              : "As you have seen: biology and technology are not so easy to separate. AI is inspired by biological systems – and both are part of the same ecological and evolutionary processes."}
          </p>
          <button onClick={() => { setCurrentIndex(0); setShowResult(false); setSelectedAnswer(null); setCompletedIndices(new Set()); }} className="btn-vintage-outline text-sm">
            {lang === "de" ? "Erneut spielen" : "Play again"}
          </button>
        </div>
      )}
    </div>
  );
}
