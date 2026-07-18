import RequestDemoHero from "@/components/request-demo/RequestDemoHero";
import WhyRequestDemo from "@/components/request-demo/WhyRequestDemo";
import DemoForm from "@/components/request-demo/DemoForm";
import DemoProcess from "@/components/request-demo/DemoProcess";
import DemoCTA from "@/components/request-demo/DemoCTA";

export const metadata = {
  title: "Request Demo | eESM",
  description:
    "Schedule a personalized demonstration of the Enterprise Enterprise Security Management platform.",
};

export default function RequestDemoPage() {
  return (
    <>
      <RequestDemoHero />

      <WhyRequestDemo />

      <DemoForm />

      <DemoProcess />

      <DemoCTA />
    </>
  );
}
