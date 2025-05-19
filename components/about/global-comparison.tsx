"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { globalComparisonData } from "@/data/about/global-comparison"
import { BarChart3 } from "lucide-react"

export default function GlobalComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full mb-4">
            <BarChart3 className="h-4 w-4" />
            <span className="font-semibold text-sm">Global Perspective</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{globalComparisonData.title}</h2>
          <p className="text-lg text-gray-300">{globalComparisonData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalComparisonData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#DC241f] transition-colors"
            >
              <div className="text-sm font-semibold text-gray-400 mb-3">{stat.category}</div>
              <div className="flex items-end space-x-2 mb-4">
                <div className="text-4xl font-bold text-white">{stat.donationsPerThousand}</div>
                {stat.percentage && <div className="text-2xl font-bold text-[#DC241f] mb-1">{stat.percentage}</div>}
              </div>
              <div className="h-2 bg-gray-700 rounded-full mb-4">
                <div
                  className="h-full bg-[#DC241f] rounded-full"
                  style={{
                    width: `${(Number.parseFloat(stat.donationsPerThousand) / 32) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Source: World Health Organization (WHO) Global Status Report on Blood Safety and Availability
          </p>
        </div>
      </div>
    </section>
  )
}
