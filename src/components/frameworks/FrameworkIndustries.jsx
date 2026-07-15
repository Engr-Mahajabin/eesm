"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Landmark,
    HeartPulse,
    Factory,
    Cpu,
    Briefcase,
    CheckCircle2,
    Users,
} from "lucide-react";

const industryIcons = {
    Banking: Landmark,
    Healthcare: HeartPulse,
    Telecommunications: Cpu,
    Manufacturing: Factory,
    Technology: Cpu,
    Government: Building2,
    Education: Users,
    Retail: Briefcase,
};

export default function FrameworkIndustries({ framework }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Industry Focus
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Best Fit for Your Organization
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        This framework is widely adopted across multiple industries and is
                        suitable for organizations seeking stronger governance, security and
                        compliance.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Industries */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <h3 className="mb-8 text-2xl font-semibold text-slate-900 dark:text-white">
                            Industries
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {framework.industries.map((industry) => {
                                const Icon = industryIcons[industry] || Building2;

                                return (
                                    <div
                                        key={industry}
                                        className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-500 dark:border-slate-800"
                                    >
                                        <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                            <Icon size={22} />
                                        </div>

                                        <span className="font-medium text-slate-700 dark:text-slate-300">
                                            {industry}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Best For */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <h3 className="mb-8 text-2xl font-semibold text-slate-900 dark:text-white">
                            Best For
                        </h3>

                        <div className="space-y-4">
                            {framework.bestFor.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}