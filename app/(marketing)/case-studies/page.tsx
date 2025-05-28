import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { CardGlass } from "@/components/shared/card-glass"
import { PreFooterCTA } from "@/components/shared/pre-footer-cta"

const caseStudies = [
	{
		id: "techcorp",
		title: "TechCorp",
		category: "Customer Support",
		metric: "3.5x",
		description: "Increased customer support efficiency with AI-powered chatbot",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: "growthlabs",
		title: "GrowthLabs",
		category: "Data Processing",
		metric: "68%",
		description: "Reduction in data processing time with custom AI workflow",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: "ecosystems",
		title: "EcoSystems",
		category: "Supply Chain",
		metric: "$1.2M",
		description: "Annual savings through AI-optimized supply chain",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: "meditech",
		title: "MediTech",
		category: "Healthcare",
		metric: "42%",
		description: "Improved diagnostic accuracy with AI-powered image analysis",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: "financeplus",
		title: "FinancePlus",
		category: "Finance",
		metric: "87%",
		description: "Reduction in fraud detection time with AI monitoring",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: "retailnext",
		title: "RetailNext",
		category: "Retail",
		metric: "2.3x",
		description: "Increased sales through AI-powered recommendation engine",
		image: "/placeholder.svg?height=400&width=600",
	},
]

export default function CaseStudiesPage() {
	return (
		<div className="pt-24">
			{/* Hero Section */}
			<section className="py-20 bg-bg-dark">
				<div className="container mx-auto px-6">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Our{" "}
							<span className="text-primary">Success Stories</span>
						</h1>
						<p className="text-xl text-white/80 mb-8">
							Discover how we've helped companies across industries transform
							their operations with AI.
						</p>
					</div>
				</div>
			</section>

			{/* Filter Section */}
			<section className="py-8 bg-bg-dark/90 border-y border-white/10">
				<div className="container mx-auto px-6">
					<div className="flex flex-wrap gap-4 justify-center">
						<div className="relative">
							<select className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
								<option value="">All Industries</option>
								<option value="tech">Technology</option>
								<option value="healthcare">Healthcare</option>
								<option value="finance">Finance</option>
								<option value="retail">Retail</option>
							</select>
							<div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
								<ArrowRight className="h-4 w-4 rotate-90" />
							</div>
						</div>
						<div className="relative">
							<select className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
								<option value="">All Metrics</option>
								<option value="efficiency">Efficiency</option>
								<option value="cost">Cost Savings</option>
								<option value="revenue">Revenue Growth</option>
								<option value="accuracy">Accuracy</option>
							</select>
							<div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
								<ArrowRight className="h-4 w-4 rotate-90" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-20 bg-bg-dark">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{caseStudies.map((caseStudy) => (
							<Link
								href={`/case-studies/${caseStudy.id}`}
								key={caseStudy.id}
							>
								<CardGlass className="h-full overflow-hidden group">
									<div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
										<Image
											src={caseStudy.image || "/placeholder.svg"}
											alt={caseStudy.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent"></div>
										<div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
											{caseStudy.title}
										</div>
										<div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
											{caseStudy.category}
										</div>
									</div>
									<div className="space-y-2">
										<div className="flex items-baseline gap-2">
											<span className="text-3xl font-bold text-primary">
												{caseStudy.metric}
											</span>
											<span className="text-white/70">improvement</span>
										</div>
										<p className="text-white/80">
											{caseStudy.description}
										</p>
										<div className="flex items-center pt-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
											<span>Read case study</span>
											<ArrowRight className="ml-2 h-4 w-4" />
										</div>
									</div>
								</CardGlass>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Pre-footer CTA */}
			<PreFooterCTA />
		</div>
	)
}
