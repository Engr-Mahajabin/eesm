"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ChevronRight,
    ShieldCheck,
    FileCheck,
    Layers3,
    ArrowRight,
} from "lucide-react";

export default function FrameworkHero({ framework }) {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    {/* Breadcrumb */}
                    <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>

                        <ChevronRight size={16} />

                        <Link href="/frameworks" className="hover:text-blue-600">
                            Frameworks
                        </Link>

                        <ChevronRight size={16} />

                        <span>{framework.name}</span>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        <ShieldCheck size={16} />
                        {framework.category}
                    </div>

                    {/* Title */}
                    <h1 className="mt-8 text-5xl font-bold text-slate-900 dark:text-white lg:text-6xl">
                        {framework.name}
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-slate-600 dark:text-slate-300">
                        {framework.fullName}
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        {framework.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#standards"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            View Standards
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#modules"
                            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 dark:border-slate-700"
                        >
                            Related Modules
                        </a>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        {/* Logo */}
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                                <Image
                                    src={framework.logo}
                                    alt={framework.name}
                                    width={70}
                                    height={70}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                            <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-950">
                                <FileCheck className="mx-auto mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Standards
                                </p>

                                <h4 className="mt-2 text-3xl font-bold">
                                    {framework.standards.length}
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-950">
                                <Layers3 className="mx-auto mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Modules
                                </p>

                                <h4 className="mt-2 text-3xl font-bold">
                                    {framework.modules.length}
                                </h4>
                            </div>

                            <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-950">
                                <ShieldCheck className="mx-auto mb-3 text-blue-600" />

                                <p className="text-sm text-slate-500">
                                    Category
                                </p>

                                <h4 className="mt-2 text-lg font-bold">
                                    {framework.category}
                                </h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}