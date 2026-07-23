// "use client";

// import { motion } from "framer-motion";
// import {
//     Brain,
//     ShieldCheck,
//     Globe,
//     BarChart3,
//     LayoutDashboard,
//     FileCheck2,
//     Sparkles,
// } from "lucide-react";

// const features = [
//     {
//         icon: Brain,
//         title: "AI-Powered Assessment",
//         desc: "Automate security assessments with intelligent recommendations.",
//         badge: "Smart Automation",
//     },
//     {
//         icon: Globe,
//         title: "Global Frameworks",
//         desc: "Supports ISO, NIST, PCI DSS, GDPR, COBIT and more.",
//         badge: "Multi-Standard",
//     },
//     {
//         icon: BarChart3,
//         title: "Risk Analytics",
//         desc: "Visualize risks with real-time dashboards and scoring.",
//         badge: "Real-time",
//     },
//     {
//         icon: LayoutDashboard,
//         title: "Executive Dashboard",
//         desc: "Centralized monitoring for all assessments and compliance.",
//         badge: "Centralized",
//     },
//     {
//         icon: ShieldCheck,
//         title: "Enterprise Security",
//         desc: "Built for enterprises with scalable security architecture.",
//         badge: "Scalable",
//     },
//     {
//         icon: FileCheck2,
//         title: "Audit Ready Reports",
//         desc: "Generate compliance reports in just a few clicks.",
//         badge: "Instant Export",
//     },
// ];

// export default function WhyChoose() {
//     return (
//         <section className="relative py-24 overflow-hidden">
//             {/* Background Subtle Gradient Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

//             <div className="relative z-10 mx-auto max-w-7xl px-6">

//                 {/* Section Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 25 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mx-auto max-w-3xl text-center"
//                 >
//                     <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-100 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc]">
//                         <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
//                         Why eESM
//                     </span>

//                     <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 dark:text-white">
//                         Everything You Need to Manage{" "}
//                         <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
//                             Cybersecurity Compliance
//                         </span>
//                     </h2>

//                     <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-[#bae6fd]/80">
//                         Designed to simplify governance, automate assessments and strengthen
//                         your organization's security posture.
//                     </p>
//                 </motion.div>

//                 {/* Feature Cards Grid */}
//                 <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//                     {features.map((item, index) => {
//                         const Icon = item.icon;

//                         return (
//                             <motion.div
//                                 key={item.title}
//                                 initial={{ opacity: 0, y: 25 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{
//                                     delay: index * 0.08,
//                                 }}
//                                 whileHover={{
//                                     y: -6,
//                                 }}
//                                 className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:shadow-xl dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 dark:hover:border-[#38bdf8]/60"
//                             >
//                                 <div>
//                                     {/* Top Header inside Card */}
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100/80 text-sky-600 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 dark:text-[#7dd3fc] transition-transform duration-300 group-hover:scale-110">
//                                             <Icon className="h-7 w-7" />
//                                         </div>
//                                         <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-[#7dd3fc]/80 border border-slate-200/60 dark:border-white/10">
//                                             {item.badge}
//                                         </span>
//                                     </div>

//                                     {/* Title & Desc */}
//                                     <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
//                                         {item.title}
//                                     </h3>

//                                     <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#e0f2fe]/75">
//                                         {item.desc}
//                                     </p>
//                                 </div>

//                                 {/* Subtle Hover Accent Line */}
//                                 <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
    Bot,
    Layers,
    LineChart,
    Sparkles,
    ShieldCheck,
    Users,
    ArrowUpRight,
    Send,
    Lock
} from "lucide-react";

