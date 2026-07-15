"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FrameworkFAQ({ framework }) {
    const [open, setOpen] = useState(0);

    if (!framework.faqs?.length) return null;

    return (
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-6">
                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Common Questions
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Learn more about {framework.name}, implementation,
                        certification and compliance.
                    </p>
                </div>

                {/* FAQ */}

                <div className="space-y-5">
                    {framework.faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            layout
                            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        >
                            <button
                                onClick={() => setOpen(open === index ? -1 : index)}
                                className="flex w-full items-center justify-between px-8 py-6 text-left"
                            >
                                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`transition-transform ${open === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {open === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="border-t border-slate-200 px-8 py-6 dark:border-slate-800">
                                            <p className="leading-8 text-slate-600 dark:text-slate-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}