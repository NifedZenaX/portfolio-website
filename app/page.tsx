// app/page.tsx
import React from "react";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-100 to-white text-gray-800 p-8">
      {/* Profile Section */}
      <Profile />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
    </main>
  );
}
