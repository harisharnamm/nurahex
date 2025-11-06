import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Quote } from "lucide-react"
import { Tag } from "@/components/ui/tag"
import { colorForIndex } from "@/components/ui/tag-color-cycle"
import { PrimaryButton } from "@/components/shared/primary-button"
import { SecondaryLink } from "@/components/shared/secondary-link"

// This would normally come from a CMS or API
const caseStudies = {
  techcorp: {
    title: "TechCorp",
    subtitle: "AI-Powered Customer Support Transformation",
    metric: "3.5x",
    metricLabel: "Increase in Support Efficiency",
    location: "San Francisco, CA",
    teamSize: "250+ employees",
    industry: "SaaS / Technology",
    problem:
      "TechCorp was struggling with scaling their customer support operations. Their team was overwhelmed with tickets, leading to slow response times and customer dissatisfaction.",
    solution:
      "We developed a transformative AI approach that completely reimagined how their customer support operates. Through innovative methodologies and cutting-edge techniques, we created something that goes far beyond traditional automation—something their competitors are still trying to understand.",
    outcomes: [
      "70% reduction in first response time",
      "85% increase in customer satisfaction scores",
      "Support team capacity increased by 3.5x without adding headcount",
      "$1.2M annual savings in operational costs",
    ],
    technologies: ["Proprietary AI Framework", "Advanced Intelligence Layer", "Custom Innovation Platform", "Strategic Integration Suite"],
    testimonial: {
      quote:
        "NurahexAI transformed our customer support operations with their innovative AI solution. We've seen a 70% reduction in response time and significantly improved customer satisfaction.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp",
    },
    image: "/placeholder.svg?height=600&width=800",
  },
  growthlabs: {
    title: "GrowthLabs",
    subtitle: "Streamlining Data Processing with AI",
    metric: "68%",
    metricLabel: "Reduction in Processing Time",
    location: "New York, NY",
    teamSize: "120+ employees",
    industry: "Marketing Analytics",
    problem:
      "GrowthLabs was manually processing large datasets for their clients, which was time-consuming and error-prone. This was limiting their ability to scale and deliver insights quickly.",
    solution:
      "We crafted an intelligent automation system that transforms how data flows through their organization. Our solution seamlessly integrates with existing workflows while introducing cutting-edge AI capabilities that learn and improve over time.",
    outcomes: [
      "68% reduction in data processing time",
      "90% decrease in data processing errors",
      "Capacity to handle 4x more client projects",
      "Enabled real-time data insights vs. weekly reports",
    ],
    technologies: ["Intelligent Processing Engine", "Adaptive Analytics Framework", "Smart Integration Platform", "Innovation Accelerator"],
    testimonial: {
      quote:
        "The intelligent system NurahexAI built for us has completely transformed how we process data. What used to take days now happens in hours, with fewer errors and more consistent results.",
      author: "Michael Chen",
      title: "Head of Data, GrowthLabs",
    },
    image: "/placeholder.svg?height=600&width=800",
  },
  ecosystems: {
    title: "EcoSystems",
    subtitle: "AI-Optimized Supply Chain",
    metric: "$1.2M",
    metricLabel: "Annual Cost Savings",
    location: "Portland, OR",
    teamSize: "500+ employees",
    industry: "Sustainable Manufacturing",
    problem:
      "EcoSystems had inefficiencies in their supply chain that were increasing costs and carbon footprint. They needed to optimize their operations while maintaining their commitment to sustainability.",
    solution:
      "We engineered a revolutionary optimization intelligence that fundamentally reshapes supply chain dynamics. Our breakthrough methodology creates interconnected insights that transform operations in ways that challenge conventional thinking about efficiency and sustainability.",
    outcomes: [
      "$1.2M annual savings in operational costs",
      "32% reduction in carbon emissions from logistics",
      "Inventory carrying costs reduced by 28%",
      "Stockout incidents reduced by 64%",
    ],
    technologies: ["Strategic Intelligence Engine", "Operational Transformation Platform", "Predictive Ecosystem Architecture", "Sustainability Innovation Framework"],
    testimonial: {
      quote:
        "NurahexAI's innovative solution has not only saved us money but has also helped us reduce our environmental impact. It's a win-win for our business and our mission.",
      author: "Emma Rodriguez",
      title: "COO, EcoSystems",
    },
    image: "/placeholder.svg?height=600&width=800",
  },
  meditech: {
    title: "MediTech",
    subtitle: "AI-Enhanced Diagnostic Accuracy",
    metric: "42%",
    metricLabel: "Improvement in Diagnostic Accuracy",
    location: "Boston, MA",
    teamSize: "180+ employees",
    industry: "Healthcare Technology",
    problem:
      "MediTech struggled with inconsistent diagnostic accuracy across their imaging analysis platform, leading to potential misdiagnoses and delayed treatment decisions for patients.",
    solution:
      "We developed an advanced intelligence framework that enhances healthcare analysis in ways that push the boundaries of medical technology. Our approach creates sophisticated insights that integrate seamlessly while delivering accuracy improvements that reshape diagnostic capabilities.",
    outcomes: [
      "42% improvement in diagnostic accuracy",
      "65% reduction in analysis time",
      "Enhanced patient safety protocols",
      "Streamlined workflow for medical professionals",
    ],
    technologies: ["Advanced Healthcare Intelligence", "Diagnostic Enhancement Engine", "Medical Workflow Integration", "Clinical Innovation Platform"],
    testimonial: {
      quote:
        "The AI diagnostic platform from NurahexAI has significantly improved our accuracy rates and helped us provide better patient care. The system seamlessly integrates with our existing workflows.",
      author: "Dr. Amanda Foster",
      title: "Chief Medical Officer, MediTech",
    },
    image: "/placeholder.svg?height=600&width=800",
  },
  financeplus: {
    title: "FinancePlus",
    subtitle: "Advanced Fraud Detection System",
    metric: "87%",
    metricLabel: "Reduction in Detection Time",
    location: "Chicago, IL",
    teamSize: "320+ employees",
    industry: "Financial Services",
    problem:
      "FinancePlus was experiencing delays in fraud detection, resulting in financial losses and compromised customer trust. Their existing systems couldn't keep pace with evolving fraud patterns.",
    solution:
      "We created an intelligent security ecosystem that redefines threat detection through advanced pattern recognition. Our breakthrough approach identifies risks using methodologies that stay ahead of emerging threats in ways that traditional systems simply cannot match.",
    outcomes: [
      "87% reduction in fraud detection time",
      "94% accuracy in threat identification",
      "$3.2M prevented in fraudulent transactions",
      "Enhanced customer trust and satisfaction",
    ],
    technologies: ["Advanced Threat Intelligence", "Real-time Security Framework", "Predictive Risk Architecture", "Automated Defense Platform"],
    testimonial: {
      quote:
        "NurahexAI's fraud detection system has transformed our security operations. We now catch threats in real-time and our customers feel more secure than ever.",
      author: "James Mitchell",
      title: "CISO, FinancePlus",
    },
    image: "/placeholder.svg?height=600&width=800",
  },
  retailnext: {
    title: "RetailNext",
    subtitle: "Intelligent Sales Optimization",
    metric: "2.3x",
    metricLabel: "Increase in Sales Performance",
    location: "Los Angeles, CA",
    teamSize: "450+ employees",
    industry: "E-commerce Retail",
    problem:
      "RetailNext was struggling to provide personalized shopping experiences, leading to low conversion rates and customer engagement. Their generic approach wasn't meeting modern consumer expectations.",
    solution:
      "We developed an intelligent personalization ecosystem that revolutionizes customer engagement through advanced behavioral understanding. Our breakthrough approach creates individualized experiences using innovative methodologies that deliver unprecedented conversion improvements.",
    outcomes: [
      "2.3x increase in sales performance",
      "78% improvement in customer engagement",
      "156% boost in conversion rates",
      "Personalized experiences for millions of customers",
    ],
    technologies: ["Behavioral Intelligence Engine", "Dynamic Experience Platform", "Customer Journey Architecture", "Conversion Optimization Framework"],
    testimonial: {
      quote:
        "The personalization platform from NurahexAI has completely transformed our customer experience. Sales have more than doubled and our customers are more engaged than ever.",
      author: "Lisa Chen",
      title: "VP of Digital Experience, RetailNext",
    },
    image: "/placeholder.svg?height=600&width=800",
  },
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return <div>Case study not found</div>
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {caseStudy.title}: {caseStudy.subtitle}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/5 px-4 py-2 rounded-lg">
                <p className="text-sm text-white/60">Location</p>
                <p className="font-medium">{caseStudy.location}</p>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-lg">
                <p className="text-sm text-white/60">Team Size</p>
                <p className="font-medium">{caseStudy.teamSize}</p>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-lg">
                <p className="text-sm text-white/60">Industry</p>
                <p className="font-medium">{caseStudy.industry}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-bold text-primary-foreground mb-2">{caseStudy.metric}</span>
            <span className="text-xl text-primary-foreground/80">{caseStudy.metricLabel}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative rounded-lg overflow-hidden mb-8">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Innovation Components</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <Tag key={index} variant={colorForIndex(index)} size="sm">
                      {tech}
                    </Tag>
                  ))}
                </div>
                <p className="text-sm text-white/60 mt-3">
                  Our proprietary innovation framework combines breakthrough methodologies that most companies haven't even discovered yet.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold">Client Testimonial</h3>
                </div>
                <blockquote className="text-lg italic text-white/80 mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-white/60">{caseStudy.testimonial.title}</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-white/80">{caseStudy.problem}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="text-lg text-white/80">{caseStudy.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Results</h2>
                <div className="space-y-3">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                      <span className="text-lg">{outcome}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <PrimaryButton asChild>
                    <Link href="/contact">Discover What's Possible for Your Business</Link>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-16 bg-surface-700 border-t border-surface-600">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Continue Exploring</h3>
              <p className="text-surface-50/70">Discover more success stories</p>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <SecondaryLink href="/case-studies">
                View all case studies <ArrowRight className="ml-2 h-4 w-4" />
              </SecondaryLink>
              <PrimaryButton asChild>
                <Link href="/contact">Explore Your Possibilities</Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
