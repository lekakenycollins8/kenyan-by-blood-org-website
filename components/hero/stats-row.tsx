"use client"

import { Droplets, Users, BarChart3 } from "lucide-react"

export default function StatsRow() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10 hover:border-[#DC241f]/50 transition-colors">
        <Droplets className="h-6 w-6 text-[#DC241f] mx-auto mb-1" />
        <div className="text-xl font-bold text-black/80">450ml</div>
        <div className="text-xs text-black/80">Per Donation</div>
      </div>
      <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10 hover:border-[#006600]/50 transition-colors">
        <Users className="h-6 w-6 text-[#006600] mx-auto mb-1" />
        <div className="text-xl font-bold text-black/80">3 Lives</div>
        <div className="text-xs text-black/80">Saved</div>
      </div>
      <div className="bg-white/10 rounded-lg p-3 text-center border border-white/10 hover:border-white/50 transition-colors">
        <BarChart3 className="h-6 w-6 text-[#006600] mx-auto mb-1" />
        <div className="text-xl font-bold text-black/80">56 Days</div>
        <div className="text-xs text-black/80">Recovery</div>
      </div>
    </div>
  )
}
