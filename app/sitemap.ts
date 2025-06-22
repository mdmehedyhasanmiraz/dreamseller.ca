// import { liveCourses } from "@/data/courses";

const baseUrl: string = "https://skilltori.com";

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  // const courses = liveCourses;

  // const coursesUrls: SitemapEntry[] = courses.map((course) => ({
  //   url: `${baseUrl}/courses/${course.type}/${course.slug}`,
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: "daily" as const,
  //   priority: 0.8,
  // }));

  const sitemapEntries: SitemapEntry[] = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/live`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/live/wordpress`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/recorded`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // ...coursesUrls,
  ];

  return sitemapEntries;
}
