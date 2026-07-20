// src/pages/Projects.tsx

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/sections/ProjectCard";
import { siteData } from "../data/content";
import { useDocumentTitle } from "../utils/useDocumentTitle";
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const SECTOR_FILTERS = [
    { label: "All", value: "all" },
    { label: "Transport & Urban", value: "Transport & Urban" },
    { label: "Campuses & Facilities", value: "Campuses & Facilities" },
];

const STATUS_FILTERS = [
    { label: "All Status", value: "all" },
    { label: "In Progress", value: "in-progress" },
    { label: "Completed", value: "completed" },
];

export default function Projects() {
    useDocumentTitle(
        "Projects",
        "Representative infrastructure and laboratory projects delivered by Crawford Engineering."
    );
    const [sector, setSector] = useState("all");
    const [status, setStatus] = useState("all");
    const [view, setView] = useState<"grid" | "list">("list");

    const filtered = siteData.projects.filter((p) => {
        const sectorMatch = sector === "all" ? true : p.sector === sector;
        const statusMatch = status === "all" ? true : p.status === status;
        return sectorMatch && statusMatch;
    });

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
                <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-[#beff00]/4 rounded-full blur-[120px] pointer-events-none" />

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
                            Projects
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
                                    Recent
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
                                    Projects
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
                            Examples of the types of work delivered across infrastructure
                            and laboratory environments.
                        </motion.p>
                    </div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.5 }}
                        className="mt-14 flex items-center gap-10 border-t border-[#1a1a1a] pt-8"
                    >
                        {[
                            { value: siteData.projects.length.toString(), label: "Total projects" },
                            { value: "2", label: "Sectors covered" },
                            { value: "E2E", label: "Delivery model" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-0.5">
                                <span
                                    className="text-[#beff00] text-3xl leading-none"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="text-[#444] text-[10px] tracking-[0.2em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Filter + view toggle + projects ── */}
            <section className="relative bg-[#0a0a0a] py-14">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

                    {/* Controls row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.4 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12"
                    >
                        {/* Sector + status filters */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 flex-wrap">
                                {SECTOR_FILTERS.map((f) => (
                                    <button
                                        key={f.value}
                                        onClick={() => setSector(f.value)}
                                        className={`
                    px-4 py-1.5 text-xs tracking-[0.2em] uppercase border transition-all duration-200
                    ${sector === f.value
                                                ? "bg-[#beff00] text-[#0a0a0a] border-[#beff00]"
                                                : "bg-transparent text-[#666] border-[#222] hover:text-white hover:border-[#444]"
                                            }
                  `}
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                {STATUS_FILTERS.map((f) => (
                                    <button
                                        key={f.value}
                                        onClick={() => setStatus(f.value)}
                                        className={`
                    px-3 py-1 text-[10px] tracking-[0.2em] uppercase border transition-all duration-200
                    ${status === f.value
                                                ? "border-[#beff00]/50 text-[#beff00] bg-[#beff00]/5"
                                                : "bg-transparent text-[#555] border-[#1a1a1a] hover:text-[#999] hover:border-[#333]"
                                            }
                  `}
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* View toggle + count */}
                        <div className="flex items-center gap-4">
                            <span
                                className="text-[#333] text-xs tracking-widest"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                            </span>

                            <div className="flex items-center border border-[#222]">
                                <button
                                    onClick={() => setView("list")}
                                    className={`p-2 transition-colors duration-200 ${view === "list" ? "bg-[#beff00] text-[#0a0a0a]" : "text-[#555] hover:text-white"}`}
                                    aria-label="List view"
                                >
                                    <List size={14} />
                                </button>
                                <button
                                    onClick={() => setView("grid")}
                                    className={`p-2 transition-colors duration-200 ${view === "grid" ? "bg-[#beff00] text-[#0a0a0a]" : "text-[#555] hover:text-white"}`}
                                    aria-label="Grid view"
                                >
                                    <LayoutGrid size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${sector}-${status}-${view}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={
                                view === "grid"
                                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#161616]"
                                    : "flex flex-col border-t border-[#1a1a1a]"
                            }
                        >
                            {filtered.length > 0 ? (
                                filtered.map((project, i) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={i}
                                        view={view}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <p
                                        className="text-[#555] text-sm"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        No projects match these filters. Try a different combination.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── CTA ── */}
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
                            Working on something similar?
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
                            Get in touch
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