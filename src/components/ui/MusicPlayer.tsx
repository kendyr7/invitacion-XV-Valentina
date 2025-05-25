"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  audioSrc: string;
  autoPlay?: boolean;
}

export function MusicPlayer({ audioSrc, autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;

    if (autoPlay) {
      // Most browsers block autoplay without user interaction
      // We'll try to autoplay, but won't update state if it fails
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was prevented, keep isPlaying as false
          });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-md backdrop-blur-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {isPlaying ? (
        <Volume2 className="text-[#947b49]" size={20} />
      ) : (
        <VolumeX className="text-[#947b49]" size={20} />
      )}
    </motion.button>
  );
}
