"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MobileFeature {
  title: string
  description: string
}

export function MobileShowcase() {
  const features: MobileFeature[] = [
    {
      title: "We make everything clear.",
      description: "Everyone has strengths and weaknesses, and we make sure you know yours."
    },
    {
      title: "Cardio, Strength, and everything in between.",
      description: "We've got you covered with a wide range of workouts, from cardio to strength training."
    },
    {
      title: "Sh*ts Real.",
      description: "You can genuinely get rewards for your hard work, and we're not afraid to show it."
    }
  ]

  // Define the phone dimensions 
  const phoneWidth = 340; // pixels
  const phoneHeight = 700; // pixels
  const phoneGap = 40; // horizontal gap between phones

  return (
    <div className="relative max-w-[1400px] mx-auto">
      {/* Main container with flex layout */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start relative px-4 md:px-0">
        
        {/* Column 1 */}
        <div className="hidden md:block relative mt-32">
          {/* Feature Card 1 - Above Phone */}
          <motion.div 
            className="mb-6 mr-auto overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/40 p-5"
            style={{ width: phoneWidth, marginRight: '60px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Glassmorphic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
            
            <h3 className="text-lg font-medium text-white mb-2">{features[0].title}</h3>
            <p className="text-sm text-slate-300">{features[0].description}</p>
          </motion.div>
          
          {/* Phone 1 - Stats Showcase */}
          <motion.div 
            className="relative mx-auto"
            style={{ marginRight: phoneGap }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute inset-0 w-full h-full rounded-[50px] bg-orange-600/30 blur-xl transform scale-95 -translate-y-2 opacity-60"></div>
            <div 
              className="relative overflow-hidden rounded-[45px] border-[12px] border-black bg-black shadow-2xl"
              style={{ width: phoneWidth, height: phoneHeight }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/rawStats.jpeg"
                  alt="Stats Showcase"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-44 bg-black rounded-b-xl"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Column 2 (Middle) - Adjusted to be higher with details below */}
        <div className="relative md:self-end" style={{ marginTop: "120px" }}>
          {/* Phone 2 - Goals */}
          <motion.div 
            className="relative mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 w-full h-full rounded-[50px] bg-orange-500/40 blur-xl transform scale-95 -translate-y-2 opacity-60"></div>
            <div 
              className="relative overflow-hidden rounded-[45px] border-[12px] border-black bg-black shadow-2xl"
              style={{ width: phoneWidth, height: phoneHeight }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/rawGoals.png"
                  alt="Goals App Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-44 bg-black rounded-b-xl"></div>
            </div>
          </motion.div>
          
          {/* Feature Card 2 - Below Phone */}
          <motion.div 
            className="mt-6 mx-auto overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/40 p-5 md:block"
            style={{ width: phoneWidth }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Glassmorphic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
            
            <h3 className="text-lg font-medium text-white mb-2">{features[1].title}</h3>
            <p className="text-sm text-slate-300">{features[1].description}</p>
          </motion.div>
          
          {/* Mobile-only feature cards */}
          <div className="md:hidden mt-6 space-y-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/40 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                {/* Glassmorphic effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
                
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="hidden md:block relative mt-32">
          {/* Feature Card 3 - Above Phone */}
          <motion.div 
            className="mb-6 ml-auto overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/40 p-5"
            style={{ width: phoneWidth, marginLeft: '40px' }}  /* Changed from 60px to 40px to move it a bit to the left */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Glassmorphic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
            
            <h3 className="text-lg font-medium text-white mb-2">{features[2].title}</h3>
            <p className="text-sm text-slate-300">{features[2].description}</p>
          </motion.div>
          
          {/* Phone 3 - Store Showcase */}
          <motion.div 
            className="relative mx-auto"
            style={{ marginLeft: phoneGap }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute inset-0 w-full h-full rounded-[50px] bg-orange-600/30 blur-xl transform scale-95 -translate-y-2 opacity-60"></div>
            <div 
              className="relative overflow-hidden rounded-[45px] border-[12px] border-black bg-black shadow-2xl"
              style={{ width: phoneWidth, height: phoneHeight }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/rawStore.png"
                  alt="Store Showcase"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-44 bg-black rounded-b-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 