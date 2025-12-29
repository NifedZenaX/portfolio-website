// app/page.tsx
import React from "react";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      <div className="m-2 bg-blue-200 rounded-3xl bg-opacity-30 p-6 shadow-xl">
        {/* Profile Section */}
        <Profile />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />
      </div>
    </main>
  );
}
