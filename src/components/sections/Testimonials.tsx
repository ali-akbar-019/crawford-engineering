// src/components/sections/Testimonials.tsx

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { siteData } from "../../data/content";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Testimonials() {
    return (
        <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
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
                        Client Feedback
                    </span>
                </motion.div>

                <div className="overflow-hidden mb-14">
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2rem,4.5vw,3.5rem)] leading-none text-white"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        What clients say
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
                    {siteData.testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp as any}
                            className="bg-[#0d0d0d] p-8 flex flex-col gap-6"
                        >
                            <Quote size={22} className="text-[#beff00]/40" />
                            <p
                                className="text-[#ccc] text-base lg:text-lg leading-relaxed flex-1"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                "{t.quote}"
                            </p>
                            <div className="pt-4 border-t border-[#1a1a1a]">
                                <p
                                    className="text-white text-sm"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {t.author}
                                </p>
                                <p
                                    className="text-[#555] text-xs mt-0.5"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {t.role} · {t.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
