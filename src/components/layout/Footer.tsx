// src/components/layout/Footer.tsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteData } from "../../data/content";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#080808] border-t border-[#1e1e1e] overflow-hidden">

            {/* ── Grid background ── */}
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

            {/* ── Lime glow top-left ── */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#beff00]/5 blur-3xl pointer-events-none" />

            {/* ── Main footer content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* ── Col 1: Brand ── */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                        className="lg:col-span-1"
                    >
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
                            <div className="w-1.5 h-8 bg-[#beff00] group-hover:h-10 transition-all duration-300" />
                            <div className="flex flex-col leading-none">
                                <span
                                    className="text-white text-2xl tracking-wide"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Crawford
                                </span>
                                <span
                                    className="text-[#555] text-[9px] tracking-[0.2em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Engineering & Infrastructure
                                </span>
                            </div>
                        </Link>

                        <p
                            className="text-[#666] text-sm leading-relaxed max-w-[220px]"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            {siteData.description}
                        </p>

                        {/* Divider */}
                        <div className="mt-6 w-8 h-[1px] bg-[#beff00]" />
                    </motion.div>

                    {/* ── Col 2: Navigation ── */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                    >
                        <p
                            className="text-[#beff00] text-xs tracking-[0.25em] uppercase mb-5"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Navigation
                        </p>
                        <ul className="flex flex-col gap-3">
                            {siteData.nav.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="
                      group flex items-center gap-2
                      text-[#888] hover:text-white
                      text-sm tracking-wide transition-colors duration-200
                    "
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1px] bg-[#beff00] transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Col 3: Services ── */}
                    <motion.div
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                    >
                        <p
                            className="text-[#beff00] text-xs tracking-[0.25em] uppercase mb-5"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Core Services
                        </p>
                        <ul className="flex flex-col gap-3">
                            {siteData.services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to="/services"
                                        className="
                      group flex items-center gap-2
                      text-[#888] hover:text-white
                      text-sm tracking-wide transition-colors duration-200
                    "
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1px] bg-[#beff00] transition-all duration-300" />
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Col 4: Contact ── */}
                    <motion.div
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                    >
                        <p
                            className="text-[#beff00] text-xs tracking-[0.25em] uppercase mb-5"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Get in Touch
                        </p>

                        <ul className="flex flex-col gap-4">
                            <li>
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className="group flex items-start gap-3 text-[#888] hover:text-white transition-colors duration-200"
                                >
                                    <Mail
                                        size={14}
                                        className="mt-0.5 shrink-0 text-[#beff00]"
                                    />
                                    <span
                                        className="text-sm leading-snug"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {siteData.contact.email}
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`tel:${siteData.contact.phone}`}
                                    className="group flex items-start gap-3 text-[#888] hover:text-white transition-colors duration-200"
                                >
                                    <Phone
                                        size={14}
                                        className="mt-0.5 shrink-0 text-[#beff00]"
                                    />
                                    <span
                                        className="text-sm"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {siteData.contact.phone}
                                    </span>
                                </a>
                            </li>

                            <li>
                                <div className="flex items-start gap-3 text-[#888]">
                                    <MapPin
                                        size={14}
                                        className="mt-0.5 shrink-0 text-[#beff00]"
                                    />
                                    <span
                                        className="text-sm leading-snug"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {siteData.contact.office}
                                    </span>
                                </div>
                            </li>
                        </ul>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="
                mt-7 inline-flex items-center gap-2
                text-xs tracking-[0.15em] uppercase font-medium
                text-[#0a0a0a] bg-[#beff00]
                px-4 py-2.5
                hover:bg-white transition-colors duration-200
                group
              "
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Request a proposal
                            <ArrowUpRight
                                size={13}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                            />
                        </Link>
                    </motion.div>

                </div>

                {/* ── Divider ── */}
                <div className="mt-14 border-t border-[#1a1a1a]" />

                {/* ── Bottom bar ── */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p
                        className="text-[#444] text-xs tracking-[0.15em] uppercase"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        © {year} Crawford Engineering & Infrastructure. All rights reserved.
                    </p>

                    {/* Marquee tag line */}
                    <div
                        className="text-[#333] text-xs tracking-[0.2em] uppercase hidden sm:block"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Road design&nbsp;
                        <span className="text-[#beff00]">•</span>
                        &nbsp;BIM&nbsp;
                        <span className="text-[#beff00]">•</span>
                        &nbsp;Project management&nbsp;
                        <span className="text-[#beff00]">•</span>
                        &nbsp;Lab support
                    </div>

                </div>
            </div >
        </footer >
    );
}