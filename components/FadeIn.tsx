/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: direction === 'up' ? 40 : 0 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], 
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;