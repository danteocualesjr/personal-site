import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="py-8">
        <p className="text-[var(--accent-secondary)] text-sm">$ whoami</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--accent)]">
          Dante Cuales Jr
        </h1>
        <p className="mt-4 text-base text-[var(--muted)] leading-relaxed max-w-xl">
          Welcome to my corner of the internet. I write about things I&apos;m learning,
          share books I&apos;m reading, and showcase projects I&apos;m building.
        </p>
        <div className="mt-6 flex gap-4 text-sm">
          <Link
            href="/blog"
            className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            [blog]
          </Link>
          <Link
            href="/bookshelf"
            className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            [bookshelf]
          </Link>
          <Link
            href="/projects"
            className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            [projects]
          </Link>
          <Link
            href="/about"
            className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            [about]
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[var(--accent)]">// recent posts</h2>
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent-secondary)] transition-colors"
          >
            view all &rarr;
          </Link>
        </div>
        <div className="mt-4 border border-dashed border-[var(--border)] p-4">
          <div className="divide-y divide-[var(--border)]">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                />
              ))
            ) : (
              <p className="text-[var(--muted)] text-sm py-2">No posts yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
