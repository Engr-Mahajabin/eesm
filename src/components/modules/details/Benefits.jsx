"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2,
    TrendingUp,
    ShieldCheck,
    Award,
    Users,
} from "lucide-react";

const stats = [
    {
        icon: ShieldCheck,
        title: "Security Posture",
        value: "Improved",
    },
    {
        icon: TrendingUp,
        title: "Compliance Readiness",
        value: "Faster",
    },
    {
        icon: Award,
        title: "Audit Preparation",
        value: "Simplified",
    },
    {
        icon: Users,
        title: "Enterprise Ready",
        value: "Scalable",
    },
];

export default function Benefits({ module }) {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Business Benefits
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                            Why Choose This Module?
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Designed to strengthen governance, reduce compliance risks and
                            simplify enterprise cybersecurity assessments.
                        </p>

                        <div className="mt-10 space-y-5">

                            {module.benefits.map((benefit) => (

                                <div
                                    key={benefit}
                                    className="flex items-start gap-4"
                                >

                                    <CheckCircle2 className="mt-1 h-6 w-6 text-blue-600" />

                                    <p className="text-lg text-slate-700 dark:text-slate-300">
                                        {benefit}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-6 sm:grid-cols-2"
                    >

                        {stats.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

                                        <Icon size={28} />

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        {item.title}
                                    </p>

                                </div>

                            );

                        })}

                    </motion.div>

                </div>

            </div>

        </section>
    );
}