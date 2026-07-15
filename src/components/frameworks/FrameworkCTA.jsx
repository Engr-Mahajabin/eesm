"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FrameworkCTA({ framework }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white shadow-2xl"
                >
                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                        {framework.name} Assessment Framework
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Ready to Assess Your Organization?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50">
                        Evaluate your organization's compliance, governance and security
                        posture using {framework.name} standards and best practices.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/request-demo"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
                        >
                            Request Demo
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}