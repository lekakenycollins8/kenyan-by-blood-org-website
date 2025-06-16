"use client";
import { useState } from "react";
import PostCard from "@/components/blog/post-card";
import { BlogPost } from "@/data/blog";
import { Search } from "lucide-react";

export default function PostGrid({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState("");
  
  const filteredPosts = filter 
    ? posts.filter(post => 
        post.title.toLowerCase().includes(filter.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filter.toLowerCase()) ||
        post.categories.some(category => category.toLowerCase().includes(filter.toLowerCase()))
      )
    : posts;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
        <div className="relative w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
          </div>
        </div>
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found matching your search.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
