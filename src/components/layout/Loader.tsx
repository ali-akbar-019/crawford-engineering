import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
    onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setExiting(true), 1800);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onFinish}>
            {!exiting && (
                <motion.div
                    exit={{ clipPath: "inset(0 0 0 100%)" }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
                >
                    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                    <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-[#beff00]/8 blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[280px] h-[280px] rounded-full bg-[#beff00]/6 blur-[100px]" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Pulsing glow behind logo */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
                            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            className="absolute w-[260px] h-[260px] rounded-full bg-[#beff00]/20 blur-[60px]"
                        />

                        {/* Logo: scale + fade + clip-path sweep reveal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[200px] sm:w-[260px]"
                        >
                            <motion.img
                                src="/images/logo.png"
                                alt="Crawford Engineering"
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0% 0 0)" }}
                                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-auto relative z-10"
                            />
                        </motion.div>

                        {/* Progress line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10 h-[2px] w-[200px] sm:w-[260px] overflow-hidden rounded-full bg-[#1d1d1d]"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="h-full w-1/3 bg-[#beff00]"
                            />
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#666]"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Loading
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}