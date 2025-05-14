"use client"

import { useState } from "react"
import Image from "next/image"
import UrgentNeedBanner from "@/components/hero/urgent-need-banner"
import SocialLinks from "@/components/hero/social-links"
import HeroContent from "@/components/hero/hero-content"
import RecipientCard from "@/components/hero/recipient-card"
import BottomCards from "@/components/hero/bottom-cards"

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Urgent Need Banner */}
      <UrgentNeedBanner />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-transparent to-[#006600]/30 z-10"></div>
        <div className="relative w-full h-full">
          <Image
            src="https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blood donation"
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
      <div className="container mx-auto px-4 relative z-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-white space-y-6">
            {/* Social Links */}
            <SocialLinks />

            {/* Main Content Card */}
            <HeroContent />
          </div>

          {/* Right Column - Blood recipient image and next donation info */}
          <div className="lg:col-span-5">
            <RecipientCard />
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <BottomCards />
    </section>
  )
}