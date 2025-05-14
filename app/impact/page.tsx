import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ImpactHero from "@/components/impact/hero-section";
import StatsSection from "@/components/impact/stats-section";
import StoriesSection from "@/components/impact/stories-section";
import ResearchSection from "@/components/impact/research-section";
import ImpactAreasSection from "@/components/impact/impact-areas-section";

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ImpactHero />
      <StatsSection />
      <StoriesSection />
      <ImpactAreasSection />
      <ResearchSection />
      <Footer />
    </main>
  );
}