import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Calendar } from 'lucide-react';
import { Project } from '../types';

const ProjectDetail: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-[#F5F2EB] overflow-y-auto"
    >
        <div className="relative min-h-screen">
            <button onClick={onClose} className="fixed top-6 right-6 z-50 p-4 bg-black/5 hover:bg-black/10 rounded-full transition-colors">
                <X className="w-6 h-6 text-[#1C1C1C]" />
            </button>

            <div className="h-[60vh] md:h-[70vh] relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F2EB]" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="inline-block text-xs tracking-[0.2em] uppercase bg-[#1C1C1C] text-[#F5F2EB] px-4 py-2 mb-6">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-[#1C1C1C] mb-4">{project.title}</h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-8">
                    <div className="flex items-center gap-4 text-sm tracking-widest uppercase opacity-60 border-b border-black/10 pb-4">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                    </div>
                    <div className="flex items-center gap-4 text-sm tracking-widest uppercase opacity-60 border-b border-black/10 pb-4">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                    </div>
                    <div className="pt-8">
                        <p className="font-serif text-2xl italic mb-4">Services Rendered</p>
                        <ul className="space-y-2 text-sm opacity-70 font-light">
                            <li>• Art Strategy & Direction</li>
                            <li>• Procurement & Commissioning</li>
                            <li>• Installation Management</li>
                            <li>• Curatorial Text</li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-[#1C1C1C]">
                        {project.description}
                    </p>

                    <div className="mt-16 grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-[#E0E0E0] overflow-hidden">
                            <img src={project.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-150" alt="Detail 1" />
                        </div>
                        <div className="aspect-square bg-[#D6D6D6] overflow-hidden">
                            <img src={project.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-125 translate-x-10" alt="Detail 2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-24 text-center">
                <button onClick={onClose} className="text-sm uppercase tracking-widest border-b border-black hover:opacity-50 transition-opacity">Back to Gallery</button>
            </div>
        </div>
    </motion.div>
);

export default ProjectDetail;
