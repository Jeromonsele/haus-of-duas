import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const ViewAllButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            className="hidden md:flex items-center gap-3 group cursor-pointer overflow-hidden p-2"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
        >
            <span className="relative overflow-hidden">
                <motion.span
                    className="block text-[10px] uppercase tracking-widest"
                    variants={{
                        initial: { y: "100%" },
                        animate: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                >
                    View All Projects
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </span>

            <motion.div
                variants={{
                    initial: { scale: 0, opacity: 0 },
                    animate: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 } }
                }}
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300"
            >
                <MoveRight className="w-3 h-3 group-hover:text-white transition-colors" />
            </motion.div>
        </motion.button>
    );
};

export default ViewAllButton;
