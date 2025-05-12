"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform values based on scroll position
  const navbarPadding = useTransform(scrollY, [0, 100], ["0.75rem", "0.5rem"])
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.95])
  const navbarY = useTransform(scrollY, [0, 100], ["0rem", "0.5rem"])
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset to account for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-12 px-4">
      <motion.div
        className={`w-full max-w-7xl mx-auto rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "bg-transparent"
        }`}
        style={{
          padding: navbarPadding,
          scale: navbarScale,
          y: navbarY,
        }}
      >
        <div className="flex justify-between items-center">
          <motion.div style={{ scale: logoScale }}>
            <Link href="/" className="flex items-center group">
              <img src="/images/best_climb_logo.png" alt="Climb Logo" className="w-12 h-12 mr-3" />
              <span className="text-2xl font-normal bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                Climb
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-white transition-colors text-lg cursor-pointer"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className="text-slate-300 hover:text-white transition-colors text-lg cursor-pointer"
            >
              Our Brands
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-slate-300 hover:text-white transition-colors text-lg cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-300 hover:text-white transition-colors text-lg cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          <div className="flex items-center">
            <a 
              href="mailto:corporate@climbfitness.ca"
              className="bg-white text-black hover:bg-white/90 border-0 transition-all duration-300 text-lg px-6 py-2 rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  )
}