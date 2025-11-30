import React from 'react';
import FadeIn from './FadeIn';
import { Carousel, Card } from './ui/apple-cards-carousel';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';

const GallerySection: React.FC = () => {
    const cards = PROJECTS.map((project, index) => (
        <Card key={project.id} card={{
            src: project.image,
            title: project.title,
            category: project.category,
            content: <ProjectContent project={project} />
        }} index={index} />
    ));

    return (
        <section id="gallery" className="py-24 bg-white overflow-hidden">
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto mb-12">
                <FadeIn>
                    <span className="block text-[10px] tracking-widest uppercase mb-2 opacity-40">02 / Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Spaces</h2>
                    <p className="text-lg font-light opacity-60 max-w-xl">
                        Explore our portfolio of transformed environments.
                    </p>
                </FadeIn>
            </div>

            <div className="w-full h-full">
                <Carousel items={cards} />
            </div>
        </section>
    );
};

import { Tooltip } from './ui/tooltip-card';

const ProjectContent: React.FC<{ project: Project }> = ({ project }) => {
    const renderEnhancedDescription = (text: string) => {
        const keywords: { [key: string]: { image: string; title: string; desc: string } } = {
            "Kyoto": { image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop", title: "Kyoto", desc: "The cultural capital of Japan." },
            "London": { image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop", title: "London", desc: "A global hub of art and culture." },
            "Zurich": { image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=2606&auto=format&fit=crop", title: "Zurich", desc: "Where precision meets nature." },
            "New York": { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop", title: "New York", desc: "The city that never sleeps." },
            "Chicago": { image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2670&auto=format&fit=crop", title: "Chicago", desc: "Architectural marvels." },
            "Paris": { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop", title: "Paris", desc: "City of lights and love." },
            "Biophilic": { image: "https://images.unsplash.com/photo-1466781783310-626737086db4?q=80&w=2671&auto=format&fit=crop", title: "Biophilic Design", desc: "Connecting people with nature." },
            "Monochromatic": { image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2574&auto=format&fit=crop", title: "Monochromatic", desc: "Exploring single-color aesthetics." },
            "Kinetic Sculptures": { image: "https://images.unsplash.com/photo-1515696955266-4f67e13219a8?q=80&w=2670&auto=format&fit=crop", title: "Kinetic Art", desc: "Art that moves with you." },
        };

        const parts = text.split(new RegExp(`(${Object.keys(keywords).join("|")})`, "gi"));

        return parts.map((part, index) => {
            const keyword = Object.keys(keywords).find(k => k.toLowerCase() === part.toLowerCase());
            if (keyword) {
                const data = keywords[keyword];
                return (
                    <Tooltip
                        key={index}
                        content={
                            <div className="flex flex-col gap-2">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-32 object-cover rounded-md"
                                />
                                <p className="font-bold text-neutral-800 dark:text-neutral-200">{data.title}</p>
                                <p className="text-xs">{data.desc}</p>
                            </div>
                        }
                    >
                        <span className="font-bold cursor-pointer underline decoration-dotted decoration-neutral-400 underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                            {part}
                        </span>
                    </Tooltip>
                );
            }
            return part;
        });
    };

    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-10">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    {project.location} — {project.year}
                </span>{" "}
                <br />
                <span className="inline-block mt-4 mb-4">
                    Category:{" "}
                    <Tooltip
                        content={
                            <div className="flex flex-col gap-2">
                                <img
                                    src={project.image}
                                    alt={project.category}
                                    className="w-full h-32 object-cover rounded-md"
                                />
                                <p className="font-bold text-neutral-800 dark:text-neutral-200">{project.category}</p>
                                <p className="text-xs">Explore more {project.category} projects.</p>
                            </div>
                        }
                    >
                        <span className="font-bold cursor-pointer underline decoration-dotted decoration-neutral-400 underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                            {project.category}
                        </span>
                    </Tooltip>
                </span>
                <br />
                {renderEnhancedDescription(project.description)}
            </p>
            <img
                src={project.image}
                alt={project.title}
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-xl shadow-lg"
            />
        </div>
    );
};

export default GallerySection;
