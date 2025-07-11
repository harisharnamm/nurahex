'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

// Hook to check for reduced motion preference
function useReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Simple text animation components (fallback for @reactbits/text-animations)
interface TextCursorProps {
  children: string
  typeSpeed?: number
  loop?: boolean
  className?: string
}

function TextCursor({ children, typeSpeed = 38, loop = false, className = '' }: TextCursorProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!textRef.current || reducedMotion) {
      if (textRef.current) textRef.current.textContent = children
      return
    }

    const element = textRef.current
    const text = children
    let index = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    function type() {
      if (isDeleting) {
        element.textContent = text.substring(0, index - 1)
        index--
        if (index === 0) {
          isDeleting = false
          timeoutId = setTimeout(type, 500)
          return
        }
      } else {
        element.textContent = text.substring(0, index + 1)
        index++
        if (index === text.length) {
          if (loop) {
            isDeleting = true
            timeoutId = setTimeout(type, 2000)
            return
          }
          return
        }
      }
      timeoutId = setTimeout(type, typeSpeed)
    }

    type()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [children, typeSpeed, loop, reducedMotion])

  return <span ref={textRef} className={className} />
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!elementRef.current || reducedMotion) return

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power2.out' }
    )
  }, [delay, reducedMotion])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Main component
export default function PinnedHighlights() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  const slides = [
    {
      id: 'revolutionary',
      headline: 'Revolutionary AI Solutions',
      subtext: "We don't just implement AI – we revolutionize how your business operates"
    },
    {
      id: 'lightning',
      headline: 'Lightning Fast Deployment',
      subtext: 'From concept to production in weeks, not months'
    },
    {
      id: 'measurable',
      headline: 'Measurable Results',
      subtext: 'Proven ROI with enterprise-grade solutions that scale'
    }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        // Show only first slide with no animation
        const slides = sectionRef.current!.querySelectorAll('.slide')
        gsap.set(slides[0], { opacity: 1 })
        gsap.set(Array.from(slides).slice(1), { opacity: 0 })
        return
      }

      const slides = sectionRef.current!.querySelectorAll('.slide')
      if (slides.length === 0) return

      // Set initial states
      gsap.set(slides, { opacity: 0 })
      gsap.set(slides[0], { opacity: 1 })

      // Create timeline with smoother transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      // Improved timing for smoother crossfade
      const slideDuration = 3.0  // Total duration for each slide
      const crossfadeDuration = 1.0  // Overlap duration for crossfade
      const extraScrollSpace = 2.0  // Extra scroll time after last slide

      slides.forEach((slide, index) => {
        if (index === 0) {
          // First slide: hold then crossfade out
          tl.to(slide, {
            opacity: 1,
            duration: slideDuration - crossfadeDuration,
            ease: 'none'
          }, 0)
          .to(slide, {
            opacity: 0,
            duration: crossfadeDuration,
            ease: 'power2.inOut'
          }, slideDuration - crossfadeDuration)
        } else {
          // Calculate start time with improved overlap
          const startTime = (index * slideDuration) - (crossfadeDuration * index)
          
          // Crossfade in
          tl.to(slide, {
            opacity: 1,
            duration: crossfadeDuration,
            ease: 'power2.inOut'
          }, startTime)
          
          // Hold visible
          .to(slide, {
            opacity: 1,
            duration: slideDuration - crossfadeDuration,
            ease: 'none'
          }, startTime + crossfadeDuration)

          // Crossfade out (except last slide)
          if (index < slides.length - 1) {
            tl.to(slide, {
              opacity: 0,
              duration: crossfadeDuration,
              ease: 'power2.inOut'
            }, startTime + slideDuration - crossfadeDuration)
          } else {
            // Last slide: hold longer then fade out, plus extra scroll space
            tl.to(slide, {
              opacity: 1,
              duration: 1.0,
              ease: 'none'
            }, startTime + slideDuration - crossfadeDuration)
            .to(slide, {
              opacity: 0,
              duration: 1.0,
              ease: 'power2.inOut'
            }, startTime + slideDuration + 0.5)
            // Add extra scroll space
            .to({}, { duration: extraScrollSpace }, startTime + slideDuration + 1.5)
          }
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[300vh] bg-surface-950"
    >
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950/90 via-surface-900/70 to-surface-950/90" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-700/8 via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-accent-600/3 via-transparent to-transparent opacity-50" />
      
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="slide absolute inset-0 flex flex-col items-center justify-center transform-gpu will-change-transform"
                style={{ opacity: 0 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#D7FF1E] transform-gpu">
                  {reducedMotion ? (
                    slide.headline
                  ) : (
                    <TextCursor typeSpeed={38} loop={false}>
                      {slide.headline}
                    </TextCursor>
                  )}
                </h2>
                {reducedMotion ? (
                  <p className="text-xl text-surface-50/90 max-w-3xl mx-auto leading-relaxed">
                    {slide.subtext}
                  </p>
                ) : (
                  <FadeIn delay={1.5} className="text-xl text-surface-50/90 max-w-3xl mx-auto leading-relaxed">
                    {slide.subtext}
                  </FadeIn>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
