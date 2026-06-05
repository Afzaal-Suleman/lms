import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { inter, playfair } from "@/lib/fonts";
import { generateOrganizationSchema } from "@/lib/seo";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LMS OWAIS PK — Cambridge & Edexcel O/A Level Online Academy",
    template: "%s | LMS OWAIS PK",
  },
  description:
    "Master Cambridge O & A Levels Online. Live classes, expert teachers, recorded lessons, and exam-focused learning for students in UK, GCC, Pakistan, Malaysia, Africa, and Europe.",
  keywords: [
    "online O level classes",
    "online A level classes",
    "Cambridge tuition online",
    "Edexcel tuition online",
    "O level maths classes",
    "A level physics tuition",
    "online academy Pakistan",
    "live online classes",
    "Cambridge International tutors",
    "online school for O levels",
  ],
  authors: [{ name: "LMS OWAIS PK" }],
  creator: "LMS OWAIS PK",
  publisher: "LMS OWAIS PK",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://lmsowais.pk"
  ),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://lmsowais.pk",
    siteName: "LMS OWAIS PK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LMS OWAIS PK — Cambridge & Edexcel Online Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lmsowais",
    creator: "@lmsowais",
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
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
