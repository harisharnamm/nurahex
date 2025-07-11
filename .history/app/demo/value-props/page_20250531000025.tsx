import ValuePropsSection from "@/components/home/ValuePropsSection"

export default function ValuePropsDemoPage() {
  return (
    <div className="min-h-screen bg-surface-950">
      {/* Header section for scroll context */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-surface-900 to-surface-950">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-surface-50 mb-6">
            ValuePropsSection Demo
          </h1>
          <p className="text-xl text-surface-300 mb-8">
            Scroll down to test GSAP scroll animations
          </p>
          <div className="text-surface-400">
            <p className="mb-2">✨ Features to test:</p>
            <ul className="text-left inline-block space-y-1">
              <li>• ScrollTrigger entrance animations</li>
              <li>• Hover scale and translate effects</li>
              <li>• Icon rotation and glow</li>
              <li>• HyperspeedRays background animation</li>
              <li>• Responsive grid layout</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The actual component */}
      <ValuePropsSection />

      {/* Footer section for scroll context */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-t from-surface-900 to-surface-950">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-surface-50 mb-4">
            Animation Testing Complete
          </h2>
          <p className="text-lg text-surface-300 mb-6">
            Scroll back up to trigger animations again
          </p>
          <div className="text-surface-400">
            <p className="mb-2">🎯 Test Results:</p>
            <ul className="text-left inline-block space-y-1">
              <li>• Cards animate in with stagger effect</li>
              <li>• Hover effects work on all three cards</li>
              <li>• HyperspeedRays animates on middle card</li>
              <li>• Layout is responsive across breakpoints</li>
              <li>• Accessibility features work properly</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
