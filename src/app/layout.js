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
  description: "Mehedi Hasan Shanto (MH Shanto) is a Full-Stack Developer & Software Engineer from Bangladesh specializing in React, Next.js, and Node.js. Building modern, scalable web applications.",
  keywords: [
    "Mehedi Hasan Shanto", "MH Shanto", "Shanto developer", "MD Shanto",
    "Md. Mehedi Hasan Shanto", "mhshanto", "mh shanto developer",
    "M H Shanto", "Mehedi Hassan Shanto", "Mehedi Hasan", "Shanto",
    "Shanto Full Stack Developer", "Shanto Bangladesh developer",
    "Full Stack Developer Bangladesh", "Frontend Developer Dhaka",
    "Backend Developer Rajshahi", "Web Developer Sirajganj",
    "Software Engineer Bangladesh", "React Developer Bangladesh",
    "Next.js developer Bangladesh", "Node.js developer Bangladesh",
    "M.H. Shanto", "M. H. Shanto", "Mehedi Shanto"
  ],
  authors: [{ name: "Mehedi Hasan Shanto", url: personalDetails.url }],
  creator: "Mehedi Hasan Shanto",
  publisher: "Mehedi Hasan Shanto",
  category: "technology",
  alternates: {
    canonical: personalDetails.url,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: personalDetails.url,
    title: "MH Shanto | Mehedi Hasan Shanto – Full-Stack Developer Bangladesh",
    description: "Mehedi Hasan Shanto (MH Shanto) – Full-Stack Developer from Bangladesh building high-performance web applications with React, Next.js & Node.js.",
    siteName: "MH Shanto – Portfolio",
    firstName: "Mehedi Hasan",
    lastName: "Shanto",
    username: "mhshanto-dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MH Shanto (Mehedi Hasan Shanto) - Full-Stack Developer Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MH Shanto | Mehedi Hasan Shanto – Full-Stack Developer",
    description: "Mehedi Hasan Shanto (MH Shanto) – Software Engineer & Full-Stack Developer from Bangladesh.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
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
    "image": `${personalDetails.url}/og-image.png`,
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
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
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
