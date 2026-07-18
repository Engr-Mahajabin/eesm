"use client";

import { motion } from "framer-motion";
import {
    ClipboardCheck,
    CalendarDays,
    MonitorPlay,
    Rocket,
} from "lucide-react";

const steps = [
    {
        icon: ClipboardCheck,
        title: "Submit Request",
        description:
            "Complete the demo request form with your organization details and requirements.",
    },
    {
        icon: CalendarDays,
        title: "Schedule Meeting",
        description:
            "Our team will contact you to arrange a convenient date and time.",
    },
    {
        icon: MonitorPlay,
        title: "Live Demonstration",
        description:
            "Experience eESM through a personalized walkthrough tailored to your business.",
    },
    {
        icon: Rocket,
        title: "Next Steps",
        description:
            "Receive implementation guidance, pricing information and deployment recommendations.",
    },
];

export default function DemoProcess() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Demo Process
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        What Happens Next?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Booking a demo is simple. Our team will guide you through every
                        step from scheduling to implementation planning.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100 dark:text-slate-800">
                                    {index + 1}
                                </div>

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-8 text-xl font-semibold text-slate-900 dark:text-white">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {step.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}