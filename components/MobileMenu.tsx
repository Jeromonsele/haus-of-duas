import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MobileMenu: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onInquire: () => void;
    onNavigate: (id: string) => void;
}> = ({ isOpen, onClose, onInquire, onNavigate }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[80] bg-[#1C1C1C] text-[#F5F2EB] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Noise Texture for cinematic feel */}
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
                    <svg className="w-full h-full">
                        <filter id="noise-mobile">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise-mobile)" />
                    </svg>
                </div>

                <motion.button
                    onClick={onClose}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute top-8 right-8 z-50 p-4 hover:opacity-70 transition-opacity"
                >
                    <X className="w-10 h-10 text-[#F5F2EB]" />
                </motion.button>

                <nav className="flex flex-col items-center space-y-10 z-10 relative">
                    {['Manifesto', 'Gallery', 'Services', 'Process'].map((item, i) => (
                        <div key={item} className="overflow-hidden">
                            <motion.a
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                    onNavigate(item.toLowerCase());
                                }}
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '100%' }}
                                transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="block text-5xl md:text-7xl font-serif italic font-light hover:text-white/50 transition-colors"
                            >
                                {item}
                            </motion.a>
                        </div>
                    ))}
                </nav>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-16 z-10"
                >
                    <button
                        onClick={() => { onClose(); onInquire(); }}
                        className="text-sm uppercase tracking-[0.3em] border border-white/20 px-10 py-4 hover:bg-[#F5F2EB] hover:text-[#1C1C1C] transition-all"
                    >
                        Start Inquiry
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-6 text-[10px] uppercase tracking-widest z-10 opacity-30"
                >
                    Haus of Duas © 2025
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default MobileMenu;
