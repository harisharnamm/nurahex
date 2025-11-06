"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardGlass } from "@/components/shared/card-glass"
import { PreFooterCTA } from "@/components/shared/pre-footer-cta"
import { CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		position: "",
		experience: "",
		resume: "",
		coverLetter: "",
		linkedinProfile: ""
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [error, setError] = useState("")

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setError("")

		try {
			const response = await fetch("https://n8n.projectascend.in/webhook/34d8e589-2ba1-47a1-a52f-08dee947273f", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					submittedAt: new Date().toISOString(),
					source: "NurahexAI Careers Page"
				}),
			})

			if (response.ok) {
				setIsSubmitted(true)
				setFormData({
					fullName: "",
					email: "",
					phone: "",
					position: "",
					experience: "",
					resume: "",
					coverLetter: "",
					linkedinProfile: ""
				})
			} else {
				throw new Error("Failed to submit application")
			}
		} catch (err) {
			setError("Failed to submit application. Please try again.")
		} finally {
			setIsSubmitting(false)
		}
	}

	if (isSubmitted) {
		return (
			<div className="pt-24 min-h-screen bg-white dark:bg-surface-950">
				<section className="py-20 bg-gray-50 dark:bg-bg-dark">
					<div className="container mx-auto px-6">
						<div className="max-w-2xl mx-auto text-center">
							<div className="mb-8">
								<CheckCircle className="h-16 w-16 text-primary-800 dark:text-primary mx-auto mb-4" />
								<h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-surface-50">Application Submitted!</h1>
								<p className="text-xl text-gray-600 dark:text-white/80">
									Thank you for your interest in joining NurahexAI. We've received your application and will review it carefully.
								</p>
							</div>
							<CardGlass className="p-8">
								<h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-surface-50">What's Next?</h2>
								<div className="space-y-4 text-left">
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 rounded-full bg-primary-800 dark:bg-primary mt-2 flex-shrink-0"></div>
										<p className="text-gray-600 dark:text-white/80">Our team will review your application within next couple of days</p>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 rounded-full bg-primary-800 dark:bg-primary mt-2 flex-shrink-0"></div>
										<p className="text-gray-600 dark:text-white/80">If you're a good fit, we'll reach out to schedule an initial conversation</p>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 rounded-full bg-primary-800 dark:bg-primary mt-2 flex-shrink-0"></div>
										<p className="text-gray-600 dark:text-white/80">Questions? Feel free to reach out to us!</p>
									</div>
								</div>
							</CardGlass>
						</div>
					</div>
				</section>
			</div>
		)
	}

	return (
		<div className="pt-24 bg-white dark:bg-surface-950">
			{/* Hero Section */}
			{/* Join Our Team CTA and Open Positions (restored from About page format) */}
			<section className="py-20 bg-gray-50 dark:bg-surface-900 border-t border-gray-200 dark:border-surface-700">
				<div className="container mx-auto px-6 max-w-4xl">
					<div className="text-center mb-10">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-surface-50">
							Join Our Team
						</h2>
						<p className="text-lg text-gray-600 dark:text-surface-50/80 max-w-2xl mx-auto">
							We’re always looking for talented people passionate about AI, design, and building the future. Explore our open positions or reach out if you think you’d be a great fit!
						</p>
					</div>
					<div className="space-y-4">
						{/* Example open positions, update as needed */}
						<div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-surface-800 border border-gray-200 dark:border-surface-700 rounded-lg p-6 shadow-sm">
							<div>
								<h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-surface-50">AI Solutions Engineer</h4>
								<p className="text-gray-600 dark:text-surface-50/70">Remote / Full-time / Intern</p>
							</div>
							<Button asChild className="mt-4 md:mt-0">
								<Link href="/careers#ai-solutions-engineer">Apply Now</Link>
							</Button>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-surface-800 border border-gray-200 dark:border-surface-700 rounded-lg p-6 shadow-sm">
							<div>
								<h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-surface-50">Gen-AI Designer</h4>
								<p className="text-gray-600 dark:text-surface-50/70">Remote / Full-time / Intern</p>
							</div>
							<Button asChild className="mt-4 md:mt-0">
								<Link href="/careers#gen-ai-designer">Apply Now</Link>
							</Button>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-surface-800 border border-gray-200 dark:border-surface-700 rounded-lg p-6 shadow-sm">
							<div>
								<h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-surface-50">Gen-AI Video Creator</h4>
								<p className="text-gray-600 dark:text-surface-50/70">Remote / Part-time / Intern</p>
							</div>
							<Button asChild className="mt-4 md:mt-0">
								<Link href="/careers#product-designer">Apply Now</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Application Form */}
			<section className="py-20 bg-white dark:bg-bg-dark" id="application">
				<div className="container mx-auto px-6">
					<div className="max-w-2xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-surface-50">Apply Now</h2>
							<p className="text-lg text-gray-600 dark:text-white/80">
								Ready to join our team? Fill out the form below and we'll get back to you soon.
							</p>
						</div>

						<CardGlass className="p-8">
							{error && (
								<div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
									{error}
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
											Full Name *
										</label>
										<Input
											id="fullName"
											name="fullName"
											type="text"
											required
											value={formData.fullName}
											onChange={handleInputChange}
											className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50"
											placeholder="John Doe"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
											Email Address *
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											required
											value={formData.email}
											onChange={handleInputChange}
											className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50"
											placeholder="john@example.com"
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
											Phone Number
										</label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleInputChange}
											className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50"
											placeholder="+1 (555) 123-4567"
										/>
									</div>
									<div>
										<label htmlFor="position" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
											Position of Interest *
										</label>
										<Input
											id="position"
											name="position"
											type="text"
											required
											value={formData.position}
											onChange={handleInputChange}
											className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50"
											placeholder="e.g. AI Engineer, Product Manager"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
										Years of Experience
									</label>
									<select
										id="experience"
										name="experience"
										value={formData.experience}
										onChange={handleInputChange}
										className="w-full bg-white dark:bg-surface-600/50 border border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
									>
										<option value="">Select experience level</option>
										<option value="0-1 years">0-1 years</option>
										<option value="2-3 years">2-3 years</option>
										<option value="4-6 years">4-6 years</option>
										<option value="7-10 years">7-10 years</option>
										<option value="10+ years">10+ years</option>
									</select>
								</div>

								<div>
									<label htmlFor="resume" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
										Resume/CV Link *
									</label>
									<Input
										id="resume"
										name="resume"
										type="url"
										required
										value={formData.resume}
										onChange={handleInputChange}
										className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50"
										placeholder="https://drive.google.com/your-resume-link"
									/>
									<p className="text-xs text-gray-500 dark:text-white/60 mt-1">
										Please provide a link to your resume (Google Drive, Dropbox, etc.)
									</p>
								</div>

								<div>
									<label htmlFor="linkedinProfile" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
										LinkedIn Profile
									</label>
									<Input
										id="linkedinProfile"
										name="linkedinProfile"
										type="url"
										value={formData.linkedinProfile}
										onChange={handleInputChange}
										className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50"
										placeholder="https://linkedin.com/in/yourprofile"
									/>
								</div>

								<div>
									<label htmlFor="coverLetter" className="block text-sm font-medium mb-2 text-gray-900 dark:text-surface-50">
										Cover Letter / Why do you want to join NurahexAI? *
									</label>
									<Textarea
										id="coverLetter"
										name="coverLetter"
										required
										value={formData.coverLetter}
										onChange={handleInputChange}
										className="bg-white dark:bg-surface-600/50 border-gray-300 dark:border-surface-600 text-gray-900 dark:text-surface-50 min-h-[120px]"
										placeholder="Tell us about yourself and why you're interested in this role..."
									/>
								</div>

								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-primary hover:bg-primary/90 py-3 text-lg"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Submitting Application...
										</>
									) : (
										"Submit Application"
									)}
								</Button>
							</form>
						</CardGlass>
					</div>
				</div>
			</section>

			

			{/* Pre-footer CTA */}
			<PreFooterCTA />
		</div>
	)
}
