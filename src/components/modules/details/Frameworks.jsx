"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const formatFrameworkName = (slug) => {
    const customNames = {
        "iso-iec-42001": "ISO/IEC 42001",
        "iso-iec-27001": "ISO/IEC 27001",
        "iso-iec-27002": "ISO/IEC 27002",
        "iso-iec-27005": "ISO/IEC 27005",
        "iso-iec-27037": "ISO/IEC 27037",
        "iso-iec-27041": "ISO/IEC 27041",
        "iso-iec-27042": "ISO/IEC 27042",
        "iso-iec-27043": "ISO/IEC 27043",

        "nist-sp-800-53": "NIST SP 800-53",
        "nist-sp-800-171": "NIST SP 800-171",
        "nist-sp-800-61-rev-3": "NIST SP 800-61 Rev.3",
        "nist-cybersecurity-framework": "NIST Cybersecurity Framework",

        "pci-dss-3-2-1": "PCI DSS 3.2.1",
        "pci-dss-4-0": "PCI DSS 4.0",

        "cmmc-level-2-0": "CMMC Level 2.0",

        "cis-controls": "CIS Controls",

        "csa-v4-0-3": "CSA v4.0.3",
        "ccm-v4-0-12": "CCM v4.0.12",

        "bangladesh-bank-cyber-security-framework":
            "Bangladesh Bank Cyber Security Framework",

        "bangladesh-bank-ict-guidelines-4-0":
            "Bangladesh Bank ICT Guidelines 4.0",

        "australia-privacy-act-2014":
            "Australia Privacy Act 2014",

        cobit: "COBIT",
        togaf: "TOGAF",
        owasp: "OWASP",
        gdpr: "GDPR",
        hipaa: "HIPAA",
        fda: "FDA",
    };

    return (
        customNames[slug] ||
        slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    );
};

export default function Frameworks({ module }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Compliance Standards
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Supported Standards & Frameworks
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        This assessment module is mapped against internationally recognized
                        standards, frameworks and regulatory requirements.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {module.frameworks.map((framework, index) => (
                        <motion.div
                            key={framework}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                <ShieldCheck size={26} />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                {formatFrameworkName(framework)}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                This assessment includes controls aligned with{" "}
                                <strong>{formatFrameworkName(framework)}</strong> to identify
                                security gaps and measure compliance maturity.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                                <CheckCircle2 size={18} />
                                Supported
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}