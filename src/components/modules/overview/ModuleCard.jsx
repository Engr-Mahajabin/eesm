// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle2 } from "lucide-react";

// export default function ModuleCard({ module, reverse = false }) {
//     const Icon = module.icon;

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className={`grid items-center gap-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-12 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,.08)] lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//         >
//             {/* Left Content */}
//             <div>
//                 <div
//                     className={`inline-flex rounded-2xl bg-gradient-to-r ${module.color} p-4`}
//                 >
//                     <Icon className="h-8 w-8 text-white" />
//                 </div>

//                 <h2 className="mt-6 text-3xl font-bold text-white">
//                     {module.title}
//                 </h2>

//                 <p className="mt-5 leading-8 text-slate-400">
//                     {module.description}
//                 </p>

//                 {/* Frameworks */}
//                 <div className="mt-6 flex flex-wrap gap-2">
//                     {module.frameworks.map((framework) => (
//                         <span
//                             key={framework}
//                             className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-400"
//                         >
//                             {framework}
//                         </span>
//                     ))}
//                 </div>

//                 {/* Features */}
//                 <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                     {module.features.map((feature) => (
//                         <div
//                             key={feature}
//                             className="flex items-center gap-2 text-sm text-slate-300"
//                         >
//                             <CheckCircle2 className="h-4 w-4 text-blue-500" />
//                             {feature}
//                         </div>
//                     ))}
//                 </div>

//                 <Link
//                     href={`/modules/${module.slug}`}
//                     className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
//                 >
//                     Learn More
//                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Link>
//             </div>

//             {/* Right Preview */}
//             <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
//                 <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

//                     <div className="flex items-center justify-between">
//                         <h3 className="font-semibold text-white">
//                             Assessment Preview
//                         </h3>

//                         <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
//                             Ready
//                         </span>
//                     </div>

//                     {/* Progress */}
//                     <div className="mt-8">
//                         <div className="mb-2 flex justify-between text-sm text-slate-400">
//                             <span>Assessment Progress</span>
//                             <span>78%</span>
//                         </div>

//                         <div className="h-2 rounded-full bg-slate-800">
//                             <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
//                         </div>
//                     </div>

//                     {/* Framework List */}
//                     <div className="mt-8 space-y-3">
//                         {module.frameworks.slice(0, 4).map((item) => (
//                             <div
//                                 key={item}
//                                 className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
//                             >
//                                 <span className="text-sm text-slate-300">{item}</span>

//                                 <span className="text-xs text-green-400">
//                                     Available
//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </motion.div>
//     );
// }




"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ModuleCard({ module, reverse = false }) {
    const Icon = module.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`grid items-center gap-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
        >
            {/* Left */}
            <div>
                <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${module.color}`}
                >
                    <Icon className="h-8 w-8 text-white" />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
                    {module.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                    {module.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {module.frameworks.map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/modules/${module.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
                >
                    Learn More

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Right */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950">

                <h3 className="mb-6 text-lg font-semibold">
                    Key Capabilities
                </h3>

                <div className="grid gap-4">

                    {module.features.map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <CheckCircle2 className="h-5 w-5 text-blue-500" />

                            <span>{feature}</span>
                        </div>
                    ))}

                </div>

            </div>
        </motion.article>
    );
}