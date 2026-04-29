import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollButtons from "@/components/ScrollButtons";

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
  alternateName: ["MH Shanto", "MD Shanto"],
  jobTitle: "Full-Stack Developer",
  url: "https://mhshanto-dev.vercel.app",
  email: "mhshanto.8989.t@gmail.com",
  location: "Bangladesh (Dhaka, Sirajganj, Rajshahi)",
  sameAs: [
    "https://www.linkedin.com/in/mehedi-hasan-shanto-dev/",
    "https://github.com/mhshanto-dev",
    "https://www.facebook.com/"
  ]
};

export const metadata = {
  metadataBase: new URL(personalDetails.url),
  title: {
    default: "MH Shanto | Full-Stack Developer in Bangladesh",
    template: "%s | MH Shanto"
  },
  description: "Mehedi Hasan Shanto (MH Shanto) is a Full-Stack, Frontend & Backend Developer from Bangladesh (Dhaka, Sirajganj, Rajshahi) building modern, scalable web applications.",
  keywords: [
    "MH Shanto", "Mehedi Hasan Shanto", "MD Shanto", 
    "Full Stack Developer Bangladesh", "Frontend Developer Dhaka", 
    "Backend Developer Rajshahi", "Web Developer Sirajganj", 
    "Software Engineer Bangladesh", "React Developer Bangladesh"
  ],
  authors: [{ name: "Mehedi Hasan Shanto" }],
  creator: "Mehedi Hasan Shanto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalDetails.url,
    title: "MH Shanto | Full-Stack Developer in Bangladesh",
    description: "Mehedi Hasan Shanto (MH Shanto) - High-performance web solutions from Bangladesh.",
    siteName: "MH Shanto Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MH Shanto - Full-Stack Developer Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Shanto | Full-Stack Developer",
    description: "Mehedi Hasan Shanto (MH Shanto) - Software Engineer in Bangladesh.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalDetails.name,
    "alternateName": personalDetails.alternateName,
    "jobTitle": [
      "Full-Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Software Engineer"
    ],
    "url": personalDetails.url,
    "image": `${personalDetails.url}/profile.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka, Sirajganj, Rajshahi",
      "addressCountry": "Bangladesh"
    },
    "sameAs": personalDetails.sameAs,
    "description": metadata.description,
    "email": personalDetails.email
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden`}>
        <Providers>
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
