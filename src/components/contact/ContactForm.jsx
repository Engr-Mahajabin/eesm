"use client";

import { motion } from "framer-motion";
import {
    User,
    Building2,
    Mail,
    Phone,
    Globe,
    MessageSquare,
} from "lucide-react";

export default function ContactForm() {
    return (
        <section
            id="contact-form"
            className="py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            Contact Form
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                            Tell Us About Your Requirements
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Complete the form and our specialists will contact you
                            to discuss your security, compliance and assessment
                            requirements.
                        </p>

                        <div className="mt-10 space-y-6">

                            {[
                                "Response within 24 business hours",
                                "Free consultation with our experts",
                                "Enterprise deployment guidance",
                                "No obligation or commitment",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                                    <span className="text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >

                        <div className="grid gap-6 sm:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-slate-300 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Company
                                </label>

                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full rounded-xl border border-slate-300 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Business Email
                                </label>

                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full rounded-xl border border-slate-300 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Phone
                                </label>

                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                                    <input
                                        type="text"
                                        placeholder="+880..."
                                        className="w-full rounded-xl border border-slate-300 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="mt-6">
                            <label className="mb-2 block text-sm font-medium">
                                Country
                            </label>

                            <div className="relative">
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="w-full rounded-xl border border-slate-300 bg-transparent py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="mb-2 block text-sm font-medium">
                                Message
                            </label>

                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-5 text-slate-400" size={18} />

                                <textarea
                                    rows={6}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-xl border border-slate-300 bg-transparent py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Send Message
                        </button>

                    </motion.form>

                </div>

            </div>
        </section>
    );
}