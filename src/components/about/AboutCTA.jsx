"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarCheck,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl lg:p-16"
                >
                    {/* Background Blur */}

                    <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

                    <div className="relative grid items-center gap-12 lg:grid-cols-2">

                        {/* Left */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                                <ShieldCheck size={16} />

                                Enterprise Security Platform
                            </span>

                            <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-5xl">
                                Ready to Strengthen Your Security & Compliance?
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                                Discover how eESM helps organizations simplify governance,
                                reduce cybersecurity risks and achieve compliance with
                                internationally recognized standards.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/request-demo"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
                                >
                                    <CalendarCheck size={20} />

                                    Request Demo
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Contact Sales

                                    <ArrowRight size={18} />
                                </Link>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">

                            <h3 className="text-2xl font-semibold">
                                Why Organizations Trust eESM
                            </h3>

                            <div className="mt-8 space-y-5">

                                {[
                                    "International standards & frameworks",
                                    "Enterprise-grade security assessments",
                                    "Automated reporting & gap analysis",
                                    "Continuous compliance monitoring",
                                    "Scalable architecture for growing organizations",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            className="mt-1 shrink-0 text-green-300"
                                            size={20}
                                        />

                                        <span className="leading-7 text-blue-50">
                                            {item}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}