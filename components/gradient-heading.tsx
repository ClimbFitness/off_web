import type { ReactNode } from "react"

interface GradientHeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: ReactNode
  className?: string
  weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold"
}

export function GradientHeading({ as: Component, children, className = "", weight = "light" }: GradientHeadingProps) {
  const fontWeightClass = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }[weight]

  return (
    <Component
      className={`bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent leading-relaxed pb-2 ${fontWeightClass} ${className}`}
    >
      {children}
    </Component>
  )
}
