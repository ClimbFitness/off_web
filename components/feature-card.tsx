"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  children?: ReactNode
}

export function FeatureCard({ title, description, icon, children }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-black/80 backdrop-blur-xl border border-slate-800/50 rounded-xl overflow-hidden group relative"
      whileHover={{
        y: -5,
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
        className="absolute inset-0 bg-orange-600 rounded-xl opacity-0 blur-2xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.07 : 0 }}
      />

      <div className="p-6 relative z-10">
        <motion.div
          className="flex items-center mb-4"
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center mr-3 group-hover:bg-orange-600/30 transition-colors"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-light bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            {title}
          </h3>
        </motion.div>

        <p className="text-slate-300 mb-4">{description}</p>
        {children}
      </div>

      {/* Bottom highlight on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"
        initial={{ opacity: 0, scaleX: 0.3 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scaleX: isHovered ? 1 : 0.3,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}
