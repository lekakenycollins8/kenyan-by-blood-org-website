"use client"
import { useRef } from "react"
import { donatePageData } from "@/data/donate"

// Import all section components
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/donate/Hero"
import WhyDonate from "@/components/donate/WhyDonate"
import HelpCards from "@/components/donate/HelpCards"
import DonationMethods from "@/components/donate/DonationMethods"
import DonationForm from "@/components/donate/DonationForm"
import Testimonials from "@/components/donate/Testimonials"
import FAQ from "@/components/donate/FAQ"
import FinalCTA from "@/components/donate/FinalCTA"

export default function DonatePage() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
        <Header />
        <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero 
            data={donatePageData.hero} 
            scrollToForm={scrollToForm} 
        />

        {/* Why Donate Section */}
        <WhyDonate data={donatePageData.whyDonate} />

        {/* How Your Donation Helps Section */}
        <HelpCards cards={donatePageData.howHelpCards} />

        {/* Donation Methods Panel */}
        <DonationMethods 
            methods={donatePageData.donationMethods} 
            scrollToForm={scrollToForm} 
        />

        {/* Donation Form Section */}
        <DonationForm 
            data={donatePageData.donationForm} 
            formRef={formRef} 
        />

        {/* Testimonials Section */}
        <Testimonials testimonials={donatePageData.testimonials} />

        {/* FAQ Section */}
        <FAQ faqs={donatePageData.faqs} />

        {/* Final CTA Section */}
        <FinalCTA 
            data={donatePageData.finalCta} 
            scrollToForm={scrollToForm} 
        />
        </div>
        <Footer />
    </>
  )
}