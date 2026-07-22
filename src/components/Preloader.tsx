// src/components/Preloader.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
    onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2800;
        const start = performance.now();
        let frame: number;

        function tick(now: number) {
            const elapsed = now - start;
            const pct = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - pct, 2);
            setProgress(Math.round(eased * 100));
            if (pct < 1) {
                frame = requestAnimationFrame(tick);
            } else {
                onFinish();
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
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            {/* Corner label, sharp/technical framing */}
            <span
                className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-[#beff00]"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                Crawford Engineering
            </span>

            {/* Huge logo, soft fluid reveal — gentle scale/fade + smooth wipe, no hard edges */}
            <motion.div
                animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-[#beff00]/8 blur-[110px] pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="relative w-[92vw] sm:w-[70vw] md:w-[52vw] max-w-[820px]"
            >
                <motion.img
                    src="\images\logo.png"
                    alt="Crawford Engineering"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    className="w-full h-auto"
                />
            </motion.div>

            {/* Progress bar + number, sitting right under the logo */}
            <div className="relative mt-8 flex items-center gap-4 w-[70vw] sm:w-[40vw] md:w-[28vw] max-w-[360px]">
                <div className="relative flex-1 h-[3px] bg-[#1a1a1a]">
                    <motion.div
                        className="h-full bg-[#beff00]"
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                    />
                </div>
                <span
                    className="text-[11px] tabular-nums tracking-[0.2em] text-[#666] w-10 text-right"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    {String(progress).padStart(3, "0")}%
                </span>
            </div>
        </motion.div>
    );
}