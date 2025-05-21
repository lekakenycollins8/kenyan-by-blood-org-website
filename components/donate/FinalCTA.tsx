"use client"

import { motion } from "framer-motion"
import { donatePageData } from "@/data/donate"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function FinalCTA() {
  const { finalCta } = donatePageData

  const scrollToForm = () => {
    const formElement = document.getElementById("donation-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={finalCta.backgroundImage || "/placeholder.svg"}
          alt="Blood donation impact"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#DC241f]/70 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span className="font-semibold text-sm">Make a Difference Today</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{finalCta.headline}</h2>
          <Button
            onClick={scrollToForm}
            className="bg-[#DC241f] hover:bg-[#b01c19] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg border-2 border-white"
          >
            {finalCta.ctaLabel}
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1 Donation</div>
              <p className="text-white/80">Can save up to 3 lives</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">15 Minutes</div>
              <p className="text-white/80">Is all it takes to donate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-white/80">Of donations go to our programs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
