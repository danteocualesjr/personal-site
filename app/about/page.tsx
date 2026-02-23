import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-[var(--accent)]">// about</h1>

      <div className="mt-8 border border-dashed border-[var(--border)] p-6 space-y-6 text-[var(--foreground)] leading-relaxed">
        <p>
          <span className="text-[var(--accent-secondary)]">$</span> Hey! I&apos;m Dante Cuales Jr. Welcome to my little corner of the internet.
        </p>

        <p>
          I&apos;m a software engineer who enjoys building things for the web. I care about
          writing clean, thoughtful code and creating products that people actually want to use.
        </p>

        <p>
          When I&apos;m not coding, you can find me reading, exploring new ideas, or working on
          side projects. I believe in learning in public and sharing what I know along the way.
        </p>

        <p>
          This site is where I share my thoughts, the books I&apos;m reading, and the projects
          I&apos;m working on. Feel free to look around!
        </p>

        <div className="pt-4 border-t border-[var(--border)]">
          <h2 className="text-lg font-semibold text-[var(--accent)]">// connect</h2>
          <div className="mt-3 flex gap-4 text-sm">
            <a
              href="https://github.com/danteocualesjr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              [github]
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              [twitter]
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              [email]
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
