"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { journeyData } from "@/data/about/journey"
import { Clock } from "lucide-react"
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
            <span className="font-semibold text-sm">The Progress</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {journeyData.title}
          </h2>
          <p className="text-gray-600">
            From humble beginnings to nationwide impact, our journey reflects our
            commitment to ensuring blood availability across Kenya.
          </p>
        </div>

        {/* Grid Timeline (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeyData.milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105",
                milestone.current && "ring-2 ring-[#006600]",
              )}
            >
              {/* Card Header */}
              <div
                className={cn(
                  "p-4 text-white",
                  milestone.current ? "bg-[#006600]" : "bg-[#DC241f]",
                )}
              >
                <h3 className="font-bold text-base">
                  {milestone.title}
                  <span className="block text-xs font-normal opacity-80">
                    {milestone.year}
                  </span>
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <p className="text-gray-700 text-sm mb-4">
                  {milestone.description}
                </p>

                {milestone.units && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">
                      Blood Units Collected
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {milestone.units.toLocaleString()}
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full mt-2">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          milestone.current ? "bg-[#006600]" : "bg-[#DC241f]",
                        )}
                        style={{ width: `${(milestone.units / 500000) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {milestone.highlight && (
                  <div className="bg-[#DC241f]/10 text-[#DC241f] px-3 py-1 rounded-full text-xs font-medium inline-block mr-2">
                    {milestone.highlight}
                  </div>
                )}

                {milestone.current}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
