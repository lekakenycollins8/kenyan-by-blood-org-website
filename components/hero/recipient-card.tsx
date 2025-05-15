"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RecipientCard() {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-xl h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      {/* Main Image */}
      <div className="aspect-[4/5] relative h-full">
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
            <Link href="/stories" className="text-[#DC241f] text-sm font-medium hover:underline flex items-center">
              Read more stories <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
