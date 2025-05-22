"use client"

import { useRef } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PartnersHero from "@/components/partners/PartnersHero"
import PartnersList from "@/components/partners/PartnersList"
import WhyPartner from "@/components/partners/WhyPartners"
import PartnerCTA from "@/components/partners/PartnerCTA"

import { partnersPageData } from "@/data/partners"
export default function PartnersPage() {
  const ctaRef = useRef<HTMLDivElement>(null)

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <PartnersHero data={partnersPageData.hero} scrollToCTA={scrollToCTA} />
        <PartnersList partners={partnersPageData.partners} />
        <WhyPartner data={partnersPageData.whyPartner} />
        <div ref={ctaRef}>
          <PartnerCTA data={partnersPageData.cta} />
        </div>
      </main>

      <Footer />
    </>
  )
}
