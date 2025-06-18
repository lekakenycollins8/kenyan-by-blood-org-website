"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { MDXRemoteProps } from 'next-mdx-remote';

// Define custom components for MDX rendering that are compatible with next-mdx-remote
const mdxComponents: MDXRemoteProps['components'] = {
  // Headings with proper spacing and styling
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-lg font-bold mt-6 mb-3 text-gray-900" {...props} />
  ),
  
  // Paragraphs with proper spacing
  p: (props) => (
    <p className="my-4 text-gray-700 leading-relaxed" {...props} />
  ),
  
  // Lists with proper spacing and bullets
  ul: (props) => (
    <ul className="my-6 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props) => (
    <ol className="my-6 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props) => (
    <li className="my-2" {...props} />
  ),
  
  // Links with brand colors
  a: ({ href, ...props }) => {
    if (href && href.startsWith('/')) {
      return (
        <Link 
          href={href} 
          className="text-red-600 hover:text-red-800 transition-colors duration-200 underline"
          legacyBehavior
        >
          <a {...props} />
        </Link>
      );
    }
    return (
      <a 
        href={href} 
        className="text-red-600 hover:text-red-800 transition-colors duration-200 underline"
        target={href?.startsWith('http') ? "_blank" : undefined}
        rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
        {...props}
      />
    );
  },
  
  // Blockquotes with brand styling
  blockquote: (props) => (
    <blockquote 
      className="border-l-4 border-red-500 pl-4 py-2 my-6 italic text-gray-700"
      {...props}
    />
  ),
  
  // Code blocks with syntax highlighting
  pre: (props) => (
    <pre 
      className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6"
      {...props}
    />
  ),
  code: (props) => (
    <code 
      className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  
  // Table styling
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-gray-50" {...props} />
  ),
  tbody: (props) => (
    <tbody className="divide-y divide-gray-200" {...props} />
  ),
  tr: (props) => (
    <tr {...props} />
  ),
  th: (props) => (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props) => (
    <td 
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      {...props}
    />
  ),
  
  // Horizontal rule
  hr: () => <hr className="my-8 border-t border-gray-200" />,
  
  // Custom handling for images to use Next.js Image when possible
  img: ({ src, alt, ...props }) => {
    // Only use Next.js Image for absolute URLs that we can optimize
    if (src && (src.startsWith('http') || src.startsWith('/')))
      return (
        <div className="my-8">
          <Image 
            src={src} 
            alt={alt || 'Blog image'} 
            width={800} 
            height={450} 
            className="rounded-lg mx-auto"
          />
          {alt && <p className="text-sm text-center text-gray-500 mt-2">{alt}</p>}
        </div>
      );
    
    // Fallback to regular img tag
    return <img src={src} alt={alt} className="rounded-lg my-8 mx-auto" {...props} />;
  }
};

export default mdxComponents;
