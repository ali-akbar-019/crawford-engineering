// src/pages/Sectors.tsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectorCard from "../components/sections/SectorCard";
import { siteData } from "../data/content";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};
const ITEMS = [
    "Transport & Urban",
    "Campuses & Facilities",
    "Higher Education",
    "Infrastructure Engineering",
];

export default function Sectors() {
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#beff00]/4 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

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
                            Sectors
                        </span>
                    </motion.div>

                    {/* Heading */}
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
                                    Key
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
                                    Sectors
                                </motion.h1>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-[#555] text-sm leading-relaxed max-w-sm lg:pb-4"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Experience across public and private infrastructure and
                            higher‑education environments, including operational sites.
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

            {/* ── Sector cards ── */}
            <section className="relative bg-[#0a0a0a] py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#161616]">
                        {siteData.sectors.map((sector, i) => (
                            <SectorCard key={sector.id} sector={sector} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Experience strip ── */}
            <section className="relative bg-[#080808] border-t border-b border-[#1a1a1a] py-16 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

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
                            Cross-sector capabilities
                        </span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#161616]">
                        {[
                            {
                                title: "Brownfield Delivery",
                                desc: "Experience on operational and live sites requiring phased, coordinated delivery with minimal disruption.",
                            },
                            {
                                title: "Public & Private",
                                desc: "Delivery for government transport authorities and private campus clients — adapting to different procurement frameworks.",
                            },
                            {
                                title: "Higher Education",
                                desc: "Specialist understanding of university lab environments, safety frameworks and student-facing documentation standards.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-[#080808] p-8 group hover:bg-[#0d0d0d] transition-colors duration-300"
                            >
                                <h3
                                    className="text-white text-2xl lg:text-3xl mb-3 group-hover:text-[#beff00] transition-colors duration-300"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-[#555] text-sm leading-relaxed"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Marquee ── */}
            <div className="bg-[#beff00] py-4 overflow-hidden">
                <div className="marquee">
                    <div className="marquee-inner flex items-center">
                        {Array(6)
                            .fill(ITEMS)
                            .flat()
                            .map((item, i) => (
                                <span
                                    key={i}
                                    className="flex items-center text-[#0a0a0a] text-sm tracking-[0.28em] uppercase"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    <span className="mx-6">{item}</span>

                                    {/* separator */}
                                    <span className="opacity-40 mx-2">◆</span>
                                </span>
                            ))}
                    </div>
                </div>
            </div>

            {/* ── CTA ── */}
            <section className="relative bg-[#0a0a0a] py-20 border-t border-[#1a1a1a]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2rem,5vw,4rem)] leading-none text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            Operating in one of these sectors?
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
                            Discuss your project
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