// "use client";

// import { motion } from "framer-motion";
// import {
//     Landmark,
//     Building2,
//     Hospital,
//     Pill,
//     Factory,
//     GraduationCap,
//     Cloud,
//     TowerControl,
// } from "lucide-react";

// const industries = [
//     {
//         icon: Landmark,
//         title: "Banking & Finance",
//         desc: "Meet regulatory requirements and strengthen financial cybersecurity.",
//     },
//     {
//         icon: Building2,
//         title: "Government",
//         desc: "Improve governance and protect national digital infrastructure.",
//     },
//     {
//         icon: Hospital,
//         title: "Healthcare",
//         desc: "Secure sensitive healthcare systems and patient information.",
//     },
//     {
//         icon: Pill,
//         title: "Pharmaceutical",
//         desc: "Support FDA compliance and secure research environments.",
//     },
//     {
//         icon: Factory,
//         title: "Manufacturing",
//         desc: "Protect industrial systems and operational technology.",
//     },
//     {
//         icon: GraduationCap,
//         title: "Education",
//         desc: "Safeguard academic networks and institutional data.",
//     },
//     {
//         icon: Cloud,
//         title: "Cloud Providers",
//         desc: "Continuously assess cloud security posture and compliance.",
//     },
//     {
//         icon: TowerControl,
//         title: "Telecommunications",
//         desc: "Manage cyber risks across telecom infrastructure.",
//     },
// ];

// export default function Industries() {
//     return (
//         <section className="py-24 bg-transparent">
//             <div className="mx-auto max-w-7xl px-6">

//                 <div className="mb-16 text-center">
//                     <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
//                         Industries
//                     </span>

//                     <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
//                         Built for Every Critical Industry
//                     </h2>

//                     <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
//                         eESM enables organizations across multiple sectors to assess,
//                         monitor and improve cybersecurity compliance.
//                     </p>
//                 </div>

//                 <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//                     {industries.map((item, index) => {
//                         const Icon = item.icon;

//                         return (
//                             <motion.div
//                                 key={item.title}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{
//                                     delay: index * 0.07,
//                                     duration: 0.4
//                                 }}
//                                 whileHover={{
//                                     y: -8,
//                                     borderColor: "#2563eb",
//                                 }}
//                                 className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
//                             >
//                                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
//                                     <Icon className="h-8 w-8 text-blue-500" />
//                                 </div>

//                                 <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
//                                     {item.desc}
//                                 </p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>

//             </div>
//         </section>
//     );
// }

"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Stethoscope,
    Landmark,
    Radio,
    Zap,
    Pill,
    ArrowUpRight,
    Sparkles
} from "lucide-react";

const industries = [
    {
        title: "Banking & Financial Services",
        description: "Ensure PCI-DSS and SWIFT compliance while protecting sensitive financial data and transaction systems.",
        icon: Building2,
        tag: "PCI DSS & SWIFT",
        color: "text-sky-400",
    },
    {
        title: "Healthcare & Life Sciences",
        description: "Safeguard patient records (PHI) and simplify HIPAA & GDPR compliance across health platforms.",
        icon: Stethoscope,
        tag: "HIPAA & GDPR",
        color: "text-emerald-400",
    },
    {
        title: "Government & Public Sector",
        description: "Align critical infrastructure with NIST, ISO 27001, and national cybersecurity standards.",
        icon: Landmark,
        tag: "NIST & ISO 27001",
        color: "text-blue-400",
    },
    {
        title: "Telecommunications",
        description: "Protect high-volume network infrastructure and user data against global threat actors.",
        icon: Radio,
        tag: "Network Security",
        color: "text-cyan-400",
    },
    {
        title: "Energy & Utilities",
        description: "Secure operational technology (OT) and critical infrastructure from cyber disruptions.",
        icon: Zap,
        tag: "OT & Critical Infra",
        color: "text-amber-400",
    },
    {
        title: "Pharmaceuticals",
        description: "Maintain strict governance, IP protection, and regulatory compliance for medical research.",
        icon: Pill,
        tag: "IP Protection",
        color: "text-indigo-400",
    },
];

export default function Industries() {
    return (
        <section className="relative py-20 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
            {/* Background Soft Glow */}
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
                        Targeted Sectors
                    </span>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                        Tailored Compliance for{" "}
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            Every Industry
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                        eESM scales to meet the unique governance, risk, and regulatory demands of highly regulated sectors.
                    </p>
                </motion.div>

                {/* Industry Cards Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300
                  /* Light Mode Card */
                  border border-sky-200/80 bg-white/80 shadow-md backdrop-blur-md hover:border-sky-400 hover:shadow-lg
                  /* Dark Mode Glassy Card */
                  dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 dark:hover:bg-[#0369a1]/20 dark:hover:border-[#38bdf8] 
                  dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.1)] dark:hover:shadow-[0_12px_40px_0_rgba(56,189,248,0.25)]"
                            >
                                <div>
                                    {/* Top Bar with Icon & Tag */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 transition-transform duration-300 group-hover:scale-110">
                                            <Icon className={`h-6 w-6 ${item.color} dark:text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]`} />
                                        </div>

                                        <span className="rounded-full border border-sky-200 bg-sky-50 dark:border-sky-500/30 dark:bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-700 dark:text-sky-300">
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Industry Title */}
                                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38bdf8] transition-colors flex items-center justify-between">
                                        {item.title}
                                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-sky-500" />
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70 font-normal dark:font-light">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Border Glow Line */}
                                <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-sky-500/0 via-sky-500/50 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}