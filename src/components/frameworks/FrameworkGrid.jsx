"use client";

import FrameworkCard from "./FrameworkCard";
import { frameworks } from "@/data/frameworks";

export default function FrameworkGrid() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Security Frameworks
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Industry Standards & Frameworks
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                        Explore internationally recognized cybersecurity,
                        governance, privacy and regulatory frameworks supported
                        by the eESM assessment platform.
                    </p>

                </div>

                {/* Grid */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {frameworks.map((framework) => (
                        <FrameworkCard
                            key={framework.id}
                            framework={framework}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}