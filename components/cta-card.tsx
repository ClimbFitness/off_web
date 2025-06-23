"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { GradientHeading } from "@/components/gradient-heading"

interface CTACardProps {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

export function CTACard({ title, description, primaryButtonText, secondaryButtonText }: CTACardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 backdrop-blur-xl rounded-2xl p-12 border border-white/10 relative overflow-hidden"
      whileHover={{
        boxShadow: "0 20px 40px -20px rgba(195, 77, 0, 0.15)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

      {/* Animated glow orbs */}
      <motion.div
        className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600 rounded-full filter blur-3xl"
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-800 rounded-full filter blur-3xl"
        animate={{
          opacity: [0.07, 0.12, 0.07],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="relative z-10">
        <GradientHeading as="h2" className="text-3xl md:text-4xl mb-4" weight="light">
          {title}
        </GradientHeading>
        <p className="text-xl text-slate-300 mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="/waitlist">
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 border-0 transition-all duration-300"
              >
                {/* Button shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative z-10">{primaryButtonText}</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
