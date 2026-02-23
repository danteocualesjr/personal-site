import { getAllPosts, getPostBySlug, markdownToHtml, getReadingTime } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);
  const readingTime = getReadingTime(post.content);

  return (
    <article>
      <Link
        href="/blog"
        className="text-sm text-[var(--muted)] hover:text-[var(--accent-secondary)] transition-colors"
      >
        &larr; cd ../blog
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--accent)]">{post.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-xs text-[var(--muted)]">
          <time>{post.date}</time>
          <span>|</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <div
        className="mt-10 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
