"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./ai-highlights.css";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    headline: 'Revolutionary AI Solutions',
    subtext: 'We don't just implement AI – we revolutionize how your business operates.'
  },
  {
    headline: 'Lightning Fast Deployment',
    subtext: 'From concept to production in weeks, not months.'
  },
  {
    headline: 'Measurable Results',
    subtext: 'Proven ROI with enterprise-grade solutions that scale.'
  }
];

export default function AIHighlights() {
  const sectionRef = useRef(null);
  const slidesRef = useRef(null);
  
  useEffect(() => {
    // Clear any existing ScrollTrigger instances to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const slides = slidesRef.current?.querySelectorAll('.ai-highlight-slide') ?? [];
    if (!slides.length) return;
    
    // Reset all slides to ensure proper initial state
    gsap.set(slides, { 
      opacity: 0, 
      y: 20,
      scale: 0.9,
      pointerEvents: 'none',
      display: 'flex' // Ensure slides are displayed even when opacity is 0
    });
    gsap.set(slides[0], { 
      opacity: 1, 
      y: 0,
      scale: 1,
      pointerEvents: 'auto' 
    });
    
    // Animate glow elements
    const glows = document.querySelectorAll('.glow-element');
    gsap.to(glows, {
      x: "random(-40, 40)",
      y: "random(-40, 40)",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1
    });
    
    // Create ScrollTrigger with more precise markers
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#ai-highlights',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        pin: true, // Pin the whole section
        pinSpacing: true,
        anticipatePin: 1,
        markers: false, // Set to true for debugging
        toggleActions: "restart none none none",
        invalidateOnRefresh: true,
      }
    });

    // Improved animation sequence
    const sectionLength = 300; // Based on the 300vh height
    const slideDuration = sectionLength / 3; // Divide space equally
    
    slides.forEach((slide, idx) => {
      // Calculate position in the scroll timeline
      const start = idx * slideDuration;
      const end = start + slideDuration;
      
      // Add class when active for potential additional styling
      tl.call(() => {
        slides.forEach(s => s.classList.remove('active'));
        slide.classList.add('active');
      }, [], start);
      
      // Fade in with scale and y movement
      tl.to(slide, {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: 'auto',
        duration: slideDuration * 0.2, // 20% of the section for fade in
        ease: 'power2.inOut',
      }, start);
      
      // Fade out (if not the last slide)
      if (idx < slides.length - 1) {
        tl.to(slide, {
          opacity: 0,
          y: -20,
          scale: 0.9,
          pointerEvents: 'none',
          duration: slideDuration * 0.2, // 20% of the section for fade out
          ease: 'power2.inOut',
        }, end - (slideDuration * 0.2));
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="ai-highlights" ref={sectionRef}>
      {/* Ambient glow effects */}
      <div className="glow-container">
        <div className="glow-element glow-1"></div>
        <div className="glow-element glow-2"></div>
      </div>
      
      {/* Sticky container */}
      <div className="sticky-container">
        {/* Slide container with ref */}
        <div ref={slidesRef} id="ai-highlights-slides">
          {slides.map((slide, idx) => (
            <div
              key={slide.headline}
              className={`ai-highlight-slide ${idx === 0 ? 'active' : ''}`}
            >
              <h2>{slide.headline}</h2>
              <p>{slide.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
