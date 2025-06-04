"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function UrgentNeedBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="absolute top-20 left-0 right-0 z-30 bg-gradient-to-r from-[#DC241f] to-[#ff4136] text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-white rounded-full mr-2 animate-ping"></div>
          <p className="text-sm font-medium">Urgent need for O- blood type at Kenyatta National Hospital</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
