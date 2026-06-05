"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CURRENCIES, EXCHANGE_RATES, formatCurrency } from "@/lib/utils";

const plans = [
  {
    id: "single",
    name: "Single Subject",
    desc: "Perfect for focusing on one subject",
    priceUSD: 80,
    features: ["3 live classes/week", "Recorded lectures", "PDF notes", "Assignments & feedback", "2 mock exams/month", "WhatsApp support"],
    highlight: false,
    badge: null,
  },
  {
    id: "bundle",
    name: "3-Subject Bundle",
    desc: "Most popular for full O Level preparation",
    priceUSD: 210,
    features: ["All Single Subject features", "3 subjects of your choice", "Priority teacher support", "Monthly progress reports", "4 mock exams/month", "Parent progress updates"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "full",
    name: "Full A Level Package",
    desc: "Complete A Level preparation",
    priceUSD: 320,
    features: ["All Bundle features", "Up to 5 subjects", "1-on-1 doubt sessions", "Exam registration guidance", "University application tips", "Dedicated student mentor", "Certificate on completion"],
    highlight: false,
    badge: "Best Value",
  },
];

type Currency = keyof typeof CURRENCIES;

export default function FeesPage() {
  const [currency, setCurrency] = useState<Currency>("USD");

  function convertPrice(usd: number) {
    const rate = EXCHANGE_RATES[currency];
    const amount = usd * rate;
    const sym = CURRENCIES[currency].symbol;
    return `${sym}${Math.round(amount).toLocaleString()}`;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="gradient-text-hero">Pricing</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. Cancel anytime. Choose the plan that fits your goals.
          </p>
          {/* Currency switcher */}
          <div className="inline-flex bg-white/10 rounded-xl p-1 gap-1" role="group" aria-label="Select currency">
            {(Object.keys(CURRENCIES) as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${currency === c ? "bg-teal-500 text-white" : "text-white/60 hover:text-white"}`}
                aria-pressed={currency === c}
              >
                {CURRENCIES[c].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-slate-50 dark:bg-navy-950" aria-labelledby="pricing-heading">
        <div className="container mx-auto">
          <h2 id="pricing-heading" className="sr-only">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative rounded-3xl border overflow-hidden flex flex-col ${plan.highlight ? "border-teal-500 shadow-teal bg-white dark:bg-navy-900" : "border-border bg-white dark:bg-navy-900/50"}`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${plan.highlight ? "bg-teal-500 text-white" : "bg-navy-900 text-white"}`}>{plan.badge}</span>
                  </div>
                )}
                <div className={`p-8 ${plan.highlight ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white" : ""}`}>
                  <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>{plan.desc}</p>
                  <div className={`text-4xl font-black mb-1 ${plan.highlight ? "text-white" : "text-navy-900 dark:text-white"}`}>
                    {convertPrice(plan.priceUSD)}
                    <span className={`text-base font-normal ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>/mo</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1" aria-label={`${plan.name} features`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant={plan.highlight ? "teal" : "outline"} size="lg" className="w-full gap-2" id={`plan-${plan.id}-cta`}>
                      Get Started <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom quote */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Need a custom plan or group discount?</p>
            <a href={`https://wa.me/92300000000`} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="gap-2" id="custom-quote-btn">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Get Custom Quote on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
