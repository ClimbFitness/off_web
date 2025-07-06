import { GradientHeading } from "@/components/gradient-heading"
import { GrainBackground } from "@/components/grain-background"
import { NavBar } from "@/components/nav-bar"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GrainBackground />
      <NavBar />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <GradientHeading as="h1" className="text-4xl md:text-6xl mb-6" weight="light">
              Privacy Policy
            </GradientHeading>
            <p className="text-slate-300 text-lg">
              Last Updated: April 19, 2025 • Effective Date: April 19, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-8 text-slate-300">
                <p className="text-lg">
                  Climb Inc. ("Climb", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you use the Climb mobile application (the "App").
                </p>

                <p>
                  We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable privacy laws. By using Climb, you consent to the collection, use, and disclosure of your personal information as described in this policy.
                </p>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                  
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">a. Personal Information You Provide</h3>
                      <p>We collect the following information when you create an account or interact with the App:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Name, email address, and password</li>
                        <li>Health-related goals and fitness tracking inputs</li>
                        <li>Email address for gift card delivery (when redeeming rewards)</li>
                        <li>Subscription preferences</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">b. Automatically Collected Information</h3>
                      <p>When you use the App, we may automatically collect:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Device type and operating system</li>
                        <li>App usage data and crash reports</li>
                        <li>IP address and general location</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">c. Third-Party Services</h3>
                      <p>We use trusted third-party providers to power core functionalities:</p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>RevenueCat – for managing in-app subscriptions</li>
                        <li>Apple StoreKit – for processing subscription payments</li>
                        <li>Tremendous – for handling gift card reward fulfillment</li>
                        <li>Firebase (Google) – for authentication, analytics, and crash reporting</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Provide, maintain, and improve the Climb App</li>
                    <li>Personalize your experience and progress tracking</li>
                    <li>Process subscriptions and orders</li>
                    <li>Respond to customer support requests</li>
                    <li>Fulfill legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Sharing Your Information</h2>
                  <p>We do not sell your personal data. We may share limited information with:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Apple and RevenueCat – to manage and process subscriptions</li>
                    <li>Tremendous – to fulfill gift card rewards and delivery</li>
                    <li>Firebase/Google Analytics – to monitor app performance and user behavior</li>
                    <li>Law enforcement or authorities – if required by applicable law or legal process</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Health and Fitness Data</h2>
                  <p>
                    With your explicit permission, Climb may access fitness data (e.g., steps, workouts) through Apple HealthKit or similar services.
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>This data remains on-device unless you choose to sync it</li>
                    <li>It is used solely for goal tracking and fitness insights</li>
                    <li>We do not share, sell, or use this data for marketing purposes</li>
                    <li>Health data is never accessed without your opt-in consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Access or correct your personal information</li>
                    <li>Withdraw your consent at any time</li>
                    <li>Request account deletion</li>
                    <li>File a complaint with the Office of the Privacy Commissioner of Canada (OPC)</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:corporate@climbfitness.ca" className="text-orange-400 hover:text-orange-300">
                      corporate@climbfitness.ca
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
                  <p>We implement industry-standard safeguards, including:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure access controls and authentication</li>
                    <li>Storage on secure, monitored infrastructure</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission or storage is 100% secure. Use of the App is at your own risk, and you are responsible for maintaining the confidentiality of your login credentials.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                  <p>We retain personal data only as long as necessary to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Provide services to you</li>
                    <li>Comply with legal and regulatory obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                  </ul>
                  <p className="mt-4">
                    You may request deletion of your account and associated data at any time by contacting us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
                  <p>
                    Climb is not intended for children under 13. We do not knowingly collect or solicit personal data from anyone under 13. If we learn that we have collected personal information from a child under 13, we will delete it promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">9. International Users</h2>
                  <p>
                    While Climb is intended for users in Canada, your data may be processed and stored in other jurisdictions (e.g., the U.S.) by our service providers. By using the App, you consent to the transfer of your information outside of your country.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. If we make material changes, we will notify you via in-app notification or email. Your continued use of the App after such changes constitutes your acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy, you may contact us at:
                  </p>
                  <p className="mt-4">
                    Climb Inc.<br />
                    Email: <a href="mailto:corporate@climbfitness.ca" className="text-orange-400 hover:text-orange-300">
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