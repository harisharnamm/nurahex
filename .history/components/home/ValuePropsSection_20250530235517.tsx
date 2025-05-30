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
    <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/20 via-accent-600/20 to-primary-700/20 animate-pulse" />
      <div className="absolute inset-0">
        {/* Animated rays effect */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-primary-700/40 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              transformOrigin: 'center top'
            }}
            animate={{
              scaleY: [0.5, 1.2, 0.8, 1],
              opacity: [0.3, 0.8, 0.4, 0.6]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Grid overlay background
const GridOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20 rounded-3xl overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(215, 255, 30, 0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/10 via-transparent to-accent-600/10" />
    </div>
  )
}

export default function ValuePropsSection({ className }: ValuePropsSectionProps) {
  // Hard-coded content data
  const slides: ValueProp[] = [
    {
      title: "Revolutionary AI Solutions",
      subtitle: "We don't just implement AI – we revolutionise how your business operates.",
      icon: Brain,
      bgComponent: GridOverlay
    },
    {
      title: "Lightning Fast Deployment", 
      subtitle: "From concept to production in weeks, not months.",
      icon: Bolt,
      bgComponent: HyperspeedBackground
    },
    {
      title: "Measurable Results",
      subtitle: "Proven ROI with enterprise-grade solutions that scale.",
      icon: LineChart,
      bgComponent: GridOverlay
    }
  ]

  return (
    <section className={clsx(
      "w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24",
      className
    )}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-50 mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
            NurahexAI
          </span>
        </h2>
        <p className="text-lg md:text-xl text-surface-50/80 font-inter font-medium max-w-3xl mx-auto">
          Transform your business with cutting-edge AI solutions designed for real-world impact
        </p>
      </motion.div>

      {/* Value Props Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {slides.map((slide, index) => {
          const IconComponent = slide.icon
          const BgComponent = slide.bgComponent

          return (
            <motion.button
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-3xl p-8 md:p-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md hover:shadow-[var(--shadow-primary)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 text-left"
              aria-label={slide.subtitle}
              style={{
                // CSS custom properties for consistent theming
                '--glass-bg': 'rgba(255,255,255,0.05)',
                '--glass-border': 'rgba(255,255,255,0.1)',
                '--shadow-primary': '0 0 16px rgba(215, 255, 30, 0.45)',
                '--gradient-primary': 'linear-gradient(135deg, #d7ff1e 0%, #9ff4f0 100%)'
              } as React.CSSProperties}
            >
              {/* Background Component */}
              {BgComponent && <BgComponent />}
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,#d7ff1e_0%,#9ff4f0_100%)] shadow-[0_0_12px_rgba(159,244,240,0.35)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-surface-900" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold tracking-tight text-surface-50 mb-4">
                  {slide.title}
                </h3>

                {/* Gradient Line */}
                <div className="h-1 w-12 bg-[var(--gradient-primary)] mt-6 mb-4 rounded-full" />

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-surface-50/80 font-inter font-medium leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-700/5 via-transparent to-accent-600/5 pointer-events-none" />
            </motion.button>
          )
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-base md:text-lg text-surface-50/60 font-inter mb-8">
          Ready to revolutionize your business with AI?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 rounded-full bg-primary-700 text-surface-900 font-inter font-semibold text-lg hover:bg-primary-500 hover:shadow-[var(--shadow-primary)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </section>
  )
}
