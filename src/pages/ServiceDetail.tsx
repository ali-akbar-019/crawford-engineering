// src/pages/ServiceDetail.tsx

import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { siteData } from "../data/content";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = siteData.services.find((s) => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const related = siteData.services
        .filter((s) => s.category === service.category && s.id !== service.id)
        .slice(0, 3);

    return (
        <motion.div
            variants={pageVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {/* ── Page hero ── */}
            <section className="relative bg-[#0a0a0a] pt-36 pb-14 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#beff00]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 mb-10 flex-wrap"
                    >
                        <Link
                            to="/"
                            className="text-[#555] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Home
                        </Link>
                        <span className="text-[#333] text-xs">/</span>
                        <Link
                            to="/services"
                            className="text-[#555] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Services
                        </Link>
                        <span className="text-[#333] text-xs">/</span>
                        <span
                            className="text-[#beff00] text-xs tracking-[0.2em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {service.title}
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(2.75rem,7vw,7rem)] leading-none text-white"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                {service.title}
                            </motion.h1>
                        </div>

                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className={`
                shrink-0 text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border
                ${service.category === "infrastructure"
                                    ? "text-[#beff00] border-[#beff00]/30 bg-[#beff00]/5"
                                    : "text-[#888] border-[#333] bg-[#111]"
                                }
              `}
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {service.category === "infrastructure" ? "Infrastructure" : "Laboratory"}
                        </motion.span>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 w-full h-[1px] bg-[#1e1e1e] origin-left"
                    />
                </div>
            </section>

            {/* ── Main content ── */}
            <section className="relative bg-[#0a0a0a] pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    {/* Hero image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-[16/7] overflow-hidden border border-[#1a1a1a] mb-16"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">

                        {/* Left: description */}
                        <div>
                            <motion.div
                                custom={0}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="flex items-center gap-3 mb-5"
                            >
                                <div className="w-8 h-[1px] bg-[#beff00]" />
                                <span
                                    className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Overview
                                </span>
                            </motion.div>

                            <motion.p
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="text-[#999] text-lg leading-relaxed mb-10"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {service.longDescription}
                            </motion.p>

                            <motion.div
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="flex flex-col gap-0"
                            >
                                {service.highlights.map((h, i) => (
                                    <div
                                        key={h}
                                        className="flex items-start gap-4 py-5 border-b border-[#161616]"
                                    >
                                        <span
                                            className="text-[#333] text-xs tracking-widest pt-1 shrink-0"
                                            style={{ fontFamily: "'DM Mono', monospace" }}
                                        >
                                            0{i + 1}
                                        </span>
                                        <div className="w-6 h-6 border border-[#beff00]/30 bg-[#beff00]/5 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={12} className="text-[#beff00]" />
                                        </div>
                                        <p
                                            className="text-white text-base leading-relaxed"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {h}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right: sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-8 lg:sticky lg:top-28 h-fit"
                        >
                            {/* Tags */}
                            <div className="border border-[#1a1a1a] p-6">
                                <p
                                    className="text-[#444] text-[10px] tracking-[0.25em] uppercase mb-4"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Focus areas
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] tracking-[0.15em] uppercase text-[#888] px-2.5 py-1 border border-[#222]"
                                            style={{ fontFamily: "'DM Mono', monospace" }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA card */}
                            <div className="border border-[#beff00]/30 bg-[#beff00]/5 p-6">
                                <h4
                                    className="text-white text-xl mb-2"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Need this capability?
                                </h4>
                                <p
                                    className="text-[#888] text-sm leading-relaxed mb-5"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    Tell us about your project and we'll come back with scope,
                                    timeline and a cost estimate.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#beff00] text-[#0a0a0a] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-white transition-colors duration-200 group w-full justify-center"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    Request a proposal
                                    <ArrowUpRight
                                        size={13}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </Link>
                            </div>

                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#555] hover:text-white transition-colors duration-200 group w-fit"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <ArrowLeft
                                    size={13}
                                    className="group-hover:-translate-x-0.5 transition-transform"
                                />
                                All services
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Related services ── */}
            {related.length > 0 && (
                <section className="relative bg-[#080808] border-t border-[#1a1a1a] py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-8 h-[1px] bg-[#beff00]" />
                            <span
                                className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                Related Services
                            </span>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a1a1a]">
                            {related.map((s, i) => (
                                <motion.div
                                    key={s.id}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp as any}
                                >
                                    <Link
                                        to={`/services/${s.id}`}
                                        className="group block bg-[#080808] p-7 h-full hover:bg-[#0f0f0f] transition-colors duration-300"
                                    >
                                        <h3
                                            className="text-white text-2xl mb-2 group-hover:text-[#beff00] transition-colors duration-300"
                                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                        >
                                            {s.title}
                                        </h3>
                                        <p
                                            className="text-[#555] text-sm leading-relaxed"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {s.description}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </motion.div>
    );
}
