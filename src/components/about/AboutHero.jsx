"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ChevronRight,
    ArrowRight,
    ShieldCheck,
    Layers3,
    BadgeCheck,
    Building2,
} from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
            {/* Background */}

            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    {/* Breadcrumb */}

                    <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>

                        <ChevronRight size={16} />

                        <span>About</span>
                    </div>

                    {/* Badge */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        <ShieldCheck size={16} />
                        Enterprise Security Platform
                    </div>

                    {/* Title */}

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 dark:text-white lg:text-6xl">
                        About
                        <span className="block text-blue-600">eESM</span>
                    </h1>

                    {/* Description */}

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Enterprise Security & Compliance Management (eESM) helps
                        organizations assess cybersecurity maturity, manage governance,
                        reduce risks and achieve compliance using internationally
                        recognized standards and frameworks.
                    </p>

                    {/* Buttons */}

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
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

                        {/* Logo */}

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                            <ShieldCheck size={36} />
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-5">

                            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                                <Layers3 className="mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Frameworks
                                </p>

                                <h4 className="mt-1 text-2xl font-bold">
                                    20+
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                                <ShieldCheck className="mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Controls
                                </p>

                                <h4 className="mt-1 text-2xl font-bold">
                                    500+
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                                <BadgeCheck className="mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Compliance
                                </p>

                                <h4 className="mt-1 font-semibold">
                                    Enterprise Ready
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-950">
                                <Building2 className="mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Industries
                                </p>

                                <h4 className="mt-1 text-2xl font-bold">
                                    10+
                                </h4>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}