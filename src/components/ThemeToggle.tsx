import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; 
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        title="Light/Dark Mode"
        className="transition-colors"
  >
    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5 text-accent" />}
  </Button>
  
  );
}
