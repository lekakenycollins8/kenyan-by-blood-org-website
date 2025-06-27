"use client"
import Image from "next/image"
import UrgentNeedBanner from "@/components/hero/urgent-need-banner"
import SocialLinks from "@/components/hero/social-links"
import HeroContent from "@/components/hero/hero-content"
import RecipientCard from "@/components/hero/recipient-card"
import { Heart, Calendar, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Main hero section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col">
        {/* Urgent Need Banner */}
        <UrgentNeedBanner />

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#006600]/70 via-white/30 to-[#DC241f]/70 z-10"></div>
          <div className="relative w-full h-full">
            <Image
              src="https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Blood donation awareness campaign in Kenya - Kenyan By Blood Foundation"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Kenyan pattern overlay */}
        <div
          className="absolute inset-0 z-5 opacity-5 pointer-events-none mix-blend-overlay"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15C26 9 22 5 18 5c-4 0-7 3-7 8 0 6 8 10 19 20 11-10 19-14 19-20 0-5-3-8-7-8-4 0-8 4-12 10z' fill='%23DC241f' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 pt-24 pb-32 md:pb-40 flex-grow flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 text-white space-y-6">
              {/* Social Links */}
              <SocialLinks />

              {/* Main Content Card */}
              <HeroContent />
            </div>

            {/* Right Column - Blood recipient image and next donation info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <RecipientCard />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom cards section with proper spacing */}
      <section className="relative z-20 pb-32 sm:pb-24 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
              <div className="bg-[#DC241f] w-2"></div>
              <div className="p-6 flex items-center space-x-4 flex-1">
                <div className="bg-[#DC241f]/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-[#DC241f]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-gray-900 mb-1">Donate Blood</h2>
                  <p className="text-sm text-gray-600">Your donation helps save lives across Kenya.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[#DC241f] text-[#DC241f] hover:bg-[#DC241f] hover:text-white"
                  onClick={() => window.location.href = '/donate'}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
              <div className="bg-[#006600] w-2"></div>
              <div className="p-6 flex items-center space-x-4 flex-1">
                <div className="bg-[#006600]/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-[#006600]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-gray-900 mb-1">Schedule Visit</h2>
                  <p className="text-sm text-gray-600">Book your donation appointment in advance.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[#006600] text-[#006600] hover:bg-[#006600] hover:text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
              <div className="bg-black w-2"></div>
              <div className="p-6 flex items-center space-x-4 flex-1">
                <div className="bg-black/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-gray-900 mb-1">Join Community</h2>
                  <p className="text-sm text-gray-600">Connect with other donors and recipients.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-black text-black hover:bg-black hover:text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
