import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import ImpactSection from "@/components/home/impact-section";
import ProcessSection from "@/components/home/process-section";
import TestimonialsSection from "@/components/home/testimonials-section";
// import EventsSection from "@/components/home/events-section";
import CTASection from "@/components/home/cta-section";
import GalleryPreview from "@/components/home/gallery-preview";
import BlogPreview from "@/components/home/blog-preview";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kenyan By Blood Foundation | Blood Donation Awareness in Kenya",
  description: "Join Kenyan By Blood Foundation to raise awareness about blood donation in Kenya. Donate, partner, or contribute to saving lives today.",
  keywords: ["Kenyan By Blood Foundation", "KBBF", "blood donation Kenya", "donate blood Kenya", "NGO blood donation awareness Kenya", "where to donate blood Nairobi"],
  alternates: {
    canonical: "https://iamkenyanbyblood.org",
  },
};

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImpactSection />
      <ProcessSection />
      <TestimonialsSection />
      <GalleryPreview />
      <BlogPreview />
      <CTASection />
      <Footer />
    </main>
  );
}