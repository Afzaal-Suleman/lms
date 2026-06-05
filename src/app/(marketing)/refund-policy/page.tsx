import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Refund Policy — LMS OWAIS PK",
  description: "Read our transparent refund policy and satisfaction guarantee.",
  canonical: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-28 pb-16">
      <div className="container mx-auto max-w-4xl">
        <article className="bg-white dark:bg-navy-900/50 rounded-3xl border border-border p-8 md:p-12 shadow-card">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white mb-6">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-muted-foreground mb-8">Last updated: June 05, 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              We want you to be completely satisfied with your learning experience at LMS OWAIS PK.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">1. Demo Class Guarantee</h2>
            <p>
              All students are eligible for a free interactive demo class prior to making their first payment. This ensures you can evaluate the teaching style and interactive portal before enrolling.
            </p>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mt-8 mb-4">2. Subscriptions</h2>
            <p>
              Our courses are billed monthly. You can cancel your subscription at any time via your student billing dashboard, preventing future payments. No partial refunds are issued for mid-cycle cancellations.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
