import type { Book } from "@/data/books";

export default function BookCard({ title, author, note, rating }: Book) {
  return (
    <div className="py-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-[var(--foreground)]">{title}</h3>
          <p className="text-sm text-[var(--muted)]">by {author}</p>
        </div>
        {rating && (
          <span className="text-sm text-[var(--accent)] shrink-0">
            {"[".concat("=".repeat(rating), " ".repeat(5 - rating), "]")} {rating}/5
          </span>
        )}
      </div>
      {note && <p className="mt-2 text-sm text-[var(--muted)] italic">&quot;{note}&quot;</p>}
    </div>
  );
}
