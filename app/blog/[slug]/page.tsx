import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PostContent from "@/components/blog/post-content";
import PostHeader from "@/components/blog/post-header";
import BlogSidebar from "@/components/blog/blog-sidebar";
import RelatedPosts from "@/components/blog/related-posts";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = BLOG_POSTS.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Kenyan By Blood Foundation",
    };
  }
  
  return {
    title: `${post.title} | Blog | Kenyan By Blood Foundation`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
      type: 'article',
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Find related posts based on categories
  const relatedPosts = BLOG_POSTS
    .filter(p => p.slug !== post.slug) // Exclude current post
    .filter(p => p.categories.some(category => post.categories.includes(category)))
    .slice(0, 3); // Limit to 3 related posts
  
  return (
    <main className="min-h-screen">
      <Header />
      <PostHeader post={post} />
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PostContent post={post} />
            
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}
          </div>
          <div className="space-y-8">
            <BlogSidebar 
              categories={BLOG_CATEGORIES} 
              recentPosts={BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 5)} 
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
