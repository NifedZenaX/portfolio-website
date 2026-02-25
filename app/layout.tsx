import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/ui/fonts";
import ThemeToggle from "@/components/darkToggle";

export const metadata: Metadata = {
  title: "Willie's Portfolio",
  description: "Willie Soo's personal portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* Dark mode toggle */}
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
