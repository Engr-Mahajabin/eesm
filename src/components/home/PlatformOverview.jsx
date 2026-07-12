"use client";

import { motion } from "framer-motion";
import {
    Building2,
    ClipboardCheck,
    ShieldAlert,
    FileCheck2,
    ArrowRight,
} from "lucide-react";

const workflow = [
    {
        title: "Business Process",
        icon: Building2,
    },
    {
        title: "Assessment",
        icon: ClipboardCheck,
    },
    {
        title: "Gap Analysis",
        icon: ShieldAlert,
    },
    {
        title: "Compliance Report",
        icon: FileCheck2,
    },
];

export default function PlatformOverview() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                    >

                        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                            Platform Overview
                        </span>

                        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white">
                            One Platform to Assess,
                            Manage & Improve
                            Cybersecurity Compliance
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            eESM helps organizations evaluate their existing security
                            controls, identify compliance gaps, calculate cyber risks,
                            and generate actionable reports based on internationally
                            recognized standards.
                        </p>

                        <div className="mt-10 space-y-4">

                            <div className="flex gap-3">
                                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Centralized Governance, Risk & Compliance Platform
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Automated Pre-Assessment & Gap Analysis
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Compliance Reports with Actionable Recommendations
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >

                        <h3 className="mb-8 text-xl font-semibold text-slate-900 dark:text-white">
                            Assessment Workflow
                        </h3>

                        <div className="space-y-6">

                            {workflow.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-center justify-between"
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                                                <Icon className="h-6 w-6 text-blue-600" />
                                            </div>

                                            <div>

                                                <p className="text-xs uppercase tracking-wider text-slate-400">
                                                    Step {index + 1}
                                                </p>

                                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                                    {item.title}
                                                </h4>

                                            </div>

                                        </div>

                                        {index !== workflow.length - 1 && (
                                            <ArrowRight className="h-5 w-5 text-slate-300" />
                                        )}

                                    </div>
                                );
                            })}

                        </div>

                        <div className="mt-10 rounded-2xl bg-blue-50 p-5 dark:bg-blue-950/20">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                ✔ Assess your organization's current cybersecurity posture
                                against ISO, NIST, PCI DSS, GDPR, COBIT, OWASP and more.
                            </p>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}