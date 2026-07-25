// import ContactHero from "@/components/contact/ContactHero";
// import ContactInfo from "@/components/contact/ContactInfo";
// import ContactForm from "@/components/contact/ContactForm";
// import WhyContactEESM from "@/components/contact/WhyContactEESM";
// import ContactCTA from "@/components/contact/ContactCTA";

// export const metadata = {
//   title: "Contact Us | eESM",
//   description:
//     "Get in touch with the eESM team for enterprise security, compliance, product demonstrations and partnership opportunities.",
// };

// export default function ContactPage() {
//   return (
//     <>
//       <ContactHero />

//       <ContactInfo />

//       <ContactForm />

//       <WhyContactEESM />

//       <ContactCTA />
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm"
          >
            <span className="bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              Contact
            </span>
            <span className="flex items-center gap-1">
              Let's Get in Touch <Sparkles className="h-3 w-3 text-sky-400" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl text-slate-900 dark:text-white"
          >
            We're Here to Help You{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
              Stay Compliant
            </span>
          </motion.h1>
        </div>

        {/* Contact Info & Form Section (Image 2 Main Grid Layout) */}
        <div className="grid gap-8 lg:grid-cols-3 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 rounded-3xl border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 p-8 backdrop-blur-md shadow-lg"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 text-sky-600 dark:text-[#38bdf8]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Main Address
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-[#e0f2fe]/70 leading-relaxed">
                  20 Cooper Square, New York, NY 10003, USA
                </p>
              </div>
            </div>

            <hr className="border-sky-100 dark:border-slate-800" />

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 text-sky-600 dark:text-[#38bdf8]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Email Address
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-[#e0f2fe]/70">
                  support@eesm.com
                </p>
                <p className="text-xs text-slate-600 dark:text-[#e0f2fe]/70">
                  sales@eesm.com
                </p>
              </div>
            </div>

            <hr className="border-sky-100 dark:border-slate-800" />

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 text-sky-600 dark:text-[#38bdf8]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Need Urgent Help?
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-[#e0f2fe]/70">
                  +1 (234) 5678 9900
                </p>
                <p className="text-xs text-slate-600 dark:text-[#e0f2fe]/70">
                  +1 (200) 3000 6780
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Contact & Demo Form (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 rounded-3xl border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 p-8 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Let's Connect & Help You Succeed
            </h3>
            <p className="text-xs text-slate-600 dark:text-[#e0f2fe]/70 mt-1 mb-6">
              Fill out the form below for general inquiries or to schedule a
              live demo of eESM.
            </p>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Benjamin Carter"
                    className="w-full rounded-xl border border-sky-200 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/60 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="info@example.com"
                    className="w-full rounded-xl border border-sky-200 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/60 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (234) 56 88 99"
                    className="w-full rounded-xl border border-sky-200 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/60 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Inquiry Type
                  </label>
                  <select className="w-full rounded-xl border border-sky-200 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/60 px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:border-sky-500 focus:outline-none">
                    <option value="demo">Book a Live Demo</option>
                    <option value="general">General Contact</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirement or preferred demo time..."
                  className="w-full rounded-xl border border-sky-200 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/60 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" /> Send Message / Request Demo
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-sky-200/80 dark:border-[#38bdf8]/30 shadow-xl h-[350px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617539128331!2d-73.99368368459397!3d40.7281579793301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25998a4d70031%3A0xb86c1265b796d11f!2s20%20Cooper%20Sq%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "invert(90%) hue-rotate(180deg) contrast(1.2)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
