import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "/IMAGE/img/acceuil image1 (1).jpg",
    "/IMAGE/img/Acceueil (2).jpg",
    "/IMAGE/img/Acceueil.jpg",
    "/IMAGE/img/WhatsApp Image 2025-06-16 à 08.22.11_dffd8de1.jpg",
    "/IMAGE/img/acceuilD.jpg",
    "/IMAGE/img/WhatsApp Image 2025-06-17 à 11.09.43_1ac1079f.jpg",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            {/* Image de fond avec transition fluide */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
                    />
                    {/* Gradient Overlay MIT - Left Focus */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>
            </AnimatePresence>

            {/* Contenu MIT Style - Left Aligned, Grid-like, Clean */}
            <div className="absolute inset-0 flex items-center z-10">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        {/* Top Line decoration */}
                        <div className="w-24 h-1 bg-white mb-10"></div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-[0.95] mb-10 tracking-tight">
                            ÉDUQUER <br />
                            AVEC LE <span className="font-serif italic font-light text-white/90">CŒUR</span> <br />
                            DE DON BOSCO.
                        </h1>

                        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-16">
                            <p className="text-lg text-white/80 max-w-md leading-relaxed font-light border-l border-white/30 pl-6">
                                Une communauté engagée pour l'avenir de la jeunesse au Togo.
                            </p>
                            <div className="text-white font-sans text-xs tracking-widest uppercase opacity-80 pt-1 hidden md:block">
                                Formation <br />
                                Spiritualité <br />
                                Excellence
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-0">
                            <a
                                href="#mission"
                                className="px-10 py-5 bg-white text-slate-950 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
                            >
                                Découvrir notre mission
                            </a>
                            <a
                                href="#contact"
                                className="px-10 py-5 border border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-colors"
                            >
                                Nous contacter
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Minimaliste */}
            <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 z-20 flex justify-between items-end">
                <div className="flex items-center gap-4">
                    <span className="text-white/50 font-mono text-sm">0{currentIndex + 1}</span>
                    <div className="flex gap-1">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1 transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    <span className="text-white/50 font-mono text-sm">0{images.length}</span>
                </div>

                <div className="flex gap-0">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 border-y border-r border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
