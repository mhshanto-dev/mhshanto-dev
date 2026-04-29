export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://mhshanto-dev.vercel.app/sitemap.xml',
  };
}
