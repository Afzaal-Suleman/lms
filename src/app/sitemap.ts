import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lmsowais.pk";

  // Public static pages
  const staticPages = [
    "",
    "/subjects",
    "/how-it-works",
    "/teachers",
    "/results",
    "/fees",
    "/contact",
    "/blog",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Dynamic Courses (from our mock listing)
  const courses = ["mathematics", "physics", "chemistry", "biology", "accounting", "business", "computer-science", "english"];
  const courseUrls = courses.map((slug) => ({
    url: `${baseUrl}/subjects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Blog posts
  const blogPosts = ["how-to-get-a-star-a-level-maths", "5-proven-study-tips-for-exam-revision"];
  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...courseUrls, ...blogUrls];
}
