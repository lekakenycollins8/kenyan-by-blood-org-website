import AboutHero from "@/components/about/about-hero"
import WhoWeAre from "@/components/about/who-we-are"
import MissionVision from "@/components/about/mission-vision"
import ProblemStats from "@/components/about/problem-stats"
// import GlobalComparison from "@/components/about/global-comparison"
// import SituationalAnalysis from "@/components/about/situational-analysis"
import JourneyTimeline from "@/components/about/journey-timeline"
import ApproachPillars from "@/components/about/approach-pillars"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CallToAction from "@/components/about/call-to-action"
import TeamSection from "@/components/about/team-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kenyan By Blood Foundation | Blood Donation NGO Kenya",
  description: "Learn about Kenyan By Blood Foundation's mission to champion access to safe blood across Kenya. Discover our story, impact, and approach to blood donation awareness.",
  keywords: ["Kenyan By Blood Foundation", "KBBF", "blood donation NGO Kenya", "blood donation awareness Kenya", "blood donation charity Kenya", "blood donation Nairobi"],
  alternates: {
    canonical: "https://iamkenyanbyblood.org/about",
  },
  openGraph: {
    title: "About Us | Kenyan By Blood Foundation",
    description: "Learn about Kenyan By Blood Foundation's mission to champion access to safe blood across Kenya. Discover our story, impact, and approach to blood donation awareness.",
    url: "https://iamkenyanbyblood.org/about",
  }
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <WhoWeAre />
        <MissionVision />
        <ProblemStats />
        {/* <GlobalComparison /> */}
        {/* <SituationalAnalysis /> */}
        <JourneyTimeline />
        <ApproachPillars />
        <TeamSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
