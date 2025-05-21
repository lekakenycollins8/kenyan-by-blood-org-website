"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { donatePageData } from "@/data/donate"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function WhyDonate() {
  const { whyDonate } = donatePageData
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={whyDonate.image || "/placeholder.svg"}
                  alt="Blood donation in Kenya"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Image Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#DC241f] flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Every Donation Matters</h3>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#006600]/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#DC241f]/20 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center space-x-2 bg-[#DC241f]/10 text-[#DC241f] px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4" />
              <span className="font-semibold text-sm">Make a Difference</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{whyDonate.title}</h2>
            <div className="space-y-6">
              {whyDonate.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-[#DC241f]">500K</div>
                <p className="text-sm text-gray-600">Units of blood needed annually</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-[#006600]">16%</div>
                <p className="text-sm text-gray-600">Of blood need currently met</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
