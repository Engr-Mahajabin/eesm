"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Calendar,
    FileCheck,
} from "lucide-react";

export default function FrameworkStandards({ framework }) {
    return (
        <section
            id="standards"
            className="py-24 bg-slate-50 dark:bg-slate-950/40"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Framework Standards
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Supported Standards
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        This framework includes internationally recognized standards,
                        guidelines and best practices used for enterprise security,
                        governance and compliance assessments.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {framework.standards.map((standard, index) => (
                        <motion.div
                            key={standard.code}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            whileHover={{ y: -6 }}
                            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                        >
                            {/* Icon */}
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                <ShieldCheck size={26} />
                            </div>

                            {/* Code */}
                            <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                {standard.code}
                            </h3>

                            {/* Title */}
                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                {standard.title}
                            </p>

                            {/* Footer */}
                            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Calendar size={16} />

                                    Version {standard.version}
                                </div>

                                <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                                    <FileCheck size={16} />

                                    Supported
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}