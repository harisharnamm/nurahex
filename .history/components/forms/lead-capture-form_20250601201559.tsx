"use client"

import { useState } from "react"
import { PrimaryButton } from "@/components/shared/primary-button"
import { Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  role: string
  companyName: string
  website: string
  companySize: string
  revenue: string
  message: string
}

export function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    companyName: "",
    website: "",
    companySize: "",
    revenue: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const companySize = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees"
  ]

  const revenueRanges = [
    "Under $1M",
    "$1M - $10M",
    "$10M - $50M",
    "$50M - $100M",
    "$100M+"
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.role.trim()) newErrors.role = "Role is required"
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required"
    if (!formData.companySize) newErrors.companySize = "Company size is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('https://n8n.projectascend.in/webhook/8ef14a9b-058a-46f2-9094-e0e1eae0126a', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'nurahexai-contact-form',
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'direct',
          page: 'contact-page'
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        // Small delay to show success message before redirect
        setTimeout(() => {
          window.location.href = 'https://cal.com/team-nurahex.ai/30min'
        }, 1500)
      } else {
        console.error('Webhook submission failed:', response.status, response.statusText)
        setSubmitStatus('error')
        // Still redirect to calendar after a delay
        setTimeout(() => {
          window.location.href = 'https://cal.com/team-nurahex.ai/30min'
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting form to webhook:', error)
      setSubmitStatus('error')
      // Still redirect to calendar after a delay
      setTimeout(() => {
        window.location.href = 'https://cal.com/team-nurahex.ai/30min'
      }, 2000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Work Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
            placeholder="your.email@company.com"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Role/Title *</label>
        <input
          type="text"
          value={formData.role}
          onChange={(e) => handleInputChange('role', e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
          placeholder="e.g., CEO, CTO, VP of Operations"
        />
        {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role}</p>}
      </div>
      {/* Company Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Company Name *</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
            placeholder="Your company name"
          />
          {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
            placeholder="https://yourcompany.com"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Company Size *</label>
          <select
            value={formData.companySize}
            onChange={(e) => handleInputChange('companySize', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
          >
            <option value="" className="bg-gray-800">Select size</option>
            {companySize.map((size) => (
              <option key={size} value={size} className="bg-gray-800">{size}</option>
            ))}
          </select>
          {errors.companySize && <p className="text-red-400 text-sm mt-1">{errors.companySize}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Annual Revenue</label>
          <select
            value={formData.revenue}
            onChange={(e) => handleInputChange('revenue', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
          >
            <option value="" className="bg-gray-800">Select range</option>
            {revenueRanges.map((range) => (
              <option key={range} value={range} className="bg-gray-800">{range}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">Tell us about your project</label>
        <textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50 resize-none"
          placeholder="Describe your AI needs, challenges you're facing, or goals you want to achieve..."
        />
      </div>
      {/* Submit Button */}
      <div className="pt-4">
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm text-center">
            ✅ Form submitted successfully! Redirecting to booking calendar...
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-300 text-sm text-center">
            ⚠️ Submission processed. Redirecting to booking calendar...
          </div>
        )}
        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Book Your Discovery Call</span>
          )}
        </PrimaryButton>
        <p className="text-xs text-white/60 mt-3 text-center">
          By submitting this form, you'll be redirected to schedule your call. We respect your privacy and will never share your information.
        </p>
      </div>
    </form>
  )
}
