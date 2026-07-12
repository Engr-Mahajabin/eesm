"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Landmark,
    CreditCard,
    Database,
    Scale,
    Lock,
    Globe,
    FileCheck,
} from "lucide-react";

const frameworks = [
    {
        title: "ISO 27001",
        icon: ShieldCheck,
        color: "text-blue-600",
    },
    {
        title: "NIST",
        icon: Landmark,
        color: "text-indigo-600",
    },
    {
        title: "PCI DSS",
        icon: CreditCard,
        color: "text-cyan-600",
    },
    {
        title: "OWASP",
        icon: Lock,
        color: "text-emerald-600",
    },
    {
        title: "COBIT",
        icon: Database,
        color: "text-violet-600",
    },
    {
        title: "GDPR",
        icon: Scale,
        color: "text-amber-600",
    },
    {
        title: "HIPAA",
        icon: FileCheck,
        color: "text-rose-600",
    },
    {
        title: "CSA CCM",
        icon: Globe,
        color: "text-sky-600",
    },
];

export default function TrustedFrameworks() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Supported Standards
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                        Built Around Global Compliance Frameworks
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-slate-600 dark:text-slate-400">
                        Assess your organization's cybersecurity posture against
                        internationally recognized governance, risk, and compliance
                        frameworks.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {frameworks.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .4,
                                    delay: index * .05,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                                    <Icon className={`h-6 w-6 ${item.color}`} />
                                </div>

                                <h3 className="font-semibold text-slate-900 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                    Compliance assessment and security control mapping.
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}