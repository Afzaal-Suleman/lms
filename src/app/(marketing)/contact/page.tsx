"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { TIMEZONES, getTimezoneTime } from "@/lib/utils";

const subjects = ["Mathematics 9709", "Physics 9702", "Chemistry 9701", "Biology 9700", "Accounting 9706", "Business Studies 9609", "Computer Science 9618", "English 9093", "Other"];
const countries = ["United Kingdom", "United Arab Emirates", "Pakistan", "Malaysia", "Saudi Arabia", "Nigeria", "Kenya", "Canada", "Australia", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form:", data);
    setSubmitted(true);
  }

  const tzEntries = Object.entries(TIMEZONES) as [string, string][];

  return (
    <div className="min-h-screen">
      <div className="bg-mesh pt-28 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text-hero">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Book a free demo class, ask a question, or get a custom quote. We reply within 2 hours.
          </p>
        </div>
      </div>

      <section className="section-padding bg-slate-50 dark:bg-navy-950" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact Us</h2>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Info */}
            <div className="space-y-8">
              <a href="https://wa.me/92300000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-all group"
                aria-label="Contact us on WhatsApp">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">WhatsApp (Fastest)</div>
                  <div className="text-muted-foreground text-sm">Reply within 30 minutes · +92 300 000 0000</div>
                </div>
              </a>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@lmsowais.pk", href: "mailto:info@lmsowais.pk" },
                  { icon: Phone, label: "Phone", value: "+92 300 000 0000", href: "tel:+92300000000" },
                  { icon: MapPin, label: "Location", value: "Pakistan · UK · UAE · Malaysia", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-navy-900/50 border border-border">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-teal-500" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                      {href ? <a href={href} className="font-medium text-foreground hover:text-teal-600 dark:hover:text-teal-400">{value}</a> : <div className="font-medium text-foreground">{value}</div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timezone clocks */}
              <div className="bg-white dark:bg-navy-900/50 rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-500" aria-hidden="true" />
                  Current Times
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {tzEntries.map(([name, tz]) => (
                    <div key={name} className="text-center p-3 rounded-xl bg-slate-50 dark:bg-navy-800/50">
                      <div className="text-xs text-muted-foreground mb-1">{name}</div>
                      <div className="font-mono font-bold text-foreground">{getTimezoneTime(tz)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white dark:bg-navy-900/50 rounded-3xl border border-border p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 2 hours via email or WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-label="Contact form" noValidate>
                  <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input id="contact-name" placeholder="Your name" className="mt-1.5" {...register("name")} aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={!!errors.name} />
                      {errors.name && <p id="name-error" className="text-xs text-destructive mt-1" role="alert">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="you@example.com" className="mt-1.5" {...register("email")} aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={!!errors.email} />
                      {errors.email && <p id="email-error" className="text-xs text-destructive mt-1" role="alert">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Phone / WhatsApp</Label>
                      <Input id="contact-phone" placeholder="+44 7xxx xxxxxx" className="mt-1.5" {...register("phone")} />
                    </div>
                    <div>
                      <Label htmlFor="contact-country">Country *</Label>
                      <select id="contact-country" className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm mt-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" {...register("country")} aria-invalid={!!errors.country}>
                        <option value="">Select country</option>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {errors.country && <p className="text-xs text-destructive mt-1" role="alert">{errors.country.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Subject Interest *</Label>
                    <select id="contact-subject" className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm mt-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" {...register("subject")} aria-invalid={!!errors.subject}>
                      <option value="">Select a subject</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p className="text-xs text-destructive mt-1" role="alert">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea id="contact-message" placeholder="Tell us about your goals, current level, and any questions..." className="mt-1.5" rows={4} {...register("message")} aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={!!errors.message} />
                    {errors.message && <p id="message-error" className="text-xs text-destructive mt-1" role="alert">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" variant="teal" size="lg" className="w-full gap-2" disabled={isSubmitting} id="contact-submit-btn">
                    {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4" aria-hidden="true" />Send Message</>)}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
