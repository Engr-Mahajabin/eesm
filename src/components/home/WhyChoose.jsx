"use client";

import { motion } from "framer-motion";
import {
    Brain,
    ShieldCheck,
    Globe,
    BarChart3,
    LayoutDashboard,
    FileCheck2,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI-Powered Assessment",
        desc: "Automate security assessments with intelligent recommendations.",
    },
    {
        icon: Globe,
        title: "Global Frameworks",
        desc: "Supports ISO, NIST, PCI DSS, GDPR, COBIT and more.",
    },
    {
        icon: BarChart3,
        title: "Risk Analytics",
        desc: "Visualize risks with real-time dashboards and scoring.",
    },
    {
        icon: LayoutDashboard,
        title: "Executive Dashboard",
        desc: "Centralized monitoring for all assessments and compliance.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "Built for enterprises with scalable security architecture.",
    },
    {
        icon: FileCheck2,
        title: "Audit Ready Reports",
        desc: "Generate compliance reports in just a few clicks.",
    },
];

export default function WhyChoose() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        Why eESM
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
                        Everything You Need to Manage Cybersecurity Compliance
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
                        Designed to simplify governance, automate assessments and
                        strengthen your organization's security posture.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .08,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-slate-800">
                                    <Icon className="h-7 w-7 text-blue-600" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {item.desc}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}