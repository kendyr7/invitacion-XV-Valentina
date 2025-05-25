"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface RsvpFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RsvpForm({ isOpen, onClose }: RsvpFormProps) {
  const [attendees, setAttendees] = useState(1);

  if (!isOpen) return null;

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
        <h2 className="text-2xl gold-text mb-6 text-center">Confirmar Asistencia</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Nombre y apellido</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#947b49]"
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Número de asistentes</label>
          <div className="flex items-center">
            <button
              onClick={() => setAttendees(prev => Math.max(1, prev - 1))}
              className="px-3 py-1 border rounded-l-md bg-gray-100"
            >
              -
            </button>
            <div className="px-4 py-1 border-t border-b">
              {attendees}
            </div>
            <button
              onClick={() => setAttendees(prev => Math.min(10, prev + 1))}
              className="px-3 py-1 border rounded-r-md bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="allergies" className="block text-gray-700 mb-2">
            Alergias/Intolerancias/Dieta especial
          </label>
          <textarea
            id="allergies"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#947b49]"
            placeholder="Déjanos saber si tienes alguna alergia o sigues una dieta especial"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Mensaje para la quinceañera
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#947b49]"
            placeholder="¿Quieres compartir un mensaje especial?"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700">Necesito transporte</span>
          </label>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            Cancelar
          </button>
          <button className="gold-button">
            Confirmar Asistencia
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
