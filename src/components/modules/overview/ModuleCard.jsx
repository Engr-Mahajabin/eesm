"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ModuleCard({ module, reverse = false }) {
    const Icon = module.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`grid items-center gap-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
        >
            {/* Left */}
            <div className="flex h-full flex-col">
                <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${module.color}`}
                >
                    <Icon className="h-8 w-8 text-white" />
                </div>

                <span className="mt-5 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {module.category}
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                    {module.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                    {module.shortDescription}
                </p>

                {/* Framework Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {module.frameworks.map((framework) => (
                        <span
                            key={framework}
                            className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        >
                            {framework
                                .replaceAll("-", " ")
                                .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            Controls
                        </p>

                        <h4 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                            {module.controls}
                        </h4>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            Standards
                        </p>

                        <h4 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                            {module.frameworks.length}
                        </h4>
                    </div>
                </div>

                <Link
                    href={`/modules/${module.slug}`}
                    className="group mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Explore Module

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Right */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Key Capabilities
                    </h3>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-500/10 dark:text-green-400">
                        Ready
                    </span>
                </div>

                <div className="grid gap-4">
                    {module.features.map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <CheckCircle2 className="h-5 w-5 text-blue-500" />

                            <span className="text-slate-700 dark:text-slate-300">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/30 dark:bg-blue-950/20">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Assessment Type
                    </p>

                    <h4 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                        {module.assessmentType}
                    </h4>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
                        <span className="text-sm text-slate-500">
                            Estimated Duration
                        </span>

                        <span className="font-semibold text-slate-900 dark:text-white">
                            {module.duration}
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}