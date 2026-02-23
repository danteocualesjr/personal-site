"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-100">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          Dante Cuales Jr
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
