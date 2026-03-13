import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
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

        {/* Sticky Navigation */}
        <Navigation />

        {/* Main Content mit Padding für Sticky Nav */}
        <main className="pt-14 sm:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
