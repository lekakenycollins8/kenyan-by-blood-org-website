import ClientHeader from "@/components/layout/client-header";
import ClientFooter from "@/components/layout/client-footer";
import BlogHeader from "@/components/blog/blog-header";
import ClientBlogPageContent from "@/components/blog/client-blog-page-content";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Kenyan By Blood Foundation",
  description: "Read the latest news, stories, and updates from Kenyan By Blood Foundation. Learn about blood donation, impact stories, and upcoming events.",
  keywords: ["blood donation blog", "Kenya blood donation stories", "Kenyan By Blood news", "blood donation awareness", "impact stories"],
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <main className="min-h-screen">
      <ClientHeader />
      <BlogHeader />
      <ClientBlogPageContent posts={posts} />
      <ClientFooter />
    </main>
  );
}
