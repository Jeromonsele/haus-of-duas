import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [textIndex, setTextIndex] = useState(0);
    const words = ["HAUS", "OF", "DUAS"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => {
                if (prev === words.length - 1) {
                    clearInterval(interval);
                    setTimeout(onComplete, 1000); // Wait a bit after the last word
                    return prev;
                }
                return prev + 1;
            });
        }, 500);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1C1C1C] text-[#F5F2EB]"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="text-6xl md:text-9xl font-bold overflow-hidden">
                <motion.span
                    key={textIndex}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block"
                >
                    {words[textIndex]}
                </motion.span>
            </div>
        </motion.div>
    );
};

export default Preloader;
