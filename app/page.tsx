import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="py-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Hey, I&apos;m Dante.
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl">
          Welcome to my corner of the internet. I write about things I&apos;m learning,
          share books I&apos;m reading, and showcase projects I&apos;m building.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            Read my blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-gray-900 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 space-y-6">
          <p className="text-gray-400 text-sm">No posts yet. Check back soon!</p>
        </div>
      </section>
    </div>
  );
}
