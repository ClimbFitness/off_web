"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnnouncementBannerProps {
  text: string
}

export function AnnouncementBanner({ text }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative max-w-max mx-auto"
        >
          <div className="flex items-center justify-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-white/30 border-[0.5px] text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
            {text}
            <button
              onClick={() => setIsVisible(false)}
              className="ml-3 text-slate-400 hover:text-white transition-colors"
              aria-label="Close announcement"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
