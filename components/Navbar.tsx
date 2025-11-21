import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC<{
    isScrolled: boolean;
    onOpenMobileMenu: () => void;
    onInquire: () => void;
    onNavigate: (id: string) => void;
    onScrollToTop: (e: React.MouseEvent) => void;
}> = ({ isScrolled, onOpenMobileMenu, onInquire, onNavigate, onScrollToTop }) => {
    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${isScrolled ? 'bg-[#F5F2EB]/90 backdrop-blur-md py-4 border-b border-[#1C1C1C]/5' : 'py-8 bg-transparent'}`}>
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" onClick={onScrollToTop} className="font-sans text-xs md:text-sm tracking-[0.25em] font-semibold uppercase z-50 text-[#1C1C1C]">
                    Haus of Duas
                </a>

                <div className="hidden md:flex gap-12 text-[10px] font-medium tracking-[0.15em] uppercase opacity-60">
                    {['Manifesto', 'Gallery', 'Services', 'Process'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase()); }}
                            className="hover:opacity-100 hover:text-black transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-black -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                <button onClick={onInquire} className="hidden md:block text-[10px] tracking-[0.15em] uppercase border border-[#1C1C1C]/20 px-6 py-2 hover:bg-[#1C1C1C] hover:text-[#F5F2EB] transition-colors">
                    Inquire
                </button>

                <button onClick={onOpenMobileMenu} className="md:hidden z-50 p-2 -mr-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
