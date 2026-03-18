"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/station-1", label: "Station 1" },
    { href: "/station-2", label: "Station 2" },
    { href: "/station-3", label: "Station 3" },
    { href: "/station-4", label: "Station 4" },
    { href: "/station-5", label: "Station 5" },
    { href: "/station-6", label: "Station 6" },
    { href: "/feedback", label: "Feedback" },
  ];

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
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm transition-colors relative ${
                    isActive
                      ? "text-accent-terra font-medium after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[2px] after:bg-accent-terra"
                      : "text-text-main/70 hover:text-text-main"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
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
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block py-2 transition-colors ${
                    isActive
                      ? "text-accent-terra font-medium border-l-2 border-accent-terra pl-3"
                      : "text-text-main/70 hover:text-text-main"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
