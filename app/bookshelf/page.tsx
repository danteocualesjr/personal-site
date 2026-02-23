import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf",
};

export default function BookshelfPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Bookshelf</h1>
      <p className="mt-2 text-gray-500">
        Books that have shaped my thinking. Updated as I read.
      </p>

      <div className="mt-8 divide-y divide-gray-100">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </div>
  );
}
