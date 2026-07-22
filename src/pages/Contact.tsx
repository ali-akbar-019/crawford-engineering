// src/pages/Contact.tsx

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    CheckCircle2,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        transition: { delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    }),
};

interface FormState {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
}

const INITIAL_FORM: FormState = {
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
};

const SERVICE_OPTIONS = [
    "Road Design",
    "Project Management",
    "BIM",
    "Cost Estimation",
    "Commissioning & Decommissioning",
    "Technical Reports & Documentation",
    "SOPs & Work Instructions",
    "Risk Analysis Documents",
    "Other / Not sure yet",
];
const MARQUEE_ITEMS = [
    "Road Design",
    "Project Management",
    "BIM",
    "Lab Engineering",
];

export default function Contact() {
    useDocumentTitle(
        "Contact",
        "Get in touch with Crawford Engineering & Infrastructure across Australia, Qatar and the UAE."
    );
    const [form, setForm] = useState<FormState>(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setSubmitted(true);
    };

    const inputBase = `
    w-full bg-transparent border-b border-[#222] px-0 py-3
    text-white text-sm placeholder-[#333]
    focus:outline-none focus:border-[#beff00]
    transition-colors duration-300
  `;

    return (
        <motion.div
            variants={pageVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {/* ── Page hero ── */}
            <section className="relative bg-[#0a0a0a] pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#beff00]/5 rounded-full blur-[130px] pointer-events-none" />

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
                            Contact
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <div className="overflow-hidden mb-1">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(3.5rem,9vw,9rem)] leading-none text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            Get in
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
                            Touch
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 w-full h-[1px] bg-[#1e1e1e] origin-left"
                    />
                </div>
            </section>

            {/* ── Main content ── */}
            <section className="relative bg-[#0a0a0a] py-16">
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* ── Left: contact info ── */}
                        <div className="flex flex-col gap-12">

                            <motion.p
                                custom={0}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp as any}
                                className="text-[#666] text-base lg:text-xl leading-relaxed max-w-sm"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                To discuss an upcoming project or request a capability
                                statement for infrastructure or laboratory engineering work,
                                please get in touch.
                            </motion.p>

                            {/* Contact details */}
                            <div className="flex flex-col gap-0">
                                {[
                                    {
                                        icon: <Mail size={16} />,
                                        label: "Email",
                                        value: siteData.contact.email,
                                        href: `mailto:${siteData.contact.email}`,
                                    },
                                    {
                                        icon: <Phone size={16} />,
                                        label: "Phone",
                                        value: siteData.contact.phone,
                                        href: `tel:${siteData.contact.phone}`,
                                    },
                                    // removed the location
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        custom={i + 1}
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp as any}
                                        className="group flex items-start gap-5 py-6 border-b border-[#161616] hover:border-[#beff00]/25 transition-colors duration-300"
                                    >
                                        {/* Icon box */}
                                        <div className="w-9 h-9 border border-[#222] flex items-center justify-center text-[#beff00] shrink-0 group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] group-hover:border-[#beff00] transition-all duration-300">
                                            {item.icon}
                                        </div>

                                        <div className="flex flex-col gap-0.5">
                                            <span
                                                className="text-[#444] text-[10px] tracking-[0.25em] uppercase"
                                                style={{ fontFamily: "'DM Mono', monospace" }}
                                            >
                                                {item.label}
                                            </span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-[#aaa] text-sm hover:text-white transition-colors duration-200 group-hover:text-white"
                                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span
                                                    className="text-[#aaa] text-sm"
                                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                                >
                                                    {item.value}
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick links */}
                            <motion.div
                                custom={4}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp as any}
                            >
                                <p
                                    className="text-[#beff00] text-[10px] tracking-[0.3em] uppercase mb-4"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Explore
                                </p>
                                <div className="flex flex-col gap-2">
                                    {siteData.nav.filter((n) => n.path !== "/contact").map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="group inline-flex items-center gap-2 text-[#555] hover:text-white text-sm transition-colors duration-200 w-fit"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            <ArrowUpRight
                                                size={12}
                                                className="text-[#beff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                            />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* ── Right: form ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <AnimatePresence mode="wait">

                                {/* ── Success state ── */}
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-start justify-center gap-6 h-full min-h-[400px] border border-[#beff00]/30 bg-[#0d0d0d] p-10"
                                    >
                                        <div className="w-12 h-12 bg-[#beff00] flex items-center justify-center">
                                            <CheckCircle2 size={22} className="text-[#0a0a0a]" />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-white text-4xl leading-none mb-3"
                                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                            >
                                                Message received
                                            </h3>
                                            <p
                                                className="text-[#555] text-base lg:text-xl leading-relaxed max-w-xs"
                                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                                            >
                                                Thank you for reaching out. We'll review your enquiry
                                                and get back to you shortly.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                                            className="text-xs tracking-[0.2em] uppercase text-[#beff00] hover:text-white transition-colors duration-200 border-b border-[#beff00]/30 pb-0.5"
                                            style={{ fontFamily: "'DM Mono', monospace" }}
                                        >
                                            Send another
                                        </button>
                                    </motion.div>

                                ) : (

                                    /* ── Form ── */
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col gap-8"
                                    >
                                        {/* Form label */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-[1px] bg-[#beff00]" />
                                            <span
                                                className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                                                style={{ fontFamily: "'DM Mono', monospace" }}
                                            >
                                                Project enquiry
                                            </span>
                                        </div>

                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-1.5">
                                                <label
                                                    className="text-[10px] tracking-[0.25em] uppercase text-[#444]"
                                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                                >
                                                    Full name <span className="text-[#beff00]">*</span>
                                                </label>
                                                <input
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("name")}
                                                    onBlur={() => setFocused(null)}
                                                    placeholder="John Smith"
                                                    className={inputBase}
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        borderColor: focused === "name" ? "#beff00" : undefined
                                                    }}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label
                                                    className="text-[10px] tracking-[0.25em] uppercase text-[#444]"
                                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                                >
                                                    Email <span className="text-[#beff00]">*</span>
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("email")}
                                                    onBlur={() => setFocused(null)}
                                                    placeholder="john@company.com"
                                                    className={inputBase}
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        borderColor: focused === "email" ? "#beff00" : undefined
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Company + Service */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-1.5">
                                                <label
                                                    className="text-[10px] tracking-[0.25em] uppercase text-[#444]"
                                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                                >
                                                    Company
                                                </label>
                                                <input
                                                    name="company"
                                                    value={form.company}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("company")}
                                                    onBlur={() => setFocused(null)}
                                                    placeholder="Organisation name"
                                                    className={inputBase}
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        borderColor: focused === "company" ? "#beff00" : undefined
                                                    }}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label
                                                    className="text-[10px] tracking-[0.25em] uppercase text-[#444]"
                                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                                >
                                                    Service of interest
                                                </label>
                                                <select
                                                    name="service"
                                                    value={form.service}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("service")}
                                                    onBlur={() => setFocused(null)}
                                                    className={`${inputBase} cursor-pointer`}
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        borderColor: focused === "service" ? "#beff00" : undefined,
                                                        background: "transparent",
                                                    }}
                                                >
                                                    <option value="" disabled style={{ background: "#111" }}>
                                                        Select a service
                                                    </option>
                                                    {SERVICE_OPTIONS.map((s) => (
                                                        <option
                                                            key={s}
                                                            value={s}
                                                            style={{ background: "#111", color: "#fff" }}
                                                        >
                                                            {s}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                className="text-[10px] tracking-[0.25em] uppercase text-[#444]"
                                                style={{ fontFamily: "'DM Mono', monospace" }}
                                            >
                                                Message <span className="text-[#beff00]">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("message")}
                                                onBlur={() => setFocused(null)}
                                                rows={5}
                                                placeholder="Tell us about your project, timeline, and any specific requirements..."
                                                className={`${inputBase} resize-none`}
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    borderColor: focused === "message" ? "#beff00" : undefined,
                                                }}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <div className="flex items-center justify-between pt-2">
                                            <p
                                                className="text-[#333] text-xs tracking-wide"
                                                style={{ fontFamily: "'DM Mono', monospace" }}
                                            >
                                                * Required fields
                                            </p>

                                            <motion.button
                                                onClick={handleSubmit}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={!form.name || !form.email || !form.message}
                                                className="
                          inline-flex items-center gap-2 px-8 py-3.5
                          bg-[#beff00] text-[#0a0a0a]
                          text-xs tracking-[0.15em] uppercase font-semibold
                          hover:bg-white transition-colors duration-200
                          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#beff00]
                          group
                        "
                                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                                            >
                                                Send message
                                                <Send
                                                    size={12}
                                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                                />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Global offices ── */}
            <section className="relative bg-[#080808] border-t border-[#1a1a1a] py-20 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
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
                            Global Offices
                        </span>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a1a1a]">
                        {siteData.offices.map((office, i) => (
                            <motion.div
                                key={office.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="group bg-[#0a0a0a] p-8 flex flex-col gap-3 hover:bg-[#0d0d0d] transition-colors duration-300"
                            >
                                <span
                                    className="text-[#333] text-xs tracking-widest group-hover:text-[#beff00] transition-colors duration-300"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    0{i + 1}
                                </span>
                                <h3
                                    className="text-white text-3xl leading-none group-hover:text-[#beff00] transition-colors duration-300"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {office.country}
                                </h3>
                                <p
                                    className="text-[#666] text-base lg:text-xl leading-relaxed"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {office.address}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom marquee ── */}
            <div className="bg-[#beff00] py-3 overflow-hidden">
                <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">

                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center text-[#0a0a0a] text-sm tracking-[0.25em] uppercase"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            <span className="mx-6">{item}</span>

                            {i !== 11 && (
                                <span className="opacity-40 mx-2">◆</span>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </motion.div >
    );
}