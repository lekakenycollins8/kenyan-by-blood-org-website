"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { missionVisionData } from "@/data/about/mission-vision"
import { Target, Eye, ArrowRight } from "lucide-react"

export default function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-black text-white overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15C26 9 22 5 18 5c-4 0-7 3-7 8 0 6 8 10 19 20 11-10 19-14 19-20 0-5-3-8-7-8-4 0-8 4-12 10z' fill='%23DC241f' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Purpose</h2>
            <div className="h-1 w-20 bg-[#DC241f] mx-auto"></div>
          </div>

          {/* Mission & Vision Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 h-full">
                <div className="bg-gradient-to-br from-[#DC241f] to-[#b01c19] p-10 md:p-16 h-full">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{missionVisionData.mission.title}</h3>
                  </div>

                  <p className="text-xl text-white/90 mb-8 leading-relaxed">{missionVisionData.mission.description}</p>

                  <div className="mt-auto">
                    <a href="#" className="inline-flex items-center text-white hover:underline group">
                      <span>Learn more about our mission</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#DC241f] rounded-full -z-0 opacity-20"></div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 h-full">
                <div className="bg-gradient-to-br from-[#006600] to-[#004d00] p-10 md:p-16 h-full">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{missionVisionData.vision.title}</h3>
                  </div>

                  <p className="text-xl text-white/90 mb-8 leading-relaxed">{missionVisionData.vision.description}</p>

                  <div className="mt-auto">
                    <a href="#" className="inline-flex items-center text-white hover:underline group">
                      <span>Learn more about our vision</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-[#006600] rounded-full -z-0 opacity-20"></div>
            </motion.div>
          </div>

          {/* Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
          >
            <p className="text-xl font-medium">
              Together, we're building a culture of regular blood donation across Kenya to ensure no life is lost due to
              blood shortage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
