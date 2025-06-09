"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutHero() {
  const scrollToMission = () => {
    const missionSection = document.getElementById("who-we-are")
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-page-image.jpg"
          alt="Kenyan blood donation"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-[#DC241f]/50 z-10"></div>
      </div>

      {/* Kenya flag colors - decorative element */}
      <div className="absolute top-0 left-0 w-full h-2 flex z-20">
        <div className="w-1/3 h-full bg-black"></div>
        <div className="w-1/3 h-full bg-[#DC241f]"></div>
        <div className="w-1/3 h-full bg-[#006600]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Kenyan by Blood Badge */}
          <div className="inline-block mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center">
              <div className="w-6 h-4 flex flex-col mr-2">
                <div className="h-1/3 bg-black"></div>
                <div className="h-1/3 bg-[#DC241f]"></div>
                <div className="h-1/3 bg-[#006600]"></div>
              </div>
              <span className="text-white text-sm font-medium">Kenyan by Blood Foundation</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Kenyan by Blood Foundation: <span className="text-[#DC241f]">Empowering Lifesaving Change</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            A youth-powered movement partnering with the Ministry of Health to mobilize safe blood for every Kenyan.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToMission}
              className="bg-[#DC241f] hover:bg-[#b01c19] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg group"
            >
              See Our Mission
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>

            <Link href="/donate">
              <Button
              variant="outline"
              className="border-white text-black hover:bg-white/20 px-8 py-6 rounded-full text-lg font-medium"
              >
              Donate Now
              </Button>
            </Link>
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

      {/* Statistics Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-4 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-white">
              <div className="text-2xl font-bold text-[#DC241f]">7</div>
              <div className="text-xs text-white/70">People need blood every 10 minutes</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-[#DC241f]">412K+</div>
              <div className="text-xs text-white/70">Blood units collected in 2023</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-[#006600]">16%</div>
              <div className="text-xs text-white/70">Of needed blood collected</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-[#006600]">3</div>
              <div className="text-xs text-white/70">Lives saved per donation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
