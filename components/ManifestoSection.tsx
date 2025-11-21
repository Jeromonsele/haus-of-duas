import React from 'react';
import FadeIn from './FadeIn';

const ManifestoSection: React.FC = () => {
    return (
        <section id="manifesto" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

                {/* Sticky Header */}
                <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-32 self-start">
                    <FadeIn>
                        <span className="block text-[10px] tracking-widest uppercase mb-6 opacity-40">01 / Manifesto</span>
                        <h2 className="text-4xl md:text-6xl font-serif leading-[1] mb-8">
                            Why we<br />exist
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-balance opacity-70 font-serif italic">
                            "A space without a story is just a room."
                        </p>
                    </FadeIn>
                </div>

                {/* Scrolling Content */}
                <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 space-y-16 md:space-y-24">
                    {[
                        {
                            title: "The Disconnect",
                            text: "Buying one standout piece is great—but without the rest of the environment following it, the space still feels scattered. You end up with one story instead of a story told throughout."
                        },
                        {
                            title: "The Burden",
                            text: "The full custom art world is often too heavy: dozens of meetings, long lead times, massive budgets. Many mid-market buyers simply walk away."
                        },
                        {
                            title: "The Impact",
                            text: "Art is not just decoration. Studies show curated art boosts well-being, reduces stress, and communicates brand values to every visitor.",
                            highlight: true
                        }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className={`group cursor-default`}>
                                <h3 className="font-serif text-3xl md:text-4xl mb-4 text-[#1C1C1C] group-hover:text-black transition-colors flex items-baseline gap-4">
                                    <span className="text-xs font-sans opacity-30 tracking-widest">0{i + 1}</span>
                                    {item.title}
                                </h3>
                                <p className="text-base md:text-lg font-light leading-relaxed opacity-60 max-w-xl">{item.text}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManifestoSection;
