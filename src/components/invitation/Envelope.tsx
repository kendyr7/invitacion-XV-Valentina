"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InvitationContent } from "./InvitationContent";
import Image from "next/image";

export function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef6f7] to-[#fbdfe2] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            className="cursor-pointer relative w-[320px] h-[420px]"
            onClick={handleEnvelopeClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/envelope.png"
              alt="Sobre de invitación"
              fill
              className="object-contain transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <InvitationContent isVisible={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}