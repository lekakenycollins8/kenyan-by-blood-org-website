import React from "react"
import { ArrowRight, Heart, Phone, Mail, MapPin, Calendar } from "lucide-react"

interface CTAData {
  headline: string
  ctaLabel: string
  backgroundImage: string
}

interface PartnerCTAProps {
  data: CTAData
}

export default function PartnerCTA({ data }: PartnerCTAProps) {
  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+254 700 123 456",
      action: "tel:+254700123456"
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "partners@kenyanbyblood.org",
      action: "mailto:partners@kenyanbyblood.org"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Nairobi, Kenya",
      action: "#"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/70 to-black/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-500" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/20 backdrop-blur border border-red-400/30 rounded-full mb-6 sm:mb-8">
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-red-400" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">Take Action Today</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {data.headline.split(' ').map((word, index) => (
                <span key={index} className={word.toLowerCase().includes('partner') ? "text-red-400" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Every partnership saves lives. Join our network of changemakers and help us build a sustainable blood donation ecosystem across Kenya.
            </p>
            
            {/* Key benefits */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-left">
              {[
                "Direct impact on healthcare outcomes",
                "Brand visibility and CSR recognition",
                "Comprehensive partnership support",
                "Regular impact reporting and updates"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 text-sm sm:text-base"
              >
                <span>{data.ctaLabel}</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/partnership-guide"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                Download Partnership Guide
              </a>
            </div>
            
            {/* Urgency indicator */}
            <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-400/30 rounded-lg p-3 sm:p-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white/90 text-xs sm:text-sm">
                  <strong>Urgent:</strong> 47 counties still need blood donation partners
                </span>
              </div>
            </div>
          </div>
          
          {/* Right content - Contact card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 mt-8 lg:mt-0">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to Partner?
              </h3>
              <p className="text-sm sm:text-base text-white/70">
                Connect with our partnership team today
              </p>
            </div>
            
            {/* Contact methods */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                    <method.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white/70 text-xs sm:text-sm">{method.label}</div>
                    <div className="text-white font-medium text-sm sm:text-base truncate">{method.value}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/50 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              ))}
            </div>
            
            {/* Schedule meeting */}
            <div className="border-t border-white/20 pt-4 sm:pt-6">
              <a
                href="/schedule-meeting"
                className="group w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/30 text-white font-medium rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
              >
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Schedule a Meeting</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-white/20">
          {[
            { label: "Active Partners", value: "50+" },
            { label: "Lives Saved", value: "10K+" },
            { label: "Counties Covered", value: "15" },
            { label: "Years of Impact", value: "8+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}