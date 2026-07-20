// src/components//Hero.tsx

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const TYPEWRITER_STRINGS = [
    "Future‑ready engineering.",
    "Transport infrastructure.",
    "Critical lab environments.",
    "End‑to‑end delivery.",
];

const STATS = [
    { value: "2", label: "Key Sectors" },
    { value: "8+", label: "Core Services" },
    { value: "3+", label: "Project Types" },
    { value: "E2E", label: "Delivery Model" },
];

function useTypewriter(strings: string[], speed = 60, pause = 1800) {
    const [display, setDisplay] = useState("");
    const [idx, setIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = strings[idx];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && display === current) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && display === "") {
            setDeleting(false);
            setIdx((i) => (i + 1) % strings.length);
        } else {
            timeout = setTimeout(() => {
                setDisplay((d) =>
                    deleting ? d.slice(0, -1) : current.slice(0, d.length + 1)
                );
            }, deleting ? speed / 2 : speed);
        }

        return () => clearTimeout(timeout);
    }, [display, deleting, idx, strings, speed, pause]);

    return display;
}

export default function Hero() {
    const typed = useTypewriter(TYPEWRITER_STRINGS);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
        >
            {/* ── Grid background ── */}
            <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

            {/* ── Lime glow orb ── */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#beff00]/6 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#beff00]/4 rounded-full blur-[100px] pointer-events-none" />

            {/* ── Top label bar ── */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10 max-w-[1680px] mx-auto w-full px-6 lg:px-10 2xl:px-16 pt-32 lg:pt-36"
            >
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#beff00] rounded-full animate-pulse" />
                    <span
                        className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Crawford Engineering & Infrastructure
                    </span>
                </div>
            </motion.div>

            {/* ── Main hero content ── */}
            <div className="relative z-10 max-w-[1680px] mx-auto w-full px-6 lg:px-10 2xl:px-16 flex-1 flex flex-col justify-center py-12">

                {/* Big display heading */}
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(4rem,13vw,14rem)] leading-none text-white tracking-tight"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        CRAWFORD
                    </motion.h1>
                </div>

                {/* Second line with lime accent */}
                <div className="overflow-hidden mb-8">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-end gap-4 flex-wrap"
                    >
                        <h2
                            className="text-[clamp(4rem,13vw,14rem)] leading-none text-[#beff00] tracking-tight"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            ENGINEERING
                        </h2>
                    </motion.div>
                </div>

                {/* Thin divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-[1px] bg-[#222] origin-left mb-8"
                />

                {/* Typewriter + description row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

                    {/* Typewriter subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex items-center gap-2"
                    >
                        <span
                            className="text-white text-lg lg:text-2xl tracking-wide"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                        >
                            {typed}
                        </span>
                        <span className="w-[2px] h-6 bg-[#beff00] animate-pulse inline-block" />
                    </motion.div>

                    {/* Description + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85, duration: 0.6 }}
                        className="flex flex-col gap-5 lg:max-w-sm"
                    >
                        <p
                            className="text-[#666] text-base lg:text-lg leading-relaxed"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            End‑to‑end engineering services for transport infrastructure
                            and specialist laboratory environments in higher education.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link
                                to="/contact"
                                className="
                  inline-flex items-center gap-2 px-6 py-3
                  bg-[#beff00] text-[#0a0a0a]
                  text-sm tracking-[0.1em] uppercase font-semibold
                  hover:bg-white transition-colors duration-200 group
                "
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Request a proposal
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                />
                            </Link>

                            <Link
                                to="/projects"
                                className="
                  inline-flex items-center gap-2
                  text-sm tracking-[0.1em] uppercase text-[#888]
                  hover:text-white transition-colors duration-200 group
                "
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                View projects
                                <ArrowDownRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200"
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Stats bar ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="relative z-10 border-t border-[#1e1e1e]"
            >
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {STATS.map((stat, i) => (
                            <div
                                key={i}
                                className={`
                  py-6 flex flex-col gap-1
                  ${i !== STATS.length - 1 ? "border-r border-[#1e1e1e]" : ""}
                  ${i < 2 ? "pr-6 lg:pr-0" : "pl-6 lg:pl-0"}
                  lg:px-8 lg:first:pl-0
                `}
                            >
                                <span
                                    className="text-[#beff00] text-3xl lg:text-4xl leading-none"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="text-[#555] text-xs tracking-[0.2em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </section>
    );
}