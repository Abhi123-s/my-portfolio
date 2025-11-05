import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-white/10 dark:bg-white/10 backdrop-blur-sm hover:scale-105 transition"
    >
      {theme === "dark" ? (
        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM15.25 4.22a.75.75 0 011.06 1.06l-1.02 1.02a.75.75 0 11-1.06-1.06l1.02-1.02zM18 10a.75.75 0 01-.75.75H16a.75.75 0 010-1.5h1.25A.75.75 0 0118 10zM15.25 15.78a.75.75 0 00-1.06 1.06l1.02 1.02a.75.75 0 001.06-1.06l-1.02-1.02zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.75 15.78a.75.75 0 00-1.06 0L2.67 16.8a.75.75 0 101.06 1.06l1.02-1.02a.75.75 0 000-1.06zM3 10a.75.75 0 01-.75.75H1.25a.75.75 0 010-1.5H2.25A.75.75 0 013 10zM4.75 4.22a.75.75 0 10-1.06 1.06l1.02 1.02a.75.75 0 101.06-1.06L4.75 4.22z" /></svg>
      ) : (
        <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z" /></svg>
      )}
    </button>
  );
}
