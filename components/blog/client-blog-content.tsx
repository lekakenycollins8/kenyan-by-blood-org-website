"use client";

import PostContent from "@/components/blog/post-content";
import BlogSidebar from "@/components/blog/blog-sidebar";
import RelatedPosts from "@/components/blog/related-posts";
import { BlogPost } from "@/data/blog";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface ClientBlogContentProps {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
  relatedPosts: BlogPost[];
  recentPosts: BlogPost[];
}

export default function ClientBlogContent({
  post,
  mdxSource,
  relatedPosts,
  recentPosts,
}: ClientBlogContentProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <PostContent post={post} mdxSource={mdxSource} />
          
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <RelatedPosts posts={relatedPosts} />
            </div>
          )}
        </div>
        <div className="space-y-8">
          <BlogSidebar 
            recentPosts={recentPosts} 
          />
        </div>
      </div>
    </section>
  );
}
