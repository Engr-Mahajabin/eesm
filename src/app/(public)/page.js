// import AssessmentWorkflow from "@/components/home/AssessmentWorkflow";
// import CoreModules from "@/components/home/CoreModules";
// import Hero from "@/components/home/Hero";
// import PlatformOverview from "@/components/home/PlatformOverview";
// import TrustedFrameworks from "@/components/home/TrustedFrameworks";
// import WhyChoose from "@/components/home/WhyChoose";
// import CTA from "@/components/home/CTA";
// import FAQ from "@/components/home/FAQ";
// import PlatformStatistics from "@/components/home/PlatformStatistics";
// import Industries from "@/components/home/Industries";

// export default function Home() {
//   return (
//     <main className="bg-zinc-100 dark:bg-[#032560] text-slate-900 dark:text-white min-h-screen">
//       <Hero />
//       <PlatformStatistics />
//       <TrustedFrameworks />
//       <PlatformOverview />
//       <CoreModules />
//       <AssessmentWorkflow />
//       <Industries />
//       <WhyChoose />
//       <FAQ />
//       <CTA />
//     </main>
//   );
// }

// import AssessmentWorkflow from "@/components/home/AssessmentWorkflow";
import CoreModules from "@/components/home/CoreModules";
import Hero from "@/components/home/Hero";
import PlatformOverview from "@/components/home/PlatformOverview";
import TrustedFrameworks from "@/components/home/TrustedFrameworks";
import WhyChoose from "@/components/home/WhyChoose";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
// import PlatformStatistics from "@/components/home/PlatformStatistics";
import Industries from "@/components/home/Industries";
// import PlatformHighlights from "@/components/home/PlatformHighlights";

export default function Home() {
  return (
    <main
      className="bg-zinc-100 dark:bg-[#010a18] text-slate-900 dark:text-white min-h-screen relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 50% 20%, rgba(3, 80, 180, 0.45), transparent 70%),
          radial-gradient(ellipse 60% 50% at 50% 70%, rgba(0, 140, 255, 0.25), transparent 80%)
        `,
      }}
    >
      <Hero />
      {/* <PlatformStatistics /> */}
      <TrustedFrameworks />
      <PlatformOverview />
      <WhyChoose />
      <CoreModules />
      {/* <AssessmentWorkflow /> */}
      {/* <PlatformHighlights /> */}
      <Industries />
      <FAQ />
      <CTA />
    </main>
  );
}
