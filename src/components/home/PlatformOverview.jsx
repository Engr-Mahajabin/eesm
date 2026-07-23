// "use client";

// import { motion } from "framer-motion";
// import {
//     Building2,
//     ClipboardCheck,
//     ShieldAlert,
//     FileCheck2,
//     ArrowRight,
// } from "lucide-react";

// const workflow = [
//     {
//         title: "Business Process",
//         icon: Building2,
//     },
//     {
//         title: "Assessment",
//         icon: ClipboardCheck,
//     },
//     {
//         title: "Gap Analysis",
//         icon: ShieldAlert,
//     },
//     {
//         title: "Compliance Report",
//         icon: FileCheck2,
//     },
// ];

// export default function PlatformOverview() {
//     return (
//         <section className="py-24">
//             <div className="mx-auto max-w-7xl px-6">

//                 <div className="grid items-center gap-16 lg:grid-cols-2">

//                     {/* Left */}

//                     <motion.div
//                         initial={{ opacity: 0, x: -40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: .6 }}
//                     >

//                         <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
//                             Platform Overview
//                         </span>

//                         <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white">
//                             One Platform to Assess,
//                             Manage & Improve
//                             Cybersecurity Compliance
//                         </h2>

//                         <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
//                             eESM helps organizations evaluate their existing security
//                             controls, identify compliance gaps, calculate cyber risks,
//                             and generate actionable reports based on internationally
//                             recognized standards.
//                         </p>

//                         <div className="mt-10 space-y-4">

//                             <div className="flex gap-3">
//                                 <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
//                                 <p className="text-slate-600 dark:text-slate-400">
//                                     Centralized Governance, Risk & Compliance Platform
//                                 </p>
//                             </div>

//                             <div className="flex gap-3">
//                                 <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
//                                 <p className="text-slate-600 dark:text-slate-400">
//                                     Automated Pre-Assessment & Gap Analysis
//                                 </p>
//                             </div>

//                             <div className="flex gap-3">
//                                 <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
//                                 <p className="text-slate-600 dark:text-slate-400">
//                                     Compliance Reports with Actionable Recommendations
//                                 </p>
//                             </div>

//                         </div>

//                     </motion.div>

//                     {/* Right */}

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: .6 }}
//                         className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
//                     >

//                         <h3 className="mb-8 text-xl font-semibold text-slate-900 dark:text-white">
//                             Assessment Workflow
//                         </h3>

//                         <div className="space-y-6">

//                             {workflow.map((item, index) => {
//                                 const Icon = item.icon;

//                                 return (
//                                     <div
//                                         key={item.title}
//                                         className="flex items-center justify-between"
//                                     >

//                                         <div className="flex items-center gap-4">

//                                             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
//                                                 <Icon className="h-6 w-6 text-blue-600" />
//                                             </div>

//                                             <div>

//                                                 <p className="text-xs uppercase tracking-wider text-slate-400">
//                                                     Step {index + 1}
//                                                 </p>

//                                                 <h4 className="font-semibold text-slate-900 dark:text-white">
//                                                     {item.title}
//                                                 </h4>

//                                             </div>

//                                         </div>

//                                         {index !== workflow.length - 1 && (
//                                             <ArrowRight className="h-5 w-5 text-slate-300" />
//                                         )}

//                                     </div>
//                                 );
//                             })}

//                         </div>

//                         <div className="mt-10 rounded-2xl bg-blue-50 p-5 dark:bg-blue-950/20">
//                             <p className="text-sm text-slate-600 dark:text-slate-400">
//                                 ✔ Assess your organization's current cybersecurity posture
//                                 against ISO, NIST, PCI DSS, GDPR, COBIT, OWASP and more.
//                             </p>
//                         </div>

//                     </motion.div>

//                 </div>

//             </div>
//         </section>
//     );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    CheckCircle2,
    FileText,
    GitMerge,
    Layers,
    ShieldAlert,
    TrendingUp,
    Users
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Identify Business Processes",
        description: "Map your core business functions and operations into the eESM framework seamlessly.",
        icon: Layers,
    },
    {
        number: "02",
        title: "Conduct AI Assessment",
        description: "Assess security controls against global compliance standards with AI assistance.",
        icon: GitMerge,
    },
    {
        number: "03",
        title: "Instant Gap & Risk Analysis",
        description: "Identify compliance gaps and evaluate real-time organizational security risks.",
        icon: ShieldAlert,
    },
    {
        number: "04",
        title: "Audit-Ready Reporting",
        description: "Generate executive summary dashboards and audit-ready compliance reports.",
        icon: FileText,
    },
];

