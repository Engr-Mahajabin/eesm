"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarCheck2,
    ShieldCheck,
} from "lucide-react";

export default function DemoCTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-white shadow-2xl lg:p-16"
                >

                    <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

                    <div className="relative mx-auto max-w-4xl text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                            <ShieldCheck size={16} />
                            Enterprise Security Management
                        </span>

                        <h2 className="mt-8 text-4xl font-bold lg:text-5xl">
                            Ready to See eESM in Action?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                            Discover how eESM can streamline governance, cybersecurity,
                            compliance and enterprise risk management for your organization.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">

                            <Link
                                href="#demo-form"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
                            >
                                <CalendarCheck2 size={20} />

                                Schedule Demo
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold transition hover:bg-white/10"
                            >
                                Contact Sales

                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}