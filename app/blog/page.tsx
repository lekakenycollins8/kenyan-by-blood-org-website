import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogHeader from "@/components/blog/blog-header";
import PostGrid from "@/components/blog/post-grid";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Kenyan By Blood Foundation",
  description: "Read the latest news, stories, and updates from Kenyan By Blood Foundation. Learn about blood donation, impact stories, and upcoming events.",
  keywords: ["blood donation blog", "Kenya blood donation stories", "Kenyan By Blood news", "blood donation awareness", "impact stories"],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHeader />
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PostGrid posts={BLOG_POSTS} />
          </div>
          <div className="space-y-8">
            <BlogSidebar categories={BLOG_CATEGORIES} recentPosts={BLOG_POSTS.slice(0, 5)} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
