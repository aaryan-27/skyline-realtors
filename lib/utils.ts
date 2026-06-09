import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number of Indian Rupees in crore/lakh shorthand. */
export function formatINR(value: number): string {
  if (value >= 1_00_00_000) {
    const cr = value / 1_00_00_000;
    return `Rs.${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (value >= 1_00_000) {
    const l = value / 1_00_000;
    return `Rs.${l % 1 === 0 ? l.toFixed(0) : l.toFixed(2)} L`;
  }
  return `Rs.${value.toLocaleString("en-IN")}`;
}

/** Indian-style grouped integer, e.g. 1234567 -> 12,34,567 */
export function inWords(value: number): string {
  return value.toLocaleString("en-IN");
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
