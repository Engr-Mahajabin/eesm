import AssessmentWorkflow from "@/components/home/AssessmentWorkflow";
import CoreModules from "@/components/home/CoreModules";
import Hero from "@/components/home/Hero";
import PlatformOverview from "@/components/home/PlatformOverview";
import TrustedFrameworks from "@/components/home/TrustedFrameworks";
import WhyChoose from "@/components/home/WhyChoose";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import PlatformStatistics from "@/components/home/PlatformStatistics";
import Industries from "@/components/home/Industries";

export default function Home() {
  return (
    <main className="bg-zinc-100 dark:bg-[#032560] text-slate-900 dark:text-white min-h-screen">
      <Hero />
      <PlatformStatistics />
      <TrustedFrameworks />
      <PlatformOverview />
      <CoreModules />
      <AssessmentWorkflow />
      <Industries />
      <WhyChoose />
      <FAQ />
      <CTA />
    </main>
  );
}
