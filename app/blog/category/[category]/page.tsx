import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogHeader from "@/components/blog/blog-header";
import PostGrid from "@/components/blog/post-grid";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

type Props = {
  params: { category: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Convert slug format back to display format
  const categoryName = params.category.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  
  if (!BLOG_CATEGORIES.some(cat => cat.toLowerCase() === categoryName.toLowerCase())) {
    return {
      title: "Category Not Found | Kenyan By Blood Foundation",
    };
  }
  
  return {
    title: `${categoryName} | Blog | Kenyan By Blood Foundation`,
    description: `Read our latest articles about ${categoryName.toLowerCase()} from Kenyan By Blood Foundation.`,
  };
}

export default function CategoryPage({ params }: Props) {
  // Convert slug format back to display format
  const categoryName = params.category.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  
  // Check if category exists
  if (!BLOG_CATEGORIES.some(cat => cat.toLowerCase() === categoryName.toLowerCase())) {
    notFound();
  }
  
  // Filter posts by category
  const categoryPosts = BLOG_POSTS.filter(post => 
    post.categories.some(cat => cat.toLowerCase() === categoryName.toLowerCase())
  );
  
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHeader />
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Category: <span className="text-[#DC241f]">{categoryName}</span>
          </h2>
          <p className="text-gray-600">
            Showing {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PostGrid posts={categoryPosts} />
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
