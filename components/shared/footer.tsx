import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Users, ArrowUpRight } from "lucide-react"

const footerLinks = [
	{
		title: "Company",
		links: [
			{ label: "About", href: "/about" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Careers", href: "/careers" },
			{ label: "Contact", href: "/contact" },
		],
	},
]

export function Footer() {
	return (
		<footer className="bg-surface-900 border-t border-surface-600 pt-16 pb-8">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
					{/* Company Info */}
					<div className="space-y-6 lg:col-span-2">
						<Logo />
						<p className="text-sm text-surface-50/70 max-w-xs">
							NurahexAI injects production-ready AI workflows into your product in
							weeks, not months.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://twitter.com/nurahexai"
								target="_blank"
								rel="noopener noreferrer"
								className="text-surface-50/70 hover:text-primary-700 transition-colors"
							>
								<Twitter size={20} />
								<span className="sr-only">Twitter</span>
							</a>
							<a
								href="https://linkedin.com/company/nurahexai"
								target="_blank"
								rel="noopener noreferrer"
								className="text-surface-50/70 hover:text-primary-700 transition-colors"
							>
								<Linkedin size={20} />
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://github.com/nurahexai"
								target="_blank"
								rel="noopener noreferrer"
								className="text-surface-50/70 hover:text-primary-700 transition-colors"
							>
								<Github size={20} />
								<span className="sr-only">GitHub</span>
							</a>
						</div>
					</div>

					{/* Navigation Links */}
					{footerLinks.map((group) => (
						<div key={group.title} className="space-y-4">
							<h4 className="font-heading font-medium text-sm">
								{group.title}
							</h4>
							<ul className="space-y-2">
								{group.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-sm text-white/70 hover:text-primary transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Hiring Section */}
					<div className="space-y-4 p-6 bg-gradient-to-br from-primary-900/20 to-primary-700/10 rounded-xl border border-primary-700/20 backdrop-blur-sm">
						<div className="flex items-center space-x-2 text-primary-400">
							<Users size={20} />
							<h4 className="font-heading font-medium text-sm">We're Hiring</h4>
						</div>
						<p className="text-sm text-white/70">
							Join our mission to democratize AI. Build the future with us.
						</p>
						<a
							href="/careers"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center space-x-2 text-sm text-primary-400 hover:text-primary-300 transition-colors group"
						>
							<span>View Open Positions</span>
							<ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
						</a>
					</div>
				</div>

				{/* Newsletter Section */}
				<div className="mt-12 p-8 bg-surface-800/50 rounded-xl border border-surface-600">
					<div className="max-w-2xl mx-auto text-center space-y-4">
						<h4 className="font-heading font-medium text-lg">Stay Updated</h4>
						<p className="text-sm text-white/70">
							Subscribe to our newsletter for the latest AI insights, product updates, and industry trends.
						</p>
						<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-md mx-auto">
							<Input
								type="email"
								placeholder="Your email address"
								className="bg-surface-600/50 border-surface-600 text-surface-50 flex-1"
							/>
							<Button
								variant="ghost"
								className="bg-primary-700 text-primary-foreground hover:bg-primary-600 px-6"
							>
								Subscribe
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-surface-600 text-center text-sm text-surface-50/50">
					<p>© {new Date().getFullYear()} NurahexAI. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
