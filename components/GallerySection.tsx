import React from 'react';
import FadeIn from './FadeIn';
import ViewAllButton from './ViewAllButton';
import GalleryItem from './GalleryItem';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';

const GallerySection: React.FC<{ onShowAll: () => void; onSelectProject: (p: Project) => void }> = ({ onShowAll, onSelectProject }) => {
    return (
        <section id="gallery" className="py-24 bg-white overflow-hidden">
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
                <FadeIn>
                    <span className="block text-[10px] tracking-widest uppercase mb-2 opacity-40">02 / Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Curated Spaces</h2>
                </FadeIn>
                <ViewAllButton onClick={onShowAll} />
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-12 scrollbar-hide snap-x">
                {PROJECTS.map((project) => (
                    <GalleryItem
                        key={project.id}
                        project={project}
                        onClick={() => onSelectProject(project)}
                    />
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
