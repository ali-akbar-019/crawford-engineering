// src/components/layout/Navbar.tsx

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteData } from "../../data/content";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Detect scroll to toggle background
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
                        ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222]"
                        : "bg-transparent border-b border-transparent"
                    }
        `}
            >
                <div className="max-w-[1680px] mx-auto px-6 lg:px-10 2xl:px-16">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* ── Logo ── */}
                        <Link to="/" className="flex items-center gap-3 group">
                            {/* Lime square accent */}
                            <motion.div
                                className="w-2 h-8 bg-[#beff00]"
                                whileHover={{ scaleY: 1.2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            />
                            <div className="flex flex-col leading-none">
                                <span
                                    className="text-white text-xl lg:text-2xl tracking-wide"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Crawford
                                </span>
                                <span
                                    className="text-[#888] text-[10px] tracking-[0.2em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Engineering & Infrastructure
                                </span>
                            </div>
                        </Link>

                        {/* ── Desktop Nav ── */}
                        <nav className="hidden md:flex items-center gap-8">
                            {siteData.nav.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="relative group"
                                >
                                    <span
                                        className={`
                      text-sm tracking-[0.12em] uppercase transition-colors duration-200
                      ${isActive(item.path)
                                                ? "text-[#beff00]"
                                                : "text-[#aaa] group-hover:text-white"
                                            }
                    `}
                                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                                    >
                                        {item.label}
                                    </span>

                                    {/* Active indicator */}
                                    {isActive(item.path) && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#beff00]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}

                                    {/* Hover indicator */}
                                    {!isActive(item.path) && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    )}
                                </Link>
                            ))}

                            {/* CTA */}
                            <Link
                                to="/contact"
                                className="
                  ml-4 px-5 py-2 text-sm tracking-[0.1em] uppercase font-medium
                  bg-[#beff00] text-[#0a0a0a]
                  hover:bg-white transition-colors duration-200
                  relative overflow-hidden group
                "
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <span className="relative z-10">Get in touch</span>
                            </Link>
                        </nav>

                        {/* ── Mobile hamburger ── */}
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#beff00] transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={22} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={22} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                    </div>
                </div>
            </motion.header>

            {/* ── Mobile Menu Overlay ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop — plain dim overlay, no blur (blur over full screen was the main lag source) */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/70 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                            style={{ willChange: "transform" }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-[75vw] max-w-xs bg-[#111] border-l border-[#222] flex flex-col md:hidden"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 h-16 border-b border-[#222]">
                                <span
                                    className="text-[#beff00] text-lg tracking-widest uppercase"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    Menu
                                </span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[#888] hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Nav links */}
                            <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
                                {siteData.nav.map((item, i) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ x: 40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`
                        flex items-center gap-3 py-4 border-b border-[#1e1e1e]
                        text-2xl tracking-wide transition-colors duration-200
                        ${isActive(item.path)
                                                    ? "text-[#beff00]"
                                                    : "text-white hover:text-[#beff00]"
                                                }
                      `}
                                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                        >
                                            {isActive(item.path) && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#beff00]" />
                                            )}
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom CTA */}
                            <div className="px-6 pb-10">
                                <Link
                                    to="/contact"
                                    className="
                    block w-full text-center py-3 text-sm tracking-[0.15em] uppercase font-medium
                    bg-[#beff00] text-[#0a0a0a] hover:bg-white transition-colors duration-200
                  "
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    Get in touch
                                </Link>

                                <p
                                    className="mt-6 text-[#555] text-xs tracking-widest text-center uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    © 2026 Crawford Engineering
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}