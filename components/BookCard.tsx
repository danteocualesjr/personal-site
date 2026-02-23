import type { Book } from "@/data/books";

export default function BookCard({ title, author, note, rating }: Book) {
  return (
    <div className="py-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{author}</p>
        </div>
        {rating && (
          <span className="text-sm text-gray-400 shrink-0">
            {"★".repeat(rating)}{"☆".repeat(5 - rating)}
          </span>
        )}
      </div>
      {note && <p className="mt-2 text-sm text-gray-500">{note}</p>}
    </div>
  );
}
