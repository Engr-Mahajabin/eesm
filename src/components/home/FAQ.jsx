"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
        <section className="py-24">
            <div className="mx-auto max-w-4xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-400">
                        FAQ
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
                        Find answers to common questions about the eESM platform.
                    </p>
                </motion.div>

                <div className="mt-14 space-y-4">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === index ? -1 : index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-slate-900 dark:text-white">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`transition duration-300 ${open === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>

                                {open === index && (

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: .25 }}
                                    >
                                        <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-7">
                                            {faq.answer}
                                        </p>
                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}