"use client"

import { motion } from "framer-motion"
import StatsRow from "@/components/hero/stats-row"
import { useCallback } from "react"

export default function HeroContent() {
  // Memoize the animation variant to prevent unnecessary re-renders in React 19
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: useCallback((custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }), [])
  }

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg"
      initial="hidden"
      animate="visible"
      custom={1}
      variants={fadeIn}
    >
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        <span className="text-[#DC241f]">Your Blood</span>{" "}
        <span className="text-black">Has The Power To</span>{" "}
        <span className="relative inline-block text-[#006600]">
          Empower
          <svg
            className="absolute -bottom-2 left-0 w-full h-2 text-[#DC241f]"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path d="M0,5 C30,15 70,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </span>{" "}
        <span className="text-white">Lives Across</span>{" "}
        <span className="text-[#000000]">K</span>
        <span className="text-[#DC241f]">e</span>
        <span className="text-[#000000]">n</span>
        <span className="text-[#006600]">y</span>
        <span className="text-[#000000]">a</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-white mb-8 max-w-xl bg-black/30 p-3 rounded-lg">
        Join a community of heroes making a difference. Every donation can save up to{" "}
        <span className="text-[#DC241f] font-bold">3 lives</span> and strengthen our nation's healthcare system.
      </p>

      {/* Stats Row */}
      <StatsRow />

      {/* CTA Buttons */}
    </motion.div>
  )
}
