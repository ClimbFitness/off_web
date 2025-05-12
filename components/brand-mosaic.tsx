"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface BrandTileProps {
  name: string
  logo: string
  size: "small" | "medium" | "large"
  className?: string
}

function BrandTile({ name, logo, size, className = "" }: BrandTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2",
    large: "col-span-2 row-span-2",
  }

  // Custom sizes for specific brands
  let imageWidth = size === "large" ? 240 : size === "medium" ? 180 : 120;
  let imageHeight = size === "large" ? 120 : size === "medium" ? 90 : 60;
  
  if (name === "Nike") {
    imageWidth = 240;
    imageHeight = 80;
  } else if (name === "Peloton") {
    imageWidth = 250;
    imageHeight = 120;
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 ${sizeClasses[size]} ${className}`}
      whileHover={{
        scale: 1.02,
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

      <div className="p-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-3"
        >
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
            priority
          />
        </motion.div>

        <h3 className="text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent font-light">
          {name}
        </h3>
      </div>
    </motion.div>
  )
}

export function BrandsMosaic() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full mx-auto">
      <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/80">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
        <div className="p-4 h-full flex flex-col justify-center items-center relative z-10">
          <div className="mb-3">
            <Image
              src="/images/nike3.png"
              alt="Nike logo"
              width={320}
              height={160}
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent font-light">
            Nike
          </h3>
        </div>
      </div>
      <BrandTile name="Lululemon" logo="/images/lululemon.png" size="medium" className="bg-black/80" />
      <BrandTile name="Chipotle" logo="/images/chipotle.png" size="small" className="bg-black/80" />
      <BrandTile name="New Balance" logo="/images/newbalance.png" size="small" className="bg-black/80" />
      <BrandTile
        name="Gymshark"
        logo="/images/gymshark.jpg"
        size="medium"
        className="bg-black/80"
      />
      <BrandTile name="Under Armour" logo="/images/underarmour.jpg" size="medium" className="bg-black/80" />
      <BrandTile name="Adidas" logo="/images/adidas.png" size="small" className="bg-black/80" />
      <div className="col-span-1 row-span-1 relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/80 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
        <div className="p-3 h-full flex flex-col justify-center items-center relative z-10 w-full">
          <div className="mb-2">
            <Image
              src="/images/peloton.png"
              alt="Peloton logo"
              width={130}
              height={65}
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-center bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent font-light">
            Peloton
          </h3>
        </div>
      </div>
      <BrandTile 
        name="Fitbit" 
        logo="/images/fitbit2.png" 
        size="small" 
        className="col-span-2 bg-black/80"
      />
    </div>
  )
}
