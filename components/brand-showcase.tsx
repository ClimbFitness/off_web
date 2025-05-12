"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface BrandCardProps {
  name: string
  logo: string
  description: string
  className?: string
}

function BrandCard({ name, logo, description, className = "" }: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Custom dimensions for specific brands
  let imageWidth = 180;
  let imageHeight = 90;
  
  if (name === "Nike") {
    imageWidth = 320;
    imageHeight = 160;
  } else if (name === "Peloton") {
    imageWidth = 240;
    imageHeight = 120;
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 group ${className}`}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glassmorphic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-orange-600 rounded-xl opacity-0 blur-2xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.07 : 0 }}
      />

      <div className="p-6 h-full flex flex-col justify-between relative z-10">
        <div className="flex items-center justify-center mb-4 h-16 relative">
          <motion.div initial={{ y: 0 }} animate={{ y: isHovered ? -5 : 0 }} transition={{ duration: 0.3 }}>
            <Image
              src={logo || "/placeholder.svg"}
              alt={`${name} logo`}
              width={imageWidth}
              height={imageHeight}
              className="object-contain max-h-24"
              priority
            />
          </motion.div>
        </div>

        <div>
          <h3 className="text-lg font-light text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent mb-2">
            {name}
          </h3>
          <p className="text-sm text-slate-400 text-center">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function BrandsShowcase() {
  const brands = [
    {
      name: "Nike",
      logo: "/images/nike3.png",
      description: "Premium athletic footwear and apparel",
    },
    {
      name: "Lululemon",
      logo: "/images/lululemon.png",
      description: "High-quality yoga and athletic wear",
    },
    {
      name: "Gymshark",
      logo: "/images/gymshark.jpg",
      description: "Performance enhancing gym wear",
    },
    {
      name: "New Balance",
      logo: "/images/newbalance.png",
      description: "Athletic footwear and fitness apparel",
    },
    {
      name: "Chipotle",
      logo: "/images/chipotle.png",
      description: "Healthy fast-casual dining options",
    },
    {
      name: "Under Armour",
      logo: "/images/underarmour.jpg",
      description: "Innovative sports and fitness clothing",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {brands.map((brand, index) => (
        <BrandCard
          key={index}
          name={brand.name}
          logo={brand.logo}
          description={brand.description}
          className={
            index === 0 || index === 5 ? "bg-gradient-to-br from-orange-900/30 to-orange-800/20" : "bg-black/80"
          }
        />
      ))}
    </div>
  )
}
