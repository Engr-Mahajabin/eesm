"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is eESM?",
        answer:
            "eGovernance Enterprise Security Manager (eESM) is an enterprise cybersecurity pre-assessment and Governance, Risk & Compliance (GRC) platform that helps organizations evaluate their security posture against international standards.",
    },
    {
        question: "Which compliance frameworks are supported?",
        answer:
            "eESM supports ISO 27001, ISO 27002, ISO 27005, ISO/IEC 42001, NIST, PCI DSS, GDPR, COBIT, TOGAF, OWASP, HIPAA, CSA CCM, CMMC, Bangladesh Bank Guidelines, FDA and many more.",
    },
    {
        question: "Who should use eESM?",
        answer:
            "Banks, Government Organizations, Healthcare, Pharmaceutical Companies, Enterprises, SMEs and any organization that needs cybersecurity governance and compliance management.",
    },
    {
        question: "Does eESM generate compliance reports?",
        answer:
            "Yes. After completing an assessment, eESM automatically generates detailed compliance reports, gap analysis and risk assessment reports.",
    },
    {
        question: "Can I request a product demonstration?",
        answer:
            "Yes. You can request a personalized demo through our Request Demo page and our team will contact you.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="relative py-24 transition-colors duration-300">

            <div className="relative z-10 mx-auto max-w-4xl px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm">
                        <HelpCircle className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
                        FAQ
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 dark:text-white">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-[#bae6fd]/80 font-normal">
                        Find answers to common questions about the eESM platform.
                    </p>
                </motion.div>

                {/* FAQ Accordion List */}
                <div className="mt-14 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`group overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-md ${isOpen
                                        ? "border-sky-500 bg-white/90 shadow-lg dark:border-[#38bdf8] dark:bg-[#0284c7]/25 dark:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]"
                                        : "border-slate-200/80 bg-white/60 hover:border-sky-300 hover:bg-white/80 dark:border-[#38bdf8]/30 dark:bg-[#0369a1]/10 dark:hover:border-[#38bdf8]/70 dark:hover:bg-[#0369a1]/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                                >
                                    <span
                                        className={`font-semibold text-base md:text-lg transition-colors ${isOpen
                                                ? "text-sky-600 dark:text-[#38bdf8]"
                                                : "text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-[#7dd3fc]"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    {/* Icon Indicator */}
                                    <div
                                        className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isOpen
                                                ? "border-sky-500 bg-sky-50 text-sky-600 dark:border-[#38bdf8] dark:bg-[#0284c7]/50 dark:text-[#38bdf8]"
                                                : "border-slate-200 bg-slate-50 text-slate-500 dark:border-[#38bdf8]/30 dark:bg-[#0284c7]/20 dark:text-[#7dd3fc]"
                                            }`}
                                    >
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="border-t border-slate-100 dark:border-[#38bdf8]/20 px-6 pb-6 pt-4">
                                                <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-[#e0f2fe]/90 font-normal">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}