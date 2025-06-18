// Blog data types and content
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  role?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  date: string;
  author?: Author;
  categories: string[];
  tags?: string[];
  readTime?: number;
}

// Blog categories
export const BLOG_CATEGORIES = [
  "Blood Donation",
  "Impact Stories",
  "Health Tips",
  "Events",
  "Community",
  "News"
];

// Sample authors that can be referenced in MDX files
export const AUTHORS: Record<string, Author> = {
  "dr-kamau": {
    id: "dr-kamau",
    name: "Dr. James Kamau",
    avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    bio: "Hematologist with 15 years of experience in blood banking and transfusion medicine.",
    role: "Medical Director"
  },
  "sarah-njoroge": {
    id: "sarah-njoroge",
    name: "Sarah Njoroge",
    avatar: "https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg",
    bio: "Community outreach coordinator and blood donation advocate.",
    role: "Outreach Coordinator"
  },
  "derrick-ochieng": {
    id: "derrick-ochieng",
    name: "Derrick Ochieng",
    avatar: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg",
    bio: "Founder and Executive Director of Kenyan By Blood Foundation.",
    role: "Executive Director"
  }
};

// Note: Blog posts are now stored as MDX files in the content/blog directory
// This file now only contains types and reference data
