"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, BookOpen, Users, Trophy,
  DollarSign, Phone, Lightbulb, GraduationCap, LogIn, UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Subjects",
    href: "/subjects",
    icon: BookOpen,
    children: [
      { label: "Mathematics 9709", href: "/subjects/mathematics" },
      { label: "Physics 9702", href: "/subjects/physics" },
      { label: "Chemistry 9701", href: "/subjects/chemistry" },
      { label: "Biology 9700", href: "/subjects/biology" },
      { label: "Accounting 9706", href: "/subjects/accounting" },
      { label: "Business 9609", href: "/subjects/business" },
      { label: "Computer Science 9618", href: "/subjects/computer-science" },
      { label: "English 9093", href: "/subjects/english" },
    ],
  },
  { label: "How It Works", href: "/how-it-works", icon: Lightbulb },
  { label: "Teachers", href: "/teachers", icon: Users },
  { label: "Results", href: "/results", icon: Trophy },
  { label: "Fees", href: "/fees", icon: DollarSign },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between h-18 py-3"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="LMS OWAIS PK - Home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-teal-sm group-hover:shadow-teal transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg leading-none">
                  LMS <span className="text-teal-400">OWAIS</span>
                </div>
                <div className="text-white/50 text-xs">Cambridge & Edexcel Academy</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  role="none"
                >
                  {link.children ? (
                    <button
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        "text-white/80 hover:text-white hover:bg-white/10",
                        activeDropdown === link.label && "text-white bg-white/10"
                      )}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === link.label}
                      role="menuitem"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive(link.href)
                          ? "text-teal-400 bg-teal-500/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                      role="menuitem"
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 w-64"
                          role="menu"
                          aria-label="Subjects menu"
                        >
                          <div className="bg-navy-900/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-glass overflow-hidden">
                            <div className="p-2">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-150 group",
                                    isActive(child.href)
                                      ? "text-teal-400 bg-teal-500/10"
                                      : "text-white/70 hover:text-white hover:bg-white/10"
                                  )}
                                  role="menuitem"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                            <div className="border-t border-white/10 p-3">
                              <Link
                                href="/subjects"
                                className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
                              >
                                View All Subjects →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link href="/auth/sign-in">
                <Button variant="outline-white" size="sm" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button variant="teal" size="sm" className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-navy-900 border-l border-white/10 lg:hidden overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold">
                    LMS <span className="text-teal-400">OWAIS PK</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="p-4 space-y-1" aria-label="Mobile navigation links">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {link.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            )
                          }
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
                        >
                          <span className="flex items-center gap-3">
                            <link.icon className="w-4 h-4 text-teal-400" />
                            {link.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              activeDropdown === link.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-10 pr-4 pb-2 space-y-0.5">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block px-3 py-2 rounded-lg text-sm text-white/60 hover:text-teal-400 hover:bg-white/5 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                          isActive(link.href)
                            ? "text-teal-400 bg-teal-500/10"
                            : "text-white/80 hover:text-white hover:bg-white/8"
                        )}
                      >
                        <link.icon className="w-4 h-4 text-teal-400" />
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-white/10 space-y-3">
                <Link href="/auth/sign-in" className="block">
                  <Button variant="outline-white" size="default" className="w-full gap-2">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/sign-up" className="block">
                  <Button variant="teal" size="default" className="w-full gap-2">
                    <UserPlus className="w-4 h-4" />
                    Get Started Free
                  </Button>
                </Link>
              </div>

              {/* Mobile WhatsApp */}
              <div className="p-4">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "92300000000"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
