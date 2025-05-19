"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { pillarsData } from "@/data/about/pillars"
import { BookOpen, Megaphone, Users, Handshake } from "lucide-react"

export default function ApproachPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "book-open":
        return <BookOpen className="h-8 w-8 text-white" />
      case "megaphone":
        return <Megaphone className="h-8 w-8 text-white" />
      case "users":
        return <Users className="h-8 w-8 text-white" />
      case "handshake":
        return <Handshake className="h-8 w-8 text-white" />
      default:
        return <BookOpen className="h-8 w-8 text-white" />
    }
  }

  const getColor = (id: number) => {
    switch (id) {
      case 1:
        return "from-[#DC241f] to-[#b01c19]"
      case 2:
        return "from-[#006600] to-[#004d00]"
      case 3:
        return "from-black to-[#333333]"
      case 4:
        return "from-[#DC241f] to-[#b01c19]"
      default:
        return "from-[#DC241f] to-[#b01c19]"
    }
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{pillarsData.title}</h2>
          <p className="text-lg text-gray-700 mb-4">{pillarsData.introduction}</p>
          <p className="text-lg font-medium text-gray-800">{pillarsData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillarsData.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${getColor(pillar.id)} p-6`}>
                <div className="flex items-center">
                  <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full mr-4">
                    {getIcon(pillar.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {pillar.id}. {pillar.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-md border-l-4 border-[#006600]"
        >
          <div className="flex items-center mb-4">
            <Handshake className="h-6 w-6 text-[#006600] mr-3" />
            <h3 className="text-xl font-bold">Strategic Partnerships</h3>
          </div>
          <p className="text-gray-700">{pillarsData.partnershipNote}</p>
        </motion.div>
      </div>
    </section>
  )
}
