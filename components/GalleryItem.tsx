import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';

const GalleryItem: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                onClick();
            }
        }}
        className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[500px] group cursor-pointer overflow-hidden bg-[#EBE8E0]"
    >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale group-hover:grayscale-0" />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="overflow-hidden mb-2">
                <p className="text-white font-serif text-3xl italic">{project.title}</p>
            </div>
            <div className="overflow-hidden flex items-center justify-between">
                <p className="text-white/80 text-[10px] uppercase tracking-widest">{project.category}</p>
                <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
            </div>
        </div>
    </div>
);

export default GalleryItem;
