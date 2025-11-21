import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000); // Show for 2 seconds
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1C1C1C] text-[#F5F2EB]"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest uppercase"
                >
                    Haus of Duas
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Preloader;
