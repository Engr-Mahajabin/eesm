"use client";

import { motion } from "framer-motion";
import {
    Users,
    ShieldCheck,
    Clock3,
    Globe,
    CheckCircle2,
    Headset,
} from "lucide-react";

const reasons = [
    {
        icon: Users,
        title: "Expert Consultation",
        description:
            "Connect directly with experienced security and compliance professionals.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description:
            "Solutions aligned with globally recognized cybersecurity frameworks and standards.",
    },
    {
        icon: Clock3,
        title: "Fast Response",
        description:
            "Receive prompt assistance for product inquiries, implementation and support.",
    },
    {
        icon: Globe,
        title: "Global Compliance",
        description:
            "Support for organizations across multiple industries and regulatory environments.",
    },
    {
        icon: Headset,
        title: "Dedicated Support",
        description:
            "Our team helps you throughout implementation and continuous compliance improvement.",
    },
    {
        icon: CheckCircle2,
        title: "Tailored Solutions",
        description:
            "Every organization receives recommendations based on its unique security needs.",
    },
];

export default function WhyContactEESM() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Why Contact eESM
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        We're Ready to Help You Succeed
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Whether you're evaluating cybersecurity maturity, preparing for
                        compliance or planning an enterprise deployment, our specialists are
                        here to guide you.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {reasons.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {item.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}