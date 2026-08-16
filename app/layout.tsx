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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var dark = stored
                    ? stored === "dark"
                    : window.matchMedia("(prefers-color-scheme: dark)").matches;
                  document.documentElement.classList.toggle("dark", dark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Dark mode toggle */}
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}