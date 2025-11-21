import React from 'react';

const Footer: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-[#F5F2EB] text-[#1C1C1C] pt-32 pb-12 px-6 md:px-12 border-t border-[#1C1C1C]/10">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div className="col-span-2">
                        <h2 className="font-serif text-4xl md:text-6xl mb-8">Haus of Duas</h2>
                        <p className="max-w-md font-light opacity-60">
                            Elevating corporate identity through the strategic deployment of fine art and immersive installations.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest opacity-40 mb-6">Sitemap</h4>
                        {['Manifesto', 'Gallery', 'Services', 'Process'].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase()); }}
                                className="block font-serif text-xl hover:italic transition-all"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest opacity-40 mb-6">Connect</h4>
                        <a href="#" className="block font-serif text-xl hover:italic transition-all">Instagram</a>
                        <a href="#" className="block font-serif text-xl hover:italic transition-all">LinkedIn</a>
                        <a href="#" className="block font-serif text-xl hover:italic transition-all">Email Us</a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-[#1C1C1C]/10 opacity-40 text-[10px] uppercase tracking-widest">
                    <span>© 2025 Haus of Duas</span>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
