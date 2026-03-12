// src/components/sections/Capabilities.tsx

import { motion } from "framer-motion";
import { siteData } from "../../data/content";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Capabilities() {
    return (
        <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">

            {/* ── Lime glow ── */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#beff00]/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <div className="w-8 h-[1px] bg-[#beff00]" />
                    <span
                        className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Core Capabilities
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: heading */}
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            Practical delivery support for infrastructure and campus
                            <span className="text-[#beff00]"> environments.</span>
                        </motion.h2>
                    </div>

                    {/* Right: capability list */}
                    <div className="flex flex-col gap-0">
                        {siteData.capabilities.map((cap, i) => (
                            <motion.div
                                key={cap.label}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="group flex items-start gap-6 py-7 border-b border-[#1a1a1a] hover:border-[#beff00]/30 transition-colors duration-300"
                            >
                                {/* Number */}
                                <span
                                    className="text-[#333] text-xs tracking-widest pt-1 shrink-0 group-hover:text-[#beff00] transition-colors duration-300"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    0{i + 1}
                                </span>

                                <div className="flex-1">
                                    <h3
                                        className="text-white text-2xl lg:text-3xl mb-2 group-hover:text-[#beff00] transition-colors duration-300"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                    >
                                        {cap.label}
                                    </h3>
                                    <p
                                        className="text-[#666] text-sm leading-relaxed"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {cap.description}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="w-5 h-5 border border-[#333] group-hover:border-[#beff00] group-hover:bg-[#beff00] transition-all duration-300 flex items-center justify-center shrink-0 mt-1">
                                    <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        className="text-[#333] group-hover:text-[#0a0a0a] transition-colors duration-300"
                                    >
                                        <path
                                            d="M1 7L7 1M7 1H2M7 1V6"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}