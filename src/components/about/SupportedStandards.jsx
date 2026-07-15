"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

import { frameworks } from "@/data/frameworks";

export default function SupportedStandards() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Supported Standards
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Built Around Global Standards & Frameworks
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        eESM supports internationally recognized cybersecurity,
                        governance and regulatory frameworks to help organizations
                        strengthen security and simplify compliance.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {frameworks.map((framework, index) => (

                        <motion.div
                            key={framework.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

                                <ShieldCheck size={30} />

                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-600 dark:text-white">
                                {framework.name}
                            </h3>

                            <p className="mt-2 text-sm font-medium text-blue-600">
                                {framework.category}
                            </p>

                            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                {framework.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between">

                                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                                    {framework.standards.length} Standards
                                </span>

                            </div>

                            <Link
                                href={`/frameworks/${framework.slug}`}
                                className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3"
                            >
                                Explore Framework

                                <ArrowRight size={18} />

                            </Link>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}