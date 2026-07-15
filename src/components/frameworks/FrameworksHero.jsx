"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    FileCheck2,
    Layers3,
    Scale,
} from "lucide-react";

import { frameworks } from "@/data/frameworks";
import { modules } from "@/data/modules";

export default function FrameworksHero() {
    const totalFrameworks = frameworks.length;

    const totalStandards = frameworks.reduce(
        (total, framework) => total + framework.standards.length,
        0
    );

    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

                <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

                <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        <ShieldCheck size={16} />
                        Enterprise Compliance Frameworks
                    </div>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 dark:text-white lg:text-6xl">
                        Security Frameworks & Compliance Standards
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Explore internationally recognized cybersecurity frameworks,
                        standards and regulations used to assess governance, security
                        maturity, compliance readiness and enterprise risk.
                    </p>

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
                            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 dark:border-slate-700"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                    <h3 className="mb-8 text-xl font-semibold">
                        Framework Overview
                    </h3>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                            <Layers3 className="mb-3 text-blue-600" />

                            <p className="text-sm text-slate-500">
                                Frameworks
                            </p>

                            <h4 className="mt-1 text-3xl font-bold">
                                {totalFrameworks}
                            </h4>
                        </div>

                        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                            <FileCheck2 className="mb-3 text-blue-600" />

                            <p className="text-sm text-slate-500">
                                Standards
                            </p>

                            <h4 className="mt-1 text-3xl font-bold">
                                {totalStandards}
                            </h4>
                        </div>

                        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                            <ShieldCheck className="mb-3 text-blue-600" />

                            <p className="text-sm text-slate-500">
                                Assessment Modules
                            </p>

                            <h4 className="mt-1 text-3xl font-bold">
                                {modules.length}
                            </h4>
                        </div>

                        <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                            <Scale className="mb-3 text-blue-600" />

                            <p className="text-sm text-slate-500">
                                Compliance Ready
                            </p>

                            <h4 className="mt-1 text-xl font-semibold">
                                Enterprise
                            </h4>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {frameworks.slice(0, 8).map((framework) => (
                            <span
                                key={framework.slug}
                                className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                            >
                                {framework.name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}