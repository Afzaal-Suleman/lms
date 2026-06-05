"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, Clock, Calendar, FileText,
  Award, Bell, Menu, X, GraduationCap, LogOut, ChevronRight
} from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const sidebarLinks = [
  { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
  { label: "My Courses", href: "/student/courses", icon: BookOpen },
  { label: "Recorded Lectures", href: "/student/recordings", icon: Clock },
  { label: "Class Calendar", href: "/student/calendar", icon: Calendar },
  { label: "Assignments", href: "/student/assignments", icon: FileText },
  { label: "Certificates", href: "/student/certificates", icon: Award },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-navy-900 text-white border-r border-white/10 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/student/dashboard" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-sm tracking-wide">
              STUDENT <span className="text-teal-400">PORTAL</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1" aria-label="Portal navigation">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-teal-500 text-white shadow-teal-sm"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar drawer */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-navy-900 text-white border-r border-white/10 lg:hidden transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-sm tracking-wide">
              STUDENT <span className="text-teal-400">PORTAL</span>
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-teal-500 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/5"
          >
            <LogOut className="w-4 h-4" />
            Back to Website
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-white/10 flex items-center justify-between px-6 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-white/60 hover:bg-slate-100 dark:hover:bg-white/5"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="font-bold text-lg text-slate-800 dark:text-white hidden sm:block">
              LMS Owais PK
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="relative p-2 rounded-lg text-slate-600 dark:text-white/60 hover:bg-slate-100 dark:hover:bg-white/5"
              aria-label="View notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <div className="flex items-center gap-3 border-l border-slate-200 dark:border-white/10 pl-4">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xs">
                JD
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-white/80 hidden md:block">
                John Doe
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic page content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
