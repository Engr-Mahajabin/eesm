import ModulesHero from "@/components/modules/overview/ModulesHero";
import ModulesGrid from "@/components/modules/overview/ModulesGrid";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Modules | eESM",
  description:
    "Explore eESM cybersecurity assessment modules including AI Management, GRC, Architecture Framework, Forensic Analysis and Pharmaceutical Compliance.",
};

export default function ModulesPage() {
  return (
    <main className="bg-slate-950 text-white">
      <ModulesHero />

      <ModulesGrid />

      <CTA />
    </main>
  );
}
