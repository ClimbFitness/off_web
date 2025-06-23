"use client"

import { Button } from "@/components/ui/button"
import { CircleCheck, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  ctaText: string
  variant: "basic" | "featured" | "enterprise"
  showArrow?: boolean
}

export function PricingCard({ title, price, period, features, ctaText, variant, showArrow = false }: PricingCardProps) {
  const isBasic = variant === "basic"
  const isFeatured = variant === "featured"
  const isEnterprise = variant === "enterprise"
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden relative ${
        isFeatured ? "bg-gradient-to-br from-orange-900/30 to-orange-800/20" : "bg-black/80"
      } backdrop-blur-xl border ${isFeatured ? "border-orange-700/30" : "border-slate-800/50"} shadow-xl`}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Glassmorphic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>

      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 ${isFeatured ? "bg-orange-600" : "bg-slate-400"} rounded-2xl opacity-0 blur-2xl transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.07 : 0 }}
      />

      {/* Top border gradient for featured card */}
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700"></div>
      )}

      <div className="p-8 relative z-10">
        <h3 className="text-xl font-light mb-2 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-light bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-slate-400 ml-1">{period}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0.8, x: 0 }}
              whileHover={{ opacity: 1, x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <CircleCheck className={`h-5 w-5 mr-2 mt-0.5 ${isFeatured ? "text-orange-400" : "text-slate-400"}`} />
              <span className="text-slate-300">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
          <Link href={ctaText === "Join Waitlist" ? "/waitlist" : "#"}>
            <Button
              className={`w-full relative overflow-hidden group ${
                isFeatured
                  ? "bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white border-0"
                  : isBasic
                    ? "bg-transparent border border-slate-700 hover:border-slate-500 text-white"
                    : "bg-transparent border border-slate-700 hover:border-slate-500 text-white"
              }`}
            >
              {/* Button glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

              <span className="flex items-center justify-center relative z-10">
                {ctaText}
                {showArrow && (
                  <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                )}
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
