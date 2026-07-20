// src/components/sections/UpdatedHero.tsx

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "../ui/button";
import { siteData } from "../../data/content";

const TYPEWRITER_STRINGS = [
    "Future‑ready engineering.",
    "Transport infrastructure.",
    "Critical lab environments.",
    "Road & railway corridors.",
    "End‑to‑end delivery.",
];

const STATS = [
    { value: "12+", label: "Years Delivering" },
    { value: "40+", label: "Projects Completed" },
    { value: "2", label: "Key Sectors" },
    { value: "E2E", label: "Delivery Model" },
];

// Live activity feed — pulls the in-progress projects straight from site data
// so this stays in sync with whatever is added on the Projects page.
const LIVE_PROJECTS = siteData.projects
    .filter((p) => p.status === "in-progress")
    .slice(0, 3);

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

// Animates a stat value up from 0 once it scrolls into view.
function CountUpStat({ value }: { value: string }) {
    const match = value.match(/^(\d[\d,]*)(.*)$/);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(match ? "0" + match[2] : value);

    useEffect(() => {
        if (!inView || !match) return;
        const target = parseInt(match[1].replace(/,/g, ""), 10);
        const suffix = match[2];
        const duration = 1000;
        const start = performance.now();

        let frame: number;
        function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target) + suffix);
            if (progress < 1) frame = requestAnimationFrame(tick);
        }
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView]);

    return <span ref={ref}>{display}</span>;
}

function statusDot(status: "in-progress" | "completed") {
    return (
        <span
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === "completed" ? "bg-[#beff00]" : "bg-amber-300 animate-pulse"
                }`}
        />
    );
}

export default function UpdatedHero() {
    const typed = useTypewriter(TYPEWRITER_STRINGS);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToNext = () => {
        const next = document.getElementById("what-we-do");
        next?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0a0a0a]"
        >
            {/* ── Background image + single clean overlay ── */}
            <div
                className="absolute inset-0 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: "url(/hero_section/banner.jpeg)" }}
            />
            <div className="absolute inset-0 pointer-events-none bg-[#0a0a0a]/80" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />

            {/* ── Single subtle lime glow — kept minimal ── */}
            <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#beff00]/6 rounded-full blur-[140px] pointer-events-none" />



            {/* ── Main hero content — single column, heading leads ── */}
            <div className="relative z-10 max-w-[1680px] mx-auto w-full px-6 lg:px-10 2xl:px-16 flex-1 flex flex-col items-center text-center lg:items-start lg:text-left justify-center pt-32 lg:pt-36">

                <div className="overflow-hidden mb-1">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(4.5rem,17vw,10.5rem)] leading-none text-white tracking-tight"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        CRAWFORD
                    </motion.h1>
                </div>

                <div className="overflow-hidden mb-9">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2
                            className="text-[clamp(4.5rem,17vw,10.5rem)] leading-none text-[#beff00] tracking-tight"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            ENGINEERING
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:items-end w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-[#999] text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        End‑to‑end engineering services for transport infrastructure and
                        specialist laboratory environments in higher education.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 shrink-0"
                    >
                        <Link to="/projects">
                            <Button
                                size="lg"
                                className="group rounded-none px-6 h-12 bg-[#beff00] text-[#0a0a0a] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-white"
                            >
                                Explore Projects
                                <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </Link>

                        <button
                            type="button"
                            className="group inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                        >
                            <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/40 group-hover:border-[#beff00] group-hover:bg-[#beff00]/10 transition-colors">
                                <Play size={16} className="ml-0.5 fill-current" />
                            </span>
                            <span
                                className="text-sm tracking-[0.1em] uppercase hidden sm:inline"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Watch Showreel
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-[1px] bg-white/10 origin-left my-9"
                />

                {/* Typewriter row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex items-center justify-center lg:justify-start gap-2 mb-10 min-h-[2rem] lg:min-h-[2.25rem] w-full"
                >
                    <span
                        className="text-white text-lg lg:text-xl tracking-wide"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                    >
                        {typed}
                    </span>
                    <span className="w-[2px] h-5 bg-[#beff00] animate-pulse inline-block" />
                </motion.div>

                {/* Live project activity — compact horizontal strip, not a boxed widget */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-col gap-3 w-full"
                >
                    <div className="flex items-center justify-between w-full">
                        <span
                            className="text-[#666] text-[10px] tracking-[0.25em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Currently in delivery
                        </span>
                        <Link
                            to="/projects"
                            className="text-[#beff00] text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            View all →
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        {LIVE_PROJECTS.map((project) => (
                            <Link
                                to={`/projects/${project.id}`}
                                key={project.id}
                                className="group flex items-center gap-3 flex-1 border border-white/10 hover:border-[#beff00]/30 bg-black/20 px-3 py-2.5 transition-colors duration-300"
                            >
                                <div
                                    className="w-9 h-9 shrink-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="min-w-0 flex-1">
                                    <p className="text-white text-sm leading-tight truncate group-hover:text-[#beff00] transition-colors">
                                        {project.title}
                                    </p>
                                    <p className="text-[#666] text-xs leading-tight">
                                        {project.location}
                                    </p>
                                </div>
                                {statusDot(project.status)}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    type="button"
                    onClick={scrollToNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="group my-10 flex items-center gap-2 self-center lg:self-start text-[#999] hover:text-[#beff00] transition-colors"
                >
                    <span
                        className="text-xs tracking-[0.2em] uppercase"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Scroll to discover
                    </span>
                    <ChevronDown size={16} className="animate-bounce" />
                </motion.button>
            </div>

            {/* ── Stats bar ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="relative z-10 border-t border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm"
            >
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {STATS.map((stat, i) => (
                            <div
                                key={i}
                                className={`
                  py-6 flex flex-col gap-1 items-center lg:items-start text-center lg:text-left
                  ${i !== STATS.length - 1 ? "border-r border-white/10" : ""}
                  lg:px-8 lg:first:pl-0
                `}
                            >
                                <span
                                    className="text-[#beff00] text-3xl lg:text-4xl leading-none"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    <CountUpStat value={stat.value} />
                                </span>
                                <span
                                    className="text-[#888] text-xs tracking-[0.2em] uppercase"
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
