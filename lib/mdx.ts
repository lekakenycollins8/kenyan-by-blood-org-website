import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogPost, Author } from '@/data/blog';

// Path to our blog content
const BLOG_PATH = path.join(process.cwd(), 'content/blog');

// Get all blog post slugs
export async function getAllPostSlugs() {
  const files = fs.readdirSync(BLOG_PATH);
  return files.map(file => file.replace(/\.mdx$/, ''));
}

// Get blog post content by slug
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const mdxSource = await serialize(content);
  
  return {
    slug,
    frontMatter: data,
    mdxSource,
  };
}

// Get all blog posts with their frontmatter
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getAllPostSlugs();
  const postsWithNulls = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post) return null;
      
      // Convert frontmatter to BlogPost type
      return {
        slug,
        title: post.frontMatter.title,
        excerpt: post.frontMatter.excerpt,
        coverImage: post.frontMatter.coverImage,
        date: post.frontMatter.date,
        author: post.frontMatter.author as Author,
        categories: post.frontMatter.categories || [],
        tags: post.frontMatter.tags || [],
        readTime: post.frontMatter.readTime,
        content: '', // We don't need to store the content here as we'll use mdxSource
      } as BlogPost;
    })
  );
  
  // Filter out any null posts and sort by date (newest first)
  const posts = postsWithNulls
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
}

// Get all categories from blog posts
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set<string>();
  
  posts.forEach(post => {
    post.categories.forEach(category => {
      categories.add(category);
    });
  });
  
  return Array.from(categories);
}

// Get all tags from blog posts
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      if (tag) tags.add(tag);
    });
  });
  
  return Array.from(tags);
}
