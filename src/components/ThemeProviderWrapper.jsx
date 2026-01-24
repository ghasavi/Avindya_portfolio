// src/components/ThemeProviderWrapper.jsx
"use client";

import { ThemeProvider } from "../context/themeContext";

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
