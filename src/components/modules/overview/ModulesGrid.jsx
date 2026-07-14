"use client";

import ModuleCard from "./ModuleCard";
import { modules } from "@/data/modules";

export default function ModulesGrid() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        Our Solutions
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Enterprise Assessment Modules
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Explore purpose-built assessment modules designed to evaluate AI,
                        cybersecurity, governance, enterprise architecture, digital
                        forensics and regulatory compliance.
                    </p>
                </div>

                {/* Module Cards */}
                <div className="space-y-14">
                    {modules.map((module, index) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}