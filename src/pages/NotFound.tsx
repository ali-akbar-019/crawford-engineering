// src/pages/NotFound.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useDocumentTitle } from "../utils/useDocumentTitle";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export default function NotFound() {
    useDocumentTitle("Page Not Found");
    return (
        <motion.div
            variants={pageVariants as any}
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#0a0a0a] px-6 py-32 overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#beff00]/6 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(5rem,15vw,9rem)] leading-none text-[#beff00]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        404
                    </motion.h1>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-white text-2xl mt-2 mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    Page not found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-[#666] text-sm leading-relaxed mb-10"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    The page you're looking for doesn't exist or may have moved.
                    Let's get you back on track.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-[#beff00] text-[#0a0a0a] text-xs tracking-[0.15em] uppercase font-semibold hover:bg-white transition-colors duration-200"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                        Back to home
                    </Link>

                    <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-6 py-3 border border-[#222] text-[#999] text-xs tracking-[0.15em] uppercase hover:text-white hover:border-[#444] transition-colors duration-200"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Contact us
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}
