"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={true}
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
