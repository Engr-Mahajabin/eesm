"use client";

import { motion } from "framer-motion";
import {
    ClipboardList,
    FileSearch,
    BarChart3,
    FileCheck2,
} from "lucide-react";

const icons = [
    ClipboardList,
    FileSearch,
    BarChart3,
    FileCheck2,
];

export default function Workflow({ module }) {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Assessment Workflow
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Complete Assessment in Four Simple Steps
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        A streamlined workflow designed to help organizations perform
                        assessments efficiently while maintaining compliance and reporting
                        accuracy.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative">

                    {/* Desktop Connector */}

                    <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-slate-200 dark:bg-slate-800 lg:block" />

                    <div className="grid gap-10 lg:grid-cols-4">

                        {module.workflow.map((step, index) => {
                            const Icon = icons[index % icons.length];

                            return (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.15,
                                    }}
                                    className="relative text-center"
                                >

                                    {/* Number */}

                                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">

                                        <Icon size={28} />

                                    </div>

                                    <span className="mt-6 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                        STEP {index + 1}
                                    </span>

                                    <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                                        {step}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        Execute this stage of the assessment to move toward a
                                        complete compliance evaluation and reporting process.
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}