// src/pages/Team.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
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
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Team() {
    useDocumentTitle(
        "Board of Directors & Founders",
        "Meet the board, founders and employees at Crawford Engineering & Infrastructure."
    );

    const founders = siteData.team.filter((member) => member.group === "founders");
    const employees = siteData.team.filter((member) => member.group === "employees");

    const renderFounderRows = (members: typeof siteData.team) => (
        <div className="flex flex-col gap-px bg-[#1a1a1a]">
            {members.map((member, i) => {
                const imageFirst = i % 2 === 0;
                return (
                    <motion.div
                        key={member.id}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={fadeUp as any}
                        className={`group relative bg-[#0a0a0a] flex flex-col ${imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                    >
                        {/* Photo half */}
                        <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                            <img
                                src={member.photo}
                                alt={member.name}
                                loading="lazy"
                                style={{ objectPosition: member.focalPoint ?? "50% 35%" }}
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 via-transparent to-transparent lg:hidden" />
                        </div>

                        {/* Text half */}
                        <div className="relative w-full lg:w-1/2 flex flex-col justify-center gap-4 p-8 lg:p-14 border-t lg:border-t-0 border-[#1a1a1a] group-hover:border-[#beff00]/20 transition-colors duration-300">
                            <span
                                className="text-[#333] text-xs tracking-widest"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                0{i + 1}
                            </span>
                            <span
                                className="text-[10px] tracking-[0.25em] uppercase text-[#beff00]"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {member.role}
                            </span>
                            <h3
                                className="text-white text-4xl lg:text-5xl leading-none group-hover:text-[#beff00] transition-colors duration-300"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                {member.name}
                            </h3>
                            <p
                                className="text-[#666] text-base lg:text-xl leading-relaxed max-w-md"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {member.bio}
                            </p>

                            <div className="flex items-center gap-3 pt-2">
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    aria-label={`Email ${member.name}`}
                                    className="w-9 h-9 border border-[#222] flex items-center justify-center text-[#555] hover:border-[#beff00] hover:text-[#beff00] transition-colors duration-300"
                                >
                                    <Mail size={14} />
                                </a>
                                <a
                                    href="#"
                                    aria-label={`${member.name} on LinkedIn`}
                                    className="w-9 h-9 border border-[#222] flex items-center justify-center text-[#555] hover:border-[#beff00] hover:text-[#beff00] transition-colors duration-300"
                                >
                                    <Linkedin size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
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
                            Team
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
                                    Our
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
                                    Founders
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
                            The people leading Crawford Engineering across Australia and the UAE,
                            from strategy and delivery through to client relationships.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 w-full h-px bg-[#1e1e1e] origin-left"
                    />
                </div>
            </section>

            {/* ── Founders grid ── */}
            <section className="relative bg-[#0a0a0a] py-16">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="flex items-end gap-4 mb-6">
                        <span
                            className="text-[#beff00] text-xs tracking-[0.25em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Board of Directors & Founders
                        </span>
                        <div className="h-px flex-1 bg-[#1a1a1a] mb-1" />
                    </div>
                    {renderFounderRows(founders)}
                </div>
            </section>

            <section className="relative bg-[#0a0a0a] pb-16">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="flex items-end gap-4 mb-6 mt-2">
                        <span
                            className="text-[#beff00] text-xs tracking-[0.25em] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Employees
                        </span>
                        <div className="h-px flex-1 bg-[#1a1a1a] mb-1" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a] lg:max-w-4xl">
                        {employees.map((member, i) => (
                            <motion.div
                                key={member.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp as any}
                                className="group relative bg-[#0a0a0a] overflow-hidden"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        loading="lazy"
                                        style={{ objectPosition: member.focalPoint ?? "50% 35%" }}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
                                </div>

                                <div className="p-8 flex flex-col gap-3 border border-t-0 border-[#1a1a1a] group-hover:border-[#beff00]/30 transition-colors duration-300">
                                    <span
                                        className="text-[9px] tracking-[0.25em] uppercase text-[#beff00]"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {member.role}
                                    </span>
                                    <h3
                                        className="text-white text-3xl leading-none group-hover:text-[#beff00] transition-colors duration-300"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-[#666] text-base lg:text-lg leading-relaxed"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {member.bio}
                                    </p>

                                    <div className="flex items-center gap-3 pt-3 mt-1 border-t border-[#161616]">
                                        <a
                                            href={`mailto:${siteData.contact.email}`}
                                            aria-label={`Email ${member.name}`}
                                            className="w-8 h-8 border border-[#222] flex items-center justify-center text-[#555] hover:border-[#beff00] hover:text-[#beff00] transition-colors duration-300"
                                        >
                                            <Mail size={13} />
                                        </a>
                                        <a
                                            href="#"
                                            aria-label={`${member.name} on LinkedIn`}
                                            className="w-8 h-8 border border-[#222] flex items-center justify-center text-[#555] hover:border-[#beff00] hover:text-[#beff00] transition-colors duration-300"
                                        >
                                            <Linkedin size={13} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
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
                            Want to work with the team?
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
