import ClientHeader from "@/components/layout/client-header";
import ClientFooter from "@/components/layout/client-footer";
import ClientPostHeader from "@/components/blog/client-post-header";
import ClientBlogContent from "@/components/blog/client-blog-content";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
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
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Await params in Next.js 15
  const { slug } = await params;
  const postData = await getPostBySlug(slug);
  
  if (!postData) {
    return {
      title: "Post Not Found | Kenyan By Blood Foundation",
    };
  }
  
  const metadata: Metadata = {
    title: `${postData.frontMatter.title} | Blog | Kenyan By Blood Foundation`,
    description: postData.frontMatter.excerpt,
    openGraph: {
      images: [postData.frontMatter.coverImage],
      type: 'article',
    },
  };
  
  // Add author to OpenGraph metadata only if it exists
  if (postData.frontMatter.author?.name && metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      authors: [postData.frontMatter.author.name],
      type: 'article', // Ensure type is explicitly set when updating
    };
  }
  
  return metadata;
}

export default async function BlogPostPage({ params }: Props) {
  // Await params in Next.js 15
  const { slug } = await params;
  const postData = await getPostBySlug(slug);
  
  if (!postData) {
    notFound();
  }
  
  const allPosts = await getAllPosts();
  
  // Create a post object with the necessary data
  const post = {
    slug: slug,
    title: postData.frontMatter.title,
    excerpt: postData.frontMatter.excerpt,
    coverImage: postData.frontMatter.coverImage,
    date: postData.frontMatter.date,
    author: postData.frontMatter.author,
    categories: postData.frontMatter.categories,
    tags: postData.frontMatter.tags || [],
    readTime: postData.frontMatter.readTime,
    content: '',
    mdxSource: postData.mdxSource
  };
  
  // Get random related posts (since we don't use categories)
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug) // Exclude current post
    .sort(() => 0.5 - Math.random()) // Randomize order
    .slice(0, 3); // Limit to 3 related posts
  
  return (
    <main className="min-h-screen">
      <ClientHeader />
      <ClientPostHeader post={post} />
      <ClientBlogContent
        post={post}
        mdxSource={postData.mdxSource}
        relatedPosts={relatedPosts}
        recentPosts={allPosts.filter(p => p.slug !== slug).slice(0, 5)}
      />
      <ClientFooter />
    </main>
  );
}