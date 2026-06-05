import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service — LMS OWAIS PK",
  description: "Read the Terms and Conditions of service for enrolling and studying at LMS OWAIS PK.",
  canonical: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-28 pb-16">
      <div className="container mx-auto max-w-4xl">
        <article className="bg-white dark:bg-navy-900/50 rounded-3xl border border-border p-8 md:p-12 shadow-card">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xs text-muted-foreground mb-8">Last updated: June 05, 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              By accessing this website and enrolling in our courses, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">1. Use of Content</h2>
            <p>
              All video recordings, lecture notes, assignments, and mock exam questions are intellectual property of LMS OWAIS PK. Sharing credentials or redistributing these resources without permission will result in account suspension.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">2. Account Responsibility</h2>
            <p>
              You are responsible for keeping your login credentials secure. Accounts are intended for individual student learning; concurrent sessions from multiple IP locations may trigger access blocks.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
