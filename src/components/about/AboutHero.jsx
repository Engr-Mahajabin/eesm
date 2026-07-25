// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//     ChevronRight,
//     ArrowRight,
//     ShieldCheck,
//     Layers3,
//     BadgeCheck,
//     Building2,
// } from "lucide-react";

// export default function AboutHero() {
//     return (
//         <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
//             {/* Background */}

//             <div className="absolute inset-0">
//                 <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

//                 <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//             </div>

//             <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

//                 {/* Left */}

//                 <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                 >
//                     {/* Breadcrumb */}

//                     <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
//                         <Link href="/" className="hover:text-blue-600">
//                             Home
//                         </Link>

//                         <ChevronRight size={16} />

//                         <span>About</span>
//                     </div>

//                     {/* Badge */}

//                     <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
//                         <ShieldCheck size={16} />
//                         Enterprise Security Platform
//                     </div>

//                     {/* Title */}

//                     <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 dark:text-white lg:text-6xl">
//                         About
//                         <span className="block text-blue-600">eESM</span>
//                     </h1>

//                     {/* Description */}

//                     <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
//                         Enterprise Security & Compliance Management (eESM) helps
//                         organizations assess cybersecurity maturity, manage governance,
//                         reduce risks and achieve compliance using internationally
//                         recognized standards and frameworks.
//                     </p>

//                     {/* Buttons */}

//                     <div className="mt-10 flex flex-wrap gap-4">
//                         <Link
//                             href="/request-demo"
//                             className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
//                         >
//                             Request Demo

//                             <ArrowRight size={18} />
//                         </Link>

//                         <Link
//                             href="/contact"
//                             className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 dark:border-slate-700"
//                         >
//                             Contact Sales
//                         </Link>
//                     </div>
//                 </motion.div>

//                 {/* Right */}

//                 <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                 >
//                     <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

//                         {/* Logo */}

//                         <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
//                             <ShieldCheck size={36} />
//                         </div>

//                         <div className="mt-10 grid grid-cols-2 gap-5">

//                             <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
//                                 <Layers3 className="mb-3 text-blue-600" />

//                                 <p className="text-sm text-slate-500">
//                                     Frameworks
//                                 </p>

//                                 <h4 className="mt-1 text-2xl font-bold">
//                                     20+
//                                 </h4>
//                             </div>

//                             <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
//                                 <ShieldCheck className="mb-3 text-blue-600" />

//                                 <p className="text-sm text-slate-500">
//                                     Controls
//                                 </p>

//                                 <h4 className="mt-1 text-2xl font-bold">
//                                     500+
//                                 </h4>
//                             </div>

//                             <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
//                                 <BadgeCheck className="mb-3 text-blue-600" />

//                                 <p className="text-sm text-slate-500">
//                                     Compliance
//                                 </p>

//                                 <h4 className="mt-1 font-semibold">
//                                     Enterprise Ready
//                                 </h4>
//                             </div>

//                             <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
//                                 <Building2 className="mb-3 text-blue-600" />

//                                 <p className="text-sm text-slate-500">
//                                     Industries
//                                 </p>

//                                 <h4 className="mt-1 text-2xl font-bold">
//                                     10+
//                                 </h4>
//                             </div>

//                         </div>
//                     </div>
//                 </motion.div>

//             </div>
//         </section>
//     );
// }


"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative text-center max-w-7xl mx-auto px-6 pt-28 pb-20">
            {/* Background Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm"
            >
                <span className="bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    About
                </span>
                <span className="flex items-center gap-1">
                    Discover Our Story <Sparkles className="h-3 w-3 text-sky-400" />
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight"
            >
                Redefining the Future of{" "}
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                    Security Governance
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light leading-relaxed"
            >
                Simplify enterprise risk and compliance with our powerful eESM platform. From continuous control mapping to automated audit readiness.
            </motion.p>

            {/* Bento Grid Showcase (Exact Layout of your image) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto items-stretch"
            >
                {/* Left Column (2 Cards) */}
                <div className="flex flex-col gap-4 md:col-span-1">
                    {/* Top Left Card - Solid Cyan/Sky Accent */}
                    <div className="flex-1 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-6 text-left flex flex-col justify-between shadow-lg text-white">
                        <span className="text-4xl md:text-5xl font-black">10+</span>
                        <p className="text-xs font-medium text-sky-100 mt-6 leading-snug">
                            Global Frameworks Supported (ISO, NIST, PCI)
                        </p>
                    </div>

                    {/* Bottom Left Card - Dark Glassy */}
                    <div className="flex-1 rounded-2xl border border-sky-200/80 bg-white/70 dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 p-6 text-left flex flex-col justify-between backdrop-blur-md">
                        <span className="text-4xl md:text-5xl font-black text-sky-600 dark:text-[#38bdf8]">
                            99%
                        </span>
                        <p className="text-xs text-slate-600 dark:text-[#e0f2fe]/70 mt-6 font-medium">
                            Audit Preparation Efficiency Gained
                        </p>
                    </div>
                </div>

                {/* Center Image Column (Spans 2 columns) */}
                <div className="relative rounded-2xl overflow-hidden border border-sky-200/80 dark:border-[#38bdf8]/30 min-h-[300px] md:col-span-2 shadow-xl group">
                    <Image
                        src="/images/about/about_hero.png"
                        alt="eESM Team Collaboration"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Right Column (2 Cards) */}
                <div className="flex flex-col gap-4 md:col-span-1">
                    {/* Top Right Card - Dark Glassy */}
                    <div className="flex-1 rounded-2xl border border-sky-200/80 bg-white/70 dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 p-6 text-left flex flex-col justify-between backdrop-blur-md">
                        <span className="text-4xl md:text-5xl font-black text-sky-600 dark:text-[#38bdf8]">
                            500+
                        </span>
                        <p className="text-xs text-slate-600 dark:text-[#e0f2fe]/70 mt-6 font-medium">
                            Automated Governance Controls Mapped
                        </p>
                    </div>

                    {/* Bottom Right Card - Dark Glassy */}
                    <div className="flex-1 rounded-2xl border border-sky-200/80 bg-white/70 dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 p-6 text-left flex flex-col justify-between backdrop-blur-md">
                        <span className="text-4xl md:text-5xl font-black text-sky-600 dark:text-[#38bdf8]">
                            100%
                        </span>
                        <p className="text-xs text-slate-600 dark:text-[#e0f2fe]/70 mt-6 font-medium">
                            Real-Time Governance Tracking
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}