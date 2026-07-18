"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronRight,
    CalendarCheck2,
    Clock3,
    Users,
    ShieldCheck,
} from "lucide-react";

export default function RequestDemoHero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
            {/* Background */}

            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Breadcrumb */}

                <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <ChevronRight size={16} />

                    <span>Request Demo</span>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Personalized Product Demonstration
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 dark:text-white lg:text-6xl">
                            Experience eESM Before You Decide
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Schedule a personalized demonstration with our experts and
                            discover how eESM simplifies governance, cybersecurity,
                            compliance and enterprise risk management through one
                            integrated platform.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="#demo-form"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Book Your Demo

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
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="mb-8 text-2xl font-semibold">
                                What You'll Experience
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
                                        <CalendarCheck2 size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Live Product Walkthrough</h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                            Explore every major feature with a guided demonstration.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
                                        <ShieldCheck size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            Compliance & Risk Overview
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                            Understand supported frameworks, controls and assessment
                                            capabilities.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
                                        <Users size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            Expert Q&A Session
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                            Discuss your organization's unique security and compliance
                                            challenges.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
                                        <Clock3 size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            30–45 Minute Session
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                            A focused demo tailored to your business requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl bg-blue-50 p-5 dark:bg-blue-500/10">
                                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                    ✔ Free personalized demonstration with no obligation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}