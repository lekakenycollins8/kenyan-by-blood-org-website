"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { donatePageData } from "@/data/donate"

export default function Hero({ data, scrollToForm }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section 
      className="relative py-24 md:py-32 bg-gradient-to-r from-red-50 to-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {data.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {data.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToForm}
              className="bg-[#DC241f] hover:bg-[#b01c19] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg group"
            >
              {data.ctaLabel}
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </div>

          {/* Blood Drop Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 bg-[#DC241f] rounded-t-full rounded-b-full animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}