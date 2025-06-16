"use client";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPreview() {
  // Get the latest 3 blog posts for the preview
  const previewPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600 max-w-2xl">
              Stories, updates, and insights from our blood donation community across Kenya.
            </p>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0">
            <Button 
              variant="outline" 
              className="border-[#006600] text-[#006600] hover:bg-[#006600] hover:text-white"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.slice(0, 1).map((category) => (
                      <span 
                        key={category} 
                        className="text-xs font-medium px-2 py-1 bg-[#006600]/10 text-[#006600] rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-[#DC241f] line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
