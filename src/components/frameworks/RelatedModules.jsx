"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { modules } from "@/data/modules";

export default function RelatedModules({ framework }) {
    const relatedModules = modules.filter((module) =>
        framework.modules.includes(module.slug)
    );

    return (
        <section id="modules" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Assessment Modules
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Related Assessment Modules
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        These assessment modules are mapped to this framework and help
                        organizations evaluate compliance, governance and cybersecurity
                        maturity.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {relatedModules.map((module, index) => {
                        const Icon = module.icon;

                        return (
                            <motion.div
                                key={module.slug}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -8 }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${module.color}`}
                                >
                                    <Icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-600 dark:text-white">
                                    {module.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {module.shortDescription}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {module.frameworks.slice(0, 3).map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/modules/${module.slug}`}
                                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                                >
                                    View Module

                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}