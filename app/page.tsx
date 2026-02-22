// app/page.tsx
import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import ThemeToggle from "@/components/darkToggle";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Dark mode toggle */}
      <ThemeToggle />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
