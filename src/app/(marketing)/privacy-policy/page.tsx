import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy — LMS OWAIS PK",
  description: "Learn how we collect, use, and safeguard student and parent information at LMS OWAIS PK.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-28 pb-16">
      <div className="container mx-auto max-w-4xl">
        <article className="bg-white dark:bg-navy-900/50 rounded-3xl border border-border p-8 md:p-12 shadow-card">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground mb-8">Last updated: June 05, 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              At LMS OWAIS PK, accessible from lmsowais.pk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by LMS OWAIS PK and how we use it.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              When you enroll, sign up, or contact us, we may collect information including your name, email, phone number, country, and timezone. If you complete payments, we use third-party processors (like Stripe) and do not store sensitive payment details on our servers.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the collected details to verify user registration, provide access to video streaming lessons, coordinate live Zoom class links, sync calendars, and send learning notifications.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">3. Security of Data</h2>
            <p>
              We prioritize secure data storage. The application uses NextAuth, CSRF protection, and rate-limiting to prevent unauthorized access.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
