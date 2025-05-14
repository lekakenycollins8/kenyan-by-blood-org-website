"use client"

import { motion } from "framer-motion"
import { Heart, Calendar, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BottomCards() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-[#DC241f] w-2"></div>
            <div className="p-6 flex items-center space-x-4 flex-1">
              <div className="bg-[#DC241f]/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-[#DC241f]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Donate Blood</h3>
                <p className="text-sm text-gray-600">Your donation helps save lives across Kenya.</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#DC241f] text-[#DC241f] hover:bg-[#DC241f] hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-[#006600] w-2"></div>
            <div className="p-6 flex items-center space-x-4 flex-1">
              <div className="bg-[#006600]/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-[#006600]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Schedule Visit</h3>
                <p className="text-sm text-gray-600">Book your donation appointment in advance.</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#006600] text-[#006600] hover:bg-[#006600] hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-black w-2"></div>
            <div className="p-6 flex items-center space-x-4 flex-1">
              <div className="bg-black/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Join Community</h3>
                <p className="text-sm text-gray-600">Connect with other donors and recipients.</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-black text-black hover:bg-black hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
