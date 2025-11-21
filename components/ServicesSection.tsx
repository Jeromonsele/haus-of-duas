import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const ServicesSection: React.FC<{ onInquire: (service: string) => void }> = ({ onInquire }) => {
    return (
        <section id="services" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
            <FadeIn className="mb-24 text-center">
                <span className="block text-[10px] tracking-widest uppercase mb-4 opacity-40">03 / Offerings</span>
                <h2 className="text-5xl md:text-7xl font-serif mb-6">Visual Ecosystems</h2>
                <p className="text-lg font-light opacity-60 max-w-xl mx-auto">
                    Tailored approaches to meet the narrative needs of your space.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* CARD 1: Bespoke (Video Background) */}
                <FadeIn delay={0.2} className="h-full">
                    <div className="group relative h-[600px] md:h-[800px] overflow-hidden bg-[#1C1C1C] cursor-pointer" onClick={() => onInquire('Bespoke')}>
                        <div className="absolute inset-0">
                            {/* Fallback Image */}
                            <img
                                src="/images/bespoke-bg.png"
                                alt="Bespoke Art"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[1.5s]"
                            />
                            {/* Video Overlay */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
                                src="https://cdn.pixabay.com/video/2023/10/26/186636-878456466_large.mp4"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-700" />
                        </div>

                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white z-20">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col items-start gap-3">
                                    <span className="text-[10px] uppercase tracking-widest border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full">
                                        Unique One-of-One
                                    </span>
                                    <span className="text-[10px] uppercase tracking-widest text-white/70 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                        Best For: Corporate HQs & Luxury Hotels
                                    </span>
                                </div>
                                <Plus className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                            </div>

                            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                <h3 className="font-serif text-5xl md:text-6xl mb-6 italic">Fully-Custom<br />Masterpiece</h3>
                                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                                    <p className="text-sm md:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-80 transition-opacity duration-500 delay-200 mb-8">
                                        Our process begins with a rigorous brand deep dive, exploring your heritage, ethos, and geographical roots. We translate these insights into bespoke art forms—from large-scale kinetic sculptures to data-driven digital installations. Each piece is crafted as a one-of-one masterpiece, ensuring your environment reflects your unique identity.
                                    </p>
                                    <button onClick={(e) => { e.stopPropagation(); onInquire('Bespoke'); }} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] border-b border-white/50 pb-2 hover:border-white hover:text-white/80 transition-all duration-300">
                                        Start Bespoke Project <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* CARD 2: Collections (Image) */}
                <FadeIn delay={0.4} className="h-full">
                    <div className="group relative h-[600px] md:h-[800px] overflow-hidden bg-[#E0E0E0] cursor-pointer" onClick={() => onInquire('Moodboard')}>
                        <div className="absolute inset-0">
                            <img
                                src="/images/moodboard-bg.png"
                                alt="Moodboard"
                                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-700" />
                        </div>

                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-[#1C1C1C] group-hover:text-white z-20 transition-colors duration-500">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col items-start gap-3">
                                    <span className="text-[10px] uppercase tracking-widest border border-current px-3 py-1 rounded-full group-hover:border-white/30 group-hover:bg-white/5 group-hover:backdrop-blur-sm">
                                        Curated Collections
                                    </span>
                                    <span className="text-[10px] uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 group-hover:text-white/60">
                                        Best For: Multi-site Offices & Retail
                                    </span>
                                </div>
                                <Plus className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                            </div>

                            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                <h3 className="font-serif text-5xl md:text-6xl mb-6 italic">Moodboard<br />Editions</h3>
                                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                                    <p className="text-sm md:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-80 transition-opacity duration-500 delay-200 mb-8">
                                        Perfect for rapid scaling, these curated libraries offer theme-driven collections that ensure visual consistency across multiple locations. Designed for agility, these collections allow for seasonal refreshes, keeping your environment dynamic and evolving.
                                    </p>
                                    <button onClick={(e) => { e.stopPropagation(); onInquire('Moodboard'); }} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] border-b border-current pb-2 hover:opacity-70 transition-all duration-300">
                                        View Collections <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ServicesSection;
