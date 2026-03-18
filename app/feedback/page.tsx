import Link from "next/link";

export default function FeedbackPage() {
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
            Wird geladen…
          </iframe>
        </div>

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
