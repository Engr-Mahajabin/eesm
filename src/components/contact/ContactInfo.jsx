"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock3,
} from "lucide-react";

const contactInfo = [
    {
        title: "Email",
        value: "info@eesm.com",
        description: "Send us your inquiries anytime.",
        icon: Mail,
    },
    {
        title: "Phone",
        value: "+880 1XXX-XXXXXX",
        description: "Monday – Friday, 9:00 AM – 6:00 PM",
        icon: Phone,
    },
    {
        title: "Office",
        value: "Dhaka, Bangladesh",
        description: "Corporate Headquarters",
        icon: MapPin,
    },
    {
        title: "Business Hours",
        value: "Sat – Thu",
        description: "09:00 AM – 06:00 PM",
        icon: Clock3,
    },
];

export default function ContactInfo() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Contact Information
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Multiple Ways to Reach Our Team
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Whether you need product information, technical guidance or
                        partnership support, we're here to help.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

                    {contactInfo.map((item, index) => {
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

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 font-medium text-slate-800 dark:text-slate-200">
                                    {item.value}
                                </p>

                                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
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