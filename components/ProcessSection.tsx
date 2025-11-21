import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import ProcessItem from './ProcessItem';

const ProcessSection: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
    return (
        <section id="process" className="bg-[#111111] text-[#F5F2EB] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                <div className="relative z-10">
                    <FadeIn>
                        <span className="block text-[10px] tracking-widest uppercase mb-6 opacity-40">04 / Approach</span>
                        <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-none">
                            Art as <br />
                            <span className="italic opacity-50">Strategy</span>
                        </h2>
                        <p className="text-lg opacity-60 font-light max-w-md mb-12">
                            We move beyond simple decoration. Our process is a rigorous blend of data-driven brand analysis and intuitive artistic curation.
                        </p>
                        <button onClick={onInquire} className="group flex items-center gap-4 text-xs uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all">
                            <span>Start Your Project</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </FadeIn>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {[
                        { id: "01", title: "Immersion", desc: "We audit your brand values, architectural plans, and spatial dynamics to define a visual language." },
                        { id: "02", title: "Curation & Commission", desc: "We source from a global network or commission bespoke works using generative tools." },
                        { id: "03", title: "Production", desc: "Managing fabrication, framing, and logistics with museum-grade standards." },
                        { id: "04", title: "Installation", desc: "White-glove installation and lighting direction to ensure maximum impact." }
                    ].map((step) => (
                        <ProcessItem key={step.id} number={step.id} title={step.title} desc={step.desc} />
                    ))}
                </div>

            </div>

            {/* Background Ambience */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default ProcessSection;
