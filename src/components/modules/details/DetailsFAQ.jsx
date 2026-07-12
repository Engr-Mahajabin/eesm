"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function DetailsFAQ({ module }) {
    const [active, setActive] = useState(0);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">

            <div className="mx-auto max-w-4xl px-6">

                {/* Heading */}

                <div className="mb-16 text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Have Questions?
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
                        Find answers to the most common questions about this assessment
                        module.
                    </p>

                </div>

                {/* Accordion */}

                <div className="space-y-5">

                    {module.faqs.map((faq, index) => {

                        const isOpen = active === index;

                        return (

                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                            >

                                <button
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between px-7 py-6 text-left"
                                >

                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {faq.question}
                                    </h3>

                                    {isOpen ? (
                                        <Minus className="text-blue-600" />
                                    ) : (
                                        <Plus className="text-blue-600" />
                                    )}

                                </button>

                                <AnimatePresence>

                                    {isOpen && (

                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                        >

                                            <div className="border-t border-slate-200 px-7 py-6 text-slate-600 dark:border-slate-800 dark:text-slate-400">

                                                {faq.answer}

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}