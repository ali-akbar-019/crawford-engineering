// src/components/sections/SectorCard.tsx

import { motion } from "framer-motion";
import { Building2, TrafficCone } from "lucide-react";
import type { Sector } from "../../types";

const ICON_MAP: Record<string, React.ReactNode> = {
    TrafficCone: <TrafficCone size={24} />,
    Building2: <Building2 size={24} />,
};

interface SectorCardProps {
    sector: Sector;
    index: number;
}

export default function SectorCard({ sector, index }: SectorCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col overflow-hidden border border-[#1a1a1a] hover:border-[#beff00]/40 bg-[#0d0d0d] transition-all duration-500"
        >
            {/* Background number — decorative */}
            <div
                className="absolute -right-4 -bottom-6 text-[10rem] leading-none text-[#111] group-hover:text-[#161616] transition-colors duration-500 pointer-events-none select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
                {String(index + 1).padStart(2, "0")}
            </div>

            {/* Top lime sweep bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden bg-[#111]">
                <motion.div
                    className="h-full bg-[#beff00]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ originX: 0 }}
                />
            </div>

            <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-8 flex-1">

                {/* Icon */}
                <div className="w-12 h-12 border border-[#222] flex items-center justify-center text-[#beff00] group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] group-hover:border-[#beff00] transition-all duration-300">
                    {ICON_MAP[sector.icon]}
                </div>

                {/* Title + subtitle */}
                <div>
                    <h3
                        className="text-white text-4xl lg:text-5xl leading-none mb-3 group-hover:text-[#beff00] transition-colors duration-300"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        {sector.title}
                    </h3>
                    <p
                        className="text-[#555] text-sm leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        {sector.subtitle}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-[1px] bg-[#222] group-hover:w-full group-hover:bg-[#beff00]/20 transition-all duration-500" />

                {/* Items list */}
                <ul className="flex flex-col gap-3 flex-1">
                    {sector.items.map((item, i) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + i * 0.08, duration: 0.4 }}
                            className="flex items-start gap-3 group/item"
                        >
                            {/* Bullet */}
                            <span className="mt-[7px] w-1 h-1 bg-[#beff00] shrink-0 group-hover/item:scale-150 transition-transform duration-200" />
                            <span
                                className="text-[#666] text-sm leading-relaxed group-hover/item:text-[#aaa] transition-colors duration-200"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {item}
                            </span>
                        </motion.li>
                    ))}
                </ul>

                {/* Bottom tag */}
                <div className="flex items-center gap-2 pt-4 border-t border-[#161616]">
                    <span
                        className="text-[9px] tracking-[0.25em] uppercase text-[#444] group-hover:text-[#beff00] transition-colors duration-300"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        {sector.items.length} focus areas
                    </span>
                    <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
                </div>
            </div>
        </motion.div>
    );
}