import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const InquiryModal: React.FC<{ isOpen: boolean; onClose: () => void; preSelectedService?: string }> = ({ isOpen, onClose, preSelectedService }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        service: '',
        details: ''
    });

    // Initialize service if preSelected
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            let initialService = '';
            // Map shortcodes from buttons to full labels
            if (preSelectedService === 'Bespoke') initialService = 'Fully-Custom Masterpiece';
            else if (preSelectedService === 'Moodboard') initialService = 'Moodboard Collection';
            else initialService = preSelectedService || '';

            setFormData(prev => ({
                ...prev,
                service: initialService
            }));
        }
    }, [isOpen, preSelectedService]);

    const isStep1Valid = formData.name.trim().length > 0 && formData.company.trim().length > 0;
    const isStep2Valid = formData.service.length > 0;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? '0%' : '100%' }}
                transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                className="fixed top-0 right-0 bottom-0 w-full md:w-[600px] bg-[#F5F2EB] z-[100] shadow-2xl flex flex-col"
            >
                <div className="p-8 flex justify-between items-center border-b border-[#1C1C1C]/10">
                    <span className="text-xs uppercase tracking-widest opacity-50">Inquiry Form</span>
                    <button onClick={onClose} className="hover:opacity-50 transition-opacity"><X className="w-6 h-6" /></button>
                </div>

                <div className="flex-1 p-8 md:p-16 overflow-y-auto">
                    {step === 1 ? (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-3xl font-serif mb-2">Let's start with the basics.</h3>
                                <p className="opacity-60 font-light">We'll tailor our portfolio to your needs.</p>
                            </div>

                            {/* Visual Indicator for Pre-Selected Service */}
                            {formData.service && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-3 px-4 py-3 bg-[#1C1C1C] text-[#F5F2EB] w-fit"
                                >
                                    <Check className="w-3 h-3" />
                                    <span className="text-[10px] uppercase tracking-widest font-medium">Selected: {formData.service}</span>
                                </motion.div>
                            )}

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest opacity-50">Your Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-xl focus:outline-none focus:border-[#1C1C1C] transition-colors"
                                        placeholder="e.g. Jane Doe"
                                        autoFocus
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest opacity-50">Company / Org</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-xl focus:outline-none focus:border-[#1C1C1C] transition-colors"
                                        placeholder="e.g. Sterling Partners"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => isStep1Valid && setStep(2)}
                                disabled={!isStep1Valid}
                                className={`group flex items-center gap-4 text-xs uppercase tracking-[0.25em] bg-[#1C1C1C] text-[#F5F2EB] px-8 py-4 transition-all ${isStep1Valid ? 'hover:bg-[#333]' : 'opacity-50 cursor-not-allowed'}`}
                            >
                                <span>Next Step</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-3xl font-serif mb-2">What are you looking for?</h3>
                                <p className="opacity-60 font-light">Tell us about the scope.</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    'Fully-Custom Masterpiece',
                                    'Moodboard Collection',
                                    'Art Strategy Consulting',
                                    'Other'
                                ].map((opt) => (
                                    <label key={opt} className="flex items-center gap-4 cursor-pointer group select-none" onClick={() => setFormData({ ...formData, service: opt })}>
                                        <div className={`w-6 h-6 border border-[#1C1C1C]/30 rounded-full flex items-center justify-center transition-colors ${formData.service === opt ? 'border-[#1C1C1C]' : 'group-hover:border-[#1C1C1C]'}`}>
                                            <div className={`w-3 h-3 bg-[#1C1C1C] rounded-full transition-opacity ${formData.service === opt ? 'opacity-100' : 'opacity-0'}`} />
                                        </div>
                                        <span className={`text-lg font-light transition-colors ${formData.service === opt ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]/60 group-hover:text-[#1C1C1C]'}`}>{opt}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="space-y-2 pt-8">
                                <label className="text-xs uppercase tracking-widest opacity-50">Any specifics?</label>
                                <textarea
                                    value={formData.details}
                                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                    className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-xl focus:outline-none focus:border-[#1C1C1C] transition-colors min-h-[100px]"
                                    placeholder="Brief description of the space..."
                                />
                            </div>

                            <div className="flex gap-6 pt-8">
                                <button onClick={() => setStep(1)} className="text-xs uppercase tracking-[0.25em] opacity-50 hover:opacity-100">Back</button>
                                <button
                                    onClick={onClose}
                                    disabled={!isStep2Valid}
                                    className={`group flex-1 flex justify-center items-center gap-4 text-xs uppercase tracking-[0.25em] bg-[#1C1C1C] text-[#F5F2EB] px-8 py-4 transition-all ${isStep2Valid ? 'hover:bg-[#333]' : 'opacity-50 cursor-not-allowed'}`}
                                >
                                    <span>Submit Request</span>
                                    <Check className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </>
    );
}

export default InquiryModal;
