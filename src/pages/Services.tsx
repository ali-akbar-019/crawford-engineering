// src/pages/Services.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/sections/ServiceCard";
import { siteData } from "../data/content";
import type { ServiceCategory } from "../types";
import { useDocumentTitle } from "../utils/useDocumentTitle";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

type Filter = "all" | ServiceCategory;

const FILTERS: { label: string; value: Filter }[] = [
    { label: "All Services", value: "all" },
    { label: "Infrastructure", value: "infrastructure" },
    { label: "Laboratory", value: "laboratory" },
];

export default function Services() {
    useDocumentTitle(
        "Services",
        "Road design, project management, BIM, cost estimation and laboratory engineering services."
    );
    const [active, setActive] = useState<Filter>("all");

    const filtered = siteData.services.filter((s) =>
        active === "all" ? true : s.category === active
    );

    return (
        <motion.div
            variants={pageVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {/* ── Page hero ── */}
            <section className="relative bg-[#0a0a0a] pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#beff00]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 mb-10"
                    >
                        <Link
                            to="/"
                            className="text-[#555] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Home
                        </Link>
                        <span className="text-[#333] text-xs">/</span>
                        <span
                            className="text-[#beff00] text-xs tracking-[0.2em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Services
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <div className="overflow-hidden mb-2">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[clamp(3.5rem,9vw,9rem)] leading-none text-white"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Our
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[clamp(3.5rem,9vw,9rem)] leading-none text-[#beff00]"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Services
                                </motion.h1>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-[#555] text-base lg:text-lg leading-relaxed max-w-sm lg:pb-4"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Integrated transport, infrastructure and specialist laboratory
                            outcomes — delivered end‑to‑end by our engineering team.
                        </motion.p>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 w-full h-[1px] bg-[#1e1e1e] origin-left"
                    />
                </div>
            </section>

            {/* ── Filter + Grid ── */}
            <section className="relative bg-[#0a0a0a] py-16">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

                    {/* Filter tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="flex items-center gap-2 mb-12 flex-wrap"
                    >
                        {FILTERS.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActive(f.value)}
                                className={`
                  relative px-5 py-2 text-xs tracking-[0.2em] uppercase
                  border transition-all duration-200
                  ${active === f.value
                                        ? "bg-[#beff00] text-[#0a0a0a] border-[#beff00]"
                                        : "bg-transparent text-[#666] border-[#222] hover:text-white hover:border-[#444]"
                                    }
                `}
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {f.label}
                                {active === f.value && (
                                    <motion.div
                                        layoutId="filter-active"
                                        className="absolute inset-0 bg-[#beff00] -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}

                        {/* Count */}
                        <span
                            className="ml-auto text-[#444] text-xs tracking-widest"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {filtered.length} service{filtered.length !== 1 ? "s" : ""}
                        </span>
                    </motion.div>

                    {/* Cards grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#161616]"
                        >
                            {filtered.map((service, i) => (
                                <ServiceCard key={service.id} service={service} index={i} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="relative bg-[#080808] border-t border-[#1a1a1a] py-20">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2rem,5vw,4rem)] leading-none text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            Need a specific capability?
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            to="/contact"
                            className="
                inline-flex items-center gap-2 px-7 py-3.5
                bg-[#beff00] text-[#0a0a0a]
                text-xs tracking-[0.15em] uppercase font-semibold
                hover:bg-white transition-colors duration-200 group
              "
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Request a proposal
                            <ArrowUpRight
                                size={13}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}