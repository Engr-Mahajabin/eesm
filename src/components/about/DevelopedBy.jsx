"use client";

import { motion } from "framer-motion";
import {
    Building2,
    ShieldCheck,
    Globe,
    Headphones,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

import Link from "next/link";

const services = [
    "Enterprise Security Solutions",
    "Cybersecurity Consulting",
    "Governance, Risk & Compliance",
    "Digital Transformation",
];

export default function DevelopedBy() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Developed By
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Built by Security & Technology Professionals
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        eESM is developed by a team focused on enterprise security,
                        governance, risk management and compliance solutions to help
                        organizations confidently navigate today's evolving cyber landscape.
                    </p>

                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                    >

                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                            <Building2 size={40} />
                        </div>

                        <h3 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white">
                            A&A Consulting Technology
                        </h3>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                            Delivering enterprise-grade security, compliance and digital
                            transformation solutions through modern technologies and globally
                            recognized standards.
                        </p>

                        <div className="mt-8 space-y-4">

                            {services.map((service) => (
                                <div
                                    key={service}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {service}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="grid gap-6">

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                                <ShieldCheck className="mb-4 text-blue-600" size={30} />

                                <h4 className="text-xl font-semibold">
                                    Enterprise Expertise
                                </h4>

                                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                    Built with deep expertise in cybersecurity, governance,
                                    compliance and risk management.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                                <Globe className="mb-4 text-blue-600" size={30} />

                                <h4 className="text-xl font-semibold">
                                    Global Standards
                                </h4>

                                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                    Solutions aligned with internationally recognized security
                                    frameworks and regulatory requirements.
                                </p>

                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                                <Headphones className="mb-4 text-blue-600" size={30} />

                                <h4 className="text-xl font-semibold">
                                    Long-Term Partnership
                                </h4>

                                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                    Supporting organizations with continuous improvement,
                                    implementation guidance and compliance readiness.
                                </p>

                            </div>

                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:gap-3 transition-all"
                        >
                            Contact Our Team

                            <ArrowRight size={18} />

                        </Link>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}