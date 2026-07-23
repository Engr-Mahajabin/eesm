"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain,
    ShieldCheck,
    Globe,
    BarChart3,
    FileCheck2,
    Building2,
    ClipboardCheck,
    ShieldAlert,
    CheckCircle2,
    Zap,
    Lock,
    Sparkles,
    ArrowRight,
} from "lucide-react";

// ১. Platform Overview Data (Tabs Style)
const overviewTabs = [
    {
        id: "business",
        icon: Building2,
        title: "1. Business Process",
        subtitle: "Identify Core Operations",
        description: "Map and document critical business operations across various enterprise departments.",
        details: [
            "Departmental mapping and asset categorization",
            "Process critical assessment and owner assignment",
            "Custom workflow definition for business units",
        ],
    },
    {
        id: "assessment",
        icon: ClipboardCheck,
        title: "2. Assessment",
        subtitle: "Map Against Global Standards",
        description: "Evaluate controls against top global standards like ISO 27001, NIST, and OWASP.",
        details: [
            "Automated control mapping against standards",
            "Interactive pre-assessment questionnaires",
            "Maturity level scoring and baseline setup",
        ],
    },
    {
        id: "gap",
        icon: ShieldAlert,
        title: "3. Gap Analysis",
        subtitle: "Instant Risk Identification",
        description: "Instantly pinpoint missing controls, potential vulnerabilities, and compliance gaps.",
        details: [
            "Automated gap severity matrix",
            "Actionable remediation recommendations",
            "Risk likelihood and impact calculation",
        ],
    },
    {
        id: "report",
        icon: FileCheck2,
        title: "4. Compliance Report",
        subtitle: "Audit-Ready Deliverables",
        description: "Generate comprehensive posture reports ready for executive leadership and external auditors.",
        details: [
            "Executive summary & board-level reports",
            "One-click audit documentation export",
            "Historical compliance tracking trends",
        ],
    },
];

// ২. Platform Statistics Data
const statistics = [
    { label: "Compliance Assessment Speed", value: "80%", icon: Zap, suffix: "Faster", desc: "Automated workflow vs manual excel work" },
    { label: "Global Framework Coverage", value: "100%", icon: Globe, suffix: "Aligned", desc: "ISO 27001, NIST, OWASP, PCI DSS, GDPR" },
    { label: "Human Error Reduction", value: "95%", icon: ShieldCheck, suffix: "Reduced", desc: "Standardized evaluation methodology" },
    { label: "Audit Readiness Time", value: "24/7", icon: Lock, suffix: "Continuous", desc: "Always prepared for external audits" },
];

// ৩. Why Choose eESM Data
const whyChooseReasons = [
    {
        icon: Brain,
        title: "Intelligent Framework Engine",
        desc: "Pre-configured templates and smart mapping for international frameworks reduce manual complexity.",
    },
    {
        icon: BarChart3,
        title: "Real-Time Risk Scoring",
        desc: "Dynamic risk calculations provide immediate insight into enterprise vulnerability posture.",
    },
    {
        icon: FileCheck2,
        title: "Audit-Ready Documentation",
        desc: "Export comprehensive assessment reports that satisfy board members and regulatory bodies.",
    },
    {
        icon: Globe,
        title: "Scalable Enterprise Design",
        desc: "Built to accommodate organization structures from growing mid-market to large multi-nationals.",
    },
];

export default function PlatformHighlights() {
    const [activeTab, setActiveTab] = useState(overviewTabs[0].id);
    const selectedTab = overviewTabs.find((tab) => tab.id === activeTab);

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10 space-y-24">

                {/* ===================================================
            PART 1: SECTION HEADER & PLATFORM OVERVIEW (TABS)
        ==================================================== */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-100 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc]">
                            <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
                            End-to-End Enterprise GRC
                        </span>
                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 dark:text-white">
                            Platform{" "}
                            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                                Overview & Workflow
                            </span>
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-[#bae6fd]/80">
                            Streamline cybersecurity governance, pre-assessments, and compliance in one unified system.
                        </p>
                    </div>

                    {/* Interactive Process Tabs */}
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        {/* Tab Selectors (Left 5 Cols) */}
                        <div className="lg:col-span-5 space-y-3">
                            {overviewTabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = tab.id === activeTab;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${isActive
                                            ? "border-sky-500 bg-white dark:bg-[#0284c7]/20 dark:border-[#38bdf8] shadow-lg shadow-sky-500/10"
                                            : "border-slate-200/80 bg-white/50 dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 hover:border-sky-300"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${isActive
                                                    ? "bg-sky-500 text-white dark:bg-[#38bdf8] dark:text-slate-950"
                                                    : "bg-sky-100 text-sky-700 dark:bg-[#0284c7]/30 dark:text-[#7dd3fc]"
                                                    }`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-base ${isActive ? "text-sky-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}>
                                                    {tab.title}
                                                </h3>
                                                <p className="text-xs text-slate-500 dark:text-[#bae6fd]/70">{tab.subtitle}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "text-sky-500 translate-x-1" : "text-slate-300 opacity-0"}`} />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tab Preview Box (Right 7 Cols) */}
                        <div className="lg:col-span-7">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedTab.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="rounded-3xl border border-sky-300/60 bg-gradient-to-br from-white via-sky-50/40 to-white p-8 dark:border-[#38bdf8]/40 dark:from-[#0369a1]/20 dark:via-[#0284c7]/10 dark:to-[#0369a1]/20 shadow-sm backdrop-blur-xl"
                                >
                                    <div className="flex items-center gap-3 text-sky-600 dark:text-[#38bdf8] mb-4">
                                        <selectedTab.icon className="h-8 w-8" />
                                        <span className="text-xs font-bold uppercase tracking-wider bg-sky-100 dark:bg-[#0284c7]/40 px-3 py-1 rounded-full">
                                            Step Detail
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {selectedTab.title}: {selectedTab.subtitle}
                                    </h3>
                                    <p className="mt-3 text-slate-600 dark:text-[#e0f2fe]/80 text-base leading-relaxed">
                                        {selectedTab.description}
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-[#38bdf8]/20 space-y-3">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#7dd3fc]/80">Key Capabilities</h4>
                                        {selectedTab.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                                                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* ===================================================
            PART 2: PLATFORM STATISTICS (IMPACT METRICS BAR)
        ==================================================== */}
                <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-md dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10">
                    <div className="mb-8 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Measurable Impact & Statistics</h3>
                        <p className="text-sm text-slate-600 dark:text-[#bae6fd]/80">Proven efficiency gained through eESM automation</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {statistics.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="relative rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center dark:border-white/5 dark:bg-white/5"
                                >
                                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-[#0284c7]/30 dark:text-[#7dd3fc]">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{stat.value}</span>
                                        <span className="text-xs font-bold text-sky-600 dark:text-[#38bdf8]">{stat.suffix}</span>
                                    </div>
                                    <h4 className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200">{stat.label}</h4>
                                    <p className="mt-1 text-xs text-slate-500 dark:text-[#bae6fd]/70 leading-relaxed">{stat.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ===================================================
            PART 3: WHY CHOOSE EESM (FEATURE GRID)
        ==================================================== */}
                <div>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Why Choose eESM?</h2>
                        <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-[#bae6fd]/80">
                            Designed specifically for enterprise governance, risk, and compliance management.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {whyChooseReasons.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -4 }}
                                    className="group rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all hover:border-sky-400 dark:border-[#38bdf8]/20 dark:bg-[#0369a1]/10 dark:hover:border-[#38bdf8]/60"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-[#0284c7]/30 dark:text-[#7dd3fc] mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{item.title}</h3>
                                    <p className="text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}