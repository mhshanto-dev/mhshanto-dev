import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollButtons from "@/components/ScrollButtons";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const personalDetails = {
  name: "Mehedi Hasan Shanto",
  alternateName: ["MH Shanto", "MD Shanto", "Md. Mehedi Hasan Shanto", "M.H. Shanto", "Mehedi Shanto", "Shanto"],
  jobTitle: "Full-Stack Developer",
  url: "https://mhshanto-dev.vercel.app",
  email: "mhshanto.8989.t@gmail.com",
  location: "Bangladesh (Dhaka, Sirajganj, Rajshahi)",
  sameAs: [
    "https://www.linkedin.com/in/mh-shanto/",
    "https://github.com/mhshanto-dev",
    "https://www.facebook.com/mehedi.hasan.shanto.dev"
  ]
};

export const metadata = {
  metadataBase: new URL(personalDetails.url),
  applicationName: "MH Shanto Portfolio",
  title: {
    default: "MH Shanto | Mehedi Hasan Shanto – Full-Stack Developer Bangladesh",
    template: "%s | MH Shanto"
  },
  description: "Mehedi Hasan Shanto (MH Shanto) is a professional Full-Stack Developer and Software Engineer from Sirajganj, Rajshahi, Dhaka, Bangladesh. Specializing in React, Next.js, and Node.js to build modern web applications.",
  keywords: [
    "Mehedi Hasan Shanto", "MH Shanto", "Shanto developer", "MD Shanto",
    "Md. Mehedi Hasan Shanto", "mhshanto", "mh shanto developer",
    "M H Shanto", "Mehedi Hassan Shanto", "Mehedi Hasan", "Shanto",
    "Sirajganj Developer", "Rajshahi Developer", "Dhaka Developer",
    "Shanto Full Stack Developer", "Shanto Bangladesh developer",
    "Full Stack Developer Bangladesh", "Frontend Developer Dhaka",
    "Backend Developer Rajshahi", "Web Developer Sirajganj",
    "Software Engineer Bangladesh", "React Developer Bangladesh",
    "Next.js developer Bangladesh", "Node.js developer Bangladesh",
    "M.H. Shanto", "M. H. Shanto", "Mehedi Shanto",
    "hiring full stack developer", "hiring web developer", "hiring software engineer",
    "hire full stack developer", "hire web developer", "hire software engineer",
    "frond end developer", "backend developer", "front end developer",
    "hiring react developer", "hiring nextjs developer", "best developer for hire",
    "web development", "web developer", "software engineer", "ai", "ai developer",
    "artificial intelligence", "ai web developer", "machine learning",
    "Ai powered developer", "AI-driven developer"
  ],
  authors: [{ name: "Mehedi Hasan Shanto", url: personalDetails.url }],
  creator: "Mehedi Hasan Shanto",
  publisher: "Mehedi Hasan Shanto",
  category: "technology",

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: personalDetails.url,
    title: "MH Shanto | Mehedi Hasan Shanto – Full-Stack Developer Bangladesh",
    description: "Mehedi Hasan Shanto (MH Shanto) – Full-Stack Developer from Sirajganj, Rajshahi, Dhaka, Bangladesh. Building high-performance web applications with React, Next.js & Node.js.",
    siteName: "MH Shanto – Portfolio",
    firstName: "Mehedi Hasan",
    lastName: "Shanto",
    username: "mhshanto-dev",
    images: [
      {
        url: `${personalDetails.url}/icon.png`,
        alt: "MH Shanto (Mehedi Hasan Shanto) - Full-Stack Developer Bangladesh",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Shanto | Mehedi Hasan Shanto – Full-Stack Developer",
    description: "Mehedi Hasan Shanto (MH Shanto) – Software Engineer & Full-Stack Developer from Sirajganj, Rajshahi, Dhaka, Bangladesh.",
    images: [`${personalDetails.url}/icon.png`],
    creator: "@mhshanto_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3xTfRXUs6iW9698yGww7p4GRMFnWWqcvUKyTpjR-3mw",
  },
  // Next.js automatically handles icon.png in the app directory.
  // No manual icons metadata needed if using the file-based convention.
  // However, we can keep it for absolute clarity if the file is in public.
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${personalDetails.url}/#person`,
        "name": personalDetails.name,
        "alternateName": personalDetails.alternateName,
        "givenName": "Mehedi Hasan",
        "familyName": "Shanto",
        "jobTitle": [
          "Full-Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "Software Engineer"
        ],
        "url": personalDetails.url,
        "image": {
          "@type": "ImageObject",
          "@id": `${personalDetails.url}/#personImage`,
          "url": `${personalDetails.url}/icon.png`,
          "contentUrl": `${personalDetails.url}/icon.png`,
          "width": "512",
          "height": "512",
          "caption": "Mehedi Hasan Shanto (MH Shanto)"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressRegion": "Dhaka Division",
          "addressCountry": "BD"
        },
        "sameAs": personalDetails.sameAs,
        "description": "Mehedi Hasan Shanto, also known as MH Shanto, is a Full-Stack Developer and Software Engineer from Bangladesh specializing in React, Next.js, Node.js, and modern web technologies.",
        "email": personalDetails.email,
        "knowsAbout": [
          "React", "Next.js", "Node.js", "JavaScript", "TypeScript",
          "Full-Stack Development", "Web Development", "Software Engineering"
        ],
        "nationality": {
          "@type": "Country",
          "name": "Bangladesh"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${personalDetails.url}/#website`,
        "url": personalDetails.url,
        "name": "MH Shanto Portfolio",
        "description": "Professional Portfolio of Mehedi Hasan Shanto",
        "publisher": { "@id": `${personalDetails.url}/#person` },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${personalDetails.url}/#webpage`,
        "url": personalDetails.url,
        "name": "MH Shanto | Mehedi Hasan Shanto – Full-Stack Developer",
        "isPartOf": { "@id": `${personalDetails.url}/#website` },
        "about": { "@id": `${personalDetails.url}/#person` },
        "description": "Mehedi Hasan Shanto (MH Shanto) – Full-Stack Developer from Sirajganj, Rajshahi, Dhaka, Bangladesh.",
        "primaryImageOfPage": { "@id": `${personalDetails.url}/#personImage` }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden`}>
        <Providers>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </Providers>
        <Script
          id="person-schema"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
