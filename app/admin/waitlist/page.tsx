"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Users, TrendingUp, Clock } from "lucide-react"
import { GrainBackground } from "@/components/grain-background"
import { GradientHeading } from "@/components/gradient-heading"

interface WaitlistStats {
  totalSignups: number
  nextQueueNumber: number
}

export default function AdminWaitlistPage() {
  const [stats, setStats] = useState<WaitlistStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/waitlist")
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const refreshStats = () => {
    setIsLoading(true)
    fetchStats()
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
          className="w-full max-w-4xl"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <GradientHeading as="h1" className="text-4xl md:text-5xl mb-4" weight="light">
              Waitlist Dashboard
            </GradientHeading>
            <p className="text-xl text-slate-300">
              Track your beta launch signups and monitor growth
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Signups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-orange-500" />
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Total Signups</span>
                </div>
                <div className="text-3xl font-light bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  {isLoading ? "..." : stats?.totalSignups || 0}
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  People waiting for launch
                </p>
              </div>
            </motion.div>

            {/* Next Queue Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Next Number</span>
                </div>
                <div className="text-3xl font-light bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  {isLoading ? "..." : stats?.nextQueueNumber || 1}
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Next person in queue
                </p>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-purple-500" />
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Status</span>
                </div>
                <div className="text-lg font-light bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  Live Tracking
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Real-time updates
                </p>
              </div>
            </motion.div>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-light mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                Quick Actions
              </h3>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={refreshStats}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 border-0"
                >
                  {isLoading ? "Refreshing..." : "Refresh Stats"}
                </Button>
                
                <Link href="/waitlist">
                  <Button variant="outline" className="border-white/20 hover:border-white/40">
                    View Waitlist Form
                  </Button>
                </Link>
              </div>

              <div className="mt-6 p-4 bg-black/30 rounded-lg border border-white/10">
                <h4 className="text-sm font-medium text-slate-300 mb-2">📧 Email Notifications</h4>
                <p className="text-xs text-slate-400">
                  New signups are logged to the console. Check your development server or production logs for email details.
                  <br />
                  <span className="text-orange-400">Subject format:</span> "Waitlist: {"{queue_number}"}"
                  <br />
                  <span className="text-orange-400">Sent to:</span> climbfitnessco@gmail.com
                </p>
              </div>

              <div className="mt-4 p-4 bg-black/30 rounded-lg border border-white/10">
                <h4 className="text-sm font-medium text-slate-300 mb-2">🚀 Production Setup</h4>
                <p className="text-xs text-slate-400">
                  To enable real email sending, update the API endpoint at{" "}
                  <code className="bg-black/50 px-1 rounded">/app/api/waitlist/route.ts</code>{" "}
                  with your preferred email service (SendGrid, Resend, or Nodemailer).
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 