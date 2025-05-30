"use client"

import { useEffect, useRef } from "react"
import { Brain, Bolt, LineChart } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import clsx from "clsx"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface ValueProp {
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  bgComponent?: React.ComponentType
}

interface ValuePropsSectionProps {
  className?: string
}

// Hyperspeed background component (simplified version)
const HyperspeedRays = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()

    const rays = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.3 + 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      rays.forEach((ray) => {
        ctx.save()
        ctx.translate(ray.x, ray.y)
        ctx.rotate(ray.angle)
        
        const gradient = ctx.createLinearGradient(0, 0, ray.length, 0)
        gradient.addColorStop(0, `rgba(215, 255, 30, ${ray.opacity})`)
        gradient.addColorStop(0.5, `rgba(159, 244, 240, ${ray.opacity * 0.7})`)
        gradient.addColorStop(1, "rgba(215, 255, 30, 0)")
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(ray.length, 0)
        ctx.stroke()
        ctx.restore()

        ray.x += Math.cos(ray.angle) * ray.speed
        ray.y += Math.sin(ray.angle) * ray.speed

        if (ray.x < 0 || ray.x > canvas.width || ray.y < 0 || ray.y > canvas.height) {
          ray.x = Math.random() * canvas.width
          ray.y = Math.random() * canvas.height
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen"
    />
  )
}

// Grid overlay component
const GridOverlay = () => (
  <div 
    className="absolute inset-0 opacity-20 pointer-events-none"
    style={{
      background: `radial-gradient(circle at 2px 2px, rgba(215, 255, 30, 0.12) 1px, transparent 0)`,
      backgroundSize: "36px 36px"
    }}
  />
)

export default function ValuePropsSection({ className }: ValuePropsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  const slides: ValueProp[] = [
    {
      title: "Revolutionary AI Solutions",
      subtitle: "We don't just implement AI – we revolutionise how your business operates.",
      icon: Brain,
    },
    {
      title: "Lightning Fast Deployment", 
      subtitle: "From concept to production in weeks, not months.",
      icon: Bolt,
    },
    {
      title: "Measurable Results",
      subtitle: "Proven ROI with enterprise-grade solutions that scale.",
      icon: LineChart,
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = cardsRef.current.filter(Boolean) as HTMLButtonElement[]
    
    // Initial state for cards
    gsap.set(cards, { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    })

    // Initial state for header
    if (headerRef.current) {
      gsap.set(headerRef.current, {
        opacity: 0,
        y: 30
      })
    }

    // Animate header first
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Animate cards in on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3
    })

    // Individual card hover animations
    cards.forEach((card, index) => {
      const iconBadge = card.querySelector('.icon-badge')
      const gradientLine = card.querySelector('.gradient-line')
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -6,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
        
        if (iconBadge) {
          gsap.to(iconBadge, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          })
        }
        
        if (gradientLine) {
          gsap.to(gradientLine, {
            scaleX: 1.2,
            duration: 0.3,
            ease: "power2.out"
          })
        }
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
        
        if (iconBadge) {
          gsap.to(iconBadge, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        }
        
        if (gradientLine) {
          gsap.to(gradientLine, {
            scaleX: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        }
      })

      // Focus animations
      card.addEventListener('focus', () => {
        gsap.to(card, {
          y: -3,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      card.addEventListener('blur', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={clsx(
        "w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24",
        className
      )}
    >
      {/* Section Header */}
      <div ref={headerRef} className="text-center mb-16">
        <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-50 mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
            NurahexAI
          </span>
        </h2>
        <p className="text-lg md:text-xl text-surface-50/80 font-inter font-medium max-w-3xl mx-auto">
          Transform your business with cutting-edge AI solutions designed for real-world impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {slides.map((slide, index) => {
          const IconComponent = slide.icon
          
          return (
            <button
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={clsx(
                "relative rounded-3xl p-8 md:p-10 text-left",
                "bg-[var(--glass-bg)] border border-[var(--glass-border)]",
                "backdrop-blur-md transition-all duration-300",
                "hover:shadow-[var(--shadow-primary)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2",
                "group will-change-transform"
              )}
              aria-label={slide.subtitle}
            >
              {/* Background Components */}
              {index === 1 && <HyperspeedRays />}
              {(index === 0 || index === 2) && <GridOverlay />}
              
              {/* Icon Badge */}
              <div className="icon-badge w-16 h-16 rounded-full bg-[var(--gradient-primary)] shadow-[var(--shadow-accent)] flex items-center justify-center mb-6">
                <IconComponent className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-50 mb-2">
                  {slide.title}
                </h3>
                
                {/* Gradient Line */}
                <div 
                  className="gradient-line h-1 w-12 bg-[var(--gradient-primary)] mt-6 mb-4 origin-left"
                />
                
                <p className="font-inter text-lg md:text-xl text-surface-50/80 font-medium leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-700/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
}
