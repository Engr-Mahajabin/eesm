"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

                {/* Left Content */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    className="flex-1"
                >

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">

                        <ShieldCheck className="h-4 w-4" />

                        <span>Enterprise Cybersecurity & GRC Platform</span>

                    </div>

                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-6xl">

                        Simplify Cybersecurity
                        <br />

                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                            Governance &
                            Compliance
                        </span>

                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">

                        eGovernance Enterprise Security Manager (eESM) helps organizations
                        assess compliance, identify security gaps, manage cyber risks and
                        strengthen governance using internationally recognized frameworks.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            href="/request-demo"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Request Demo
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/modules"
                            className="rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                        >
                            Explore Platform
                        </Link>

                    </div>

                    <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">

                        <span>✔ ISO Ready</span>

                        <span>✔ NIST</span>

                        <span>✔ PCI DSS</span>

                        <span>✔ GDPR</span>

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6, delay: .2 }}
                    className="flex-1"
                >

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

                        <div className="mb-8 flex items-center justify-between">

                            <h3 className="font-semibold text-slate-900 dark:text-white">
                                Assessment Dashboard
                            </h3>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                Live
                            </span>

                        </div>

                        <div className="space-y-6">

                            <div>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span>Assessment Progress</span>
                                    <span>75%</span>
                                </div>

                                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                                    <div className="h-2 w-3/4 rounded-full bg-blue-600"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                                    <p className="text-xs text-slate-500">
                                        Compliance Score
                                    </p>

                                    <h4 className="mt-2 text-2xl font-bold text-blue-600">
                                        92%
                                    </h4>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                                    <p className="text-xs text-slate-500">
                                        Risk Level
                                    </p>

                                    <h4 className="mt-2 text-2xl font-bold text-amber-500">
                                        Medium
                                    </h4>
                                </div>

                            </div>

                            <div className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500 dark:border-slate-700">
                                ✔ ISO 27001
                                <br />
                                ✔ NIST SP 800-53
                                <br />
                                ✔ PCI DSS
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}