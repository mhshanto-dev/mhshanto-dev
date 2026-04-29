export default function sitemap() {
  const baseUrl = "https://mhshanto-dev.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs if you have blog pages or projects
  ];
}
