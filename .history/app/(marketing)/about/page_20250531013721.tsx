import Image from "next/image"
import Link from "next/link"
import { PrimaryButton } from "@/components/shared/primary-button"
import { CardGlass } from "@/components/shared/card-glass"
import TeamGrid from '@/components/team/team-grid';
import { TEAM } from './team-data';
import { PreFooterCTA } from "@/components/shared/pre-footer-cta"

export default function AboutPage() {
  return (
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
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                At Nurahex, our mission is to democratize AI-driven automation by delivering cutting-edge, scalable, and affordable solutions for businesses of all sizes — from local startups to global enterprises.Backed by academic excellence from the University of Waterloo, University of Europe for Applied Sciences, and Indian Institute of Management (IIM), our founding team blends global tech expertise with strategic business insight.
We are committed to making intelligent automation a core engine of modern business — optimizing workflows, reducing operational friction, and unlocking new levels of productivity.
Automation is no longer a luxury — it's a necessity, and Nurahex is here to make it universally achievable.
              </p>
              <p className="text-lg text-white/80">
                We're committed to helping our clients navigate the rapidly evolving AI landscape, ensuring they stay
                ahead of the curve and leverage AI to achieve their business goals.
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

      {/* Founder Story */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                year: "2018",
                title: "The Beginning",
                description:
                  "NurahexAI was founded by Dr. Alex Chen and Dr. Maya Patel, two AI researchers who saw the gap between academic AI advancements and practical business applications.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                year: "2020",
                title: "First Major Client",
                description:
                  "We landed our first enterprise client, a Fortune 500 company struggling with customer support scalability. Our AI solution reduced their response time by 70%.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                year: "2021",
                title: "Team Expansion",
                description:
                  "Our team grew to 15 AI specialists, engineers, and product managers. We opened our headquarters in San Francisco.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                year: "2023",
                title: "Global Reach",
                description:
                  "We expanded our operations to Europe and Asia, serving clients across 12 countries. Our solutions have generated over $50M in value for our clients.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                year: "Today",
                title: "Leading the AI Revolution",
                description:
                  "NurahexAI is now a team of 50+ AI specialists working with companies of all sizes to implement production-ready AI solutions that deliver measurable business value.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10"></div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground z-10">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium mt-2">{milestone.year}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 group">
                        <Image
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-white/80">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg-dark/90">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancements.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                ),
              },
              {
                title: "Practicality",
                description:
                  "We focus on delivering practical solutions that solve real business problems, not just theoretical concepts.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                ),
              },
              {
                title: "Transparency",
                description:
                  "We believe in being transparent about what AI can and cannot do, setting realistic expectations for our clients.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                ),
              },
              {
                title: "Collaboration",
                description:
                  "We work closely with our clients, treating them as partners in the journey to AI adoption.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                ),
              },
              {
                title: "Ethical AI",
                description:
                  "We are committed to developing and implementing AI solutions that are ethical, fair, and responsible.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                ),
              },
              {
                title: "Continuous Learning",
                description:
                  "We are dedicated to continuous learning and improvement, both for our AI solutions and our team.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                ),
              },
            ].map((value, index) => (
              <CardGlass key={index} className="h-full">
                {value.icon}
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PreFooterCTA />
    </div>
  )
}
