"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, Bot, Globe, Brain, Sparkles, LineChart, Layers } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import "./why-nurahex-mobile.css"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

import { AnimatedCircles } from "@/components/home/animated-circles"
import { ScrollCue } from "@/components/home/scroll-cue"
import { PrimaryButton } from "@/components/shared/primary-button"
import { SecondaryLink } from "@/components/shared/secondary-link"
import { CardGlass } from "@/components/shared/card-glass"
import { CuriosityCTASection } from "@/components/home/curiosity-cta-section"
import { LoadingOverlay } from "@/components/home/loading-overlay"
import { AnimatedText } from "@/components/animations/animated-text"
import { AnimatedCounter } from "@/components/animations/animated-counter"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { PreFooterCTA } from "@/components/shared/pre-footer-cta"
import FlowingMenu from "@/components/animations/flowing-menu"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const problemRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const caseStudiesRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const socialProofRef = useRef<HTMLElement>(null)
  const ctaBannerRef = useRef<HTMLElement>(null)
  
  // Phase 3: Advanced ScrollTrigger refs
  const heroRef = useRef<HTMLElement>(null)
  const scrollProgressRef = useRef<HTMLDivElement>(null)
  const parallaxTextRef = useRef<HTMLDivElement>(null)

  const menuItems = [
  {
    text: "Own Your Intelligence",
    image: "https://images.unsplash.com/photo-1677442135073-705703f7e328?q=80&w=1920&auto=format&fit=crop",
    hoverText: "Built around your business — secure, transparent, and fully under your control."
  },
  {
    text: "Plug‑and‑Play Integration",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop", 
    hoverText: "Connect to your existing systems and data lakes in under a week. Prebuilt connectors for databases, CRMs, and APIs make deployment frictionless."
  },
  {
    text: "Production‑Ready by Default",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
    hoverText: "From fine‑tuning to continuous alignment, we handle the entire lifecycle: ingest → train → evaluate → monitor → update."
  }
];

  // Enhanced scroll-triggered animations
  useEffect(() => {
    // Problem section animations
    if (problemRef.current) {
      // Animate main heading with split text effect
      gsap.fromTo(
        problemRef.current.querySelector("h2"),
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0, // Title appears first
          ease: "power2.out",
          scrollTrigger: { 
            trigger: problemRef.current, 
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          } 
        }
      )

      // Animate paragraph with delay
      gsap.fromTo(
        problemRef.current.querySelector("p"),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.4, // Supporting text appears after title
          ease: "power2.out",
          scrollTrigger: { 
            trigger: problemRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )

      // Stagger animate list items
      gsap.fromTo(
        problemRef.current.querySelectorAll("li"),
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.1,
          delay: 0.8, // List items appear after supporting text
          ease: "power2.out",
          scrollTrigger: { 
            trigger: problemRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )

      // Animate image with scale effect
      gsap.fromTo(
        problemRef.current.querySelector("img, video"),
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          delay: 1.2, // Image appears last
          ease: "power2.out",
          scrollTrigger: { 
            trigger: problemRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )
    }

    // Services section animations
    if (servicesRef.current) {
      // Animate section heading
      gsap.fromTo(
        servicesRef.current.querySelector(".text-center"),
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 0, // Header appears first
          ease: "power2.out",
          scrollTrigger: { 
            trigger: servicesRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )

      // Stagger animate service cards with 3D effect
      gsap.fromTo(
        servicesRef.current.querySelectorAll(".service-card"),
        { 
          opacity: 0, 
          y: 60,
          rotationX: 10,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          scale: 1,
          duration: 0.8, 
          stagger: {
            amount: 0.6,
            grid: [2, 3],
            from: "start"
          },
          delay: 0.6, // Cards appear after header
          ease: "power2.out",
          scrollTrigger: { 
            trigger: servicesRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )
    }

    // Case studies section animations
    if (caseStudiesRef.current) {
      // Animate header
      gsap.fromTo(
        caseStudiesRef.current.querySelector(".mb-12"),
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 0, // Header appears first
          ease: "power2.out",
          scrollTrigger: { 
            trigger: caseStudiesRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )

      // Animate case study cards with different directions
      gsap.fromTo(
        caseStudiesRef.current.querySelectorAll(".case-study-card"),
        { 
          opacity: 0, 
          y: 50,
          rotation: 2
        },
        { 
          opacity: 1, 
          y: 0, 
          rotation: 0,
          duration: 0.8, 
          stagger: 0.15,
          delay: 0.6, // Cards appear after header
          ease: "power2.out",
          scrollTrigger: { 
            trigger: caseStudiesRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )
    }

    // Process section animations
    if (processRef.current) {
      // Animate section heading
      gsap.fromTo(
        processRef.current.querySelector(".text-center"),
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 0, // Header appears first
          ease: "power2.out",
          scrollTrigger: { 
            trigger: processRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )

      // Animate timeline dots with a sequenced appearance and pulsing effect
      const timelineDots = processRef.current.querySelectorAll(".timeline-dot")
      timelineDots.forEach((dot, index) => {
        // Create a timeline for each dot
        const dotTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: dot,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        
        // Add animation sequence
        dotTimeline
          .fromTo(dot, 
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.6, delay: 0.6 + (index * 0.1), ease: "back.out(1.7)" }
          )
          .to(dot, { 
            boxShadow: '0 0 15px #D7FF1E, 0 0 10px rgba(215, 255, 30, 0.8)', 
            duration: 0.4,
            repeat: 1,
            yoyo: true
          })
          // Animate inner glow effect
          .fromTo(dot.querySelector(".dot-glow"), 
            { opacity: 0 },
            { opacity: 0.8, duration: 0.6, ease: "power2.inOut" },
            "-=0.6" // Start slightly before the box shadow animation
          );
      })

      // Animate process steps with alternating directions
      gsap.fromTo(
        processRef.current.querySelectorAll(".process-step"),
        { 
          opacity: 0, 
          x: (index) => index % 2 === 0 ? -60 : 60,
          y: 30
        },
        { 
          opacity: 1, 
          x: 0,
          y: 0,
          duration: 0.8, 
          stagger: 0.2,
          delay: 0.8, // Steps appear after header and dots
          ease: "power2.out",
          scrollTrigger: { 
            trigger: processRef.current, 
            start: "top 70%",
            toggleActions: "play none none reverse"
          } 
        }
      )
    }

    // Social proof section animation
    if (socialProofRef.current) {
      gsap.fromTo(
        socialProofRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: { 
            trigger: socialProofRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )
    }

    // CTA Banner animation
    if (ctaBannerRef.current) {
      gsap.fromTo(
        ctaBannerRef.current,
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { 
            trigger: ctaBannerRef.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      )
    }
  }, [])

  // Phase 3: Advanced ScrollTrigger Effects
  useEffect(() => {
    // Scroll Progress Indicator
    if (scrollProgressRef.current) {
      const progressBar = scrollProgressRef.current
      
      // Set up ScrollTrigger for progress bar
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          progressBar.style.width = `${self.progress * 100}%`
        }
      })
    }

    // Hero Section Parallax Effects
    if (heroRef.current) {
      // Background parallax movement
      gsap.to(heroRef.current.querySelector('.hero-bg'), {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // Hero text parallax with stagger
      gsap.fromTo(heroRef.current.querySelectorAll('.hero-text-element'), {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      })
    }



    // Case Studies Section - Simple appearing animation
    const caseStudyItems = document.querySelectorAll('.case-study-item')
    if (caseStudyItems.length > 0) {
      gsap.fromTo(caseStudyItems, {
        opacity: 0,
        y: 30,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.case-studies-grid',
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Advanced Parallax Text Reveals
    if (parallaxTextRef.current) {
      const textElements = parallaxTextRef.current.querySelectorAll('.parallax-text')
      
      textElements.forEach((element, index) => {
        gsap.fromTo(element, {
          yPercent: 100,
          skewY: 10
        }, {
          yPercent: 0,
          skewY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })

        // Add word-by-word reveal for longer text
        if (element.textContent && element.textContent.length > 20) {
          const splitText = element.textContent.split(' ')
          element.innerHTML = splitText.map(word => `<span class="word">${word}</span>`).join(' ')
          
          gsap.fromTo(element.querySelectorAll('.word'), {
            opacity: 0,
            y: 20
          }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          })
        }
      })
    }

    // Advanced Scene-based Animations for Services Section
    if (servicesRef.current) {
      const servicesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      })

      // Create morphing background effect
      servicesTimeline
        .to(servicesRef.current.querySelector('.services-bg'), {
          scale: 1.2,
          rotation: 5,
          duration: 2,
          ease: "none"
        })
        .to(servicesRef.current.querySelectorAll('.service-card'), {
          rotationY: 15,
          z: 100,
          duration: 1,
          stagger: 0.2,
          ease: "power2.inOut"
        }, "-=1")
    }

    // Cleanup function
    return () => {
      // Remove progress bar
      const existingProgressBar = document.getElementById('scroll-progress')
      if (existingProgressBar) {
        document.body.removeChild(existingProgressBar)
      }
      
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Enhanced hover animations for interactive elements
  useEffect(() => {
    // Service card hover animations
    const serviceCards = document.querySelectorAll('.service-card')
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          duration: 0.3,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.service-icon'), {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.service-icon'), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Case study card hover animations
    const caseStudyCards = document.querySelectorAll('.case-study-card')
    caseStudyCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          duration: 0.4,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.case-study-metric'), {
          scale: 1.1,
          color: "#D7FF1E",
          duration: 0.3,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.case-study-cta'), {
          x: 5,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.case-study-metric'), {
          scale: 1,
          color: "#D7FF1E",
          duration: 0.3,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.case-study-cta'), {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    return () => {
      // Cleanup event listeners
      serviceCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
      caseStudyCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [loading])

  // Animate hero content in after loading
  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        ".hero-content .hero-line",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power2.out" }
      )
      gsap.fromTo(
        ".hero-content .hero-subtitle",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.5 }
      )
      gsap.fromTo(
        ".hero-content .hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.7, stagger: 0.1, ease: "power2.out" }
      )
    }
  }, [loading])

  // Define process steps array outside of JSX to fix JSX syntax error
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your objectives, data, and tech stack.",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: "Define use cases, KPIs, and a roadmap for seamless integration.",
    },
    {
      number: "03",
      title: "Implementation & Launch",
      description: "Fine‑tune models, build APIs, and deploy—complete with monitoring dashboards.",
    },
    {
      number: "04",
      title: "Optimization & Support",
      description: "Continuous model alignment, performance tuning, and 24/7 expert support.",
    },
  ];

  // Social Proof Strip (Testimonial Carousel)
  const testimonials = [
    {
      quote: "NurahexAI's private LLM shrank our support ticket backlog by 80% and cut operational costs in half. Their team took us live in three weeks — unbelievable speed and precision.",
      name: "Vipin",
      title: "Head, OakSL Shipping"
    },
    {
      quote: "We replaced multiple SaaS subscriptions with our in‑house NurahexAI model. Total cost of ownership dropped by 65%, and our data never left our network.",
      name: "Rajiv",
      title: "CEO, OneCube"
    },
    {
      quote: "The custom AI solution from NurahexAI transformed our customer service operations. Response times improved by 75% and customer satisfaction scores hit an all-time high.",
      name: "Priya Sharma",
      title: "VP of Operations, TechFlow Solutions"
    },
    {
      quote: "NurahexAI helped us build a proprietary AI model that understands our industry jargon perfectly. It's like having an expert consultant available 24/7.",
      name: "Michael Chen",
      title: "CTO, InnovateLabs"
    },
    {
      quote: "From concept to deployment in just 6 weeks. NurahexAI's team delivered exactly what we needed — a secure, scalable AI solution that integrates seamlessly with our existing systems.",
      name: "Sarah Johnson",
      title: "Director of Digital Transformation, Nexus Corp"
    },
    {
      quote: "The ROI was evident within the first month. Our team's productivity increased by 40% thanks to NurahexAI's intelligent automation tools.",
      name: "David Rodriguez",
      title: "Head of Engineering, Streamline Inc"
    },
    {
      quote: "NurahexAI's commitment to data privacy gave us the confidence to move forward with AI adoption. Our sensitive healthcare data is now more secure than ever.",
      name: "Dr. Emily Watson",
      title: "Chief Information Officer, MedTech Solutions"
    }
  ]
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  // Auto-advance testimonial every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  function handlePrev() {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  function handleNext() {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-surface-900 transition-colors duration-200">
      {loading && <LoadingOverlay onFinish={() => setLoading(false)} />}
      
      <div id="main-content" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s' }}>
        {/* Hero Section */}
        <section className="h-screen grid md:grid-cols-2 items-center gap-12 relative container mx-auto px-6 bg-gradient-to-br from-gray-50 to-white dark:from-surface-900 dark:to-surface-950" ref={heroRef}>
          {/* Hero Background Element for Parallax */}
          <div className="hero-bg absolute inset-0 bg-gradient-to-br from-primary-700/5 to-accent-600/5 dark:from-primary-700/10 dark:to-accent-600/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="space-y-6 z-10 hero-content">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-surface-50">
              <span className="hero-line block">Turn daily tasks into <span className="text-primary-800 dark:text-primary-700">self-running systems</span>.</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-surface-50/80 hero-subtitle">
              Zero Dev Effort • Complete Control & Privacy
            </p>
           
            <p className="text-base text-gray-600 dark:text-surface-50/60 hero-subtitle">
              Deploy custom AI tools that automate repetitive work, surface revenue opportunities, and free your team to focus on what matters — no heavy engineering required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton asChild className="hero-cta">
                <Link href="/contact">Book a 15‑Minute Discovery Call</Link>
              </PrimaryButton>
              <SecondaryLink href="#work" className="hero-cta">
                See our work <ArrowRight className="ml-2 h-4 w-4" />
              </SecondaryLink>
            </div>
          </div>
          <div className="hidden md:block relative h-full">
            <AnimatedCircles />
          </div>
          <ScrollCue />
        </section>

        {/* Problem → Solution Split */}
        <section ref={problemRef} className="py-24 relative bg-gradient-to-br from-gray-50 to-white dark:from-surface-900 dark:to-surface-950" id="work">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <AnimatedText animation="splitWords" delay={0} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-surface-50">
                  <span className="text-primary-800 dark:text-primary-700">Effortless Adoption</span> of GenAI at Scale
                </AnimatedText>
                <AnimatedText animation="slideUp" delay={0.4} className="text-lg text-gray-700 dark:text-surface-50/80">
                  We don't just deliver prototypes — we deliver impact.
                </AnimatedText>
                <ul className="space-y-4">
                  {[
                    "🔥 Light-Speed Deployment: Weeks, not months, to go live.",
                    "🚀 Measurable ROI: Proven cost reduction and revenue lift.",
                    "🔒 Enterprise‑Grade Security: SOC‑2 + ISO‑27001 compliant."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start problem-list-item">
                      <span className="mr-3 text-gray-700 dark:text-surface-50/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[var(--gradient-primary)] rounded-lg blur-xl opacity-10 dark:opacity-20"></div>
                <video
                  src="https://videos.pexels.com/video-files/25744125/11904090_2560_1440_24fps.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg relative z-10 border border-gray-200 dark:border-surface-600 problem-image object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Flowing Menu Section */}
        <section className="py-12 md:py-16 bg-gray-100 dark:bg-surface-700 overflow-hidden relative" id="why-nurahex">
          <BackgroundBeamsWithCollision className="bg-gray-100 dark:bg-surface-700" />
          <div className="text-center py-8 md:py-12 px-4 md:px-6 relative z-10">
            <AnimatedText animation="splitWords" delay={0} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-surface-50">
              Why <span className="text-primary-800 dark:text-primary-700">NurahexAI?</span>
            </AnimatedText>
            <p className="text-base md:text-lg text-gray-700 dark:text-surface-50/80 max-w-2xl mx-auto">
              We build autonomous systems — not experiments.
            </p>
          </div>
          <div className="flowing-menu-container" style={{ 
            height: 'min(60vh, 300px)', 
            position: 'relative', 
            zIndex: 10,
            maxHeight: '450px'
          }}>
            <FlowingMenu items={menuItems} />
          </div>
        </section>

        {/* Service Cards Grid */}
        <section ref={servicesRef} className="py-16 bg-white dark:bg-surface-900 relative overflow-hidden">
          {/* Services Background for Scene-based Animation */}
          <div className="services-bg absolute inset-0 bg-gradient-to-br from-primary-700/5 to-accent-600/5 opacity-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <AnimatedText animation="splitWords" delay={0} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-surface-50">
                Transformative <span className="text-primary-800 dark:text-primary-700">Capabilities</span>
              </AnimatedText>
              <AnimatedText animation="fadeIn" delay={0.3} className="text-lg text-gray-700 dark:text-surface-50/80 max-w-2xl mx-auto">
                We build cutting-edge private AI solutions that transform how your business operates and delivers value.
              </AnimatedText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Intelligence",
                  description:
                    "Train LLMs on your proprietary data for domain‑expert insights that generic models can't match.",
                  icon: <Sparkles className="h-8 w-8 text-primary-800 dark:text-primary-700" />,
                },
                {
                  title: "Intelligent Automation",
                  description:
                    "Orchestrate AI agents to handle repetitive workflows — from invoice processing to compliance monitoring — with human‑level accuracy.",
                  icon: <Brain className="h-8 w-8 text-primary-800 dark:text-primary-700" />,
                },
                {
                  title: "Conversational AI & Chatbots",
                  description:
                    "Deploy RAG‑powered assistants that never hallucinate, understand your business context, and accelerate customer support.",
                  icon: <Bot className="h-8 w-8 text-primary-800 dark:text-primary-700" />,
                },
                {
                  title: "Living Digital Experiences",
                  description:
                    "Build websites and applications that adapt, learn, and engage — creating dynamic user journeys that feel like real conversation.",
                  icon: <Globe className="h-8 w-8 text-primary-800 dark:text-primary-700" />,
                },
                {
                  title: "Predictive Insights",
                  description: "Turn raw data into foresight. From sales forecasting to supply‑chain optimization, uncover patterns that drive strategic decisions.",
                  icon: <LineChart className="h-8 w-8 text-primary-800 dark:text-primary-700" />,
                },
                {
                  title: "Enterprise‑Grade Security",
                  description: "Complete data sovereignty with on‑premises deployment options. Your intelligence stays where it belongs — with you.",
                  icon: <Layers className="h-8 w-8 text-primary-800 dark:text-primary-700" />,
                },
              ].map((service, index) => (
                <CardGlass key={index} className="h-full service-card">
                  <div className="w-12 h-12 rounded-full bg-primary-700/20 flex items-center justify-center mb-4 service-icon">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-surface-50">{service.title}</h3>
                  <p className="text-gray-600 dark:text-surface-50/70">{service.description}</p>
                </CardGlass>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section ref={processRef} className="py-24 bg-gray-50 dark:bg-surface-900 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <AnimatedText animation="splitWords" delay={0} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-surface-50">
                Our 4‑Step <span className="text-primary-800 dark:text-primary-700">Partnership Process</span>
              </AnimatedText>
              <AnimatedText animation="fadeIn" delay={0.3} className="text-lg text-gray-700 dark:text-surface-50/80 max-w-2xl mx-auto">
                A streamlined approach to implementing private AI in your business.
              </AnimatedText>
            </div>

            <div className="relative z-10">
              {/* Static timeline line - background only */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 timeline-container" style={{ top: '0px', bottom: '0px' }}>
                {/* Background line */}
                <div className="w-full h-full bg-gray-300 dark:bg-surface-600/50 rounded-full"></div>
              </div>
              <div className="space-y-24">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative process-step flex flex-col md:flex-row items-center">
                    {/* Timeline dot with enhanced styling */}
                    <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-700 text-primary-foreground flex items-center justify-center font-bold z-10"
                      style={{
                        boxShadow: '0 0 10px #D7FF1E, 0 0 5px rgba(215, 255, 30, 0.6)',
                        opacity: 0, // Start with 0 opacity for animation
                        border: '2px solid #D7FF1E80'
                      }}>
                      <span className="relative z-20">{index + 1}</span>
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-700 to-[#D7FF1E]/30 opacity-0 dot-glow"></div>
                    </div>
                    {/* Timeline content, alternate left/right */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="md:w-1/2 md:pr-16 md:text-right space-y-4 order-1">
                          <div className="inline-block bg-primary-700/20 text-primary-800 dark:text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-surface-50">{step.title}</h3>
                          <p className="text-gray-600 dark:text-surface-50/70">{step.description}</p>
                        </div>
                        <div className="hidden md:block md:w-1/2 order-2"></div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:w-1/2 order-1"></div>
                        <div className="md:w-1/2 md:pl-16 space-y-4 order-2">
                          <div className="inline-block bg-primary-700/20 text-primary-800 dark:text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-surface-50">{step.title}</h3>
                          <p className="text-gray-600 dark:text-surface-50/70">{step.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curiosity CTA Section */}
        <CuriosityCTASection />

        {/* Social Proof Strip */}
        <section ref={socialProofRef} className="py-16 bg-white dark:bg-surface-700 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <AnimatedText animation="splitWords" className="text-4xl font-bold mb-4 text-gray-900 dark:text-surface-50">
                Success Stories
              </AnimatedText>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xl">
                {/* Testimonial Carousel - No Card Component */}
                <div className="p-0 flex flex-col items-center text-center min-h-[180px] transition-all duration-500">
                  <span className="text-xl italic text-gray-700 dark:text-surface-50/80 mb-4 block">"{testimonials[testimonialIndex].quote}"</span>
                  <span className="font-medium mt-2 block text-gray-900 dark:text-surface-50">{testimonials[testimonialIndex].name}</span>
                  <span className="text-sm text-gray-600 dark:text-surface-50/60 block">{testimonials[testimonialIndex].title}</span>
                </div>
                {/* Dots Indicator */}
                <div className="flex gap-2 mt-6 justify-center">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${idx === testimonialIndex ? 'bg-primary-700' : 'bg-gray-300 dark:bg-surface-500'}`}
                      onClick={() => setTestimonialIndex(idx)}
                      aria-label={`Show testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                {/* Navigation Buttons closer together */}
                <div className="flex justify-center gap-3 w-full mt-6">
                  <button onClick={handlePrev} aria-label="Previous testimonial" className="bg-gray-200 dark:bg-surface-700 hover:bg-gray-300 dark:hover:bg-surface-600 text-gray-900 dark:text-surface-50 rounded-full p-2 shadow transition-all duration-200">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button onClick={handleNext} aria-label="Next testimonial" className="bg-gray-200 dark:bg-surface-700 hover:bg-gray-300 dark:hover:bg-surface-600 text-gray-900 dark:text-surface-50 rounded-full p-2 shadow transition-all duration-200">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA and Open Positions (restored from About page format) */}
        <section className="py-20 bg-gray-50 dark:bg-surface-900 border-t border-gray-200 dark:border-surface-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <AnimatedText animation="splitWords" className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-surface-50">
                Join the Future of AI
              </AnimatedText>
              <p className="text-lg text-gray-700 dark:text-surface-50/80 max-w-2xl mx-auto">
                We're always looking for talented people passionate about AI, design, and building the future. Explore our open positions or reach out if you think you'd be a great fit!
              </p>
            </div>
            <div className="space-y-4">
              {/* Example open positions, update as needed */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-surface-700 border border-gray-200 dark:border-surface-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-surface-50">AI Solutions Engineer</h4>
                  <p className="text-gray-600 dark:text-surface-200">Remote / Full-time / Intern</p>
                </div>
                <PrimaryButton asChild className="mt-4 md:mt-0">
                  <Link href="/careers#ai-solutions-engineer">Apply Now</Link>
                </PrimaryButton>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-surface-700 border border-gray-200 dark:border-surface-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-surface-50"> Gen-AI Designer </h4>
                  <p className="text-gray-600 dark:text-surface-200">Remote / Full-time / Intern</p>
                </div>
                <PrimaryButton asChild className="mt-4 md:mt-0">
                  <Link href="/careers#gen-ai-designer">Apply Now</Link>
                </PrimaryButton>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-surface-700 border border-gray-200 dark:border-surface-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-surface-50">Gen-AI Video Creator</h4>
                  <p className="text-gray-600 dark:text-surface-200">Remote / Part-time / Intern</p>
                </div>
                <PrimaryButton asChild className="mt-4 md:mt-0">
                  <Link href="/careers#product-designer">Apply Now</Link>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <PreFooterCTA />
      </div>
    </div>
  )
}
