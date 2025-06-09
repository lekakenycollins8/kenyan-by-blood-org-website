"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Users, Gift } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white">
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
      </div>
      
      {/* Kenya color accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-green-600 to-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black via-green-600 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm shadow-sm">
            <Heart className="h-4 w-4 text-red-200" />
            <span className="font-semibold text-sm tracking-wide">BE A LIFESAVER</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Your Donation <span className="text-green-300">Saves Lives</span> in Kenya
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every three seconds, someone in Kenya needs blood. Join thousands of young donors making a difference by ensuring safe blood access for all Kenyans.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-white/15 transition-colors duration-300">
              <div className="bg-red-500 p-3 rounded-full mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Donate Blood</h3>
              <p className="text-white/80 text-sm">A single donation can save up to three lives</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-white/15 transition-colors duration-300">
              <div className="bg-green-600 p-3 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Volunteer</h3>
              <p className="text-white/80 text-sm">Help organize blood drives in your community</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center hover:bg-white/15 transition-colors duration-300">
              <div className="bg-black p-3 rounded-full mb-4">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Support Us</h3>
              <p className="text-white/80 text-sm">Contribute financially to our life-saving mission</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-red-700 hover:bg-gray-100 rounded-full shadow-lg font-semibold text-base px-8 py-6 group"
              asChild
            >
              <Link href="/donate">
                Donate Blood Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-black/60 backdrop-blur-sm border-2 border-white text-white hover:bg-black/70 rounded-full shadow-lg font-semibold text-base px-8 py-6"
              asChild
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Link href="#top">Learn More</Link>
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/70">
            Kenya Blood Transfusion and Transplant Services partners with <span className="font-semibold">Kenyan by Blood Foundation</span> to ensure blood supply nationwide.
          </p>
        </div>
      </div>
    </section>
  )
}