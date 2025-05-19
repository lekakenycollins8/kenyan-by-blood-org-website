"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#DC241f] to-[#b01c19] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span className="font-semibold text-sm">Join Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of the Solution</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your contribution can help bridge the gap in Kenya's blood supply. Join us in our mission to ensure safe
            blood access for all Kenyans.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              size="xl"
              className="bg-white text-[#DC241f] hover:bg-gray-100 rounded-full shadow-lg group"
              asChild
            >
              <Link href="/donate">
                Donate Blood Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline_primary"
              size="xl"
              className="border-white text-white hover:bg-white/20 rounded-full shadow-lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
