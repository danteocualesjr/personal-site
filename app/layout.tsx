import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dante Cuales Jr",
    template: "%s | Dante Cuales Jr",
  },
  description: "Personal website of Dante Cuales Jr — thoughts, bookshelf, projects, and more.",
  openGraph: {
    title: "Dante Cuales Jr",
    description: "Thoughts, bookshelf, projects, and more.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dante Cuales Jr",
    description: "Thoughts, bookshelf, projects, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className}`}>
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-12 min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
