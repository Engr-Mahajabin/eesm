// "use client";

// import { motion } from "framer-motion";
// import {
//     ShieldCheck,
//     Brain,
//     FileCheck2,
//     Globe,
// } from "lucide-react";

// const stats = [
//     {
//         icon: Globe,
//         value: "25+",
//         label: "Compliance Frameworks",
//     },
//     {
//         icon: ShieldCheck,
//         value: "3000+",
//         label: "Security Controls",
//     },
//     {
//         icon: Brain,
//         value: "AI",
//         label: "Risk Analysis",
//     },
//     {
//         icon: FileCheck2,
//         value: "24/7",
//         label: "Assessment Platform",
//     },
// ];

// export default function PlatformStatistics() {
//     return (
//         <section className="py-20 border-y border-slate-800/50 bg-slate-900/40">
//             <div className="mx-auto max-w-7xl px-6">

//                 <div className="mb-14 text-center">

//                     <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
//                         Platform Statistics
//                     </span>

//                     <h2 className="mt-5 text-4xl font-bold text-white">
//                         Built for Enterprise Cybersecurity
//                     </h2>

//                     <p className="mx-auto mt-4 max-w-2xl text-slate-400">
//                         Empowering organizations with comprehensive governance,
//                         risk management and compliance capabilities.
//                     </p>

//                 </div>

//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

//                     {stats.map((item, index) => {
//                         const Icon = item.icon;

//                         return (
//                             <motion.div
//                                 key={item.label}
//                                 initial={{ opacity: 0, y: 25 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: index * .08 }}
//                                 whileHover={{ y: -8 }}
//                                 className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
//                             >
//                                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10">
//                                     <Icon className="h-7 w-7 text-blue-500" />
//                                 </div>

//                                 <h3 className="mt-5 text-4xl font-bold text-white">
//                                     {item.value}
//                                 </h3>

//                                 <p className="mt-2 text-slate-400">
//                                     {item.label}
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
    ShieldCheck,
    Brain,
    Globe,
    FileCheck2,
} from "lucide-react";

const stats = [
    {
        icon: Globe,
        title: "Multi-Framework",
        subtitle: "Supports ISO, NIST, PCI DSS, COBIT, OWASP & more",
    },
    {
        icon: ShieldCheck,
        title: "Pre-Assessment",
        subtitle: "Evaluate your current cybersecurity posture",
    },
    {
        icon: Brain,
        title: "AI-Powered",
        subtitle: "Intelligent risk analysis & recommendations",
    },
    {
        icon: FileCheck2,
        title: "Enterprise Ready",
        subtitle: "Governance, Risk & Compliance platform",
    },
];

export default function PlatformStatistics() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                        Platform Highlights
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-white">
                        Built for Enterprise Cybersecurity
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Everything organizations need to assess, manage and improve
                        cybersecurity compliance from one centralized platform.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * .08 }}
                                whileHover={{
                                    y: -8,
                                    borderColor: "#2563eb",
                                }}
                                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10">
                                    <Icon className="h-7 w-7 text-blue-500" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {item.subtitle}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}