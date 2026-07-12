"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    BarChart3,
    FileCheck,
    Settings2,
} from "lucide-react";

const icons = [
    ShieldCheck,
    BarChart3,
    FileCheck,
    Settings2,
];

export default function Features({ module }) {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Core Features
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Powerful Features Built for Enterprise Security
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Every assessment module includes essential capabilities to evaluate,
                        monitor and improve your organization's cybersecurity posture.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2">

                    {module.features.map((feature, index) => {

                        const Icon = icons[index % icons.length];

                        return (

                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

                                    <Icon size={26} />

                                </div>

                                <h3 className="mt-6 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                    {feature}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    Enhance your assessment workflow through secure, automated and
                                    standards-based evaluation designed for enterprise
                                    environments.
                                </p>

                            </motion.div>

                        );
                    })}

                </div>

            </div>

        </section>
    );
}