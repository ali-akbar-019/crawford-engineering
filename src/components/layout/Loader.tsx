import { useEffect } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
    onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
    useEffect(() => {
        const timer = window.setTimeout(() => onFinish(), 1800);
        return () => window.clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-[#beff00]/8 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[280px] h-[280px] rounded-full bg-[#beff00]/6 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-3xl px-6 lg:px-10"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-2 w-2 bg-[#beff00]" />
                    <span
                        className="text-[10px] uppercase tracking-[0.35em] text-[#beff00]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Initialising site
                    </span>
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.8rem,8vw,5.6rem)] leading-none tracking-[0.08em] text-white"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        CRAWFORD
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.8rem,8vw,5.6rem)] leading-none tracking-[0.08em] text-[#beff00]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        ENGINEERING
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 h-[1px] w-full origin-left bg-[#2a2a2a]"
                />

                <div className="mt-6 flex items-center gap-3">
                    <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-[#1d1d1d]">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            className="h-full w-1/3 bg-[#beff00]"
                        />
                    </div>
                    <span
                        className="text-[10px] uppercase tracking-[0.3em] text-[#666]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Loading
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
