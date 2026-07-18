"use client";

import { motion } from "framer-motion";
import {
    MonitorSmartphone,
    ShieldCheck,
    FileCheck2,
    Users,
    BarChart3,
    Clock3,
} from "lucide-react";

const benefits = [
    {
        icon: MonitorSmartphone,
        title: "Live Platform Demonstration",
        description:
            "Explore eESM through a real-time walkthrough covering dashboards, assessments, reporting and compliance workflows.",
    },
    {
        icon: ShieldCheck,
        title: "Framework Coverage",
        description:
            "See how eESM supports ISO, NIST, PCI DSS, GDPR, HIPAA, COBIT, OWASP and other leading frameworks.",
    },
    {
        icon: FileCheck2,
        title: "Assessment & Reporting",
        description:
            "Understand how assessments are performed and how executive reports are automatically generated.",
    },
    {
        icon: Users,
        title: "Personalized Consultation",
        description:
            "Our specialists tailor the demonstration to your organization's business and compliance requirements.",
    },
    {
        icon: BarChart3,
        title: "Risk & Compliance Insights",
        description:
            "Learn how eESM helps identify risks, improve governance and monitor compliance maturity.",
    },
    {
        icon: Clock3,
        title: "Quick & Free Session",
        description:
            "A focused 30–45 minute online session with no obligation or commitment required.",
    },
];

export default function WhyRequestDemo() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Why Request a Demo
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Discover How eESM Fits Your Organization
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Every demonstration is personalized to showcase the modules,
                        frameworks and compliance capabilities most relevant to your
                        organization.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {benefits.map((item, index) => {
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