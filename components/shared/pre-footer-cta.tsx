import Link from "next/link"
import { PrimaryButton } from "@/components/shared/primary-button"

export function PreFooterCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-700"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>

      <div className="container relative mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-950 mb-4">
              Ready to transform your business with AI?
            </h2>
            <p className="text-lg text-surface-950/80">
              Book a discovery call with our team to explore how NurahexAI can help you achieve your goals.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <PrimaryButton
              asChild
              className="bg-surface-950 text-primary-700 hover:bg-surface-950/90 hover:shadow-[var(--shadow-accent)] border-2 border-transparent hover:border-accent-600 transition-all"
            >
              <Link href="/contact">Book Your Free Consultation</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
