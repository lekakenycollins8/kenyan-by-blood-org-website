"use client";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogSidebarProps {
  categories: string[];
  recentPosts: BlogPost[];
}

export default function BlogSidebar({ categories, recentPosts }: BlogSidebarProps) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link 
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#006600] hover:underline flex items-center"
              >
                <span className="w-2 h-2 bg-[#006600] rounded-full mr-2"></span>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <Link 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <h4 className="font-medium text-gray-800 group-hover:text-[#DC241f] line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-[#DC241f]/10 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-[#DC241f]">Donate Blood</h3>
        <p className="text-gray-700 mb-4">
          Your donation can save up to three lives. Find a donation center near you.
        </p>
        <Link 
          href="/donate"
          className="inline-block px-4 py-2 bg-[#DC241f] text-white rounded-md hover:bg-[#DC241f]/90 transition-colors"
        >
          Donate Now
        </Link>
      </div>
    </>
  );
}
