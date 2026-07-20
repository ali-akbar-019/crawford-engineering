// src/pages/Careers.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { siteData } from "../data/content";
import { useDocumentTitle } from "../utils/useDocumentTitle";

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

const VALUES = [
    {
        title: "Technical rigour",
        description: "We hold our own work to the same standard we'd want on a project our own family relied on.",
    },
    {
        title: "Clear communication",
        description: "Clients and colleagues should always know where a project stands — no surprises.",
    },
    {
        title: "Room to grow",
        description: "Engineers here take on real responsibility early, with senior support close at hand.",
    },
];

export default function Careers() {
    useDocumentTitle(
        "Careers",
        "Open positions at Crawford Engineering & Infrastructure."
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
                            Careers
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <div className="overflow-hidden mb-1">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[clamp(3.5rem,9vw,9rem)] leading-none text-white"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Join The
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
                                    Team
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
                            We're always interested in hearing from engineers who care
                            about doing the work properly.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 w-full h-[1px] bg-[#1e1e1e] origin-left"
                    />
                </div>
            </section>

            {/* ── Values ── */}
            <section className="relative bg-[#0a0a0a] pb-16">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a1a1a]">
                        {VALUES.map((v, i) => (
                            <motion.div
                                key={v.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp as any}
                                className="bg-[#0a0a0a] p-8"
                            >
                                <span
                                    className="text-[#333] text-xs tracking-widest"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    0{i + 1}
                                </span>
                                <h3
                                    className="text-white text-2xl mt-3 mb-2"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {v.title}
                                </h3>
                                <p
                                    className="text-[#666] text-base lg:text-lg leading-relaxed"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {v.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Open positions ── */}
            <section className="relative bg-[#080808] border-t border-[#1a1a1a] py-20">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="w-8 h-[1px] bg-[#beff00]" />
                        <span
                            className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Open Positions
                        </span>
                    </motion.div>

                    <div className="flex flex-col">
                        {siteData.jobOpenings.map((job, i) => (
                            <motion.div
                                key={job.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp as any}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-7 border-b border-[#1a1a1a] hover:border-[#beff00]/30 transition-colors duration-300"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 flex-wrap mb-2">
                                        <h3
                                            className="text-white text-2xl leading-none group-hover:text-[#beff00] transition-colors duration-300"
                                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                        >
                                            {job.title}
                                        </h3>
                                        <span
                                            className="text-[9px] tracking-[0.2em] uppercase text-[#beff00] border border-[#beff00]/25 bg-[#beff00]/5 px-2 py-0.5"
                                            style={{ fontFamily: "'DM Mono', monospace" }}
                                        >
                                            {job.type}
                                        </span>
                                    </div>
                                    <p
                                        className="text-[#666] text-base lg:text-lg leading-relaxed max-w-lg mb-3"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {job.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-[#555] text-xs">
                                        <span className="inline-flex items-center gap-1.5">
                                            <MapPin size={12} className="text-[#beff00]" />
                                            {job.location}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <Briefcase size={12} className="text-[#beff00]" />
                                            {job.department}
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={`mailto:${siteData.contact.email}?subject=${encodeURIComponent(
                                        "Application: " + job.title
                                    )}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#222] text-[#999] text-xs tracking-[0.15em] uppercase hover:border-[#beff00] hover:text-[#beff00] transition-colors duration-200 shrink-0"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    Apply now
                                    <ArrowUpRight size={13} />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-[#555] text-sm mt-10"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Don't see a role that fits? We'd still like to hear from you —{" "}
                        <a
                            href={`mailto:${siteData.contact.email}`}
                            className="text-[#beff00] hover:text-white transition-colors"
                        >
                            send us your CV
                        </a>
                        .
                    </motion.p>
                </div>
            </section>
        </motion.div>
    );
}
