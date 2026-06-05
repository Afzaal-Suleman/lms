"use client";

import Link from "next/link";
import {
  GraduationCap, Mail, Phone, MapPin,
  Facebook, Instagram, Youtube, Twitter, Linkedin,
  BookOpen, Users, Trophy, DollarSign, Phone as PhoneIcon,
  ExternalLink, ArrowRight
} from "lucide-react";

const footerLinks = {
  Courses: [
    { label: "Mathematics 9709", href: "/subjects/mathematics" },
    { label: "Physics 9702", href: "/subjects/physics" },
    { label: "Chemistry 9701", href: "/subjects/chemistry" },
    { label: "Biology 9700", href: "/subjects/biology" },
    { label: "Computer Science 9618", href: "/subjects/computer-science" },
    { label: "All Subjects", href: "/subjects" },
  ],
  Academy: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Our Teachers", href: "/teachers" },
    { label: "Results", href: "/results" },
    { label: "Fees & Pricing", href: "/fees" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Student Portal": [
    { label: "Student Login", href: "/auth/sign-in" },
    { label: "Register", href: "/auth/sign-up" },
    { label: "My Dashboard", href: "/student/dashboard" },
    { label: "My Courses", href: "/student/courses" },
    { label: "Assignments", href: "/student/assignments" },
    { label: "Certificates", href: "/student/certificates" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/lmsowais", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/lmsowais", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@lmsowais", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/lmsowais", label: "Twitter/X" },
  { icon: Linkedin, href: "https://linkedin.com/company/lmsowais", label: "LinkedIn" },
];

const trustBadges = [
  { label: "Cambridge International Partner", color: "blue" },
  { label: "Edexcel Approved", color: "purple" },
  { label: "20+ Countries", color: "teal" },
  { label: "WCAG 2.1 Compliant", color: "green" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-navy-950 text-white border-t border-white/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Newsletter Bar */}
      <div className="bg-gradient-to-r from-teal-600/20 via-teal-500/10 to-transparent border-b border-teal-500/20">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Get Free Study Resources
              </h3>
              <p className="text-white/60 text-sm">
                Subscribe for O/A Level notes, past papers, and exam tips.
              </p>
            </div>
            <form
              className="flex gap-3 w-full md:w-auto"
              aria-label="Newsletter subscription"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group w-fit"
              aria-label="LMS OWAIS PK Home"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-teal-sm">
                <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  LMS <span className="text-teal-400">OWAIS PK</span>
                </div>
                <div className="text-white/40 text-xs">Cambridge & Edexcel Academy</div>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              World-class online education for Cambridge International and Pearson Edexcel
              O Level and A Level students. Trusted by students in 20+ countries worldwide.
            </p>

            {/* Contact Info */}
            <address className="not-italic space-y-2.5 mb-6">
              <a
                href="mailto:info@lmsowais.pk"
                className="flex items-center gap-2.5 text-white/60 hover:text-teal-400 text-sm transition-colors"
                aria-label="Email us at info@lmsowais.pk"
              >
                <Mail className="w-4 h-4 text-teal-500 shrink-0" aria-hidden="true" />
                info@lmsowais.pk
              </a>
              <a
                href="https://wa.me/92300000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/60 hover:text-teal-400 text-sm transition-colors"
                aria-label="WhatsApp us"
              >
                <Phone className="w-4 h-4 text-teal-500 shrink-0" aria-hidden="true" />
                +92 300 000 0000 (WhatsApp)
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Pakistan | UK | UAE | Malaysia</span>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex items-center gap-2" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-teal-500/20 hover:text-teal-400 flex items-center justify-center text-white/50 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href} role="listitem">
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-teal-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-teal-500/40 group-hover:bg-teal-400 transition-colors shrink-0" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-3 mb-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" aria-hidden="true" />
                {badge.label}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {currentYear} LMS OWAIS PK. All rights reserved. Designed with ❤️ for students worldwide.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Privacy
              </Link>
              <span className="text-white/20" aria-hidden="true">·</span>
              <Link
                href="/terms"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Terms
              </Link>
              <span className="text-white/20" aria-hidden="true">·</span>
              <Link
                href="/refund-policy"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
