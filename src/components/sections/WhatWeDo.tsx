import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// ── Video source note ──
// videoSrc is left blank on purpose — Ali, jab tumhare paas video URLs ready
// hon to bas neeche wali WHAT_WE_DO array mein har item ke `videoSrc` field
// mein URL paste kar dena, video khud chal jayegi. Tab tak `poster` image
// dikhti rahegi taake card khaali/broken na lage.
const WHAT_WE_DO = [
    {
        title: "Roads & Highways",
        description:
            "Geometric design, corridor upgrades and intersection layouts engineered for safety and capacity.",
        poster:
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
        videoSrc: "",
    },
    {
        title: "Asset Management",
        description:
            "Lifecycle planning and condition assessments that keep infrastructure assets performing and accountable.",
        poster:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        videoSrc: "",
    },
    {
        title: "Traffic Systems",
        description:
            "Signal timing, control interfaces and traffic modelling that keep networks moving safely.",
        poster:
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
        videoSrc: "",
    },
    {
        title: "Site Supervision",
        description:
            "On‑site coordination and quality oversight from mobilisation through to practical completion.",
        poster:
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
        videoSrc: "",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    }),
};

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="relative bg-[#0a0a0a] py-24 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">

                    {/* ── Left: intro panel ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-28"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-[#beff00]" />
                            <span
                                className="text-[#beff00] text-xs tracking-[0.3em] uppercase"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                What We Do
                            </span>
                        </div>

                        <h2
                            className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] text-white mb-4"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            End‑to‑end infrastructure solutions
                        </h2>

                        <p
                            className="text-[#888] text-sm leading-relaxed mb-7"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            From concept design through to commissioning, our team supports
                            transport authorities and higher education campuses with the
                            technical delivery work that keeps projects on schedule and on
                            budget.
                        </p>

                        <Link
                            to="/services"
                            className="inline-flex items-center gap-3 px-5 py-2.5 text-sm text-[#beff00] border border-[#beff00]/40 bg-transparent hover:bg-[#beff00] hover:text-[#0a0a0a] transition-colors duration-200"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            View All Services
                            <ArrowRight size={15} />
                        </Link>
                    </motion.div>

                    {/* ── Right: capability cards with video/poster ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {WHAT_WE_DO.map((item, i) => (
                            <motion.div
                                key={item.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp as any}
                                className="group relative bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#beff00]/40 transition-colors duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Media */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                                    <video
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                        poster={item.poster}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        {item.videoSrc && <source src={item.videoSrc} />}
                                    </video>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
                                </div>

                                {/* Copy */}
                                <div className="p-5 flex flex-col gap-2 flex-1">
                                    <h4
                                        className="text-white text-lg group-hover:text-[#beff00] transition-colors duration-300"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p
                                        className="text-[#666] text-xs leading-relaxed flex-1"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {item.description}
                                    </p>
                                    <div className="pt-1">
                                        <span className="inline-flex items-center justify-center w-8 h-8 border border-[#222] text-[#333] group-hover:border-[#beff00] group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] transition-all duration-300">
                                            <ArrowRight size={13} />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
