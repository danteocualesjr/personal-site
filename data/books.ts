export interface Book {
  title: string;
  author: string;
  cover?: string;
  note?: string;
  rating?: number;
  link?: string;
}

export const books: Book[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    note: "Tiny changes, remarkable results. Changed how I think about building systems.",
    rating: 5,
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    note: "A classic for anyone serious about software craft.",
    rating: 5,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    note: "A compelling case for focused, distraction-free work.",
    rating: 4,
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    note: "The best book on distributed systems and data engineering I've read.",
    rating: 5,
  },
];
