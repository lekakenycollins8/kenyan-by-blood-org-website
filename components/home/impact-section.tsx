"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Heart, MapPin, Users, Calendar, ArrowRight, Activity, Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden" id="impact">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23DC241f' fillOpacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#DC241f]/10 text-[#DC241f] px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 fill-[#DC241f]" />
            <span className="font-semibold text-sm">Our Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">Our Impact in One Year</h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Since our inception in September 2023, we have made significant strides in raising awareness and increasing
            blood donations. Through organized blood drives across various counties, KBBF has collected over 73,000
            pints of blood, impacting the lives of an estimated 200,000 individuals.
          </p>
        </div>

        {/* Hashtag Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-[#DC241f] text-white py-3 px-6 rounded-full max-w-max mx-auto mb-12 flex items-center"
        >
          <Hash className="h-5 w-5 mr-2" />
          <span className="font-bold text-lg">iamkenyanbyblood</span>
        </motion.div>

        {/* Achievement Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            SNAPSHOT OF <span className="text-[#DC241f]">our ACHIEVEMENTS</span> in 2024
          </h3>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Blood Donors */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#DC241f] flex flex-col h-full"
            variants={itemVariants}
          >
            <div className="bg-[#DC241f]/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <Users className="h-8 w-8 text-[#DC241f]" />
            </div>
            <div className="text-4xl font-bold text-[#DC241f] mb-2">3,274</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Number of Blood Donors</h3>
            <p className="text-gray-600 text-sm mt-auto">
              Dedicated individuals who have donated blood through our campaigns.
            </p>
          </motion.div>

          {/* Blood Drives */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#006600] flex flex-col h-full"
            variants={itemVariants}
          >
            <div className="bg-[#006600]/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <Calendar className="h-8 w-8 text-[#006600]" />
            </div>
            <div className="text-4xl font-bold text-[#006600] mb-2">21</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Number of Blood Drives</h3>
            <p className="text-gray-600 text-sm mt-auto">Successful blood donation events organized across Kenya.</p>
          </motion.div>

          {/* Regional Locations */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-black flex flex-col h-full"
            variants={itemVariants}
          >
            <div className="bg-black/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <MapPin className="h-8 w-8 text-black" />
            </div>
            <div className="text-4xl font-bold text-black mb-2">6</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Number of Regional Locations</h3>
            <p className="text-gray-600 text-sm mt-auto">
              Strategic locations across Kenya where we've conducted blood drives.
            </p>
          </motion.div>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Lives Impacted</h3>
              <p className="text-gray-600 mb-6">
                Through our collective efforts, we've collected over 73,000 pints of blood, potentially saving or
                improving the lives of an estimated 200,000 individuals across Kenya.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Activity className="h-4 w-4 mr-2 text-[#DC241f]" />
                <span>Each donation can save up to 3 lives</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#DC241f"
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="85"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="text-4xl font-bold text-[#DC241f]">73K+</div>
                      <div className="text-sm text-gray-500">Pints Collected</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-[#006600] text-white text-xs font-bold px-2 py-1 rounded-full">
                  200K+ Lives Impacted
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="bg-[#DC241f] hover:bg-[#b01c19] text-white rounded-full group"
            asChild
          >
            <Link href="/about">
              Learn More About Our Impact
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}