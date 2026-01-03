/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"], 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "glow-primary",
    "glow-accent",
    "glow-success",
    "hover:glow-primary",
    "hover:glow-accent",
    "hover:glow-success",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Optional sidebar palette
        sidebar: "hsl(var(--sidebar))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        primary: "var(--shadow-primary)",
        secondary: "var(--shadow-secondary)",
        accent: "var(--shadow-accent)",
        card: "var(--shadow-card)",
        glow: "0 0 6px var(--tw-shadow-color), 0 0 12px var(--tw-shadow-color), 0 0 24px var(--tw-shadow-color)",
      },
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)",
        "primary-gradient": "var(--primary-gradient)",
        "card-gradient": "var(--card-gradient)",
        "mesh-gradient": "var(--mesh-gradient)",
      },
      transitionProperty: {
        smooth: "var(--transition-smooth)",
        glow: "var(--transition-glow)",
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ addUtilities, theme }) {
      const glowUtilities = {
        ".glow-primary": {
          "--tw-shadow-color": "hsl(var(--primary))",
          "box-shadow": theme("boxShadow.glow"),
          "text-shadow": "0 0 6px hsl(var(--primary)), 0 0 12px hsl(var(--primary))",
          transition: theme("transitionProperty.glow"),
        },
        ".glow-accent": {
          "--tw-shadow-color": "hsl(var(--accent))",
          "box-shadow": theme("boxShadow.glow"),
          "text-shadow": "0 0 6px hsl(var(--accent)), 0 0 12px hsl(var(--accent))",
          transition: theme("transitionProperty.glow"),
        },
        ".glow-success": {
          "--tw-shadow-color": "#22c55e", // Tailwind green-500
          "box-shadow": theme("boxShadow.glow"),
          "text-shadow": "0 0 6px #22c55e, 0 0 12px #22c55e",
          transition: theme("transitionProperty.glow"),
        },
      };
      addUtilities(glowUtilities, ["responsive", "hover"]);
    }),
  ],
};
