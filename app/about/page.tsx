import AboutHero from "@/components/about/hero-section";
import MissionSection from "@/components/about/mission-section";
import TeamSection from "@/components/about/team-section";
import TimelineSection from "@/components/about/timeline-section";
import PartnersSection from "@/components/about/partners-section";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <TimelineSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}