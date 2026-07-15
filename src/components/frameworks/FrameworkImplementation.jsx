"use client";

import { motion } from "framer-motion";
import {
    Gauge,
    Clock3,
    Award,
    CheckCircle2,
} from "lucide-react";

const difficultyColor = {
    Easy: "text-green-600 bg-green-100 dark:bg-green-500/10",
    Medium: "text-yellow-600 bg-yellow-100 dark:bg-yellow-500/10",
    Advanced: "text-red-600 bg-red-100 dark:bg-red-500/10",
};

export default function FrameworkImplementation({ framework }) {
    const implementation = framework.implementation;

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Implementation
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Implementation Overview
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Understand the implementation complexity, expected duration and
                        certification readiness before adopting this framework.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* Difficulty */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                            <Gauge size={26} />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold">
                            Difficulty
                        </h3>

                        <span
                            className={`mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${difficultyColor[implementation.difficulty]
                                }`}
                        >
                            {implementation.difficulty}
                        </span>

                        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            Estimated implementation complexity based on framework scope and
                            organizational requirements.
                        </p>
                    </motion.div>

                    {/* Duration */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                            <Clock3 size={26} />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold">
                            Duration
                        </h3>

                        <h4 className="mt-4 text-2xl font-bold">
                            {implementation.duration}
                        </h4>

                        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            Average implementation timeline for medium-sized organizations.
                        </p>
                    </motion.div>

                    {/* Certification */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                            <Award size={26} />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold">
                            Certification
                        </h3>

                        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                            <CheckCircle2 size={20} />
                            <span className="font-semibold">
                                {implementation.certification}
                            </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            Indicates whether organizations can pursue formal certification
                            for this framework.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}