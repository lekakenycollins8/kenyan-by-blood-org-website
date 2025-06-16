"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border-t pt-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-4 flex-grow">
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
                
                <h4 className="font-bold mb-2 text-gray-900 group-hover:text-[#DC241f] line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <p className="text-xs text-gray-500">
                  {post.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
