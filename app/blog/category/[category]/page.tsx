import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogHeader from "@/components/blog/blog-header";
import PostGrid from "@/components/blog/post-grid";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { getAllPosts, getAllCategories } from "@/lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { category: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Decode the category from URL format
  const decodedCategory = decodeURIComponent(params.category);
  
  // Get all categories
  const categories = await getAllCategories();
  
  // Check if category exists
  if (!categories.includes(decodedCategory)) {
    return {
      title: "Category Not Found | Kenyan By Blood Foundation",
    };
  }
  
  return {
    title: `${decodedCategory} | Blog | Kenyan By Blood Foundation`,
    description: `Read our latest articles about ${decodedCategory.toLowerCase()} from Kenyan By Blood Foundation.`,
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  // Decode the category from URL format
  const decodedCategory = decodeURIComponent(params.category);
  
  // Get all posts and categories
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  
  // Check if category exists
  if (!categories.includes(decodedCategory)) {
    notFound();
  }
  
  // Filter posts by category
  const filteredPosts = posts.filter(post => 
    post.categories.includes(decodedCategory)
  );
  
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHeader />
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Category: {decodedCategory}</h1>
          <p className="text-gray-600">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PostGrid posts={filteredPosts} />
          </div>
          <div className="space-y-8">
            <BlogSidebar 
              categories={categories} 
              recentPosts={posts.slice(0, 5)} 
              activeCategory={decodedCategory}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
