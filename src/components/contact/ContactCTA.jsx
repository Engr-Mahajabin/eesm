"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarCheck,
    PhoneCall,
    ShieldCheck,
} from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl lg:p-16"
                >

                    {/* Background */}

                    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

                    <div className="relative grid items-center gap-12 lg:grid-cols-2">

                        {/* Left */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                                <ShieldCheck size={16} />

                                Enterprise Cybersecurity Platform
                            </span>

                            <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-5xl">
                                Ready to Modernize Your Security & Compliance?
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                                Schedule a personalized demonstration or speak with our
                                specialists to discover how eESM can simplify governance,
                                risk management and compliance across your organization.
                            </p>

                        </div>

                        {/* Right */}

                        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">

                            <h3 className="text-2xl font-semibold">
                                Get Started Today
                            </h3>

                            <p className="mt-4 leading-7 text-blue-100">
                                Our experts are available to discuss your business
                                requirements and recommend the right assessment modules
                                for your organization.
                            </p>

                            <div className="mt-8 flex flex-col gap-4">

                                <Link
                                    href="/request-demo"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
                                >
                                    <CalendarCheck size={20} />

                                    Request a Demo
                                </Link>

                                <Link
                                    href="tel:+8801XXXXXXXXX"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-semibold transition hover:bg-white/10"
                                >
                                    <PhoneCall size={20} />

                                    Talk to Our Team
                                </Link>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}