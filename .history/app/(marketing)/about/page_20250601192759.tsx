import Image from "next/image"
import Link from "next/link"
import { PrimaryButton } from "@/components/shared/primary-button"
import { CardGlass } from "@/components/shared/card-glass"
import TeamGrid from '@/components/team/team-grid';
import { TEAM } from './team-data';
import { PreFooterCTA } from "@/components/shared/pre-footer-cta"
import { Metadata } from "next"
import { Tag } from "@/components/ui/tag"

export const metadata: Metadata = {
  title: "About - NurahexAI",
  description: "Learn about NurahexAI's mission, values, and the team behind the future of AI innovation.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-950">
      <div className="pt-24">
      {/* Meet the Team Section - with group photo */}
      <section className="relative py-24 bg-surface-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <img src="/art/grid.svg" alt="Grid watermark" className="w-full h-full object-cover opacity-5" />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-surface-50 mb-4">🚀 Meet the team powering NurahexAI</h2>
            <p className="text-surface-200 text-white/80 text-lg max-w-2xl mx-auto">A passionate, global crew of builders, engineers, and dreamers.</p>
          </div>
          
          <TeamGrid members={TEAM} />
        </div>
      </section>

      {/* Hero Section - with company/office image */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're <span className="text-primary">NurahexAI</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              A team of AI specialists dedicated to helping businesses harness the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - with innovation image */}
      <section className="py-20 bg-bg-dark/90">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                At Nurahex, our mission is to democratize AI-driven automation by delivering cutting-edge, scalable, and affordable solutions for businesses of all sizes — from local startups to global enterprises.
                Backed by academic excellence from the University of Waterloo, University of Europe for Applied Sciences, and Indian Institute of Management (IIM), our founding team blends global tech expertise with strategic business insight.
                We are committed to making intelligent automation a core engine of modern business — optimizing workflows, reducing operational friction, and unlocking new levels of productivity.
                Automation is no longer a luxury — it's a necessity, and Nurahex is here to make it universally achievable.
              </p>
              <p className="text-lg text-white/80">
                To create a future where intelligent automation is accessible to every business — empowering innovation, boosting efficiency, and transforming how the world works.
              </p>
            </div>
            {/* Mission/innovation image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                alt="Innovation at NurahexAI"
                className="rounded-lg shadow-md relative z-10 border border-white/10 w-full object-cover"
                style={{ maxHeight: 320 }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Core Values - HEAT Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Tag variant="primary" className="mb-6">
              Our Values
            </Tag>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              Our Core Values – We Bring the{" "}
              <span className="text-primary-700">HEAT</span>
            </h2>
            <p className="text-lg text-surface-200 max-w-3xl mx-auto">
              Every decision we make, every solution we build, and every partnership we form 
              is guided by our core values that spell out HEAT.
            </p>
          </div>

          {/* Modified HEAT Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* First Row: Honesty and Excellence */}
            <div className="bg-surface-700 border border-surface-600 rounded-2xl p-8 hover:border-primary-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Honesty
              </h3>
              <p className="text-surface-200 leading-relaxed">
                We believe in transparent communication, ethical AI practices, and building 
                trust through authentic relationships with our clients and partners.
              </p>
            </div>

            <div className="bg-surface-700 border border-surface-600 rounded-2xl p-8 hover:border-primary-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Excellence
              </h3>
              <p className="text-surface-200 leading-relaxed">
                We strive for perfection in every line of code, every algorithm, and every 
                solution we deliver. Excellence is not just our goal—it's our standard.
              </p>
            </div>

            {/* Second Row: HEAT Card spanning full width */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary-700 to-primary-500 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-6">
                <h3 className="text-4xl font-heading font-bold text-surface-950 mb-2">
                  HEAT
                </h3>
                <p className="text-surface-950/80 font-medium">
                  Our driving force
                </p>
              </div>
            </div>

            {/* Third Row: Adaptability and Teamwork */}
            <div className="bg-surface-700 border border-surface-600 rounded-2xl p-8 hover:border-primary-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Adaptability
              </h3>
              <p className="text-surface-200 leading-relaxed">
                In the rapidly evolving world of AI, we embrace change, learn continuously, 
                and adapt our strategies to meet tomorrow's challenges today.
              </p>
            </div>

            <div className="bg-surface-700 border border-surface-600 rounded-2xl p-8 hover:border-primary-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Teamwork
              </h3>
              <p className="text-surface-200 leading-relaxed">
                Innovation happens when brilliant minds collaborate. We foster an environment 
                where diverse perspectives unite to create extraordinary solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PreFooterCTA />
    </div>
    </main>
  )
}
