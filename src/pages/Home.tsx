// src/pages/Home.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/content";
import Capabilities from "@/components/sections/Capabilities";
import UpdatedHero from "@/components/sections/UpdatedHero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import { useDocumentTitle } from "@/utils/useDocumentTitle";

// Page transition wrapper
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Home() {
    useDocumentTitle(
        "Crawford Engineering & Infrastructure",
        "Future-ready engineering for transport, urban infrastructure and specialist laboratory environments."
    );
    return (
        <motion.div
            variants={pageVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {/* ── Hero ── */}
            <UpdatedHero />

            {/* --what we do -- */}
            <WhatWeDo />
            {/* ── Capabilities ── */}
            <Capabilities />

            {/* ── Services Preview ── */}
            <section className="relative bg-[#080808] py-24 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

                <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
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
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-white"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Our Services
                                </motion.h2>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                to="/services"
                                className="
                  inline-flex items-center gap-2
                  text-xs tracking-[0.2em] uppercase font-medium
                  text-[#888] hover:text-[#beff00] transition-colors duration-200 group
                "
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                View all services
                                <ArrowUpRight
                                    size={13}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Services grid — show first 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
                        {siteData.services.slice(0, 4).map((service, i) => (
                            <motion.div
                                key={service.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                            >
                                <Link
                                    to={`/services/${service.id}`}
                                    className="group block bg-[#080808] p-7 h-full flex flex-col gap-4 hover:bg-[#0f0f0f] transition-colors duration-300"
                                >
                                    {/* Index */}
                                    <span
                                        className="text-[#333] text-xs tracking-widest group-hover:text-[#beff00] transition-colors duration-300"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        0{i + 1}
                                    </span>

                                    <h3
                                        className="text-white text-2xl leading-tight group-hover:text-[#beff00] transition-colors duration-300"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className="text-[#555] text-base lg:text-lg leading-relaxed flex-1"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1a1a1a]">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] tracking-widest uppercase text-[#444] px-2 py-0.5 border border-[#1e1e1e]"
                                                style={{ fontFamily: "'DM Mono', monospace" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Projects Carousel ── */}
            <FeaturedProjects />

            {/* ── Testimonials ── */}
            <Testimonials />

            {/* ── CTA Banner ── */}
            <section className="relative bg-[#beff00] py-20 overflow-hidden">
                {/* Subtle grid on lime */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[#0a0a0a] text-[clamp(2.5rem,6vw,5rem)] leading-none"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            Ready to discuss your project?
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link
                            to="/contact"
                            className="
                inline-flex items-center gap-2 px-8 py-4
                bg-[#0a0a0a] text-white
                text-sm tracking-[0.15em] uppercase font-semibold
                hover:bg-[#111] transition-colors duration-200 group
              "
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Get in touch
                            <ArrowUpRight
                                size={14}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Small closing strip ── */}
            <section className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] py-12">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16 flex items-center justify-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#beff00] animate-pulse shrink-0" />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white text-xl lg:text-3xl tracking-wide text-center"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                        Ready when you are.
                    </motion.p>
                </div>
            </section>

        </motion.div>
    );
}