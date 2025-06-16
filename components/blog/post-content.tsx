"use client";
import { BlogPost } from "@/data/blog";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult, MDXRemoteProps } from 'next-mdx-remote';
import mdxComponents from '@/components/mdx/mdx-components';

// Using MDX for rendering blog content with enhanced features
export default function PostContent({ post, mdxSource }: { post: BlogPost, mdxSource: MDXRemoteSerializeResult }) {
  // Function to handle social sharing
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        // Use Web Share API if available
        if (navigator.share) {
          navigator.share({
            title: post.title,
            text: post.excerpt,
            url: window.location.href,
          });
          return;
        }
        // Fallback to copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Social sharing buttons */}
        <div className="flex justify-end mb-6 space-x-2">
          <button 
            onClick={() => handleShare('facebook')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-5 w-5 text-[#1877F2]" />
          </button>
          <button 
            onClick={() => handleShare('twitter')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5 text-[#1DA1F2]" />
          </button>
          <button 
            onClick={() => handleShare('linkedin')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-[#0A66C2]" />
          </button>
          <button 
            onClick={() => handleShare('other')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Share via other means"
          >
            <Share2 className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        
        {/* Article content */}
        <div className="prose prose-lg max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:my-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-li:ml-4 prose-img:my-8 prose-img:rounded-lg prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:transition-colors prose-a:duration-200 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </div>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h4 className="text-sm font-medium text-gray-500 mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Author bio */}
        {post.author.bio && (
          <div className="mt-8 pt-6 border-t">
            <h4 className="text-lg font-medium mb-3">About the Author</h4>
            <p className="text-gray-600">{post.author.bio}</p>
          </div>
        )}
      </div>
    </article>
  );
}
