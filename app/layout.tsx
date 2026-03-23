import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitaler Garten – Ein literarisch-ökologischer Pfad",
  description: "KI und Natur, Ecocriticism, Technik und Natur als Gegenspieler?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-bg-base text-text-main antialiased min-h-screen relative">
        {/* Global Grain Overlay für Papier-/Filmhaptik */}
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJz48ZmlsdGVyIGlkPSdnoic+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsT2lzaWUnIGJhc2VGcmVxdWVuY3k9JzAuODUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjZykiIG9wYWNpdHk9JzAuNScvPjwvc3ZnPg==')",
            backgroundSize: '200px 200px',
          }}
        />

        <Providers>
          {/* Sticky Navigation */}
          <Navigation />

          {/* Main Content mit Padding für Sticky Nav */}
          <main className="pt-14 sm:pt-16">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-border-color bg-bg-base mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-6">
              <Link
                href="/impressum"
                className="font-body text-xs text-text-main/50 hover:text-text-main transition-colors tracking-wide uppercase"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="font-body text-xs text-text-main/50 hover:text-text-main transition-colors tracking-wide uppercase"
              >
                Datenschutz
              </Link>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
