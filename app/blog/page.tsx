import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-gray-500">Thoughts, ideas, and things I&apos;m learning.</p>

      <div className="mt-8 divide-y divide-gray-100">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          ))
        ) : (
          <p className="text-gray-400 text-sm py-4">No posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
