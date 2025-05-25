"use client";

import { motion } from "framer-motion";
import { Gift, Copy, CreditCard, Check } from "lucide-react";
import { useState } from "react";

interface GiftRegistryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GiftRegistryModal({ isOpen, onClose }: GiftRegistryModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const giftSuggestions = [
    {
      name: "Regalo monetario",
      icon: <CreditCard className="text-[#947b49]" size={24} />,
      description: "Puedes hacer una transferencia bancaria como regalo.",
      accountInfo: "ES99 0000 0000 0000 - Andrés González González - Santander"
    },
    {
      name: "Tienda departamental",
      icon: <Gift className="text-[#947b49]" size={24} />,
      description: "Mesa de regalos en El Corte Inglés.",
      accountInfo: "No. Evento 51012067"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ES99 0000 0000 0000");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl gold-text mb-6 text-center">Mesa de Regalos</h2>

        <p className="text-center mb-6 text-gray-700">
          El regalo es opcional, la asistencia obligatoria, pero si deseas tener
          un detalle, aquí hay algunas opciones:
        </p>

        <div className="space-y-4 mb-6">
          {giftSuggestions.map((gift, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-50">
              <div className="flex items-center mb-2">
                {gift.icon}
                <h3 className="text-lg font-medium ml-2">{gift.name}</h3>
              </div>
              <p className="text-gray-700 mb-2">{gift.description}</p>

              {gift.name === "Regalo monetario" ? (
                <div className="flex items-center gap-2 bg-white p-2 rounded border">
                  <p className="text-sm flex-grow font-mono">{gift.accountInfo.split(" - ")[0]}</p>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#947b49]/10"
                    aria-label="Copiar número de cuenta"
                  >
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-[#947b49]" />}
                  </button>
                </div>
              ) : (
                <p className="text-sm font-medium bg-white p-2 rounded border">
                  {gift.accountInfo}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mb-4">
          Para más información sobre la mesa de regalos, puedes contactar a los padres de la quinceañera.
        </p>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="gold-button"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
