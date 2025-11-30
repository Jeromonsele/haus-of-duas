import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioController: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Optional: Auto-play on first interaction if desired, but usually better to let user initiate
        // For now, we start muted/paused
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} loop>
                <source src="https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleAudio}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-[#1C1C1C] dark:text-white hover:bg-white/20 transition-colors shadow-lg"
                aria-label={isPlaying ? "Mute background music" : "Play background music"}
            >
                {isPlaying ? (
                    <Volume2 className="w-5 h-5" />
                ) : (
                    <VolumeX className="w-5 h-5 opacity-50" />
                )}
            </motion.button>
        </div>
    );
};

export default AudioController;
