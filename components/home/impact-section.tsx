"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { IMPACT_STATS } from "@/data/home"
import { Heart, MapPin, Users, Calendar, ArrowRight } from "lucide-react"

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
    <section ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden" id="impact">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">Making a Difference Across Kenya</h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Through the generosity of our donors, we've created a significant impact on healthcare across Kenya. Every
            donation counts in our mission to save lives.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-[#DC241f] flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC241f] mb-2">{stat.value}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{stat.label}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-auto">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Map */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Our National Reach</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                DonaKenya operates in 40 out of 47 counties in Kenya, ensuring that blood donation is accessible to most
                of the population. Our goal is to expand to all counties by 2026.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DC241f]">40+</div>
                  <p className="text-gray-600 text-xs sm:text-sm">Counties Served</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006600]">80%</div>
                  <p className="text-gray-600 text-xs sm:text-sm">Population Reach</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DC241f]">12K+</div>
                  <p className="text-gray-600 text-xs sm:text-sm">Monthly Donations</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006600]">98%</div>
                  <p className="text-gray-600 text-xs sm:text-sm">Donation Usage</p>
                </div>
              </div>

              {/* Mobile CTA - Visible on mobile only */}
              <div className="mt-6 lg:hidden">
                <button className="w-full bg-[#DC241f] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#DC241f]/90 transition-colors flex items-center justify-center">
                  Find Nearest Location
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Map of Kenya showing DonaKenya locations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                {/* Desktop CTA - Hidden on mobile */}
                <button className="hidden lg:flex bg-[#DC241f] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#DC241f]/90 transition-colors items-center">
                  Find Nearest Location
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                {/* Map Pins - Decorative elements */}
                <div className="absolute top-1/4 left-1/3 animate-pulse">
                  <MapPin className="h-6 w-6 text-[#DC241f] drop-shadow-lg" />
                </div>
                <div className="absolute top-1/2 right-1/4 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <MapPin className="h-6 w-6 text-[#DC241f] drop-shadow-lg" />
                </div>
                <div className="absolute bottom-1/3 left-1/2 animate-pulse" style={{ animationDelay: "1s" }}>
                  <MapPin className="h-6 w-6 text-[#DC241f] drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Donation Events - Mobile Optimized */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold">Upcoming Donation Events</h3>
            <a
              href="/events"
              className="text-[#DC241f] font-medium text-sm sm:text-base flex items-center hover:underline"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="h-40 sm:h-48 relative">
                  <img
                    src={`https://images.pexels.com/photos/6823${540 + item}/pexels-photo-6823${540 + item}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt="Donation event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-[#DC241f] text-white px-3 py-1 text-sm font-medium">
                    {["Urgent", "Featured", "New"][item - 1]}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    May {20 + item}, 2025
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    Blood Drive at {["Kenyatta Hospital", "Nairobi CBD", "Mombasa General"][item - 1]}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Join us for a community blood drive. All blood types needed, especially O- and B+.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {["Nairobi", "Nairobi Central", "Mombasa"][item - 1]}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Users className="h-4 w-4 mr-1" />
                    {[48, 36, 52][item - 1]} registered donors
                  </div>
                </div>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 mt-auto">
                  <button className="w-full bg-[#006600] hover:bg-[#004d00] text-white py-2 rounded-full text-sm font-medium transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
