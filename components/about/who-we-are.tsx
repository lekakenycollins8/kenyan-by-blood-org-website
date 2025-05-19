"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { whoWeAreData } from "@/data/about/who-we-are"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="who-we-are" className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#DC241f]/10 text-[#DC241f] px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4" />
            <span className="font-semibold text-sm">Our Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{whoWeAreData.title}</h2>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#DC241f]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#006600]/5 rounded-full blur-3xl"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column - Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Kenya Flag Colors - Top Border */}
                <div className="absolute top-0 left-0 right-0 h-2 flex z-10">
                  <div className="w-1/3 h-full bg-black"></div>
                  <div className="w-1/3 h-full bg-[#DC241f]"></div>
                  <div className="w-1/3 h-full bg-[#006600]"></div>
                </div>

                {/* Main Image */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={whoWeAreData.image || "/placeholder.svg"}
                    alt="Kenya team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#DC241f] flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">KenyanByBloodFoundation</h3>
                  </div>
                  <p className="text-sm text-white/80">Official partner to the Ministry of Health in Kenya</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#006600]/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#DC241f]/20 rounded-2xl -z-10"></div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border-l-4 border-[#DC241f]">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#DC241f]/10 p-3 rounded-full mr-4 mt-1">
                      <div className="w-3 h-3 rounded-full bg-[#DC241f]"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Kenya Blood Transfusion Services</h3>
                      <p className="text-gray-700">
                        The Kenya Blood Transfusion and Transplant Services acknowledges the importance of access to
                        safe blood in the Kenyan health sector.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#006600]/10 p-3 rounded-full mr-4 mt-1">
                      <div className="w-3 h-3 rounded-full bg-[#006600]"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Kenyan by Blood Foundation</h3>
                      <p className="text-gray-700">
                        As an official partner to the Ministry of Health, we work in sensitization, capacity building,
                        resource mobilization, and transportation of blood.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black/10 p-3 rounded-full mr-4 mt-1">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Our Partnership</h3>
                      <p className="text-gray-700">
                        Together, we bridge the gap in access to safe blood across the country, ensuring that all
                        Kenyans have access to life-saving blood when needed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Every drop of blood donated has the power to save a life in Kenya."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
