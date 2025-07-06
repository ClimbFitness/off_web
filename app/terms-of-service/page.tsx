import { GradientHeading } from "@/components/gradient-heading"
import { GrainBackground } from "@/components/grain-background"
import { NavBar } from "@/components/nav-bar"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GrainBackground />
      <NavBar />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <GradientHeading as="h1" className="text-4xl md:text-6xl mb-6" weight="light">
              Terms of Service
            </GradientHeading>
            <p className="text-slate-300 text-lg">
              Last Updated: April 19th, 2025 • Effective Date: May 8th, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-8 text-slate-300">
                <p className="text-lg">
                  Welcome to Climb ("we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of the Climb mobile application ("App"), including our gift card rewards system and subscription-based features.
                </p>

                <p>
                  By downloading, accessing, or using Climb, you agree to be bound by these Terms. If you do not agree, please do not use the App.
                </p>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Eligibility</h2>
                  <p>
                    You must be at least 13 years old to use Climb. If you are under 18, you represent that you have your parent's or legal guardian's permission to use the App.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Account Registration</h2>
                  <p>
                    To use certain features, you may be required to create an account. You agree to provide accurate and complete information and keep it updated. You are responsible for safeguarding your login credentials. Climb is not liable for any unauthorized access caused by your failure to maintain confidentiality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Subscriptions and Payments</h2>
                  <p>
                    Climb offers premium features through auto-renewing in-app subscriptions managed via Apple's StoreKit and RevenueCat. All purchases of digital goods (e.g., analytics, themes, premium rewards) must be made via the App Store. Subscription prices, billing periods, and benefits will be disclosed in-app before purchase. You can manage or cancel your subscription through your Apple ID settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Gift Card Rewards</h2>
                  <p>
                    Our app offers digital gift cards as rewards, fulfilled through Tremendous. Gift card redemption, delivery, and customer service are handled through Tremendous's systems. By redeeming a gift card, you agree to Tremendous's Terms of Service and Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Rewards and Points</h2>
                  <p>
                    Climb may offer points or rewards for achieving personal goals. These have no cash value and are non-transferable. We reserve the right to revoke, modify, or suspend the rewards system at any time, including the removal of points earned through fraud, abuse, or technical error.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Acceptable Use</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Use Climb for any unlawful or fraudulent activity</li>
                    <li>Interfere with or disrupt the app or servers</li>
                    <li>Upload harmful code or viruses</li>
                    <li>Attempt to reverse-engineer any part of Climb</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
                  <p>
                    All content, branding, logos, and features within Climb are the intellectual property of Climb Inc. or its partners. You may not copy, reproduce, or distribute any part of the app without our prior written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Health Disclaimer</h2>
                  <p>
                    Climb provides goal-setting and fitness-tracking tools. It is not a medical or diagnostic app. You should consult a healthcare professional before starting any fitness program. Use Climb at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
                  <p>
                    We may suspend or terminate your access to Climb at any time, with or without notice, if you violate these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to These Terms</h2>
                  <p>
                    We may update these Terms from time to time. Material changes will be communicated in-app or via email. Continued use of Climb means you accept the updated Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law and Dispute Resolution</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada. Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in Toronto, Ontario, unless otherwise required by applicable law. You waive any right to a trial by jury or to participate in a class action.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">12. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, Climb Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the App, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount you paid us, if any, in the past 12 months.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">13. Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Us</h2>
                  <p>
                    Climb Fitness Inc.<br />
                    <a href="mailto:corporate@climbfitness.ca" className="text-orange-400 hover:text-orange-300">
                      corporate@climbfitness.ca
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 rounded-md text-white font-medium transition-all duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 