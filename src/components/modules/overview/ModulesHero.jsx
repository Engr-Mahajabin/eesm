// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, ShieldCheck } from "lucide-react";

// export default function ModulesHero() {
//     return (
//         <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 pt-36 pb-24">

//             {/* Background Glow */}

//             <div className="absolute inset-0">
//                 <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
//                 <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//             </div>

//             <div className="relative mx-auto max-w-7xl px-6">

//                 {/* Breadcrumb */}

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="mb-6 flex items-center gap-2 text-sm text-slate-400"
//                 >
//                     <Link href="/" className="hover:text-blue-400 transition">
//                         Home
//                     </Link>

//                     <span>/</span>

//                     <span className="text-white">Modules</span>
//                 </motion.div>

//                 {/* Badge */}

//                 <motion.div
//                     initial={{ opacity: 0, y: -15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: .5 }}
//                     className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
//                 >
//                     <ShieldCheck className="h-4 w-4" />

//                     Enterprise Cybersecurity Platform
//                 </motion.div>

//                 {/* Title */}

//                 <motion.h1
//                     initial={{ opacity: 0, y: 25 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: .15 }}
//                     className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-white lg:text-6xl"
//                 >
//                     Explore eESM
//                     <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                         Assessment Modules
//                     </span>
//                 </motion.h1>

//                 {/* Description */}

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: .3 }}
//                     className="mt-8 max-w-3xl text-lg leading-8 text-slate-400"
//                 >
//                     eESM provides specialized cybersecurity assessment modules
//                     designed to evaluate governance, risk management, compliance,
//                     AI security, digital forensics and industry-specific regulatory
//                     requirements through a single enterprise platform.
//                 </motion.p>

//                 {/* Buttons */}

//                 <motion.div
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: .45 }}
//                     className="mt-10 flex flex-wrap gap-4"
//                 >
//                     <Link
//                         href="/request-demo"
//                         className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
//                     >
//                         Request Demo

//                         <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//                     </Link>

//                     <Link
//                         href="/contact"
//                         className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
//                     >
//                         Contact Sales
//                     </Link>
//                 </motion.div>

//             </div>

//         </section>
//     );
// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

const stats = [
    {
        number: "5+",
        label: "Assessment Modules",
    },
    {
        number: "20+",
        label: "Security Frameworks",
    },
    {
        number: "1000+",
        label: "Assessment Controls",
    },
    {
        number: "Enterprise",
        label: "Ready Platform",
    },
];

export default function ModulesHero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                >
                    <ShieldCheck size={16} />
                    Enterprise Cybersecurity Platform
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-slate-900 dark:text-white lg:text-6xl"
                >
                    Explore eESM
                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Assessment Modules
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400"
                >
                    Specialized cybersecurity modules designed to assess governance,
                    compliance, AI security, enterprise architecture and digital
                    forensic readiness from one centralized platform.
                </motion.p>

                <div className="mt-10 flex flex-wrap gap-4">

                    <Link
                        href="/request-demo"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Request Demo
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:border-blue-600 dark:border-slate-700"
                    >
                        Contact Sales
                    </Link>

                </div>

                {/* Stats */}

                <div className="mt-20 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10 dark:border-slate-800 lg:grid-cols-4">

                    {stats.map((item) => (

                        <div key={item.label}>

                            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                {item.number}
                            </h3>

                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}