export default function PlatformOverview() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="relative py-20 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <span className="inline-block rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        How It Works
                    </span>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                        Streamlined Workflow —{" "}
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            From Risk to Compliance
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                        Automate your governance, risk assessment, and compliance cycle in four simple steps with eESM.
                    </p>
                </motion.div>

                {/* 1. Top 4 Step Cards (Image 2 Top Layout) */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;

                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                onClick={() => setActiveStep(index)}
                                className={`group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 border ${isActive
                                    ? "border-sky-500 bg-sky-50/50 dark:border-[#38bdf8] dark:bg-[#0369a1]/25 dark:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
                                    : "border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 hover:border-sky-400 dark:hover:border-[#38bdf8]/60"
                                    } backdrop-blur-md shadow-md`}
                            >
                                <div>
                                    {/* Step Number Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:bg-[#38bdf8]/20 dark:text-[#38bdf8] text-xs font-bold">
                                            {step.number}
                                        </span>
                                        <Icon className="h-5 w-5 text-slate-400 dark:text-sky-300/60 group-hover:text-sky-500 dark:group-hover:text-[#38bdf8] transition-colors" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70 font-normal dark:font-light">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom Active Indicator Bar */}
                                <div
                                    className={`mt-4 h-1 w-full rounded-full transition-all duration-300 ${isActive
                                        ? "bg-sky-500 dark:bg-[#38bdf8]"
                                        : "bg-transparent group-hover:bg-sky-200 dark:group-hover:bg-[#38bdf8]/30"
                                        }`}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* 2. Bottom Interactive Central Dashboard Preview (Image 2 Bottom Layout) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-10 overflow-hidden rounded-2xl border border-sky-200/80 bg-slate-900/90 p-6 md:p-8 backdrop-blur-xl dark:border-[#38bdf8]/30 dark:bg-[#020617]/80 shadow-2xl dark:shadow-[0_20px_50px_rgba(2,132,199,0.15)]"
                >
                    {/* Mock Dashboard Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-xs font-mono text-slate-400 pl-2">
                                eESM Platform / Step {steps[activeStep].number} Demo
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                <CheckCircle2 className="h-3.5 w-3.5" /> Engine Active
                            </span>
                        </div>
                    </div>

                    {/* Interactive Dashboard Content Mock */}
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {/* Stat Widget 1 */}
                        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="text-xs font-medium">Compliance Index</span>
                                <TrendingUp className="h-4 w-4 text-sky-400" />
                            </div>
                            <div className="mt-3 text-3xl font-extrabold text-white">88.4%</div>
                            <p className="mt-1 text-[11px] text-emerald-400">
                                +4.2% from last assessment cycle
                            </p>
                        </div>

                        {/* Stat Widget 2 */}
                        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="text-xs font-medium">Active Critical Risks</span>
                                <ShieldAlert className="h-4 w-4 text-amber-400" />
                            </div>
                            <div className="mt-3 text-3xl font-extrabold text-white">03</div>
                            <p className="mt-1 text-[11px] text-amber-400/80">
                                Requires mitigation strategy
                            </p>
                        </div>

                        {/* Stat Widget 3 */}
                        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="text-xs font-medium">Mapped Frameworks</span>
                                <BarChart3 className="h-4 w-4 text-indigo-400" />
                            </div>
                            <div className="mt-3 text-3xl font-extrabold text-white">08 Standards</div>
                            <p className="mt-1 text-[11px] text-sky-400">
                                ISO, NIST, GDPR & PCI-DSS synchronized
                            </p>
                        </div>
                    </div>

                    {/* Dynamic Interactive Banner */}
                    <div className="mt-6 rounded-xl border border-sky-500/20 bg-gradient-to-r from-sky-950/40 via-blue-950/30 to-slate-950/60 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                                Active Step Focus
                            </span>
                            <h4 className="text-lg font-bold text-white mt-0.5">
                                {steps[activeStep].title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1">
                                {steps[activeStep].description}
                            </p>
                        </div>
                        <button className="whitespace-nowrap rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition-all">
                            Explore Active Module
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}