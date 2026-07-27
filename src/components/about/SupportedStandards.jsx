// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ShieldCheck, ArrowRight } from "lucide-react";

// import { frameworks } from "@/data/frameworks";

// export default function SupportedStandards() {
//     return (
//         <section className="py-24">
//             <div className="mx-auto max-w-7xl px-6">

//                 {/* Heading */}

//                 <div className="mx-auto mb-16 max-w-3xl text-center">

//                     <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
//                         Supported Standards
//                     </span>

//                     <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
//                         Built Around Global Standards & Frameworks
//                     </h2>

//                     <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
//                         eESM supports internationally recognized cybersecurity,
//                         governance and regulatory frameworks to help organizations
//                         strengthen security and simplify compliance.
//                     </p>

//                 </div>

//                 {/* Cards */}

//                 <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

//                     {frameworks.map((framework, index) => (

//                         <motion.div
//                             key={framework.slug}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.08 }}
//                             whileHover={{ y: -6 }}
//                             className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
//                         >

//                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

//                                 <ShieldCheck size={30} />

//                             </div>

//                             <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-600 dark:text-white">
//                                 {framework.name}
//                             </h3>

//                             <p className="mt-2 text-sm font-medium text-blue-600">
//                                 {framework.category}
//                             </p>

//                             <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
//                                 {framework.description}
//                             </p>

//                             <div className="mt-6 flex items-center justify-between">

//                                 <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
//                                     {framework.standards.length} Standards
//                                 </span>

//                             </div>

//                             <Link
//                                 href={`/frameworks/${framework.slug}`}
//                                 className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3"
//                             >
//                                 Explore Framework

//                                 <ArrowRight size={18} />

//                             </Link>

//                         </motion.div>

//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// }




"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, RefreshCw } from "lucide-react";

export default function SupportedStandards() {
    return (
        <section className="relative overflow-hidden py-20 transition-colors duration-300 bg-slate-950 text-white">
            {/* Background Glow Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

                    {/* Left Column: Heading, Subtitle & Mini Stat Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col justify-center"
                    >
                        {/* Pill Badge */}
                        <div className="mb-6 inline-flex items-center w-fit">
                            <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7dd3fc] backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                                Supported Standards & Frameworks
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl leading-tight">
                            Built Around <br />
                            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Global Standards & Frameworks
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 text-base text-slate-300 font-light leading-relaxed">
                            eESM supports internationally recognized cybersecurity, governance, and regulatory frameworks to help organizations strengthen security and simplify compliance.
                        </p>

                        {/* 3 Small Stat Cards */}
                        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
                            {/* Stat 1 */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-sky-500/30 bg-sky-950/20 backdrop-blur-md text-center shadow-[0_4px_20px_rgba(2,132,199,0.15)]"
                            >
                                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300">
                                    <Layers className="h-4 w-4" />
                                </div>
                                <span className="text-xl font-bold text-white">50+</span>
                                <span className="text-[11px] text-slate-400 font-medium">Frameworks</span>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-sky-500/30 bg-sky-950/20 backdrop-blur-md text-center shadow-[0_4px_20px_rgba(2,132,199,0.15)]"
                            >
                                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300">
                                    <ShieldCheck className="h-4 w-4" />
                                </div>
                                <span className="text-xl font-bold text-white">2000+</span>
                                <span className="text-[11px] text-slate-400 font-medium">Security Controls</span>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-sky-500/30 bg-sky-950/20 backdrop-blur-md text-center shadow-[0_4px_20px_rgba(2,132,199,0.15)]"
                            >
                                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300">
                                    <RefreshCw className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-bold text-white mt-1">Continuous</span>
                                <span className="text-[11px] text-slate-400 font-medium">Updates</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Graphic Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 flex justify-center items-center"
                    >
                        <div className="relative w-full aspect-[16/10] max-w-[650px] overflow-hidden rounded-3xl border border-sky-500/30 bg-slate-900/50 p-2 shadow-[0_0_50px_rgba(56,189,248,0.15)] backdrop-blur-xl">
                            <Image
                                src="/frameworks-circle.png" // আপনার public ফোল্ডারে থাকা ইমেজের নাম ও পথ অনুযায়ী আপডেট করুন
                                alt="Supported Frameworks Circle Illustration"
                                fill
                                priority
                                className="object-contain p-4 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}