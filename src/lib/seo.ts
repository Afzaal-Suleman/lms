import { Metadata } from "next";

const siteConfig = {
  name: "LMS OWAIS PK",
  description:
    "Master Cambridge O & A Levels Online. Live classes, expert teachers, recorded lessons, and exam-focused learning for students worldwide.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://lmsowais.pk",
  ogImage: "/og-image.jpg",
  twitter: "@lmsowais",
  keywords: [
    "online O level classes",
    "online A level classes",
    "Cambridge tuition online",
    "Edexcel tuition online",
    "O level maths classes",
    "A level physics tuition",
    "online academy",
    "live online classes",
    "Cambridge International tutors",
    "online school for O levels",
    "Cambridge O level tuition",
    "A level tuition online",
    "Pakistan online classes",
    "GCC students online tuition",
  ],
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Cambridge & Edexcel O/A Level Online Academy`;
  const fullDescription = description || siteConfig.description;
  const ogImage = image || siteConfig.ogImage;
  const allKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: "LMS OWAIS PK" }],
    creator: "LMS OWAIS PK",
    publisher: "LMS OWAIS PK",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonical || siteConfig.url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      site: siteConfig.twitter,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}

// JSON-LD Structured Data Generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "LMS OWAIS PK",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.facebook.com/lmsowais",
      "https://www.instagram.com/lmsowais",
      "https://www.youtube.com/@lmsowais",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cambridge & Edexcel Online Courses",
    },
  };
}

export function generateCourseSchema({
  name,
  description,
  provider,
  url,
  image,
  price,
  currency = "USD",
}: {
  name: string;
  description: string;
  provider: string;
  url: string;
  image?: string;
  price?: number;
  currency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "LMS OWAIS PK",
      sameAs: siteConfig.url,
    },
    instructor: {
      "@type": "Person",
      name: provider,
    },
    url,
    image,
    offers: price
      ? {
          "@type": "Offer",
          price,
          priceCurrency: currency,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  publishedAt,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "LMS OWAIS PK",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

export { siteConfig };
