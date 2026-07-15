"use client";

import { motion } from "framer-motion";
import {
    ClipboardCheck,
    FileSearch,
    BarChart3,
    FileCheck2,
    TrendingUp,
} from "lucide-react";

const iconMap = {
    "Select Framework": ClipboardCheck,
    "Answer Assessment": FileSearch,
    "Calculate Risk Score": BarChart3,
    "Generate Report": FileCheck2,
    "Continuous Improvement": TrendingUp,
};

export default function AssessmentProcess({ framework }) {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Assessment Workflow
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Compliance Assessment Process
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Follow a structured workflow to assess compliance, identify gaps and
                        generate actionable reports.
                    </p>

                </div>

                {/* Timeline */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

                    {framework.assessmentProcess.map((step, index) => {
                        const Icon = iconMap[step] || ClipboardCheck;

                        return (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                            >
                                {/* Number */}

                                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                    {index + 1}
                                </div>

                                {/* Icon */}

                                <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                    <Icon size={26} />
                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                                    {step}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                    Complete this stage to move forward in the compliance assessment lifecycle.
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}