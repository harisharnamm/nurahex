"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/shared/logo"
import { motion } from "framer-motion"
import { ProductItem } from "@/components/ui/navbar-menu"
import { useTheme } from "@/components/providers/theme-provider"

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/careers", label: "Careers" },
]

export function FloatingNavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [visible, setVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
	const [active, setActive] = useState<string | null>(null)
	const pathname = usePathname()
	const { theme, toggleTheme } = useTheme()

	// Handle loading state - hide navbar during loading animation
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
			setVisible(true)
		}, 2500) // Hide during loading animation

		return () => clearTimeout(timer)
	}, [])

	// Smart scroll behavior
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			
			// Determine scroll direction
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				// Scrolling down and past threshold
				setScrollDirection('down')
				setVisible(false)
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up
				setScrollDirection('up')
				if (!isLoading) {
					setVisible(true)
				}
			}
			
			// Always show at top of page
			if (currentScrollY < 50) {
				if (!isLoading) {
					setVisible(true)
				}
			}
			
			setLastScrollY(currentScrollY)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY, isLoading])

	return (
		<header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
			<div className="mx-auto max-w-6xl">
				<nav
					className={cn(
						"backdrop-blur-md bg-[#D7FF1D]/90 border border-white/20 px-6 py-3 transition-all duration-500 ease-out shadow-lg rounded-3xl",
						visible && !isLoading 
							? "opacity-100 translate-y-0 scale-100" 
							: "opacity-0 -translate-y-4 scale-95 pointer-events-none"
					)}
				>
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="z-50 flex items-center space-x-3"
							style={{ alignItems: "center" }}
						>
							<Logo variant="navbar" className="w-7 h-7 min-w-[28px] min-h-[28px]" noLink />
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center justify-center flex-1 space-x-2">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out",
										pathname === link.href
											? "bg-black/10 text-black"
											: "text-black/80 hover:bg-black/5 hover:text-black"
									)}
									aria-current={pathname === link.href ? "page" : undefined}
								>
									{link.label}
								</Link>
							))}
							
							{/* Products dropdown */}
							<div 
								className="relative" 
								onMouseEnter={() => setActive("Products")} 
								onMouseLeave={() => setActive(null)}
							>
								<div
									className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer text-black/80 hover:bg-black/5 hover:text-black transition-all duration-200"
								>
									Products
								</div>
								{active === "Products" && (
									<div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											transition={{ duration: 0.2 }}
											className="bg-white rounded-2xl overflow-hidden border border-black/[0.1] shadow-xl min-w-[400px]"
										>
											<div className="p-5">
												<ProductItem
													title="Website as Agents"
													href="/products/website-as-agents"
													src="https://plus.unsplash.com/premium_photo-1704757166042-38afc8414682?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674"
													description="Transform your website into an intelligent AI agent"
												/>
											</div>
										</motion.div>
									</div>
								)}
							</div>
						</div>

						<div className="hidden md:flex items-center gap-3">
							<button
								onClick={toggleTheme}
								className="p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
								aria-label="Toggle theme"
							>
								{theme === "light" ? (
									<Moon className="h-5 w-5 text-black/80" />
								) : (
									<Sun className="h-5 w-5 text-black/80" />
								)}
							</button>
							<Button
								asChild
								className="bg-black text-white rounded-full px-6 py-2 shadow-lg hover:bg-black/90 transition-all duration-200 ease-in-out"
							>
								<Link href="/contact">Get in Touch</Link>
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden z-50 p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
						>
							{mobileMenuOpen ? (
								<X className="h-5 w-5 text-black" />
							) : (
								<Menu className="h-5 w-5 text-black" />
							)}
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={cn(
							"md:hidden overflow-hidden transition-all duration-300 ease-in-out",
							mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
						)}
					>
						<div className="flex flex-col space-y-2 pt-4 pb-2 border-t border-black/20">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 text-center",
										pathname === link.href
											? "bg-black/10 text-black"
											: "text-black/80 hover:bg-black/5 hover:text-black"
									)}
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							
							{/* Products section for mobile */}
							<div className="px-4 py-3">
								<div className="text-sm font-medium text-black/80 mb-2">Products</div>
								<Link
									href="/products/website-as-agents"
									className="block px-4 py-2 rounded-full text-sm text-black/80 hover:bg-black/5 hover:text-black transition-all duration-200"
									onClick={() => setMobileMenuOpen(false)}
								>
									Website as Agents
								</Link>
							</div>
							
							{/* Theme toggle for mobile */}
							<div className="px-4 py-3 border-t border-black/10">
								<button
									onClick={toggleTheme}
									className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full text-sm font-medium text-black/80 hover:bg-black/5 hover:text-black transition-all duration-200"
								>
									{theme === "light" ? (
										<>
											<Moon className="h-4 w-4" />
											<span>Dark Mode</span>
										</>
									) : (
										<>
											<Sun className="h-4 w-4" />
											<span>Light Mode</span>
										</>
									)}
								</button>
							</div>
							
							<Button
								asChild
								className="bg-black text-white rounded-full w-full mt-4 shadow-lg hover:bg-black/90 transition-all duration-200"
							>
								<Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
									Get in Touch
								</Link>
							</Button>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

// Ensure default export as well
export default FloatingNavBar
