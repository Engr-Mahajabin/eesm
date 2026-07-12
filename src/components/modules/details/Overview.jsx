"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2,
    FileText,
    Shield,
    BarChart3,
} from "lucide-react";

export default function Overview({ module }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Module Overview
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                            {module.title}
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                            {module.heroDescription}
                        </p>

                        <div className="mt-10 space-y-4">

                            {module.benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-blue-600" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {benefit}
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
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                    >

                        <h3 className="text-xl font-semibold">
                            Assessment Summary
                        </h3>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2">

                            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                                <Shield className="mb-3 text-blue-600" />
                                <p className="text-sm text-slate-500">
                                    Controls
                                </p>
                                <h4 className="mt-2 text-2xl font-bold">
                                    {module.controls}+
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                                <BarChart3 className="mb-3 text-blue-600" />
                                <p className="text-sm text-slate-500">
                                    Standards
                                </p>
                                <h4 className="mt-2 text-2xl font-bold">
                                    {module.standards}
                                </h4>
                            </div>

                        </div>

                        <div className="mt-10">

                            <h4 className="mb-5 font-semibold">
                                Generated Reports
                            </h4>

                            <div className="space-y-3">

                                {module.reports.map((report) => (
                                    <div
                                        key={report}
                                        className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800"
                                    >
                                        <FileText className="h-5 w-5 text-blue-600" />

                                        <span>{report}</span>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}