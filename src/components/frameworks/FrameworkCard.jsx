"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    ArrowRight,
    Layers3,
    FileCheck2,
} from "lucide-react";

export default function FrameworkCard({ framework }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >
            {/* Icon */}

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <ShieldCheck size={30} />
            </div>

            {/* Category */}

            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {framework.category}
            </p>

            {/* Name */}

            <h2 className="mt-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                {framework.name}
            </h2>

            {/* Full Name */}

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {framework.fullName}
            </p>

            {/* Description */}

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                {framework.description}
            </p>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-950">

                    <Layers3 className="mb-2 text-blue-600" />

                    <p className="text-sm text-slate-500">
                        Modules
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                        {framework.modules.length}
                    </h3>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-950">

                    <FileCheck2 className="mb-2 text-blue-600" />

                    <p className="text-sm text-slate-500">
                        Standards
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                        {framework.standards.length}
                    </h3>

                </div>

            </div>

            {/* Standards Preview */}

            <div className="mt-8 flex flex-wrap gap-2">

                {framework.standards
                    .slice(0, 3)
                    .map((item) => (
                        <span
                            key={item.code}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        >
                            {item.code}
                        </span>
                    ))}

                {framework.standards.length > 3 && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                        +{framework.standards.length - 3} more
                    </span>
                )}

            </div>

            {/* Button */}

            <Link
                href={`/frameworks/${framework.slug}`}
                className="group/link mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
            >
                Explore Framework

                <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                />
            </Link>
        </motion.article>
    );
}