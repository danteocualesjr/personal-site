"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)]">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[var(--accent)] hover:text-[var(--accent-secondary)] transition-colors">
          ~/dante
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-[var(--accent)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--accent-secondary)]"
                }`}
              >
                {pathname === href ? `> ${label}` : label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "[x]" : "[=]"}
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="sm:hidden border-t border-[var(--border)] px-6 py-4">
          <ul className="space-y-3 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition-colors ${
                    pathname === href
                      ? "text-[var(--accent)] font-medium"
                      : "text-[var(--muted)] hover:text-[var(--accent-secondary)]"
                  }`}
                >
                  {pathname === href ? `> ${label}` : `  ${label}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
