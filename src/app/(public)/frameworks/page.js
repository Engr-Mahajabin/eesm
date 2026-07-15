import FrameworksHero from "@/components/frameworks/FrameworksHero";
import FrameworkGrid from "@/components/frameworks/FrameworkGrid";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Frameworks | eESM",
  description:
    "Explore cybersecurity, governance, privacy and compliance frameworks supported by eESM including ISO, NIST, COBIT, OWASP, PCI DSS, GDPR and more.",
};

export default function FrameworksPage() {
  return (
    <main className="bg-slate-950 text-white">
      <FrameworksHero />

      <FrameworkGrid />

      <CTA />
    </main>
  );
}
