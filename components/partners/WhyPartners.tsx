import React from "react"
import { CheckCircle, Heart, Award, Target } from "lucide-react"

interface WhyPartnerData {
  title: string
  paragraphs: string[]
  image: string
  quote: string
}

interface WhyPartnerProps {
  data: WhyPartnerData
}

export default function WhyPartner({ data }: WhyPartnerProps) {
  const benefits = [
    {
      icon: Heart,
      title: "Save Lives Together",
      description: "Join our mission to ensure no Kenyan dies from lack of blood"
    },
    {
      icon: Award,
      title: "Build Your Legacy",
      description: "Create lasting impact in healthcare and community wellness"
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Track your contribution through transparent reporting and metrics"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-400 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
            <Heart className="w-4 h-4 text-red-600" />
            <span className="text-red-700 text-sm font-medium">Partnership Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're building a sustainable blood donation ecosystem that serves every corner of Kenya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 mb-8">
              {data.paragraphs.map((para, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{para}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
              <blockquote className="text-lg text-gray-800 italic mb-4">
                "{data.quote}"
              </blockquote>
              <cite className="text-red-700 font-semibold">
                - Dr. Sarah Mwangi, Medical Director
              </cite>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={data.image}
                alt="Partnership impact"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-red-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Partner Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}