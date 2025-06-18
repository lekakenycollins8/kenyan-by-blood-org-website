"use client";

import { useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import mdxComponents from '@/components/mdx/mdx-components';

interface ClientMDXWrapperProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function ClientMDXWrapper({ mdxSource }: ClientMDXWrapperProps) {
  // Use state to ensure this component only renders on the client side
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Only render the MDX content on the client side
  if (!isClient) {
    return <div className="animate-pulse bg-gray-100 h-64 rounded-md"></div>;
  }
  
  try {
    return <MDXRemote {...mdxSource} components={mdxComponents} />;
  } catch (error) {
    console.error('Error rendering MDX content:', error);
    return (
      <div className="p-4 border border-red-300 bg-red-50 text-red-800 rounded-md">
        <p>There was an error rendering this content.</p>
      </div>
    );
  }
}
