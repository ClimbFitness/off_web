"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ChangingText() {
  const phrases = [
    "achieve your fitness goals.",
    "push your limits regardless.",
    "run faster each time.",
    "lift more steel each week.",
    "challenge yourself everyday.",
    "refuse to let old habits win.",
    "be the best version of yourself."
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [phrases.length])
  
  return (
    <span className="relative inline-block text-orange-400 font-medium">
      <span className="invisible">challenge yourself everyday</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="absolute left-0 top-0 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
} 