import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Get current date in ISO format for lastModified
const currentDate = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://iamkenyanbyblood.org/",
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: "https://iamkenyanbyblood.org/about",
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: "https://iamkenyanbyblood.org/donate",
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: "https://iamkenyanbyblood.org/partners",
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.7,
        },
        {
            url: "https://iamkenyanbyblood.org/contact",
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.6,
        }
    ]
}
