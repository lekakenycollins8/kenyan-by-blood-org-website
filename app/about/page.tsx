import AboutHero from "@/components/about/about-hero"
import WhoWeAre from "@/components/about/who-we-are"
import MissionVision from "@/components/about/mission-vision"
import ProblemStats from "@/components/about/problem-stats"
import GlobalComparison from "@/components/about/global-comparison"
// import SituationalAnalysis from "@/components/about/situational-analysis"
import JourneyTimeline from "@/components/about/journey-timeline"
import ApproachPillars from "@/components/about/approach-pillars"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CallToAction from "@/components/about/call-to-action"

export const metadata = {
  title: "About Us | Kenyan By Blood",
  keywords: ["Kenyan By Blood", "About Us", "Blood Donation", "Kenya"],
  description: "Learn about Kenyan By Blood's mission to champion access to safe blood across Kenya.",
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
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
