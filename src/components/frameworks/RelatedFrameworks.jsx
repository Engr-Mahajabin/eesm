"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

import { frameworks } from "@/data/frameworks";

export default function RelatedFrameworks({ framework }) {
    const related = frameworks.filter((item) =>
        framework.relatedFrameworks.includes(item.slug)
    );

    if (!related.length) return null;

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Explore More
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Related Frameworks
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Compare similar cybersecurity, governance and compliance frameworks
                        to determine the best fit for your organization.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {related.map((item, index) => (
                        <motion.div
                            key={item.slug}
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

                            <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                {item.name}
                            </h3>

                            <p className="mt-3 text-sm text-slate-500">
                                {item.category}
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                {item.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium dark:bg-slate-800">
                                    {item.standards.length} Standards
                                </span>

                                <Link
                                    href={`/frameworks/${item.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
                                >
                                    View Details

                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}