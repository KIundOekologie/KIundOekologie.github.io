"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg-base/70 backdrop-blur-glass border-b border-border-color/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Titel */}
          <Link
            href="/"
            className="font-heading text-lg sm:text-xl font-medium text-text-main tracking-tight"
          >
            Digitaler Garten
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 sm:gap-8">
            <Link href="/" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Home
            </Link>
            <Link href="/station-1" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Station 1
            </Link>
            <Link href="/station-2" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Station 2
            </Link>
            <Link href="/station-3" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Station 3
            </Link>
            <Link href="/station-4" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Station 4
            </Link>
            <Link href="/station-5" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Station 5
            </Link>
            <Link href="/station-6" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Station 6
            </Link>
            <Link href="/feedback" className="text-sm text-text-main/70 hover:text-text-main transition-colors">
              Feedback
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-text-main"
            aria-label="Menü öffnen"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-color bg-bg-base">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/station-1" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Station 1
            </Link>
            <Link href="/station-2" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Station 2
            </Link>
            <Link href="/station-3" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Station 3
            </Link>
            <Link href="/station-4" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Station 4
            </Link>
            <Link href="/station-5" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Station 5
            </Link>
            <Link href="/station-6" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Station 6
            </Link>
            <Link href="/feedback" className="block py-2 text-text-main/70 hover:text-text-main" onClick={() => setMenuOpen(false)}>
              Feedback
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
