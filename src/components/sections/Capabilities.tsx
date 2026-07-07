// src/components/sections/Capabilities.tsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/content";

// Placeholder imagery — swap for real/3D-interactive renders later.
const PLACEHOLDER_IMAGES = [
    "https://picsum.photos/seed/crawford-road/600/450",
    "https://picsum.photos/seed/crawford-pavement/600/450",
    "https://picsum.photos/seed/crawford-traffic/600/450",
    "https://picsum.photos/seed/crawford-asset/600/450",
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Capabilities() {
    const cards = siteData.services.slice(0, 4);

    return (
        <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#beff00]/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Section label + heading */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-8 h-[1px] bg-[#beff00]" />
                            <span
                                className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                What We Do
                            </span>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(2.5rem,6vw,5rem)] leading-none text-white"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                End‑to‑end infrastructure
                                <span className="text-[#beff00]"> solutions.</span>
                            </motion.h2>
                        </div>
                    </div>

                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-[#888] hover:text-[#beff00] transition-colors duration-200 group shrink-0"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        View all services
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
                </div>

                {/* Card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((service, i) => (
                        <motion.div
                            key={service.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp as any}
                            className="group relative bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#beff00]/40 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Placeholder image — replace with 3D-interactive asset later */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                                <img
                                    src={PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length]}
                                    alt={service.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            </div>

                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <h3
                                    className="text-white text-2xl leading-tight group-hover:text-[#beff00] transition-colors duration-300"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className="text-[#666] text-sm leading-relaxed flex-1"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {service.description}
                                </p>
                                <div className="w-8 h-8 border border-[#333] group-hover:border-[#beff00] group-hover:bg-[#beff00] transition-all duration-300 flex items-center justify-center self-start">
                                    <ArrowUpRight size={14} className="text-[#333] group-hover:text-[#0a0a0a] transition-colors duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
