"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="relative h-56 md:h-auto md:w-1/3">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover h-full w-full bg-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="p-6 md:w-2/3">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories && post.categories.length > 0 && post.categories.map((category) => (
            <Link 
              key={category} 
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs font-medium px-2 py-1 bg-[#006600]/10 text-[#006600] rounded-full hover:bg-[#006600]/20"
            >
              {category}
            </Link>
          ))}
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-[#DC241f]">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          
          {post.readTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          )}
        </div>
        
        {post.author?.name && (
          <div className="flex items-center">
            {post.author.avatar && (
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              {post.author.role && (
                <p className="text-xs text-gray-500">{post.author.role}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
