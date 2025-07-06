"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FeatureCard } from "./feature-card"
import { ChartNoAxesColumnIncreasing, Eye, Flame, Gift, MessageSquareCode, Move } from "lucide-react"
import Image from "next/image"

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  const features = [
    {
      id: 0,
      title: "Set Goals and Progress",
      description: "Completely automatic, just define your goals and we'll do the tracking.",
      icon: <Flame className="h-5 w-5 text-orange-400" />,
      image: "/newIndex.png"
    },
    {
      id: 1,
      title: "AI-powered insights",
      description: "We look beyond simple charts and graphs, and use AI to give you insights into your consistency, recovery, and strengths.",
      icon: <ChartNoAxesColumnIncreasing className="h-5 w-5 text-orange-400" />,
      image: "/newStats.png",
    },
    {
      id: 2,
      title: "Redeem Rewards",
      description: "Use the points you earn to redeem for rewards from our store, or gift cards to your favorite brands.",
      icon: <Gift className="h-5 w-5 text-orange-400" />,
      image: "/newStore.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [features.length])

  // Track mouse position for the glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Only run in browser environment
    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("scroll", handleScroll)
      // Initialize scrollY
      setScrollY(window.scrollY)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.id} onClick={() => setActiveFeature(feature.id)} className="cursor-pointer">
            <FeatureCard title={feature.title} description={feature.description} icon={feature.icon}>
              <div
                className={`h-1 w-full mt-4 rounded-full bg-slate-800/50 backdrop-blur-sm overflow-hidden ${activeFeature === feature.id ? "block" : "hidden"}`}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={activeFeature}
                />
              </div>
            </FeatureCard>
          </div>
        ))}
      </div>

      <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] rounded-xl overflow-hidden border border-slate-800/50 bg-black/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

        {/* Interactive glow effect that follows mouse */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-orange-600/10 blur-[80px] pointer-events-none"
          style={{
            left: `calc(${mousePosition.x}px - 150px)`,
            top: `calc(${mousePosition.y - scrollY}px - 150px)`,
            opacity: 0.15,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.3s ease",
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full w-full"
          >
            <Image
              src={features[activeFeature].image || "/placeholder.svg"}
              alt={features[activeFeature].title}
              fill
              className="object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/20">
              <motion.div
                className="flex items-center"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center mr-3">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-lg font-semibold">{features[activeFeature].title}</h3>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
