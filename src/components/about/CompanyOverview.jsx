// "use client";

// import { motion } from "framer-motion";
// import {
//     Building2,
//     ShieldCheck,
//     Globe,
//     BarChart3,
//     CheckCircle2,
//     ArrowRight,
// } from "lucide-react";

// export default function CompanyOverview() {
//     const highlights = [
//         "Centralized security & compliance platform",
//         "Supports international standards & frameworks",
//         "Automated risk assessment and reporting",
//         "Enterprise-ready and scalable architecture",
//     ];

//     return (
//         <section className="py-24">
//             <div className="mx-auto max-w-7xl px-6">

//                 <div className="grid items-center gap-16 lg:grid-cols-2">

//                     {/* Left */}

//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                     >
//                         <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
//                             Company Overview
//                         </span>

//                         <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
//                             Simplifying Enterprise Security &
//                             Compliance Management
//                         </h2>

//                         <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
//                             eESM (Enterprise Security & Compliance Management)
//                             is a comprehensive platform designed to help
//                             organizations strengthen cybersecurity, manage
//                             governance, reduce operational risks and achieve
//                             compliance through internationally recognized
//                             standards and frameworks.
//                         </p>

//                         <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
//                             By combining assessments, compliance management,
//                             reporting and continuous monitoring into a single
//                             platform, eESM enables organizations to make
//                             informed security decisions and improve their
//                             overall cyber resilience.
//                         </p>

//                         <div className="mt-10 space-y-4">

//                             {highlights.map((item) => (
//                                 <div
//                                     key={item}
//                                     className="flex items-center gap-3"
//                                 >
//                                     <CheckCircle2 className="h-5 w-5 text-green-500" />

//                                     <span className="text-slate-700 dark:text-slate-300">
//                                         {item}
//                                     </span>
//                                 </div>
//                             ))}

//                         </div>
//                     </motion.div>

//                     {/* Right */}

//                     <motion.div
//                         initial={{ opacity: 0, x: 30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
//                     >

//                         <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
//                             Platform Highlights
//                         </h3>

//                         <div className="mt-8 space-y-5">

//                             <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
//                                 <Building2 className="mt-1 text-blue-600" />

//                                 <div>
//                                     <h4 className="font-semibold">
//                                         Enterprise Focus
//                                     </h4>

//                                     <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
//                                         Designed for organizations of all sizes to
//                                         streamline governance, risk and compliance.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
//                                 <ShieldCheck className="mt-1 text-blue-600" />

//                                 <div>
//                                     <h4 className="font-semibold">
//                                         Security First
//                                     </h4>

//                                     <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
//                                         Built around cybersecurity best practices,
//                                         risk management and compliance monitoring.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
//                                 <Globe className="mt-1 text-blue-600" />

//                                 <div>
//                                     <h4 className="font-semibold">
//                                         Global Standards
//                                     </h4>

//                                     <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
//                                         Supports ISO, NIST, PCI DSS, GDPR,
//                                         HIPAA, COBIT and many other globally
//                                         recognized frameworks.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
//                                 <BarChart3 className="mt-1 text-blue-600" />

//                                 <div>
//                                     <h4 className="font-semibold">
//                                         Actionable Insights
//                                     </h4>

//                                     <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
//                                         Generate executive reports, compliance
//                                         dashboards and continuous improvement
//                                         recommendations.
//                                     </p>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600">
//                             Learn how eESM transforms compliance

//                             <ArrowRight size={18} />
//                         </div>

//                     </motion.div>

//                 </div>

//             </div>
//         </section>
//     );
// }

"use client";

import { motion } from "framer-motion";
import { Target, Telescope, ArrowUpRight } from "lucide-react";

export default function CompanyOverview() {
    return (
        <section className="relative overflow-hidden bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
            {/* Soft Ambient Glow Overlay */}
            <div className="absolute top-1/3 left-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[130px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6">

                {/* TOP HEADER SECTION (Exact layout from the screenshot) */}
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

                    {/* Top Left Badge / Category */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4"
                    >
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 dark:text-sky-400">
                            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                            About eESM
                        </span>
                    </motion.div>

                    {/* Top Right Big Typography & Short Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-8"
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-[1.15]">
                            Simplifying Enterprise <br />
                            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                Security & Compliance
                            </span>{" "}
                            Management
                        </h2>

                        <p className="mt-6 max-w-xl text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            eESM is a comprehensive platform designed to help organizations strengthen cybersecurity, manage governance, reduce operational risks, and achieve continuous compliance with international standards.
                        </p>
                    </motion.div>
                </div>

                {/* BOTTOM 2 ZIG-ZAG CARDS (Mission & Vision) */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:gap-12 items-start">

                    {/* CARD 1: MISSION (Slightly Higher / Standard Position) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -6 }}
                        className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-b from-sky-950/20 via-slate-900/60 to-slate-950 p-8 text-white shadow-xl backdrop-blur-xl dark:border-sky-500/30 dark:bg-slate-900/80"
                    >
                        {/* Top Pill & Arrow */}
                        <div className="flex items-center justify-between">
                            <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-medium text-sky-300">
                                Mission
                            </span>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </div>

                        {/* Bottom Content */}
                        <div>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-400/30">
                                <Target className="h-6 w-6" />
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Empowering Cyber Resilience
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-slate-300 font-light">
                                To empower organizations with a centralized platform that simplifies cybersecurity assessments, governance, risk management, and regulatory compliance through internationally recognized standards and best practices.
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD 2: VISION (Zig-Zag Offset Position -> Shifted Down using md:mt-16) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: 10 }} // Adjusted for shifted position
                        className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/20 via-slate-900/60 to-slate-950 p-8 text-white shadow-xl backdrop-blur-xl md:mt-16 dark:border-indigo-500/30 dark:bg-slate-900/80"
                    >
                        {/* Top Pill & Arrow */}
                        <div className="flex items-center justify-between">
                            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-xs font-medium text-indigo-300">
                                Vision
                            </span>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </div>

                        {/* Bottom Content */}
                        <div>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-400/30">
                                <Telescope className="h-6 w-6" />
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Global Standards Leadership
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-slate-300 font-light">
                                To become a trusted global platform for enterprise security, governance, risk, and compliance by helping organizations confidently navigate evolving cyber threats and regulatory requirements.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}