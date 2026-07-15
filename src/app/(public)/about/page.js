import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import WhyEESM from "@/components/about/WhyEESM";
import CoreCapabilities from "@/components/about/CoreCapabilities";
import SupportedStandards from "@/components/about/SupportedStandards";
import WhyChooseEESM from "@/components/about/WhyChooseEESM";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <WhyEESM />
      <CoreCapabilities />
      <SupportedStandards />
      <WhyChooseEESM />
      <CTA />
    </>
  );
}
