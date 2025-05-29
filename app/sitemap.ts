import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://iamkenyanbyblood.org/",
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: "https://iamkenyanbyblood.org/about",
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: "https://iamkenyanbyblood.org/donate",
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: "https://iamkenyanbyblood.org/partners",
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.7,
        },
        {
            url: "https://iamkenyanbyblood.org/contact",
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.6,
        }
    ]
}
