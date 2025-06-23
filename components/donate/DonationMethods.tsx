"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Wallet, Handshake, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type DonationMethod = {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export default function DonationMethods({ 
  methods, 
  scrollToForm 
}: { 
  methods: DonationMethod[];
  scrollToForm: () => void;
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <Heart className="h-8 w-8" />
      case "wallet":
        return <Wallet className="h-8 w-8" />
      case "handshake":
        return <Handshake className="h-8 w-8" />
      default:
        return <Heart className="h-8 w-8" />
    }
  }

  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return "from-[#DC241f] to-[#b01c19] text-white"
      case 1:
        return "from-[#006600] to-[#004d00] text-white"
      case 2:
        return "from-black to-[#333333] text-white"
      default:
        return "from-[#DC241f] to-[#b01c19] text-white"
    }
  }

  return (
    <section id="waystosupport" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the donation method that works best for you. Every contribution, whether it's blood, money, or time,
            makes a significant impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${getColor(index)} p-8`}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {getIcon(method.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                <p className="mb-6 text-white/90">{method.description}</p>
                <Button asChild className="bg-white hover:bg-gray-100 text-black rounded-full group">
                  <Link href={method.href}>
                    {method.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
