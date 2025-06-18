"use client";

import PostHeader from "@/components/blog/post-header";
import { BlogPost } from "@/data/blog";

interface ClientPostHeaderProps {
  post: BlogPost;
}

export default function ClientPostHeader({
  post,
}: ClientPostHeaderProps) {
  return (
    <PostHeader post={post} />
  );
}
