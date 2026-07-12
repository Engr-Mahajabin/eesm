"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function DetailsCTA({ module }) {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-white lg:p-16"
                >

                    <div className="mx-auto max-w-3xl text-center">

                        <h2 className="text-4xl font-bold">
                            {module.cta?.title ??
                                `Ready to Explore ${module.title}?`}
                        </h2>

                        <p className="mt-6 text-lg text-blue-100">
                            {module.cta?.description ??
                                "Schedule a personalized demo and discover how eESM can help your organization strengthen security, governance and compliance."}
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">

                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
                            >
                                <Calendar size={18} />
                                Request Demo
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                <MessageSquare size={18} />
                                Contact Sales
                            </Link>

                        </div>

                        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-blue-100">

                            <div>✓ Enterprise Ready</div>

                            <div>✓ Secure by Design</div>

                            <div>✓ Global Framework Support</div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}