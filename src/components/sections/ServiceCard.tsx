// src/components/sections/ServiceCard.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Route,
    ClipboardList,
    Box,
    Calculator,
    Zap,
    FileText,
    BookOpen,
    ShieldAlert,
    TrainFront,
} from "lucide-react";
import type { Service } from "../../types";

const ICON_MAP: Record<string, React.ReactNode> = {
    RouteIcon: <Route size={20} />,
    TrainIcon: <TrainFront size={20} />,
    ClipboardList: <ClipboardList size={20} />,
    Box: <Box size={20} />,
    Calculator: <Calculator size={20} />,
    Zap: <Zap size={20} />,
    FileText: <FileText size={20} />,
    BookOpen: <BookOpen size={20} />,
    ShieldAlert: <ShieldAlert size={20} />,
};

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                delay: (index % 4) * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <Link
                to={`/services/${service.id}`}
                className="group relative bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#beff00]/40 transition-all duration-300 flex flex-col overflow-hidden h-full"
            >
                {/* Top lime bar — grows on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1a1a1a] overflow-hidden">
                    <motion.div
                        className="h-full bg-[#beff00]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ originX: 0 }}
                    />
                </div>

                <div className="p-7 flex flex-col gap-5 flex-1">

                    {/* Icon + category row */}
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 border border-[#222] flex items-center justify-center text-[#beff00] group-hover:bg-[#beff00] group-hover:text-[#0a0a0a] group-hover:border-[#beff00] transition-all duration-300">
                            {ICON_MAP[service.icon]}
                        </div>

                        <span
                            className={`
              text-[9px] tracking-[0.25em] uppercase px-2 py-1 border
              ${service.category === "infrastructure"
                                    ? "text-[#beff00] border-[#beff00]/30 bg-[#beff00]/5"
                                    : "text-[#888] border-[#333] bg-[#111]"
                                }
            `}
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {service.category === "infrastructure" ? "Infrastructure" : "Laboratory"}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className="text-white text-2xl lg:text-3xl leading-tight group-hover:text-[#beff00] transition-colors duration-300"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-[#555] text-sm leading-relaxed flex-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#161616]">
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[9px] tracking-[0.18em] uppercase text-[#444] px-2 py-1 border border-[#1c1c1c] group-hover:border-[#beff00]/20 group-hover:text-[#666] transition-colors duration-300"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
