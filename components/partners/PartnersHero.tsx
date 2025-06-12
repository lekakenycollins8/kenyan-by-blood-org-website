"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Users, Globe, ArrowDown } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  data: {
    headline: string
    subheading: string
    ctaLabel: string
    backgroundImage: string
  }
  scrollToCTA: () => void
}

export default function PartnersHero({ data, scrollToCTA }: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Blood donation themed image URL
  const bloodDonationImage = "/images/kenya-blood-donation-unity.jpg"

  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-red-30 via-white to-red-30"
      aria-label="Partners Hero Section"
    >
      {/* Diagonal clipped image panel with blood donation theme */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-3/5 hidden lg:block">
          <div className="h-full relative">
            {/* Custom clip path for diagonal cut */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)'
              }}
            >
              <Image
                src={bloodDonationImage}
                alt="Blood donation partnership in Kenya - Kenyan By Blood Foundation healthcare workers and donors"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Gradient overlay for better text contrast */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-800/60 to-transparent"
              style={{ clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border-2 border-red-200/40 rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-red-300/30 rounded-full animate-pulse delay-1000 opacity-40" />

      {/* Content wrapper */}
      <div className="relative container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-[80vh]">
        
        {/* Text Column - positioned on the right for desktop */}
        <motion.div
          className="max-w-2xl lg:ml-auto lg:w-1/2 text-center lg:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heritage badge with enhanced styling */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-sm border border-red-200 rounded-full mb-8 shadow-lg"
          >
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-red-700 text-sm font-semibold tracking-wide uppercase">
              Kenyan by Blood Foundation
            </span>
          </motion.div>
          
          {/* Main headline with word-by-word emphasis */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            {data.headline.split(' ').map((word, index) => (
              <span 
                key={index} 
                className={`${index === 0 ? "text-red-600" : ""} inline-block mr-3`}
              >
                {word}
              </span>
            ))}
          </motion.h1>
          
          {/* Subheading with better typography */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-xl lg:max-w-none"
          >
            {data.subheading}
          </motion.p>
          
          {/* Enhanced stats row with better visual hierarchy */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-12"
          >
            {[
              { icon: Users, value: "30+", label: "Active Partners", color: "blue" },
              { icon: Globe, value: "6+", label: "Counties Reached", color: "green" },
              { icon: Heart, value: "200K+", label: "Lives Saved", color: "red" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                className="text-center group"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-${stat.color}-50 border-2 border-${stat.color}-200 rounded-full mb-3 mx-auto group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className={`w-7 h-7 text-${stat.color}-600`} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced CTA button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={scrollToCTA}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/30 overflow-hidden"
              aria-label="Partner with Kenyan By Blood Foundation for blood donation initiatives"
            >
              <span className="relative z-10 mr-2">{data.ctaLabel}</span>
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile/Tablet Image - also using blood donation theme */}
        <motion.div
          className="lg:hidden mt-12 w-full relative h-80 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src={bloodDonationImage}
            alt="Blood donation partnership in Kenya - Kenyan By Blood Foundation mobile view"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Animated pulsing blood drop - inspired by donate hero */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.1, 1],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-8 bg-red-600 rounded-full relative">
          {/* Blood drop shape using CSS */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full" />
        </div>
      </motion.div>

      {/* Background pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
    </section>
  )
}