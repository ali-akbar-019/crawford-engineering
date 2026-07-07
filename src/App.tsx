// src/App.tsx

import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";

// AnimatePresence needs access to location, so we wrap inside BrowserRouter
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen flex flex-col bg-[#0a0a0a]">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}