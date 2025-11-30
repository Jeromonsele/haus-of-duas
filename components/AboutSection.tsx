import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    const team = [
        {
            name: "Elena Duas",
            role: "Principal Architect",
            bio: "Visionary behind the Haus, blending brutalism with biophilic design.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
        },
        {
            name: "Marcus Chen",
            role: "Head of Interiors",
            bio: "Master of textures and light, creating emotive spatial experiences.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
        },
        {
            name: "Sarah Jenkins",
            role: "Design Director",
            bio: "Curating the narrative of every space with precision and grace.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop"
        }
    ];

    return (
        <section id="about" className="py-32 bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
                <FadeIn>
                    <span className="block text-[10px] tracking-widest uppercase mb-2 opacity-40">03 / About</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-16">The Philosophy</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
                    <FadeIn delay={0.2}>
                        <div className="text-lg md:text-xl font-light leading-relaxed opacity-80 space-y-8">
                            <p>
                                Haus of Duas is not just a design studio; it is a manifesto of living. We believe that spaces are not merely containers for people, but active participants in the human experience.
                            </p>
                            <p>
                                Our approach is rooted in "Emotional Brutalism" — a juxtaposition of raw, honest materials with soft, emotive lighting and textures. We strip away the superfluous to reveal the essential, creating environments that breathe, evolve, and inspire.
                            </p>
                            <p>
                                Every project is a dialogue between the architecture, the environment, and the inhabitants. We listen to the silence of the space before we draw a single line.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                                alt="Abstract architectural detail"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <h3 className="text-3xl md:text-4xl font-serif mb-12">The Minds</h3>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <FadeIn key={index} delay={0.2 * (index + 1)}>
                            <div className="group relative overflow-hidden rounded-lg bg-neutral-800/50 p-6 hover:bg-neutral-800 transition-colors duration-300">
                                <div className="aspect-square mb-6 overflow-hidden rounded-md">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <h4 className="text-xl font-serif mb-1">{member.name}</h4>
                                <p className="text-xs uppercase tracking-widest opacity-50 mb-3">{member.role}</p>
                                <p className="text-sm opacity-70 font-light">{member.bio}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
