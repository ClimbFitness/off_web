"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Use a simplified props type to avoid TypeScript errors
type ThemeProviderProps = {
  children: React.ReactNode;
  [prop: string]: any; // Allow any additional props to pass through
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 