"use client";

import { motion } from "framer-motion";
import {
    Landmark,
    Building2,
    Hospital,
    Pill,
    Factory,
    GraduationCap,
    Cloud,
    TowerControl,
} from "lucide-react";

const industries = [
    {
        icon: Landmark,
        title: "Banking & Finance",
        desc: "Meet regulatory requirements and strengthen financial cybersecurity.",
    },
    {
        icon: Building2,
        title: "Government",
        desc: "Improve governance and protect national digital infrastructure.",
    },
    {
        icon: Hospital,
        title: "Healthcare",
        desc: "Secure sensitive healthcare systems and patient information.",
    },
    {
        icon: Pill,
        title: "Pharmaceutical",
        desc: "Support FDA compliance and secure research environments.",
    },
    {
        icon: Factory,
        title: "Manufacturing",
        desc: "Protect industrial systems and operational technology.",
    },
    {
        icon: GraduationCap,
        title: "Education",
        desc: "Safeguard academic networks and institutional data.",
    },
    {
        icon: Cloud,
        title: "Cloud Providers",
        desc: "Continuously assess cloud security posture and compliance.",
    },
    {
        icon: TowerControl,
        title: "Telecommunications",
        desc: "Manage cyber risks across telecom infrastructure.",
    },
];

export default function Industries() {
    return (
        <section className="py-24 bg-transparent">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        Industries
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
                        Built for Every Critical Industry
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        eESM enables organizations across multiple sectors to assess,
                        monitor and improve cybersecurity compliance.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {industries.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.07,
                                    duration: 0.4
                                }}
                                whileHover={{
                                    y: -8,
                                    borderColor: "#2563eb",
                                }}
                                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
                                    <Icon className="h-8 w-8 text-blue-500" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
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