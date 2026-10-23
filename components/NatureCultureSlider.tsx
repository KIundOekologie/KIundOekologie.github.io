"use client";

import { useState, useRef } from "react";

const labels = ["Natur", "Kultur-Natur-Mix", "Kultur"];

export function NatureCultureSlider() {
  const [value, setValue] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(parseInt(target.value));
  };

  const getLabel = () => {
    if (value < 33) return "Eher Natur";
    if (value > 66) return "Eher Kultur";
    return "Dazwischen";
  };

  return (
    <div className="border border-border-color p-6 sm:p-8 my-6 sm:my-8 bg-bg-base/50">
      <p className="font-body text-sm text-center text-text-main/70 mb-6 sm:mb-8">
        Verschieben Sie den Marker: Wo würden Sie diese Begriffe einordnen?
      </p>

      {/* Analog Scale Slider */}
      <div className="relative py-8" ref={sliderRef}>
        {/* Skala mit Teilstrichen */}
        <div className="relative h-12 sm:h-16">
          {/* Hauptlinie */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-text-main transform -translate-y-1/2" />

          {/* Teilstriche */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-1">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className={`bg-text-main ${
                  i % 5 === 0 ? 'w-px h-4 sm:h-6' : 'w-px h-2 sm:h-3'
                }`}
              />
            ))}
          </div>

          {/* Labels */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between font-heading text-xs sm:text-sm text-text-main/70 px-1">
            <span>Natur</span>
            <span>Kultur</span>
          </div>
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onInput={handleInput}
          className="absolute top-1/2 left-0 right-0 w-full opacity-0 cursor-ew-resize transform -translate-y-1/2 z-10"
          style={{ marginTop: '-2px' }}
          aria-label="Natur vs Kultur Skala"
        />

        {/* Marker (visuell) */}
        <div
          className="absolute top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent-flora transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
          style={{ left: `${value}%` }}
        >
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-heading text-xs text-accent-flora">
            {getLabel()}
          </div>
        </div>
      </div>

      {/* Begriffe zum Einordnen */}
      <div className="mt-12 sm:mt-16 space-y-4">
        <p className="font-body text-sm text-text-main/60 text-center mb-4">
          Wo würden Sie folgende Begriffe einordnen?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
          {['Wald', 'Smartphone', 'Kompost', 'KI', 'Stadt', 'Garten'].map((item) => (
            <span
              key={item}
              className="font-body text-sm text-text-main border border-border-color px-3 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
