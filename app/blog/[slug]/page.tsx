import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PostContent from "@/components/blog/post-content";
import PostHeader from "@/components/blog/post-header";
import BlogSidebar from "@/components/blog/blog-sidebar";
import RelatedPosts from "@/components/blog/related-posts";
import { getPostBySlug, getAllPosts, getAllCategories } from "@/lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next';

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Use Promise.resolve to ensure we get all posts
  const posts = await Promise.resolve(getAllPosts());
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Await params before using them
  const resolvedParams = await Promise.resolve(params);
  const postData = await getPostBySlug(resolvedParams.slug);
  
  if (!postData) {
    return {
      title: "Post Not Found | Kenyan By Blood Foundation",
    };
  }
  
  return {
    title: `${postData.frontMatter.title} | Blog | Kenyan By Blood Foundation`,
    description: postData.frontMatter.excerpt,
    openGraph: {
      images: [postData.frontMatter.coverImage],
      type: 'article',
      authors: [postData.frontMatter.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  // Await params before using them
  const resolvedParams = await Promise.resolve(params);
  const postData = await getPostBySlug(resolvedParams.slug);
  
  if (!postData) {
    notFound();
  }
  
  const allPosts = await getAllPosts();
  const categories = await getAllCategories();
  
  // Create a post object with the necessary data
  const post = {
    slug: resolvedParams.slug,
    title: postData.frontMatter.title,
    excerpt: postData.frontMatter.excerpt,
    coverImage: postData.frontMatter.coverImage,
    date: postData.frontMatter.date,
    author: postData.frontMatter.author,
    categories: postData.frontMatter.categories || [],
    tags: postData.frontMatter.tags || [],
    readTime: postData.frontMatter.readTime,
    content: '',
    mdxSource: postData.mdxSource
  };
  
  // Find related posts based on categories
  const relatedPosts = allPosts
    .filter(p => p.slug !== resolvedParams.slug) // Exclude current post
    .filter(p => p.categories.some(category => post.categories.includes(category)))
    .slice(0, 3); // Limit to 3 related posts
  
  return (
    <main className="min-h-screen">
      <Header />
      <PostHeader post={post} />
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PostContent post={post} mdxSource={postData.mdxSource} />
            
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}
          </div>
          <div className="space-y-8">
            <BlogSidebar 
              categories={categories} 
              recentPosts={allPosts.filter(p => p.slug !== resolvedParams.slug).slice(0, 5)} 
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
