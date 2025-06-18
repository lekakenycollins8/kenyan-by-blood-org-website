"use client";

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import mdxComponents from '@/components/mdx/mdx-components';

interface ClientMDXWrapperProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function ClientMDXWrapper({ mdxSource }: ClientMDXWrapperProps) {
  return <MDXRemote {...mdxSource} components={mdxComponents} />;
}
