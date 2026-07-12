// "use client";

// import ModuleCard from "./ModuleCard";
// import { modules } from "@/data/modules";

// export default function ModulesGrid() {
//     return (
//         <section className="py-20">
//             <div className="mx-auto max-w-7xl px-6">

//                 <div className="space-y-10">

//                     {modules.map((module, index) => (
//                         <ModuleCard
//                             key={module.id}
//                             module={module}
//                             reverse={index % 2 !== 0}
//                         />
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// }



"use client";

import ModuleCard from "./ModuleCard";
import { modules } from "@/data/modules";

export default function ModulesGrid() {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Our Solutions
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Enterprise Assessment Modules
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                        Each module is purpose-built to assess a specific domain of
                        cybersecurity, governance and regulatory compliance while
                        maintaining a unified assessment experience.
                    </p>

                </div>

                {/* Cards */}

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