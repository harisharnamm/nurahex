"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/shared/logo"
import { motion, AnimatePresence } from "framer-motion"
import { MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

interface NavLink {
  href: string
  label: string
}

interface ProductLink {
  href: string
  title: string
  description: string
  src: string
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
]

const productLinks: ProductLink[] = [
  { 
    href: "https://v0-yo-yo-ai-version-control-mu-nine.vercel.app/", 
    title: "TaxOS",
    description: "AI Operating System for Modern Accountants",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=140&h=70&fit=crop&auto=format"
  },
]

export function FloatingNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)
  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down'>('up')
  const [activeItem, setActiveItem] = React.useState<string | null>(null)
  const pathname = usePathname()

  const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setVisible(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
        setVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
        if (!isLoading) {
          setVisible(true)
        }
      }
      
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
            <Logo variant="navbar" className="w-7 h-7 min-w-[28px] min-h-[28px] z-50" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex-1 md:flex md:justify-center" onMouseLeave={() => setActiveItem(null)}>
              <div className="flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out relative",
                      pathname === link.href
                        ? "bg-black/10 text-black"
                        : "hover:bg-black/5 text-black/80"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Products Dropdown with Exact Example Design */}
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveItem("Products")}
                >
                  <motion.button 
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out hover:bg-black/5 text-black/80 flex items-center gap-1"
                    transition={{ duration: 0.3 }}
                  >
                    Products <ChevronDown className="w-4 h-4" />
                  </motion.button>
                  
                  <AnimatePresence>
                    {activeItem === "Products" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 10 }}
                        transition={transition}
                        className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-[200]"
                      >
                        <motion.div
                          layoutId="active"
                          className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                          transition={transition}
                        >
                          <motion.div
                            layout
                            className="w-max h-full p-4"
                          >
                            <div className="text-sm grid grid-cols-1 gap-4 p-4">
                              {productLinks.map((product) => (
                                <ProductItem
                                  key={product.href}
                                  title={product.title}
                                  href={product.href}
                                  src={product.src}
                                  description={product.description}
                                />
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transform transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#D7FF1D] px-6 py-6">
          <div className="flex items-center justify-between">
            <div onClick={() => setMobileMenuOpen(false)}>
              <Logo variant="navbar" className="w-7 h-7" />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-black/5 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Products Section - Mobile */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-900 mb-2">Products</div>
                {productLinks.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block px-3 py-2 text-base text-gray-900 hover:bg-black/5 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
              <div className="mt-4 px-3">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Ensure default export as well
export default FloatingNavBar
