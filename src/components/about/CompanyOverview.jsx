"use client";

import { motion } from "framer-motion";
import {
    Building2,
    ShieldCheck,
    Globe,
    BarChart3,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

export default function CompanyOverview() {
    const highlights = [
        "Centralized security & compliance platform",
        "Supports international standards & frameworks",
        "Automated risk assessment and reporting",
        "Enterprise-ready and scalable architecture",
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Company Overview
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                            Simplifying Enterprise Security &
                            Compliance Management
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            eESM (Enterprise Security & Compliance Management)
                            is a comprehensive platform designed to help
                            organizations strengthen cybersecurity, manage
                            governance, reduce operational risks and achieve
                            compliance through internationally recognized
                            standards and frameworks.
                        </p>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                            By combining assessments, compliance management,
                            reporting and continuous monitoring into a single
                            platform, eESM enables organizations to make
                            informed security decisions and improve their
                            overall cyber resilience.
                        </p>

                        <div className="mt-10 space-y-4">

                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >

                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            Platform Highlights
                        </h3>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                                <Building2 className="mt-1 text-blue-600" />

                                <div>
                                    <h4 className="font-semibold">
                                        Enterprise Focus
                                    </h4>

                                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        Designed for organizations of all sizes to
                                        streamline governance, risk and compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                                <ShieldCheck className="mt-1 text-blue-600" />

                                <div>
                                    <h4 className="font-semibold">
                                        Security First
                                    </h4>

                                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        Built around cybersecurity best practices,
                                        risk management and compliance monitoring.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                                <Globe className="mt-1 text-blue-600" />

                                <div>
                                    <h4 className="font-semibold">
                                        Global Standards
                                    </h4>

                                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        Supports ISO, NIST, PCI DSS, GDPR,
                                        HIPAA, COBIT and many other globally
                                        recognized frameworks.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                                <BarChart3 className="mt-1 text-blue-600" />

                                <div>
                                    <h4 className="font-semibold">
                                        Actionable Insights
                                    </h4>

                                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        Generate executive reports, compliance
                                        dashboards and continuous improvement
                                        recommendations.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600">
                            Learn how eESM transforms compliance

                            <ArrowRight size={18} />
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}