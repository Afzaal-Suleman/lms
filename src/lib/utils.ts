import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const TIMEZONES = {
  UK: "Europe/London",
  UAE: "Asia/Dubai",
  Pakistan: "Asia/Karachi",
  Malaysia: "Asia/Kuala_Lumpur",
} as const;

export function getTimezoneTime(timezone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  }).format(new Date());
}

export const CURRENCIES = {
  USD: { symbol: "$", label: "USD" },
  GBP: { symbol: "£", label: "GBP" },
  AED: { symbol: "د.إ", label: "AED" },
  PKR: { symbol: "₨", label: "PKR" },
} as const;

// Indicative conversion rates (update periodically)
export const EXCHANGE_RATES: Record<string, number> = {
  USD: 1,
  GBP: 0.79,
  AED: 3.67,
  PKR: 278,
};
