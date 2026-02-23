import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({ slug, title, date, excerpt }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="py-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            {title}
          </h3>
          <time className="text-sm text-gray-400 shrink-0">{date}</time>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{excerpt}</p>
      </article>
    </Link>
  );
}
