"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { frameworks } from "@/data/frameworks";

export default function Frameworks({ module }) {
    // Current module-এর সব standards বের করা
    const moduleStandards = frameworks.flatMap((framework) =>
        framework.standards
            .filter((standard) =>
                standard.modules?.includes(module.slug)
            )
            .map((standard) => ({
                framework: framework.name,
                code: standard.code,
                title: standard.title,
                version: standard.version,
            }))
    );

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Compliance Standards
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Supported Standards & Frameworks
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        This assessment module is aligned with internationally
                        recognized standards and regulatory frameworks.
                    </p>
                </div>

                {/* Standards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {moduleStandards.map((standard, index) => (

                        <motion.div
                            key={standard.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                <ShieldCheck size={26} />
                            </div>

                            {/* Standard Code */}
                            <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                {standard.code}
                            </h3>

                            {/* Standard Title */}
                            <p className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                                {standard.title}
                            </p>

                            {/* Framework */}
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                                Framework:
                                <span className="ml-1 font-medium">
                                    {standard.framework}
                                </span>
                            </p>

                            {/* Version */}
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Version:
                                <span className="ml-1 font-medium">
                                    {standard.version}
                                </span>
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                                <CheckCircle2 size={18} />
                                Supported
                            </div>
                        </motion.div>

                    ))}

                </div>
            </div>
        </section>
    );
}