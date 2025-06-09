import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import ImpactSection from "@/components/home/impact-section";
import ProcessSection from "@/components/home/process-section";
import TestimonialsSection from "@/components/home/testimonials-section";
// import EventsSection from "@/components/home/events-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImpactSection />
      <ProcessSection />
      <TestimonialsSection />
      {/* <EventsSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}