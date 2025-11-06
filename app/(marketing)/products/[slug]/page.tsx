import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

// Product data structure
const products = {
  "website-as-agents": {
    title: "Website as Agents",
    tagline: "Transform Your Website into an Intelligent AI Agent",
    description: "Turn your static website into an autonomous AI agent that engages visitors, answers questions, and converts leads 24/7.",
    hero: {
      title: "Website as Agents",
      subtitle: "Your website isn't just a brochure anymore",
      description: "Imagine a website that understands your visitors, responds to their needs in real-time, and guides them through their journey—autonomously. Welcome to the future of web experiences."
    },
    problem: {
      title: "The Problem",
      description: "Traditional websites are passive. They wait for visitors to find information, fill forms, or navigate complex menus. Most visitors leave frustrated, and businesses lose opportunities.",
      points: [
        "70% of website visitors leave without taking action",
        "Average response time to inquiries: 24-48 hours",
        "Complex navigation leads to high bounce rates",
        "Limited personalization capabilities"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "Website as Agents transforms your website into an intelligent entity that actively engages with visitors, understands context, and provides personalized experiences.",
      features: [
        {
          title: "Intelligent Conversations",
          description: "Natural language interactions that understand intent and provide relevant information instantly.",
          icon: "💬"
        },
        {
          title: "Autonomous Actions",
          description: "Automatically schedules meetings, processes requests, and handles routine tasks without human intervention.",
          icon: "⚡"
        },
        {
          title: "Contextual Understanding",
          description: "Remembers past interactions, learns from user behavior, and adapts responses accordingly.",
          icon: "🧠"
        },
        {
          title: "24/7 Availability",
          description: "Never miss a lead. Your AI agent works round the clock, across all time zones.",
          icon: "🌍"
        }
      ]
    },
    benefits: {
      title: "Key Benefits",
      items: [
        {
          metric: "5x",
          label: "Increase in Engagement",
          description: "Visitors spend 5x more time on agent-powered websites"
        },
        {
          metric: "80%",
          label: "Reduction in Support Tickets",
          description: "AI agents handle routine inquiries automatically"
        },
        {
          metric: "60%",
          label: "Higher Conversion Rates",
          description: "Personalized interactions drive more qualified leads"
        },
        {
          metric: "24/7",
          label: "Always Available",
          description: "Never miss an opportunity, regardless of time zone"
        }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          number: "01",
          title: "Integration",
          description: "We seamlessly integrate our AI agent into your existing website infrastructure with minimal code changes."
        },
        {
          number: "02",
          title: "Training",
          description: "Your agent learns from your content, brand guidelines, and existing knowledge base to provide accurate responses."
        },
        {
          number: "03",
          title: "Deployment",
          description: "Launch your intelligent website agent with full monitoring, analytics, and continuous optimization."
        },
        {
          number: "04",
          title: "Evolution",
          description: "Your agent continuously learns and improves, adapting to user behavior and feedback."
        }
      ]
    },
    useCases: [
      {
        industry: "E-commerce",
        description: "Product recommendations, inventory inquiries, and order assistance",
        impact: "40% increase in average order value"
      },
      {
        industry: "SaaS",
        description: "Feature explanations, onboarding support, and demo scheduling",
        impact: "3x more qualified demo bookings"
      },
      {
        industry: "Healthcare",
        description: "Appointment scheduling, insurance verification, and symptom assessment",
        impact: "50% reduction in call center volume"
      },
      {
        industry: "Professional Services",
        description: "Consultation booking, case evaluation, and document collection",
        impact: "65% faster lead qualification"
      }
    ]
  }
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    return {
      title: "Product Not Found"
    }
  }

  return {
    title: `${product.title} | NurahexAI`,
    description: product.description,
  }
}

// Generate static paths for all products
export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-surface-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-surface-900 dark:to-surface-800">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-700/10 dark:from-primary-700/20 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <span className="inline-block px-4 py-2 bg-primary-700/20 text-primary-800 dark:text-primary-700 rounded-full text-sm font-medium">
              {product.tagline}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-surface-50">
              {product.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-surface-50/80 max-w-3xl mx-auto">
              {product.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary-700 text-surface-900 rounded-full font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </Link>
              <button className="px-8 py-4 bg-gray-200 dark:bg-surface-700 text-gray-900 dark:text-surface-50 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-surface-600 transition-all duration-200 border border-gray-300 dark:border-surface-600">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-surface-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-surface-50 mb-6">
                {product.problem.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-surface-50/70 mb-8">
                {product.problem.description}
              </p>
              <ul className="space-y-4">
                {product.problem.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <span className="text-gray-600 dark:text-surface-50/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-gray-200 dark:border-surface-700 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1770"
                alt="Problem visualization - traditional website challenges"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 px-6 bg-white dark:bg-surface-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-surface-50 mb-4">
              {product.solution.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-surface-50/70 max-w-3xl mx-auto">
              {product.solution.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {product.solution.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-surface-900 rounded-2xl p-8 border border-gray-200 dark:border-surface-700 hover:border-primary-700/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-surface-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-surface-50/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-surface-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-surface-50 text-center mb-16">
            {product.benefits.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {product.benefits.items.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-800 dark:text-primary-700 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-surface-50 mb-2">
                  {benefit.label}
                </div>
                <p className="text-sm text-gray-600 dark:text-surface-50/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white dark:bg-surface-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-surface-50 text-center mb-16">
            {product.howItWorks.title}
          </h2>
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-700/30 via-primary-700/50 to-primary-700/30" />

            <div className="grid md:grid-cols-4 gap-8">
              {product.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step circle with number */}
                  <div className="relative z-10 w-24 h-24 bg-primary-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-surface-900">
                      {step.number}
                    </span>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-primary-700 rounded-full blur-md opacity-30 -z-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-surface-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-surface-50/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-surface-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-surface-50 text-center mb-4">
            Industry Applications
          </h2>
          <p className="text-xl text-gray-600 dark:text-surface-50/70 text-center mb-16 max-w-3xl mx-auto">
            See how businesses across industries are leveraging AI agents
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-surface-800 rounded-2xl p-8 border border-gray-200 dark:border-surface-700 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-surface-50 mb-3">
                  {useCase.industry}
                </h3>
                <p className="text-gray-600 dark:text-surface-50/70 mb-4">
                  {useCase.description}
                </p>
                <div className="inline-block px-4 py-2 bg-primary-700/20 text-primary-800 dark:text-primary-700 rounded-full text-sm font-medium">
                  {useCase.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white dark:bg-surface-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-surface-50 mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl text-gray-600 dark:text-surface-50/70 mb-8">
            Join hundreds of businesses that have already upgraded their web presence with AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary-700 text-surface-900 rounded-full font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                Schedule a Demo
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gray-200 dark:bg-surface-800 text-gray-900 dark:text-surface-50 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-surface-700 transition-all duration-200 border border-gray-300 dark:border-surface-600">
                Talk to Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
