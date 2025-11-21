import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

const AllProjects: React.FC<{ onClose: () => void; onSelect: (p: Project) => void }> = ({ onClose, onSelect }) => (
    <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[60] bg-[#F5F2EB] overflow-y-auto"
    >
        <div className="min-h-screen p-6 md:p-12 max-w-[1800px] mx-auto">
            <div className="flex justify-between items-center mb-24 sticky top-0 pt-12 pb-6 bg-[#F5F2EB] z-10 border-b border-black/5">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-serif"
                >
                    Full Portfolio
                </motion.h2>
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    onClick={onClose}
                    className="p-4 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-[#1C1C1C]" />
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-24">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        onClick={() => onSelect(project)}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/5] overflow-hidden bg-[#EBE8E0] mb-6 relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-black/10 pb-4 group-hover:border-black transition-colors">
                            <h3 className="text-2xl font-serif italic">{project.title}</h3>
                            <span className="text-[10px] uppercase tracking-widest opacity-50">{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
);

export default AllProjects;
