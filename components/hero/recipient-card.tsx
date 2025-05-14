"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function RecipientCard() {
  const [showDonationInfo, setShowDonationInfo] = useState(true)
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      {/* Main Image */}
      <div className="aspect-[4/5] relative">
        <Image
          src="/images/blood-recipient.jpg"
          alt="Smiling blood transfusion recipient"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Kenyan Flag Ribbon */}
        <div className="absolute top-4 right-0 bg-white py-1 pl-3 pr-6 rounded-l-full shadow-md flex items-center space-x-2">
          <div className="w-6 h-4 flex flex-col">
            <div className="h-1/3 bg-black"></div>
            <div className="h-1/3 bg-[#DC241f]"></div>
            <div className="h-1/3 bg-[#006600]"></div>
          </div>
          <span className="text-xs font-bold text-black">Proudly Kenyan</span>
        </div>

        {/* Testimonial overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-[#006600] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold">JM</span>
              </div>
              <div>
                <h3 className="font-semibold">Jane Muthoni</h3>
                <p className="text-sm text-gray-300">Blood Recipient, Nairobi</p>
              </div>
            </div>
            <p className="text-sm italic mb-4">
              "The blood donation I received saved my life after childbirth complications. I'm forever grateful to the
              donors who made it possible for me to see my daughter grow."
            </p>
          </div>
        </div>

        {/* Next donation event */}
        {showDonationInfo && (
          <motion.div 
            className="absolute top-16 right-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white border border-white/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold mb-2 flex items-center text-[#DC241f]">
                <Calendar className="mr-2 h-4 w-4" /> Next Donation Drive
              </h3>
              <button 
                onClick={() => setShowDonationInfo(false)}
                className="text-white/70 hover:text-white -mt-1 -mr-1 p-1"
                aria-label="Close donation info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex items-center text-sm mb-1">
              <MapPin size={14} className="mr-1.5 text-white" />
              Kenyatta National Hospital
            </div>
            <div className="flex items-center text-sm mb-1">
              <Calendar size={14} className="mr-1.5 text-white" />
              May 20, 2025
            </div>
            <div className="flex items-center text-sm">
              <Clock size={14} className="mr-1.5 text-white" />
              9:00 AM - 4:00 PM
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 w-full border-white text-white hover:bg-white hover:text-[#DC241f]"
            >
              Schedule Appointment
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
