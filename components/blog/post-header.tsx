"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export default function PostHeader({ post }: { post: BlogPost }) {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 h-96">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <div className="relative w-full h-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-32 pb-24">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Blog</span>
        </Link>
        
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Link 
                key={category} 
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-medium px-2 py-1 bg-white/20 text-white rounded-full hover:bg-white/30"
              >
                {category}
              </Link>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-white/80 mb-6">
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
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 border-2 border-white">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-sm text-white/80">{post.author.role}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
