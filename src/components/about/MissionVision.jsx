"use client";

import { motion } from "framer-motion";
import {
    Target,
    Telescope,
    CheckCircle2,
} from "lucide-react";

export default function MissionVision() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Our Purpose
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Mission & Vision
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Our mission and vision drive everything we build—helping
                        organizations strengthen cybersecurity, improve governance,
                        manage risks and achieve regulatory compliance.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Mission */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                            <Target size={30} />
                        </div>

                        <h3 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white">
                            Our Mission
                        </h3>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                            To empower organizations with a centralized platform that
                            simplifies cybersecurity assessments, governance, risk
                            management and regulatory compliance through internationally
                            recognized standards and best practices.
                        </p>

                        <div className="mt-8 space-y-4">

                            {[
                                "Strengthen cybersecurity posture",
                                "Simplify compliance management",
                                "Improve governance and risk visibility",
                                "Enable continuous improvement",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </motion.div>

                    {/* Vision */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white">
                            <Telescope size={30} />
                        </div>

                        <h3 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white">
                            Our Vision
                        </h3>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                            To become a trusted global platform for enterprise security,
                            governance, risk and compliance by helping organizations
                            confidently navigate evolving cyber threats and regulatory
                            requirements.
                        </p>

                        <div className="mt-8 space-y-4">

                            {[
                                "Global compliance leadership",
                                "Trusted enterprise platform",
                                "Scalable security management",
                                "Innovation through automation",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}