// src/pages/ProjectDetail.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { siteData } from "../data/content";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import type { Project } from "../types";

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

function StatusBadge({ status }: { status: Project["status"] }) {
    if (status === "completed") {
        return (
            <span
                className="inline-flex items-center gap-1.5 border border-[#beff00]/40 bg-[#beff00]/5 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#beff00]"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#beff00]" />
                Completed
            </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1.5 border border-amber-400/40 bg-amber-400/5 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-amber-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            In Progress
        </span>
    );
}

// Large hero slideshow — auto-cycles through the project's photo set.
function HeroSlideshow({ images, title }: { images: string[]; title: string }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => setActive((i) => (i + 1) % images.length), 3800);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative aspect-[16/8] overflow-hidden border border-[#1a1a1a]">
            <AnimatePresence mode="sync">
                <motion.img
                    key={active}
                    src={images[active]}
                    alt={title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

            {images.length > 1 && (
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            aria-label={`Show photo ${i + 1}`}
                            className={`h-1 transition-all duration-300 ${i === active ? "w-6 bg-[#beff00]" : "w-1.5 bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = siteData.projects.find((p) => p.id === id);

    useDocumentTitle(
        project?.title ?? "Project",
        project?.description ?? "Crawford Engineering project."
    );

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const related = siteData.projects
        .filter((p) => p.sector === project.sector && p.id !== project.id)
        .slice(0, 3);

    return (
        <motion.div
            variants={pageVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {/* ── Page hero ── */}
            <section className="relative bg-[#0a0a0a] pt-36 pb-10 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#beff00]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

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
                            to="/projects"
                            className="text-[#555] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Projects
                        </Link>
                        <span className="text-[#333] text-xs">/</span>
                        <span
                            className="text-[#beff00] text-xs tracking-[0.2em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {project.title}
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(2.5rem,6.5vw,6.5rem)] leading-none text-white"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                {project.title}
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3 shrink-0"
                        >
                            <StatusBadge status={project.status} />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-4 flex items-center gap-2 text-[#666] text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        <MapPin size={14} className="text-[#beff00]" />
                        {project.location}
                        <span className="text-[#333] mx-1">•</span>
                        {project.sector}
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 w-full h-[1px] bg-[#1e1e1e] origin-left"
                    />
                </div>
            </section>

            {/* ── Main content ── */}
            <section className="relative bg-[#0a0a0a] pb-16">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

                    {/* Hero slideshow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16"
                    >
                        <HeroSlideshow images={project.images} title={project.title} />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">

                        {/* Left: overview + timeline */}
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
                                className="text-[#999] text-lg leading-relaxed mb-14"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {project.longDescription}
                            </motion.p>

                            {/* Timeline */}
                            <motion.div
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-[1px] bg-[#beff00]" />
                                    <span
                                        className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        Project Timeline
                                    </span>
                                </div>

                                <div className="flex flex-col gap-0">
                                    {project.timeline.map((stage, i) => {
                                        const isDone = i < project.currentStage || project.status === "completed";
                                        const isCurrent = i === project.currentStage && project.status !== "completed";

                                        return (
                                            <div key={stage} className="flex gap-5">
                                                {/* Rail */}
                                                <div className="flex flex-col items-center">
                                                    <div
                                                        className={`w-3 h-3 shrink-0 border ${isDone
                                                                ? "bg-[#beff00] border-[#beff00]"
                                                                : isCurrent
                                                                    ? "bg-amber-300 border-amber-300 animate-pulse"
                                                                    : "bg-transparent border-[#333]"
                                                            }`}
                                                    />
                                                    {i !== project.timeline.length - 1 && (
                                                        <div
                                                            className={`w-[1px] flex-1 min-h-[38px] ${isDone ? "bg-[#beff00]/40" : "bg-[#222]"
                                                                }`}
                                                        />
                                                    )}
                                                </div>

                                                {/* Label */}
                                                <div className="pb-9 -mt-0.5">
                                                    <p
                                                        className={`text-base ${isDone || isCurrent ? "text-white" : "text-[#555]"
                                                            }`}
                                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                                    >
                                                        {stage}
                                                    </p>
                                                    <span
                                                        className={`text-[10px] tracking-[0.2em] uppercase ${isDone
                                                                ? "text-[#beff00]"
                                                                : isCurrent
                                                                    ? "text-amber-300"
                                                                    : "text-[#444]"
                                                            }`}
                                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                                    >
                                                        {isDone ? "Complete" : isCurrent ? "In progress" : "Upcoming"}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
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
                            {/* Quick facts */}
                            <div className="border border-[#1a1a1a] p-6 flex flex-col gap-5">
                                <p
                                    className="text-[#444] text-[10px] tracking-[0.25em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Quick facts
                                </p>

                                {[
                                    { label: "Sector", value: project.sector },
                                    { label: "Location", value: project.location },
                                    { label: "Status", value: project.status === "completed" ? "Completed" : "In progress" },
                                ].map((fact) => (
                                    <div key={fact.label} className="flex items-center justify-between border-b border-[#161616] pb-3 last:border-b-0 last:pb-0">
                                        <span
                                            className="text-[#555] text-xs"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {fact.label}
                                        </span>
                                        <span
                                            className="text-white text-sm text-right"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {fact.value}
                                        </span>
                                    </div>
                                ))}

                                <div className="flex flex-wrap gap-2 pt-1">
                                    {project.tags.map((tag) => (
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
                                    Working on something similar?
                                </h4>
                                <p
                                    className="text-[#888] text-base lg:text-lg leading-relaxed mb-5"
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
                                to="/projects"
                                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#555] hover:text-white transition-colors duration-200 group w-fit"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <ArrowLeft
                                    size={13}
                                    className="group-hover:-translate-x-0.5 transition-transform"
                                />
                                All projects
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Related projects ── */}
            {related.length > 0 && (
                <section className="relative bg-[#080808] border-t border-[#1a1a1a] py-20">
                    <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
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
                                Related Projects
                            </span>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a1a1a]">
                            {related.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp as any}
                                >
                                    <Link
                                        to={`/projects/${p.id}`}
                                        className="group block bg-[#080808] hover:bg-[#0f0f0f] transition-colors duration-300 h-full"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <h3
                                                className="text-white text-2xl mb-2 group-hover:text-[#beff00] transition-colors duration-300"
                                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                            >
                                                {p.title}
                                            </h3>
                                            <p
                                                className="text-[#555] text-base lg:text-lg leading-relaxed"
                                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                                            >
                                                {p.description}
                                            </p>
                                        </div>
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
