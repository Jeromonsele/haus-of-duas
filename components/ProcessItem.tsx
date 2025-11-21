import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProcessItem: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-25% 0px -25% 0px" });

    return (
        <motion.div
            ref={ref}
            className={`flex gap-6 border-t border-white/10 pt-6 transition-all duration-700 ${isInView ? 'opacity-100 blur-0 translate-x-0' : 'opacity-20 blur-[2px] -translate-x-4'}`}
        >
            <span className="text-xs font-mono mt-1 text-white/40">{number}</span>
            <div>
                <h4 className={`font-serif text-2xl mb-2 transition-colors duration-500 ${isInView ? 'text-white' : 'text-white/60'}`}>{title}</h4>
                <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">{desc}</p>
            </div>
        </motion.div>
    )
}

export default ProcessItem;
