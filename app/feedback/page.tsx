"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeedbackPage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full">
      <section className="section-container pt-10 sm:pt-14 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-body text-[10px] uppercase tracking-[0.22em] text-accent-terra">
            Feedback
          </span>
          <div className="h-px flex-1 bg-border-color" />
        </div>

        <div className="w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdRQjViTTdq7CIJqfBA15zoJmwdMCzcezIfdYdgbu7v-l3Rag/viewform?embedded=true"
            width="100%"
            height="1233"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
          >
            {lang === "de" ? "Wird geladen…" : "Loading…"}
          </iframe>
        </div>

        <div className="divider" />
      </section>

      {/* Navigation */}
      <section className="section-container">
        <div className="text-center py-6 sm:py-8">
          <Link href="/" className="btn-vintage-outline">
            {lang === "de" ? "Zurück zur Startseite" : "Back to Home"}
          </Link>
        </div>
      </section>
    </div>
  );
}
