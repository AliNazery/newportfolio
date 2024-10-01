"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkIcon, Light } from "../Common/Icon/svg";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center bg-[#764b9b] dark:bg-[#44a56b] rounded-full shadow-md"
    >
      {theme === "light" ? (
      <DarkIcon/>
    ) : (
        <Light/>  
      )}
    </button>
  );
};

export default ThemeToggle;
