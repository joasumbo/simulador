// components/layout/Footer.tsx
// ✅ Server Component (no "use client" needed)

import Footer2 from "./footer/Footer2";

interface FooterProps {
  style?: 2;
}

/**
 * Footer Component
 * 
 * This component renders Footer2 (the only footer used in production).
 * It runs on the server by default (no client-side JS needed).
 */
export default function Footer({ style = 2 }: FooterProps) {
  return <Footer2 />;
}
