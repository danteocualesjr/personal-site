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
        className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
      >
        &larr; Back to blog
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-gray-400">
          <time>{post.date}</time>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <div
        className="mt-10 prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
