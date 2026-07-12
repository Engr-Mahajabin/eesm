"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-16 text-center shadow-2xl"
                >
                    {/* Background Glow */}

                    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

                    <div className="relative z-10">

                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white">
                            Ready to Get Started?
                        </span>

                        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-white md:text-5xl">
                            Strengthen Your Cybersecurity Compliance with eESM
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                            Discover security gaps, assess compliance, and generate
                            enterprise-grade reports using internationally recognized
                            cybersecurity frameworks.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">

                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:scale-105"
                            >
                                Request Demo
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                <CalendarDays className="h-4 w-4" />
                                Contact Sales
                            </Link>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}