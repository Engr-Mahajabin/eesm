"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  ListChecks,
  ShieldAlert,
  BarChart3,
  FileCheck2,
  Activity,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select Framework",
    description: "Choose ISO, NIST, PCI DSS or other frameworks.",
    icon: ClipboardCheck,
    color: "bg-purple-500 text-purple-500 border-purple-500",
  },
  {
    number: "02",
    title: "Assessment",
    description: "Complete security & compliance questionnaires.",
    icon: ListChecks,
    color: "bg-amber-500 text-amber-500 border-amber-500",
  },
  {
    number: "03",
    title: "Gap Analysis",
    description: "Identify missing controls and compliance gaps.",
    icon: ShieldAlert,
    color: "bg-cyan-500 text-cyan-500 border-cyan-500",
  },
  {
    number: "04",
    title: "Risk Analysis",
    description: "Evaluate risks and business impact.",
    icon: BarChart3,
    color: "bg-green-500 text-green-500 border-green-500",
  },
  {
    number: "05",
    title: "Compliance Report",
    description: "Generate reports and recommendations.",
    icon: FileCheck2,
    color: "bg-orange-500 text-orange-500 border-orange-500",
  },
  {
    number: "06",
    title: "Continuous Monitoring",
    description: "Track compliance status and health metrics in real-time.",
    icon: Activity,
    color: "bg-pink-500 text-pink-500 border-pink-500",
  },
];

export default function AssessmentWorkflow() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
            Assessment Workflow
          </span>
          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            Simple Assessment Process
          </h2>
        </div>

        {/* Desktop Layout - ১০০% ফিক্সড অ্যালাইনমেন্ট */}
        <div className="hidden lg:block relative w-full h-[580px] mt-10">

          {/* ─── মেইন মাঝখানের সোজা লম্বা অক্ষ রেখা ─── */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-slate-700 dark:bg-slate-600 -translate-y-1/2 z-0" />

          {/* ৬টি গ্রিড কলাম */}
          <div className="grid grid-cols-6 h-full relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isTop = index % 2 === 0; // ০১, ০৩, ০৫ উপরে; ০২, ০৪, ০৬ নিচে
              const [bgColor, textColor] = step.color.split(" ");

              return (
                <div key={step.number} className="relative flex flex-col items-center justify-center h-full">

                  {/* ─── মাঝখানের লাইনের ওপরের ছোট মেইন ডট ─── */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-slate-900 dark:border-white bg-white dark:bg-slate-900 z-30">
                    <div className={`w-full h-full rounded-full ${bgColor}`} />
                  </div>

                  {/* ─── লম্বালম্বি সোজা পাইপ লাইন (উচ্চতা ও পজিশন ফিক্সড করা হয়েছে) ─── */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[75px] bg-slate-700 dark:bg-slate-600 opacity-60 z-10 ${isTop ? "bottom-1/2 mb-2" : "top-1/2 mt-2"
                      }`}
                  />

                  {/* ─── ওপরে থাকা কন্টেন্ট বক্স (01, 03, 05) ─── */}
                  {isTop ? (
                    <div className="absolute bottom-1/2 mb-24 flex flex-col items-center text-center w-full px-2">

                      {/* ১. নাম্বার ও আইকন সার্কেল */}
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="w-20 h-20 rounded-full bg-slate-800 border-[3px] border-slate-700 shadow-xl flex items-center justify-center p-1 mb-6"
                      >
                        <div className={`w-full h-full rounded-full ${bgColor} flex items-center justify-center text-white text-xl font-bold`}>
                          {step.number}
                        </div>
                      </motion.div>

                      {/* ২. টেক্সট গ্রুপ */}
                      <div className="max-w-[175px]">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <Icon className={`w-3.5 h-3.5 ${textColor}`} />
                          <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">OPTION {step.number}</h4>
                        </div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">{step.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                      </div>

                    </div>
                  ) : (
                    /* ─── নিচে থাকা কন্টেন্ট বক্স (02, 04, 06) ─── */
                    <div className="absolute top-1/2 mt-24 flex flex-col items-center text-center w-full px-2">

                      {/* ১. টেক্সট গ্রুপ */}
                      <div className="max-w-[175px] mb-6">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <Icon className={`w-3.5 h-3.5 ${textColor}`} />
                          <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">OPTION {step.number}</h4>
                        </div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">{step.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                      </div>

                      {/* ২. নাম্বার ও আইকন সার্কেল */}
                      <motion.div
                        whileHover={{ y: 4 }}
                        className="w-20 h-20 rounded-full bg-slate-800 border-[3px] border-slate-700 shadow-xl flex items-center justify-center p-1"
                      >
                        <div className={`w-full h-full rounded-full ${bgColor} flex items-center justify-center text-white text-xl font-bold`}>
                          {step.number}
                        </div>
                      </motion.div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
          {steps.map((step) => {
            const Icon = step.icon;
            const [, textColor] = step.color.split(" ");

            return (
              <div key={step.number} className="flex gap-5 relative z-10">
                <div className="h-14 w-14 rounded-full bg-slate-800 border border-slate-700 shadow flex items-center justify-center shrink-0 text-white font-bold text-lg">
                  {step.number}
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 flex-1 border border-slate-100 dark:border-slate-900">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${textColor}`} />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}