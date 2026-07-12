"use client";

import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaLinkedinIn, FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo & Description */}
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/logo.svg"
                                alt="eESM"
                                width={42}
                                height={42}
                            />
                            <span className="text-xl font-bold text-slate-900 dark:text-white">
                                eESM
                            </span>
                        </Link>
                        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            eGovernance Enterprise Security Manager (eESM) is a premium GRC platform
                            developed by <span className="font-semibold text-slate-900 dark:text-white">A&A Consulting</span>,
                            helping organizations strengthen security posture and compliance.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">
                            Product
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {["Modules", "Frameworks", "Request Demo", "Login"].map((item) => {
                                const href = `/${item.toLowerCase().replace(" ", "-")}`;
                                return (
                                    <li key={item}>
                                        <Link href={href} className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { title: "About", href: "/about" },
                                { title: "Contact", href: "/contact" },
                                { title: "Privacy Policy", href: "/privacy-policy" },
                                { title: "Terms & Conditions", href: "/terms" }
                            ].map((item) => (
                                <li key={item.title}>
                                    <Link href={item.href} className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-3">
                                <FaLocationDot className="mt-1 text-blue-600 dark:text-blue-400 shrink-0" size={16} />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MdEmail className="text-blue-600 dark:text-blue-400 shrink-0" size={16} />
                                <span>info@eesm.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-600 dark:text-blue-400 shrink-0" size={15} />
                                <span>+880 1XXX-XXXXXX</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar with A&A Consulting Acknowledgement */}
                <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-sm dark:border-slate-800 md:flex-row">
                    <p className="text-slate-500 dark:text-slate-400 text-center md:text-left">
                        © {new Date().getFullYear()} eESM. All rights reserved. <br className="md:hidden" />
                        <span className="md:ml-2 text-xs text-slate-400">
                            Proudly developed and maintained by{" "}
                            <a
                                href="https://aaconsulting.com" // প্রয়োজন অনুযায়ী লিংক চেঞ্জ করে নিতে পারেন
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 underline decoration-dotted"
                            >
                                A&A Consulting
                            </a>.
                        </span>
                    </p>

                    <div className="flex items-center gap-2">
                        {[
                            { icon: <FaLinkedinIn size={18} />, href: "#" },
                            { icon: <FaFacebookF size={16} />, href: "#" },
                            { icon: <FaGithub size={18} />, href: "#" },
                            { icon: <FaYoutube size={18} />, href: "#" }
                        ].map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                className="rounded-lg p-2 text-slate-600 dark:text-slate-400 transition-all hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}