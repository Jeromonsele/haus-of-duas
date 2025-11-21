import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const HeroSection: React.FC = () => {
    const { scrollY } = useScroll();

    // Parallax & Opacity
    const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
    const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <header className="relative h-[100vh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Living Gradient Background - Softer, Warmer */}
            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                {/* Warm Peach/Beige Blob */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] bg-[#E6DCCF] rounded-full mix-blend-multiply filter blur-[100px] opacity-60"
                />
                {/* Soft Blue/Grey Blob */}
                <motion.div
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[0%] right-[0%] w-[50vw] h-[50vw] bg-[#D1D5DB] rounded-full mix-blend-multiply filter blur-[100px] opacity-50"
                />
                {/* Central Light */}
                <motion.div
                    animate={{ opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-white rounded-full mix-blend-soft-light filter blur-[80px] opacity-60"
                />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto text-center mt-12 w-full">
                <FadeIn delay={0.2}>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 opacity-40">Strategic Art Curation</p>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-serif font-light tracking-tight leading-[0.9] text-[#1C1C1C] mb-12 text-balance">
                        From Blank Space <br className="hidden md:block" />
                        <span className="italic font-normal text-black/80">to Brand Story</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-xl font-light max-w-lg mx-auto leading-relaxed mb-16 text-[#1C1C1C]/60 text-balance">
                            Transforming corporate environments into curated narratives.
                            Making art strategic, not incidental.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </header>
    );
};

export default HeroSection;
