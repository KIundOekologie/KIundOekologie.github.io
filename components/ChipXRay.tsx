"use client";

import { useState } from "react";

interface Hotspot {
  id: string;
  x: string;
  y: string;
  mineral: string;
  location: string;
  fact: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "lithium",
    x: "25%",
    y: "35%",
    mineral: "Lithium",
    location: "Chile – Atacama-Wüste",
    fact: "Enormer Wasserverbrauch: Für 1 Tonne Lithium werden ca. 2,2 Millionen Liter Wasser verbraucht.",
  },
  {
    id: "coltan",
    x: "50%",
    y: "55%",
    mineral: "Coltan",
    location: "Kongo – Demokratische Republik",
    fact: "Gefördert unter oft prekärsten Bedingungen. Kinderarbeit und schwere gesundheitliche Folgen für die Bergleute.",
  },
  {
    id: "gold",
    x: "75%",
    y: "40%",
    mineral: "Gold",
    location: "China – Provinz Shandong",
    fact: "Verbindungen in Schaltkreisen: Wenige Milligramm pro Chip, aber global größter Produzent.",
  },
  {
    id: "silicon",
    x: "40%",
    y: "70%",
    mineral: "Silizium",
    location: "China – Provinz Xinjiang",
    fact: "Grundstoff der Halbleiter: Aus Quarzsand gewonnen, extrem energieintensive Verarbeitung.",
  },
];

export function ChipXRay() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [revealedCount, setRevealedCount] = useState(0);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
    if (!revealedHotspots.has(hotspot.id)) {
      setRevealedHotspots(prev => new Set([...prev, hotspot.id]));
      setRevealedCount(prev => prev + 1);
    }
  };

  const [revealedHotspots, setRevealedHotspots] = useState<Set<string>>(new Set());

  return (
    <div className="border border-border-color p-6 sm:p-8 my-6 sm:my-8 bg-bg-base/50">
      <p className="font-body text-sm text-text-main/70 mb-4 text-center">
        Wie viele chemische Elemente können in einem modernen Chip stecken?
      </p>

      <p className="font-heading text-center text-text-main/60 text-sm italic mb-6">
        Tippe auf verschiedene Stellen des Chips, um seine geologische Herkunft freizulegen.
      </p>

      {/* Chip Visualization */}
      <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-text-main/10 to-text-main/5 border border-border-color mb-6">
        {/* Chip Pattern */}
        <div className="absolute inset-4 sm:inset-6 grid grid-cols-4 gap-1 sm:gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="bg-text-main/20 border border-text-main/30"
            />
          ))}
        </div>

        {/* Hotspots */}
        {HOTSPOTS.map((hotspot) => (
          <button
            key={hotspot.id}
            onClick={() => handleHotspotClick(hotspot)}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-110 focus:outline-none"
            style={{ left: hotspot.x, top: hotspot.y }}
            aria-label={`Zeige ${hotspot.mineral} Informationen`}
          >
            <div
              className={`w-full h-full rounded-full border-2 transition-colors ${
                revealedHotspots.has(hotspot.id)
                  ? 'bg-accent-terra border-accent-terra'
                  : 'bg-bg-base border-text-main'
              }`}
            />
            {/* Pulse effect for unclicked */}
            {!revealedHotspots.has(hotspot.id) && (
              <div className="absolute inset-0 rounded-full border border-accent-terra/50 animate-ping" />
            )}
          </button>
        ))}

        {/* Progress indicator */}
        <div className="absolute top-2 right-2 font-body text-xs text-text-main/60 bg-bg-base/80 px-2 py-1 border border-border-color">
          {revealedCount}/{HOTSPOTS.length} enthüllt
        </div>
      </div>

      {/* Active Hotspot Info */}
      {activeHotspot && (
        <div className="bordered-box bg-accent-terra/5">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-heading text-lg text-accent-terra">
              {activeHotspot.mineral}
            </h4>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-text-main/60 hover:text-text-main"
              aria-label="Schließen"
            >
              ✕
            </button>
          </div>
          <p className="micro-copy text-text-main mb-3">
            {activeHotspot.location}
          </p>
          <p className="font-body text-sm text-text-main/80 leading-relaxed">
            {activeHotspot.fact}
          </p>
        </div>
      )}

      {/* Answer reveal */}
      {revealedCount >= HOTSPOTS.length && (
        <div className="mt-6 text-center p-4 border border-accent-flora bg-accent-flora/5">
          <p className="font-heading text-lg text-text-main mb-2">
            Ein moderner Computerchip besteht aus bis zu <span className="text-accent-flora">60 verschiedenen Elementen</span>.
          </p>
          <p className="font-body text-sm text-text-main/70">
            
          </p>
        </div>
      )}
    </div>
  );
}