export default function WhyChoose() {
    return (
        <section className="relative py-20 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
            {/* Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

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
                    <span className="inline-block rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        Features Included
                    </span>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                        Powerful Features to Boost Your <br />
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            Security Governance
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                        Stay ahead with automated compliance features built for performance, risk visibility, and enterprise scale.
                    </p>
                </motion.div>

                {/* Image 1 Bento Grid Layout */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {/* Bento Card 1: AI-Powered Assessment (Image 1 top-left style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 backdrop-blur-md shadow-md dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:border-[#38bdf8] transition-all"
                    >
                        {/* UI Preview Box */}
                        <div className="rounded-xl border border-sky-200/60 bg-slate-900/90 dark:border-slate-800 p-4 mb-6 shadow-inner">
                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                                Discover gaps with AI
                            </span>
                            <div className="flex items-center justify-between rounded-lg bg-slate-800/80 px-3 py-2 border border-slate-700/50">
                                <span className="text-xs text-slate-300">ISO 27001 Annex A.5 Assessment...</span>
                                <div className="h-6 w-6 rounded-md bg-sky-500/20 text-sky-400 flex items-center justify-center">
                                    <Send className="h-3 w-3" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30">
                                <Bot className="h-5 w-5 text-sky-600 dark:text-[#38bdf8]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                AI-Powered Assessment
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">
                                Automate task prioritization, risk identification, and deadline predictions with intelligent AI algorithms.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Card 2: Framework Integrations (Image 1 top-middle style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 backdrop-blur-md shadow-md dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:border-[#38bdf8] transition-all"
                    >
                        {/* UI Preview Box: Central Node */}
                        <div className="relative flex items-center justify-center h-28 mb-6 rounded-xl border border-sky-200/60 bg-slate-900/90 dark:border-slate-800">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 border border-sky-400/50 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                                <Layers className="h-6 w-6" />
                            </div>
                            <div className="absolute top-3 left-4 text-[10px] bg-slate-800 text-sky-300 px-2 py-0.5 rounded-full border border-slate-700">ISO</div>
                            <div className="absolute bottom-3 right-4 text-[10px] bg-slate-800 text-sky-300 px-2 py-0.5 rounded-full border border-slate-700">NIST</div>
                            <div className="absolute top-3 right-4 text-[10px] bg-slate-800 text-sky-300 px-2 py-0.5 rounded-full border border-slate-700">OWASP</div>
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30">
                                <ShieldCheck className="h-5 w-5 text-sky-600 dark:text-[#38bdf8]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Built-in Standards
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">
                                Offers seamless mapping with global governance and security standards you rely on daily.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Card 3: Executive Risk Analytics (Image 1 top-right style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 backdrop-blur-md shadow-md dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:border-[#38bdf8] transition-all"
                    >
                        {/* UI Preview Box: Mini Bar Chart */}
                        <div className="flex items-end justify-between gap-2 h-28 mb-6 p-4 rounded-xl border border-sky-200/60 bg-slate-900/90 dark:border-slate-800">
                            <div className="w-full bg-slate-800 rounded-t h-[40%]" />
                            <div className="w-full bg-slate-800 rounded-t h-[65%]" />
                            <div className="w-full bg-sky-500 rounded-t h-[90%] shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                            <div className="w-full bg-slate-800 rounded-t h-[50%]" />
                            <div className="w-full bg-slate-800 rounded-t h-[75%]" />
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30">
                                <LineChart className="h-5 w-5 text-sky-600 dark:text-[#38bdf8]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Executive Risk Analytics
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">
                                Gain full visibility into real-time compliance posture, gap severity, and remediation progress.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Card 4: Continuous Monitoring (Image 1 bottom-left style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 backdrop-blur-md shadow-md dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:border-[#38bdf8] transition-all"
                    >
                        {/* UI Preview Box: Line Wave */}
                        <div className="flex items-center justify-center h-28 mb-6 p-4 rounded-xl border border-sky-200/60 bg-slate-900/90 dark:border-slate-800">
                            <div className="w-full flex items-center justify-between text-xs text-sky-400 font-mono">
                                <span>Active Shield</span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">99.9%</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30">
                                <Lock className="h-5 w-5 text-sky-600 dark:text-[#38bdf8]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Continuous Risk Tracking
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">
                                Stay in control with real-time insights that help you measure security maturity that matters.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Card 5: Real-time Collaboration (Image 1 bottom-middle style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 backdrop-blur-md shadow-md dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:border-[#38bdf8] transition-all"
                    >
                        {/* UI Preview Box: Chat/Auditor Avatars */}
                        <div className="flex flex-col justify-center gap-2 h-28 mb-6 p-4 rounded-xl border border-sky-200/60 bg-slate-900/90 dark:border-slate-800">
                            <div className="flex items-center justify-between bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50 text-xs text-slate-300">
                                <span>Lead Auditor</span>
                                <span className="text-[10px] text-sky-400">Reviewed</span>
                            </div>
                            <div className="flex items-center justify-between bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50 text-xs text-slate-300">
                                <span>CISO Officer</span>
                                <span className="text-[10px] text-emerald-400">Approved</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30">
                                <Users className="h-5 w-5 text-sky-600 dark:text-[#38bdf8]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Multi-User Collaboration
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">
                                Allow compliance officers, CISOs, and auditors to share updates and evidence seamlessly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Card 6: Audit Readiness Results (Image 1 bottom-right style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-sky-200/80 bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 backdrop-blur-md shadow-md dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.15)] dark:hover:border-[#38bdf8] transition-all"
                    >
                        {/* UI Preview Box: Task Results List */}
                        <div className="flex flex-col justify-center gap-2 h-28 mb-6 p-4 rounded-xl border border-sky-200/60 bg-slate-900/90 dark:border-slate-800">
                            <div className="flex justify-between items-center text-xs text-slate-300">
                                <span>Governance Controls</span>
                                <span className="text-emerald-400 font-bold">95% ↑</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-400 h-full w-[95%]" />
                            </div>
                            <div className="flex justify-between items-center text-xs text-slate-300 mt-1">
                                <span>Risk Remediation</span>
                                <span className="text-sky-400 font-bold">88% ↑</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-sky-400 h-full w-[88%]" />
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30">
                                <Sparkles className="h-5 w-5 text-sky-600 dark:text-[#38bdf8]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Audit Readiness
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">
                                Generate instant reports and keep full visibility into how compliance tasks are managed.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}