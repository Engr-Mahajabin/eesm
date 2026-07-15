"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    CheckCircle2,
    FolderTree,
    Lock,
    Shield,
    AlertTriangle,
    Database,
    Server,
} from "lucide-react";

const iconMap = {
    Governance: FolderTree,
    "Risk Management": AlertTriangle,
    "Asset Management": Database,
    "Access Control": Lock,
    "Incident Response": Shield,
    "Business Continuity": Server,
};

export default function FrameworkCoverage({ framework }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Framework Coverage
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Security Domains Covered
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        This framework provides guidance across multiple security,
                        governance and compliance domains to strengthen your organization's
                        cybersecurity posture.
                    </p>
                </div>

                {/* Cards */}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {framework.coverage.map((item, index) => {
                        const Icon = iconMap[item] || ShieldCheck;

                        return (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                    <Icon size={26} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                    {item}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                    Assessment controls help evaluate maturity, identify security
                                    gaps and improve compliance within this domain.
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                                    <CheckCircle2 size={18} />
                                    Covered
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}