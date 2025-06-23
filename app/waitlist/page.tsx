"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { GrainBackground } from "@/components/grain-background"
import { GradientHeading } from "@/components/gradient-heading"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [agreedToPromotions, setAgreedToPromotions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !agreedToPromotions) {
      setError("Please fill in all fields and agree to receive promotional emails.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <GrainBackground />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <CheckCircle className="w-20 h-20 text-orange-500 mx-auto" />
            </motion.div>
            
            <GradientHeading as="h1" className="text-4xl md:text-5xl mb-4" weight="light">
              Welcome to the Climb!
            </GradientHeading>
            
            <p className="text-xl text-slate-300 mb-8 max-w-md mx-auto">
              You're now on the waitlist. We'll email you as soon as we launch!
            </p>
            
            <Link href="/">
              <Button variant="outline" className="border-white/20 hover:border-white/40">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <GrainBackground />
      
      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <Link href="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Glassmorphic Card */}
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            
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
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                </motion.div>
                
                <GradientHeading as="h1" className="text-3xl md:text-4xl mb-4" weight="light">
                  Join the Waitlist
                </GradientHeading>
                
                <p className="text-slate-300">
                  Be the first to know when Climb launches and get early access to premium features.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-slate-400"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="promotions"
                    checked={agreedToPromotions}
                    onChange={(e) => setAgreedToPromotions(e.target.checked)}
                    className="mt-1 w-4 h-4 text-orange-600 bg-black/50 border-white/20 rounded focus:ring-orange-500 focus:ring-2"
                    required
                  />
                  <label htmlFor="promotions" className="text-sm text-slate-300">
                    I agree to receive promotional emails and updates about Climb.
                  </label>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 border-0 transition-all duration-300"
                  >
                    {/* Button shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10">
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </span>
                  </Button>
                </motion.div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  By joining our waitlist, you'll be among the first to experience Climb when we launch.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 