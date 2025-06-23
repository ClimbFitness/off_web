import { Button } from "@/components/ui/button"
import { Sparkles, Download as DownloadIcon } from "lucide-react"
import Link from "next/link"
import { PricingCard } from "@/components/pricing-card"
import { HeroGlow } from "@/components/hero-glow"
import { NavBar } from "@/components/nav-bar"
import { FeatureShowcase } from "@/components/feature-showcase"
import { FaqSection } from "@/components/faq-section"
import { GrainBackground } from "@/components/grain-background"
import { CTACard } from "@/components/cta-card"
import { GradientHeading } from "@/components/gradient-heading"
import { BrandsMosaic } from "@/components/brand-mosaic"
import { ChangingText } from "@/components/changing-text"
import { AnimatedTestimonials } from "@/components/animated-testimonials"
import { MobileShowcase } from "@/components/mobile-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <GrainBackground />
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-60 pb-32 overflow-hidden bg-gradient-to-b from-black via-black to-black">
        <HeroGlow />

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mt-24 relative">
            <div className="pb-2">
              <GradientHeading as="h1" className="text-5xl md:text-7xl tracking-tight mb-12" weight="light">
                <span className="inline-block">Get</span> <span className="inline-block">Rewarded</span>{" "}
                <span className="inline-block">for being Healthier</span>
              </GradientHeading>
            </div>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-16">
              The fitness app that gives you actual rewards when you <ChangingText />
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <Link
                href="/waitlist"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-md border border-white/10 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-700/40 to-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                <span className="relative text-white font-medium tracking-wide">
                  <DownloadIcon className="inline-block w-5 h-5 mr-2" />
                  Join Waitlist
                </span>
              </Link>

              <a
                href="mailto:corporate@climbfitness.ca"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-md border border-white/10 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-700/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                <span className="relative text-white/80 font-medium tracking-wide">Contact the Founders</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <div className="flex items-center bg-black/30 px-3 py-1 rounded-full border border-white/5">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-orange-500 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-300">Access to Premium for 14 days</span>
              </div>
              
              <div className="flex items-center bg-black/30 px-3 py-1 rounded-full border border-white/5">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-orange-500 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-300">No Credit Card Info</span>
              </div>
              
              <div className="flex items-center bg-black/30 px-3 py-1 rounded-full border border-white/5">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-orange-500 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-300">Core Plan Free Forever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-gradient-to-b from-black via-black to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <GradientHeading as="h2" className="text-4xl md:text-6xl mb-6" weight="light">
            We built Climb to fuel your fitness journey with whatever you need.
            </GradientHeading>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section id="mobile-app" className="pt-32 pb-44 relative bg-black">
        <div className="absolute inset-0 bg-grid-white/[0.01] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="relative z-10">
          <MobileShowcase />
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="brands" className="py-24 relative bg-black">
        <div className="absolute inset-0 bg-grid-white/[0.01] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <GradientHeading as="h2" className="text-4xl md:text-6xl mb-6" weight="light">
              What We Offer
            </GradientHeading>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Earn rewards from premium fitness brands that you actually want.
            </p>
          </div>

          <div className="max-w-screen-2xl mx-auto">
            <BrandsMosaic />
          </div>

          <div className="mt-12 text-center">
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative bg-gradient-to-b from-black via-black to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <GradientHeading as="h2" className="text-4xl md:text-6xl mb-6" weight="light">
              What Our Users Say
            </GradientHeading>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Climb is chosen from beginners to the best athletes in the world.
            </p>
          </div>

          <div className="max-w-screen-2xl mx-auto">
            <AnimatedTestimonials />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative bg-gradient-to-b from-black via-black to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <GradientHeading as="h2" className="text-4xl md:text-6xl mb-6" weight="light">
              Find your Perfect Fit
            </GradientHeading>
            <GradientHeading as="h3" className="text-2xl md:text-3xl" weight="thin">
              With Climb Plans
            </GradientHeading>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-black/50 backdrop-blur-sm p-1 rounded-full">
  
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <PricingCard
              title="Core"
              price="$0"
              period="/month"
              features={["Premium Access for 14 days", "All Features", "Free Rewards"]}
              ctaText="Join Waitlist"
              variant="basic"
            />

            <PricingCard
              title="Premium"
              price="$17.99"
              period="/month"
              features={[
                "Everything in Core and more...",
                "AI/ML insights, stats, training",
                "Get rewards 6x faster",
                "Infinite personalization and goal-setting",
              ]}
              ctaText="Join Waitlist"
              variant="featured"
              showArrow={true}
            />

            <PricingCard
              title="Enterprise"
              price="Contact us"
              period=""
              features={[
                "Unlimited usage for your entire team",
                "Fine-tuned models for your gym/company",
                "24/7 support and transparent data",
              ]}
              ctaText="Join Waitlist"
              variant="enterprise"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative bg-black">
        <div className="absolute inset-0 bg-grid-white/[0.01] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <GradientHeading as="h2" className="text-4xl md:text-6xl mb-6" weight="light">
              Frequently Asked Questions
            </GradientHeading>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about Climb and how it works.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <CTACard
            title="Start climbing your own mountain."
            description="Join thousands who use our fuel to get the results they want."
            primaryButtonText="Join Waitlist"
            secondaryButtonText="Learn More"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              
              <span className="text-xl font-normal bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                Climb
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Policy
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Updates
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} Climb Fitness Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
