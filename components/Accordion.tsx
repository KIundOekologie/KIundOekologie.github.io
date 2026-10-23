"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-border-color">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-text-main/5 transition-colors"
            aria-expanded={openIndex === index}
          >
            <h3 className="section-title text-text-main pr-4">
              {item.title}
            </h3>
            <span className={`text-accent-terra text-2xl sm:text-3xl transition-transform duration-200 flex-shrink-0 ${
              openIndex === index ? 'rotate-45' : ''
            }`}>
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
