"use client";

import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section
      className="section-padding bg-white dark:bg-navy-950"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal-600 dark:text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Got Questions?
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about LMS OWAIS PK. Can&apos;t find the answer?{" "}
            <a href="/contact" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">
              Contact us
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 dark:bg-navy-900/50 rounded-3xl border border-border p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="px-4"
              >
                <AccordionTrigger className="text-base font-semibold text-navy-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
