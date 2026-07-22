// src/components/Preloader.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
    onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 1800; // ms to count 0 -> 100
        const start = performance.now();
        let frame: number;

        function tick(now: number) {
            const elapsed = now - start;
            const pct = Math.min(elapsed / duration, 1);
            // ease-out so it feels like it's settling into place
            const eased = 1 - Math.pow(1 - pct, 2);
            setProgress(Math.round(eased * 100));

            if (pct < 1) {
                frame = requestAnimationFrame(tick);
            } else {
                // small hold at 100% before handing off to the exit animation
                setTimeout(onFinish, 350);
            }
        }
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [onFinish]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-6"
        >
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <motion.div
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-60 sm:w-[500px] sm:h-[400px] bg-[#beff00]/8 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm sm:max-w-none">
                {/* Small tag line above */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-[#beff00] text-[10px] sm:text-xs tracking-[0.22em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 leading-snug"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    Crawford Engineering & Infrastructure
                </motion.span>

                {/* Big reveal text */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.2rem,14vw,6.5rem)] sm:text-[clamp(2.75rem,9vw,6.5rem)] leading-none text-white tracking-tight"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        CRAWFORD
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-8">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.2rem,14vw,6.5rem)] sm:text-[clamp(2.75rem,9vw,6.5rem)] leading-none text-[#beff00] tracking-tight"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        ENGINEERING
                    </motion.h1>
                </div>

                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex items-center gap-3 sm:gap-4 w-full max-w-[220px] sm:max-w-none sm:w-[280px]"
                >
                    <div className="relative flex-1 w-full h-0.5 bg-white/10 overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-[#beff00]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span
                        className="text-[#666] text-[11px] sm:text-xs tabular-nums w-auto sm:w-10 text-center sm:text-right"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        {progress}%
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
}
