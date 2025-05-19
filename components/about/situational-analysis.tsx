"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { situationalAnalysisData } from "@/data/about/situational-analysis"
import { Heart, Users } from "lucide-react"

export default function SituationalAnalysis() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Calculate the percentage for the chart
  const totalDonations = situationalAnalysisData.donorDemographics.ageGroups.reduce(
    (sum, group) => sum + group.donations,
    0,
  )

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{situationalAnalysisData.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Maternal Mortality Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#DC241f]/10 w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <Heart className="h-6 w-6 text-[#DC241f]" />
              </div>
              <h3 className="text-2xl font-bold">{situationalAnalysisData.maternalMortality.title}</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">{situationalAnalysisData.maternalMortality.description}</p>
              <p className="text-gray-700">{situationalAnalysisData.maternalMortality.additionalInfo}</p>
              <div className="bg-[#DC241f]/10 p-4 rounded-lg border-l-4 border-[#DC241f]">
                <p className="font-semibold text-gray-800">
                  40% of maternal deaths are caused by obstetric hemorrhage, which could be prevented with adequate
                  blood supply.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Donor Demographics Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#006600]/10 w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <Users className="h-6 w-6 text-[#006600]" />
              </div>
              <h3 className="text-2xl font-bold">{situationalAnalysisData.donorDemographics.title}</h3>
            </div>
            <p className="text-gray-700 mb-6">{situationalAnalysisData.donorDemographics.description}</p>

            <div className="space-y-3 mb-6">
              {situationalAnalysisData.donorDemographics.ageGroups.map((group, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-24 md:w-32 text-sm text-gray-700">{group.age}</div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#DC241f] to-[#006600] rounded-full"
                        style={{ width: `${(group.donations / totalDonations) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-20 md:w-24 text-right text-sm font-medium text-gray-700">
                    {group.donations.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-sm">{situationalAnalysisData.donorDemographics.conclusion}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-black text-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full border-8 border-[#DC241f] opacity-20"></div>
                <div className="absolute inset-4 rounded-full border-8 border-[#006600] opacity-20"></div>
                <div className="absolute inset-8 rounded-full border-8 border-white opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#DC241f]">16%</div>
                    <div className="text-sm text-gray-300">Blood Need Met</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">The Gap We're Addressing</h3>
              <p className="text-gray-300">
                Kenya has an annual demand of approximately 500,000 units of blood, but in the FY 2022/2023, the country
                collected only 412,531 units. This leaves a substantial gap in the supply of safe and adequate blood,
                affecting critical healthcare services across the country.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
