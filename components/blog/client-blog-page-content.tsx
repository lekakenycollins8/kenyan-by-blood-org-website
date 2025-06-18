"use client";

import PostGrid from "@/components/blog/post-grid";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { BlogPost } from "@/data/blog";

interface ClientBlogPageContentProps {
  posts: BlogPost[];
}

export default function ClientBlogPageContent({
  posts,
}: ClientBlogPageContentProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <PostGrid posts={posts} />
        </div>
        <div className="space-y-8">
          <BlogSidebar recentPosts={posts.slice(0, 5)} />
        </div>
      </div>
    </section>
  );
}
