'use client';

import toggleStyles from "@/app/ui/toggle.module.css";
import { CiLight, CiDark } from "react-icons/ci";


import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored) {
      const isDark = stored === "dark";
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;

    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <label className={toggleStyles.switch}>
      <input type="checkbox" onChange={toggleTheme} checked={dark}/>
      <span className={toggleStyles.icon}>
        {dark ? <CiDark size={24} /> : <CiLight size={24} />}
      </span>
    </label>
  );
}