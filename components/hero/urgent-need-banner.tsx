"use client"

import { Button } from "@/components/ui/button"

export default function UrgentNeedBanner() {
  return (
    <div className="absolute top-20 left-0 right-0 z-30 bg-gradient-to-r from-[#DC241f] to-[#ff4136] text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-white rounded-full mr-2 animate-ping"></div>
          <p className="text-sm font-medium">Urgent need for O- blood type at Kenyatta National Hospital</p>
        </div>
      </div>
    </div>
  )
}
