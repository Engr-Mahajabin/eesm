import { notFound } from "next/navigation";

import { frameworks } from "@/data/frameworks";

import FrameworkHero from "@/components/frameworks/FrameworkHero";
import FrameworkOverview from "@/components/frameworks/FrameworkOverview";
import FrameworkStandards from "@/components/frameworks/FrameworkStandards";
import RelatedModules from "@/components/frameworks/RelatedModules";
import FrameworkCTA from "@/components/frameworks/FrameworkCTA";
import FrameworkCoverage from "@/components/frameworks/FrameworkCoverage";
import AssessmentProcess from "@/components/frameworks/AssessmentProcess";
import FrameworkIndustries from "@/components/frameworks/FrameworkIndustries";
import FrameworkImplementation from "@/components/frameworks/FrameworkImplementation";
import RelatedFrameworks from "@/components/frameworks/RelatedFrameworks";
import FrameworkFAQ from "@/components/frameworks/FrameworkFAQ";

export default async function FrameworkDetailsPage({ params }) {
  const { slug } = await params;

  const framework = frameworks.find((item) => item.slug === slug);

  if (!framework) {
    notFound();
  }

  return (
    <>
      <FrameworkHero framework={framework} />
      <FrameworkOverview framework={framework} />
      <FrameworkCoverage framework={framework} />
      <FrameworkStandards framework={framework} />
      <AssessmentProcess framework={framework} />
      <RelatedModules framework={framework} />
      <FrameworkIndustries framework={framework} />
      <FrameworkImplementation framework={framework} />
      <RelatedFrameworks framework={framework} />
      <FrameworkFAQ framework={framework} />
      <FrameworkCTA framework={framework} />
    </>
  );
}
