import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import WhyContactEESM from "@/components/contact/WhyContactEESM";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | eESM",
  description:
    "Get in touch with the eESM team for enterprise security, compliance, product demonstrations and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <WhyContactEESM />

      <ContactCTA />
    </>
  );
}
