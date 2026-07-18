"use client";

import { motion } from "framer-motion";
import {
    User,
    Mail,
    Building2,
    Briefcase,
    Phone,
    Globe,
    Users,
    CalendarDays,
    Clock3,
    MessageSquare,
} from "lucide-react";

// 1. Structured Form Configurations to eliminate duplicate code
const INPUT_FIELDS = [
    { id: "name", icon: User, label: "Full Name", placeholder: "John Doe" },
    { id: "email", icon: Mail, label: "Business Email", placeholder: "john@company.com", type: "email" },
    { id: "company", icon: Building2, label: "Company Name", placeholder: "ABC Corporation" },
    { id: "jobTitle", icon: Briefcase, label: "Job Title", placeholder: "Chief Information Officer" },
    { id: "phone", icon: Phone, label: "Phone Number", placeholder: "+880..." },
    { id: "country", icon: Globe, label: "Country", placeholder: "Bangladesh" },
];

const SELECT_FIELDS = [
    { id: "size", icon: Users, label: "Company Size", options: ["1-50 Employees", "51-250 Employees", "251-1000 Employees", "1000+ Employees"] },
    { id: "industry", icon: Building2, label: "Industry", options: ["Banking", "Healthcare", "Government", "Manufacturing", "Telecommunications", "Education", "Technology", "Other"] },
    { id: "module", icon: Building2, label: "Interested Module", options: ["AI Management", "Governance Risk & Compliance", "Enterprise Architecture", "Digital Forensics", "Pharmaceutical Compliance"] },
    { id: "framework", icon: Building2, label: "Framework", options: ["ISO", "NIST", "PCI DSS", "GDPR", "HIPAA", "COBIT", "OWASP", "TOGAF"] },
];

const DATE_TIME_FIELDS = [
    { id: "date", icon: CalendarDays, label: "Preferred Date", type: "date" },
    { id: "time", icon: Clock3, label: "Preferred Time", type: "time" },
];

const VALUE_PROPS = [
    "Personalized platform walkthrough",
    "Framework & compliance mapping",
    "Enterprise use-case discussion",
    "Implementation recommendations",
    "30–45 minute online session",
];

export default function DemoForm() {
    return (
        <section id="demo-form" className="py-24 text-slate-900 dark:text-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2">

                    {/* Left Column: Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Schedule Your Demo
                        </span>
                        <h2 className="mt-6 text-4xl font-bold">
                            Book a Personalized Demonstration
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Complete the form and our specialists will arrange a live
                            demonstration based on your organization's security,
                            governance and compliance requirements.
                        </p>

                        <div className="mt-10 space-y-5">
                            {VALUE_PROPS.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                                    <span className="text-slate-700 dark:text-slate-400">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Form Layout */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        // CHANGED: Fixed light-mode background to bg-white for professional contrast
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >
                        {/* Text Inputs Grid */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {INPUT_FIELDS.map((field) => (
                                <FormInput key={field.id} {...field} />
                            ))}
                        </div>

                        {/* Dropdowns & Date Pickers Grid */}
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {SELECT_FIELDS.map((field) => (
                                <FormSelect key={field.id} {...field} />
                            ))}
                            {DATE_TIME_FIELDS.map((field) => (
                                <FormInput key={field.id} {...field} />
                            ))}
                        </div>

                        {/* Textarea Requirements */}
                        <div className="mt-6">
                            <label className="mb-2 block text-sm font-medium">
                                Additional Requirements
                            </label>
                            <div className="relative">
                                <MessageSquare size={18} className="absolute left-4 top-5 text-slate-400" />
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your organization's goals..."
                                    className="w-full rounded-xl border border-slate-300 bg-transparent py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                        >
                            Request Demo
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}

/* ---------- Reusable Sub-Components ---------- */

function FormInput({ icon: Icon, label, placeholder, type = "text" }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium">{label}</label>
            <div className="relative">
                <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:text-white"
                />
            </div>
        </div>
    );
}

function FormSelect({ icon: Icon, label, options }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium">{label}</label>
            <div className="relative">
                <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:text-white cursor-pointer">
                    {/* FIXED: Applied specific drop-down styling to option tags for visibility */}
                    <option value="" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
                        Select...
                    </option>
                    {options.map((item) => (
                        <option
                            key={item}
                            value={item}
                            className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white"
                        >
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}