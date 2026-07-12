import { notFound } from "next/navigation";
import { modules } from "@/data/modules";

import ModuleHero from "@/components/modules/details/ModuleHero";
import Overview from "@/components/modules/details/Overview";
import Features from "@/components/modules/details/Features";
import Frameworks from "@/components/modules/details/Frameworks";
import Workflow from "@/components/modules/details/Workflow";
import Benefits from "@/components/modules/details/Benefits";
import FAQ from "@/components/modules/details/DetailsFAQ";
import CTA from "@/components/modules/details/DetailsCTA";

export default async function ModulePage({ params }) {
  const { slug } = await params;

  const rawModule = modules.find((item) => item.slug === slug);

  if (!rawModule) {
    notFound();
  }

  // --- SAFE SERIALIZATION ---
  // Ekhaney amra icon element ba function-ti ke pure plain string-e convert korchi,
  // jate shobgulo Client Component bina error-e data peye jay.
  const serializedModule = {
    ...rawModule,
    icon:
      typeof rawModule.icon === "string"
        ? rawModule.icon
        : rawModule.icon?.name || rawModule.icon?.displayName || "HelpCircle",
  };
  // --------------------------

  return (
    <>
      <ModuleHero module={serializedModule} />

      <Overview module={serializedModule} />

      <Features module={serializedModule} />

      <Frameworks module={serializedModule} />

      <Workflow module={serializedModule} />

      <Benefits module={serializedModule} />

      <FAQ module={serializedModule} />

      <CTA module={serializedModule} />
    </>
  );
}
