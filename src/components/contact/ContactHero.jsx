"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronRight,
    Mail,
    Phone,
} from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Breadcrumb */}

                <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <ChevronRight size={16} />

                    <span>Contact</span>

                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Contact Us
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 dark:text-white lg:text-6xl">
                            Let's Talk About Your Security & Compliance Goals
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Whether you're exploring eESM, requesting a product
                            demonstration or looking for enterprise guidance, our team
                            is ready to help.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Request Demo

                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="#contact-form"
                                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 dark:border-slate-700"
                            >
                                Contact Sales
                            </Link>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >

                        <h3 className="text-2xl font-semibold">
                            Get in Touch
                        </h3>

                        <p className="mt-3 text-slate-600 dark:text-slate-400">
                            Reach out to our team for product information,
                            implementation guidance or partnership opportunities.
                        </p>

                        <div className="mt-10 space-y-6">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10">
                                    <Mail size={24} />
                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        Email
                                    </p>

                                    <h4 className="font-semibold">
                                        info@eesm.com
                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10">
                                    <Phone size={24} />
                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        Phone
                                    </p>

                                    <h4 className="font-semibold">
                                        +880 1XXX-XXXXXX
                                    </h4>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}