"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Heart, Shield, Award, Droplets, Coffee, BookOpen, Building } from "lucide-react"
import Image from "next/image"

interface Partner {
  name: string
  logo: string
  category?: string
}

interface PartnersListProps {
  partners: Partner[]
}

export default function PartnersList({ partners }: PartnersListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Mock partners data with Unsplash logos for demonstration
  const mockPartners = [
    { name: "Ministry of Health Kenya", logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop", category: "Government" },
    { name: "Kenyatta National Hospital", logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop", category: "Healthcare" },
    { name: "Safaricom Foundation", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop", category: "Corporate" },
    { name: "Kenya Red Cross Society", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop", category: "NGO" },
    { name: "Aga Khan University Hospital", logo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=100&fit=crop", category: "Healthcare" },
    { name: "Equity Bank Foundation", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop", category: "Corporate" },
    { name: "Mater Hospital", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=100&fit=crop", category: "Healthcare" },
    { name: "Standard Chartered Bank", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop", category: "Corporate" }
  ]

  const displayPartners = partners.length > 0 ? partners : mockPartners

  // Create infinite loop by duplicating partners
  const infinitePartners = [...displayPartners, ...displayPartners, ...displayPartners]

  // Smooth infinite carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // Reset to beginning when we've moved through original set
        if (next >= displayPartners.length) {
          return 0
        }
        return next
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [displayPartners.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const supportAreas = [
    {
      icon: Droplets,
      title: "Blood Donation Mobilization",
      description: "Recruitment of donors and mobilization campaigns across Kenya",
      color: "red"
    },
    {
      icon: Building,
      title: "Equipment & Facilities",
      description: "Equipping blood transfusion facilities with modern equipment",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Training & Capacity Building",
      description: "Professional development and skill enhancement programs",
      color: "green"
    },
    {
      icon: Coffee,
      title: "Donor Support & Refreshments",
      description: "Providing 300ml beverages and snacks to ensure donor comfort and recovery",
      color: "amber"
    }
  ]

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden"
      aria-label="Partners Section"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-red-200 rounded-full mb-8 shadow-lg"
          >
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-red-700 text-sm font-semibold tracking-wide uppercase">
              Our Network
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Trusted <span className="text-red-600">Partners</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Building a network of trust with organizations committed to saving lives through blood donation
          </motion.p>
        </motion.div>

        {/* Infinite Logo Carousel */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: -currentIndex * 280 // Adjust based on logo width + gap
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
              style={{ width: `${infinitePartners.length * 280}px` }}
            >
              {infinitePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-64 h-32 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group overflow-hidden"
                >
                  <div className="relative w-full h-full p-6 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500 p-4"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Ministry of Health Partnership Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 rounded-3xl p-8 lg:p-12 border border-blue-200 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
            </div>
            
            <div className="relative z-10">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 border border-blue-300 rounded-full mb-6">
                  <Shield className="w-5 h-5 text-blue-700" />
                  <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">
                    Official Partnership
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  <span className="text-blue-700">Ministry of Health</span> Partnership
                </h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  The Ministry of Health through Kenya Blood Transfusion and Transplant Service wishes to partner with 
                  Kenyan By Blood Foundation to support the mobilization of blood donation, recruitment of donors, 
                  equipping of blood transfusion facilities, training and capacity building, and research.
                </p>
              </motion.div>

              {/* Recognition Cards */}
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-blue-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Official Recognition</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The Kenyan By Blood Foundation is <strong className="text-blue-700">HEREBY RECOGNIZED</strong> as 
                    a partner to the Ministry of Health in effecting KBTTS mandate.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-green-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Legitimized Partnership</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The Kenyan By Blood Foundation is <strong className="text-green-700">HEREBY LEGITIMIZED</strong> as 
                    a partner to the Ministry of Health.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Support Areas Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of <span className="text-red-600">Support</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to supporting Kenya's blood donation ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 relative overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${area.color}-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-${area.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className={`w-8 h-8 text-${area.color}-600`} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                    {area.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Refreshments Detail Box */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Donor Care & Refreshments</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refreshments play a crucial role in successful blood donation drives. Providing refreshments helps 
                  donors feel more comfortable, energized, and motivated to participate again in the future.
                </p>
                <div className="bg-white/70 rounded-lg p-4 border border-amber-200">
                  <p className="text-gray-800 font-medium">
                    <strong>Standard Provision:</strong> Each donor receives 300ml of soda or water with half a loaf 
                    of bread or a small pack of biscuits to aid in hydration and quick recovery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}