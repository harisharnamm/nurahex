import { Check, Mail, MapPin, Phone } from "lucide-react"
import { PrimaryButton } from "@/components/shared/primary-button"
import { LeadCaptureForm } from "@/components/forms/lead-capture-form"
import { CardGlass } from "@/components/shared/card-glass"

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-bg-dark min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-6">Book Your Discovery Call</h2>
                <LeadCaptureForm />
              </div>
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's <span className="text-primary">Connect</span>
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Ready to transform your business with AI? Book a discovery call with our team to explore how NurahexAI
                  can help you achieve your goals.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p>Free 15-minute consultation with our AI experts</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p>Personalized recommendations for your business</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p>No obligation or pressure to commit</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-white/70">eashan@nurahex.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-white/70">+1 (519) 781-6849</p>
                      <p className="text-white/70">+91 98101 06849</p>
                      <p className="text-white/70">+91 99532 86606</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-6 flex items-center">
                      <MapPin className="h-6 w-6 text-primary mr-3" />
                      Our Global Offices
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <CardGlass className="text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-bold text-primary mb-2">Dubai, UAE</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Office No. 210 C Al Qaizi Building<br />
                          Near Fish Round About<br />
                          Deira, Dubai, UAE
                        </p>
                      </CardGlass>
                      
                      <CardGlass className="text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-bold text-primary mb-2">Berlin, Germany</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Haus 27, Wasgenstraße 75<br />
                          14129 Berlin, Germany
                        </p>
                      </CardGlass>
                      
                      <CardGlass className="text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-bold text-primary mb-2">Delhi-NCR, India</h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Shipra Srishti<br />
                          Delhi-NCR, India
                        </p>
                      </CardGlass>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
