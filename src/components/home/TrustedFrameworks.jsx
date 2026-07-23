// "use client";

// import { motion } from "framer-motion";
// import {
//     ShieldCheck,
//     Landmark,
//     CreditCard,
//     Database,
//     Scale,
//     Lock,
//     Globe,
//     FileCheck,
// } from "lucide-react";

// const frameworks = [
//     {
//         title: "ISO 27001",
//         icon: ShieldCheck,
//         color: "text-sky-400",
//     },
//     {
//         title: "NIST",
//         icon: Landmark,
//         color: "text-blue-400",
//     },
//     {
//         title: "PCI DSS",
//         icon: CreditCard,
//         color: "text-cyan-400",
//     },
//     {
//         title: "OWASP",
//         icon: Lock,
//         color: "text-teal-400",
//     },
//     {
//         title: "COBIT",
//         icon: Database,
//         color: "text-indigo-400",
//     },
//     {
//         title: "GDPR",
//         icon: Scale,
//         color: "text-amber-400",
//     },
//     {
//         title: "HIPAA",
//         icon: FileCheck,
//         color: "text-emerald-400",
//     },
//     {
//         title: "CSA CCM",
//         icon: Globe,
//         color: "text-sky-300",
//     },
// ];

// export default function TrustedFrameworks() {
//     return (
//         <section className="py-20 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
//             <div className="mx-auto max-w-7xl px-6">

//                 {/* Header Section */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 25 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center"
//                 >
//                     {/* Badge */}
//                     <span className="inline-block rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
//                         Supported Standards
//                     </span>

//                     {/* Heading */}
//                     <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
//                         Built Around{" "}
//                         <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
//                             Global Compliance
//                         </span>{" "}
//                         Frameworks
//                     </h2>

//                     {/* Subtitle */}
//                     <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
//                         Assess your organization's cybersecurity posture against
//                         internationally recognized governance, risk, and compliance
//                         frameworks.
//                     </p>
//                 </motion.div>

//                 {/* Grid Cards */}
//                 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {frameworks.map((item, index) => {
//                         const Icon = item.icon;

//                         return (
//                             <motion.div
//                                 key={item.title}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{
//                                     duration: 0.4,
//                                     delay: index * 0.05,
//                                 }}
//                                 whileHover={{ y: -6 }}
//                                 className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300
//                            /* Light Mode */
//                            border border-sky-200/80 bg-white/80 shadow-md backdrop-blur-md hover:border-sky-400 hover:shadow-lg
//                            /* Dark Mode Glossy Glass */
//                            dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 dark:hover:bg-[#0369a1]/20 dark:hover:border-[#38bdf8] 
//                            dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:shadow-[0_12px_40px_0_rgba(56,189,248,0.3)]"
//                             >
//                                 <div>
//                                     {/* Icon Container with Glass Glow */}
//                                     <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110
//                                   border border-sky-200 bg-sky-100/80
//                                   dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
//                                         <Icon className={`h-6 w-6 ${item.color} dark:text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]`} />
//                                     </div>

//                                     {/* Framework Title */}
//                                     <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
//                                         {item.title}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70 font-normal dark:font-light">
//                                         Compliance assessment and security control mapping.
//                                     </p>
//                                 </div>

//                                 {/* Bottom Sheen Accent on Hover */}
//                                 <div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-[#38bdf8]/0 via-[#38bdf8]/60 to-[#38bdf8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
    ShieldCheck,
    Landmark,
    CreditCard,
    Database,
    Scale,
    Lock,
    Globe,
    FileCheck,
    Sparkles,
} from "lucide-react";

const frameworks = [
    {
        title: "ISO 27001",
        icon: ShieldCheck,
        color: "text-sky-400",
    },
    {
        title: "NIST",
        icon: Landmark,
        color: "text-blue-400",
    },
    {
        title: "PCI DSS",
        icon: CreditCard,
        color: "text-cyan-400",
    },
    {
        title: "OWASP",
        icon: Lock,
        color: "text-teal-400",
    },
    {
        title: "COBIT",
        icon: Database,
        color: "text-indigo-400",
    },
    {
        title: "GDPR",
        icon: Scale,
        color: "text-amber-400",
    },
    {
        title: "HIPAA",
        icon: FileCheck,
        color: "text-emerald-400",
    },
    {
        title: "CSA CCM",
        icon: Globe,
        color: "text-sky-300",
    },
];

export default function TrustedFrameworks() {
    return (
        <section className="relative py-16 overflow-hidden transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
            {/* Background Soft Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
                        Supported Standards
                    </span>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                        Built Around{" "}
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            Global Compliance
                        </span>{" "}
                        Frameworks
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                        Assess your organization's cybersecurity posture against
                        internationally recognized governance, risk, and compliance
                        frameworks.
                    </p>
                </motion.div>

                {/* Image 4 Pill Badge Grid Layout */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
                    {frameworks.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.04,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                }}
                                className="group relative flex items-center gap-3.5 rounded-full px-6 py-3.5 transition-all duration-300
                  /* Light Mode Glass Pill */
                  border border-sky-200/80 bg-white/80 shadow-sm backdrop-blur-md hover:border-sky-400 hover:shadow-md
                  /* Dark Mode Glossy Glass Pill */
                  dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 dark:hover:bg-[#0369a1]/25 dark:hover:border-[#38bdf8]
                  dark:shadow-[0_4px_20px_0_rgba(2,132,199,0.1)] dark:hover:shadow-[0_0_25px_0_rgba(56,189,248,0.3)]"
                            >
                                {/* Icon Circle Container */}
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 transition-transform duration-300 group-hover:rotate-6">
                                    <Icon
                                        className={`h-4 w-4 ${item.color} dark:text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]`}
                                    />
                                </div>

                                {/* Title & Short Description */}
                                <div className="flex flex-col text-left">
                                    <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                                        {item.title}
                                    </span>
                                    <span className="text-[11px] font-normal text-slate-500 dark:text-[#e0f2fe]/70 mt-0.5">
                                        Compliance assessment & mapping
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}