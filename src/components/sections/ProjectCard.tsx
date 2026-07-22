// src/components/sections/ProjectCard.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";

interface ProjectCardProps {
    project: Project;
    index: number;
    view: "grid" | "list";
}

function StatusDot({ status }: { status: Project["status"] }) {
    if (status === "completed") {
        return (
            <span
                className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase text-[#beff00]"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#beff00]" />
                Completed
            </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase text-amber-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            In Progress
        </span>
    );
}

// Cycles through a project's photo set automatically — this is the
// "slideshow" behaviour requested for the grid view cards.
function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setActive((i) => (i + 1) % images.length);
        }, 3200);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
            <AnimatePresence mode="sync">
                <motion.img
                    key={active}
                    src={images[active]}
                    alt={title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />

            {/* Slide indicator dots */}
            {images.length > 1 && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1 transition-all duration-300 ${i === active ? "w-4 bg-[#beff00]" : "w-1 bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProjectCard({ project, index, view }: ProjectCardProps) {
    if (view === "list") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <Link
                    to={`/projects/${project.id}`}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-b border-[#1a1a1a] hover:border-[#beff00]/30 transition-colors duration-300"
                >                {/* Left */}
                <div className="flex items-start gap-6">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 shrink-0 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h3
                                className="text-white text-3xl lg:text-4xl leading-none group-hover:text-[#beff00] transition-colors duration-300"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                {project.title}
                            </h3>
                            <StatusDot status={project.status} />
                        </div>
                        <p
                            className="text-[#555] text-base lg:text-lg leading-relaxed max-w-lg"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 shrink-0 pl-[88px] sm:pl-0">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[9px] tracking-[0.2em] uppercase text-[#444] px-2.5 py-1 border border-[#1c1c1c] group-hover:border-[#beff00]/25 group-hover:text-[#666] transition-colors duration-300"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Arrow */}
                    <div className="w-8 h-8 border border-[#222] flex items-center justify-center text-[#333] group-hover:border-[#beff00] group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] transition-all duration-300 shrink-0">
                        <ArrowUpRight size={13} />
                    </div>
                </div>
                </Link>
            </motion.div>
        );
    }

    // Grid view — includes the auto-cycling image slideshow
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                delay: (index % 3) * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <Link
                to={`/projects/${project.id}`}
                className="group relative bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#beff00]/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
            {/* Lime sweep bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#111] overflow-hidden z-10">
                <motion.div
                    className="h-full bg-[#beff00]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ originX: 0 }}
                />
            </div>

            {/* Image slideshow */}
            <ImageSlideshow images={project.images} title={project.title} />

            {/* Status + sector row, overlaid on image */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span
                    className="text-[9px] tracking-[0.25em] uppercase text-[#beff00] border border-[#beff00]/25 bg-[#0a0a0a]/70 backdrop-blur-sm px-2 py-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    {project.sector}
                </span>
                <span className="bg-[#0a0a0a]/70 backdrop-blur-sm px-2 py-1">
                    <StatusDot status={project.status} />
                </span>
            </div>

            <div className="p-7 flex flex-col gap-4 flex-1">
                {/* Index + title */}
                <div className="flex items-start justify-between gap-4">
                    <h3
                        className="text-white text-2xl lg:text-3xl leading-tight flex-1 group-hover:text-[#beff00] transition-colors duration-300"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        {project.title}
                    </h3>
                    <span
                        className="text-[#2a2a2a] text-xs tracking-widest shrink-0 group-hover:text-[#beff00] transition-colors duration-300 pt-1"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Description */}
                <p
                    className="text-[#555] text-base lg:text-lg leading-relaxed flex-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    {project.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-end justify-between pt-4 border-t border-[#161616]">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[9px] tracking-[0.18em] uppercase text-[#444] px-2 py-0.5 border border-[#1c1c1c] group-hover:border-[#beff00]/25 group-hover:text-[#666] transition-colors duration-300"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="w-7 h-7 border border-[#222] flex items-center justify-center text-[#333] group-hover:border-[#beff00] group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] transition-all duration-300 shrink-0">
                        <ArrowUpRight size={12} />
                    </div>
                </div>
            </div>
            </Link>
        </motion.div>
    );
}
