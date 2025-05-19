"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { journeyData } from "@/data/about/journey"
import { Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function JourneyTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#006600]/10 text-[#006600] px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4" />
            <span className="font-semibold text-sm">Our Progress</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{journeyData.title}</h2>
          <p className="text-gray-600">
            From humble beginnings to nationwide impact, our journey reflects our commitment to ensuring blood
            availability across Kenya.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-200"></div>

          {/* Year Markers */}
          <div className="flex justify-between mb-8 relative z-10">
            {journeyData.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2",
                    milestone.current ? "bg-[#006600] text-white" : "bg-[#DC241f] text-white",
                  )}
                >
                  {index + 1}
                </div>
                <div className={cn("text-2xl font-bold", milestone.current ? "text-[#006600]" : "text-[#DC241f]")}>
                  {milestone.year}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {journeyData.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={cn(
                  "bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105",
                  milestone.current && "ring-2 ring-[#006600]",
                )}
              >
                {/* Card Header */}
                <div className={cn("p-4 text-white", milestone.current ? "bg-[#006600]" : "bg-[#DC241f]")}>
                  <h3 className="font-bold">{milestone.title}</h3>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-gray-700 text-sm mb-4">{milestone.description}</p>

                  {milestone.units && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Blood Units Collected</div>
                      <div className="text-2xl font-bold text-gray-900">{milestone.units.toLocaleString()}</div>
                      <div className="h-2 bg-gray-100 rounded-full mt-2">
                        <div
                          className={cn("h-full rounded-full", milestone.current ? "bg-[#006600]" : "bg-[#DC241f]")}
                          style={{ width: `${(milestone.units / 500000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {milestone.highlight && (
                    <div className="bg-[#DC241f]/10 text-[#DC241f] px-3 py-1 rounded-full text-xs font-medium inline-block">
                      {milestone.highlight}
                    </div>
                  )}

                  {milestone.current && (
                    <div className="bg-[#006600]/10 text-[#006600] px-3 py-1 rounded-full text-xs font-medium inline-block">
                      Current Year
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-sm font-medium flex items-center text-gray-700 hover:text-[#DC241f] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#DC241f"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#DC241f]">82%</div>
                      <div className="text-xs text-gray-500">Progress</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Goal: 500,000 Units Annually</h3>
                <p className="text-gray-600 mb-4">
                  We're making significant progress toward meeting Kenya's annual blood demand of 500,000 units, with
                  412,531 units collected in 2023.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-[#DC241f] mr-2"></div>
                  <span>Current collection: 412,531 units (82% of target)</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                  <span>Gap: 87,469 units (18% of target)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
