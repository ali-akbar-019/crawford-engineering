// src/components/sections/FeaturedProjects.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../../data/content";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

function StatusBadge({ status }: { status: "in-progress" | "completed" }) {
    if (status === "completed") {
        return (
            <span
                className="inline-flex items-center gap-1.5 border border-[#beff00]/40 bg-[#0a0a0a]/70 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase text-[#beff00]"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#beff00]" />
                Completed
            </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1.5 border border-amber-400/40 bg-[#0a0a0a]/70 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase text-amber-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            In Progress
        </span>
    );
}

export default function FeaturedProjects() {
    const projects = siteData.projects;

    return (
        <section className="relative bg-[#080808] py-24 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">

                {/* Header */}
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
                                Featured Projects
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
                                Work In The Field
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
                            to="/projects"
                            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-[#888] hover:text-[#beff00] transition-colors duration-200 group"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            View all projects
                            <ArrowUpRight
                                size={13}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>

                {/* Carousel — 3 cards visible at a time on desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Carousel opts={{ align: "start", loop: true }} className="px-1">
                        <CarouselContent>
                            {projects.map((project, i) => (
                                <CarouselItem
                                    key={project.id}
                                    className="sm:basis-1/2 lg:basis-1/3"
                                >
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="group relative bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#beff00]/40 transition-colors duration-300 overflow-hidden flex flex-col h-full"
                                >
                                        {/* Image + badge */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <StatusBadge status={project.status} />
                                            </div>
                                            <div className="absolute bottom-3 left-3">
                                                <span
                                                    className="text-[10px] tracking-[0.2em] uppercase text-white/80"
                                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                                >
                                                    {project.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Copy */}
                                        <div className="p-6 flex flex-col gap-3 flex-1">
                                            <span
                                                className="text-[9px] tracking-[0.25em] uppercase text-[#beff00]"
                                                style={{ fontFamily: "'DM Mono', monospace" }}
                                            >
                                                {project.sector}
                                            </span>
                                            <h3
                                                className="text-white text-2xl leading-tight group-hover:text-[#beff00] transition-colors duration-300"
                                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                            >
                                                {project.title}
                                            </h3>
                                            <p
                                                className="text-[#666] text-base lg:text-lg leading-relaxed flex-1"
                                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                                            >
                                                {project.description}
                                            </p>

                                            <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tags.slice(0, 2).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-[9px] tracking-[0.15em] uppercase text-[#444] px-2 py-0.5 border border-[#1c1c1c]"
                                                            style={{ fontFamily: "'DM Mono', monospace" }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className="w-7 h-7 border border-[#222] flex items-center justify-center text-[#333] group-hover:border-[#beff00] group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] transition-all duration-300 shrink-0">
                                                    <ArrowUpRight size={12} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="flex items-center justify-end gap-3 mt-8">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}
