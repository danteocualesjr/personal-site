export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 py-8 text-center text-xs text-[var(--muted)]">
        <p>&#47;&#47; &copy; {new Date().getFullYear()} Dante Cuales Jr &mdash; all rights reserved</p>
        <p className="mt-1 text-[var(--border)]">{"< built with next.js />"}</p>
      </div>
    </footer>
  );
}
