"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { RsvpForm } from "./RsvpForm";
import { MusicPlayer } from './MusicPlayer';

interface InvitationContentProps {
  isVisible: boolean;
}

export function InvitationContent({ isVisible }: InvitationContentProps) {
  const [mounted, setMounted] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  // Event date set to July 1, 2025
  const eventDate = new Date("2025-08-01T18:00:00");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => (
    <div className="flex justify-center gap-4 md:gap-8 mt-2 mb-4 text-center">
      {mounted && (
        <>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">{days}</span>
            <span className="text-sm">Días</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">{hours}</span>
            <span className="text-sm">Hrs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">{minutes}</span>
            <span className="text-sm">Min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl gold-text">{seconds}</span>
            <span className="text-sm">Seg</span>
          </div>
        </>
      )}
    </div>
  );

  const handleOpenRsvp = () => {
    setIsRsvpOpen(true);
  };

  const handleCloseRsvp = () => {
    setIsRsvpOpen(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="bg-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <MusicPlayer />
      {/* Hero section */}
      <motion.div
        className="min-h-[800px] relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Contenedor principal que incluye imagen y contenido */}
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-16">
          <img
            src="/hero-bg.jpg"
            alt="Fondo XV años"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          
          {/* Contenido */}
          <div className="relative z-20 text-center px-4">
            <h4 className="text-xl md:text-2xl text-white mb-2">Mis XV años</h4>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Valentina</h1>
            <h4 className="text-xl md:text-2xl text-white mb-6">01 de agosto 2025</h4>
            
            {/* Botón de deslizar */}
            <div className="flex flex-col items-center mt-8">
              <span className="text-white mb-2">Desliza</span>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    

      {/* Welcome section */}
      <motion.div
          className="text-center py-20 px-6 text-white"
          style={{ backgroundColor: '#dea8ab' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Te invito a celebrar el inicio de una nueva etapa en mi vida,
            llena de sueños, metas y grandes logros. <br /><br />
            🤍
          </motion.p>
      </motion.div>


      {/* Parents & Godparents section */}
      <motion.div
        className="py-12 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="max-w-[500px] mx-auto min-h-[800px] py-12 border-2 border-[#947b49] flex flex-col items-center justify-center p-8 bg-white">
          <div className="text-center space-y-12">
            <h2 className="section-title">
              Con la bendición de Dios<br />
              y en compañía de mis<br />
              padres y padrinos
            </h2>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl gold-text mb-4">Mis Padres</h3>
                <p className="mb-2">Sr. Roberto González Treviño</p>
                <p>Sra. Ana Garza Martínez</p>
              </div><br />

              <div className="text-center">
                <h3 className="text-xl gold-text mb-4">Mis Padrinos</h3>
                <p className="mb-2">Sr. Eduardo Castillo Torres</p>
                <p>Sra. María Gallardo Campos</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl section-title md:text-3xl mb-6">
                Nos complace invitarte a<br />
                ser parte de este gran día.
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Countdown section */}
      <motion.div
        className="h-[600px] py-12 px-4 text-center relative flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/countdown-bg.jpg"
            alt="Fondo contador"
            className="w-full h-full object-cover"
          />
          {/* Overlay para mejorar la legibilidad */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* Countdown Contenido  */}
        <div className="relative z-10 text-white">
          <h2 className="section-title mb-2 text-white">Faltan</h2>
          <Countdown date={eventDate} renderer={renderer} />
          <p className="text-sm mt-2 text-white">para mis XV años</p>
        </div>
      </motion.div>


      {/* Event details section */}
      <motion.div
        className="py-12 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h2 className="section-title text-center mb-12">Dónde y Cuándo</h2>

        {/* Estilo vertical para móvil y escritorio */}
        <div className="w-full flex flex-col gap-8 max-w-md mx-auto">
          
          {/* Ceremonia */}
          <div className="border border-[#947b49] bg-[#fef6f7] text-center overflow-hidden">
            <img 
              src="/church-image.jpg" 
              alt="Catedral de Santa María" 
              className="w-full h-[260px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-[#4b3a2f] mb-2">Ceremonia Religiosa</h3>
              <p className="font-medium mb-1">Catedral de Santa María la Real de Almudena</p>
              <p className="mb-1">18:00 hrs</p>
              <p className="text-gray-600 mb-4">C. de Bailén, 10, 28013 Madrid</p>
              <a
                href="https://maps.app.goo.gl/ohMyur4CZSvnvc1t7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#dea8ab] text-white px-6 py-2 rounded uppercase tracking-wider"
              >
                Ver mapa
              </a>
            </div>
          </div>

          {/* Recepción */}
          <div className="border border-[#947b49] bg-[#fef6f7] text-center overflow-hidden">
            <img 
              src="/recepcion.jpg" 
              alt="Recepción" 
              className="w-full h-[260px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-[#4b3a2f] mb-2">Recepción</h3>
              <p className="font-medium mb-1">Club Terraza</p>
              <p className="mb-1">07:00 PM</p>
              <p className="text-gray-600 mb-4">Pista Juan Pablo II, contiguo a los semaforos</p>
              <a
                href="https://maps.app.goo.gl/ohMyur4CZSvnvc1t7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#dea8ab] text-white px-6 py-2 rounded uppercase tracking-wider"
              >
                Ver mapa
              </a>
            </div>
          </div>
        </div>
      </motion.div>


      {/* Timeline section */}
      <motion.div
        className="py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <h3 className="text-xl text-center mb-12">Te compartimos los detalles <br /> de la celebración</h3>

        <div className="max-w-4xl mx-auto relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#dea8ab]/30" />
          
          {/* Línea que se colorea con el scroll */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#947b49]"
            style={{ 
              height: "0%",
              top: 0
            }}
            initial={{ height: "0%" }}
            whileInView={{
              height: ["0%", "100%"]
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              times: [0, 1]
            }}
            viewport={{ once: false, amount: 0.2 }}
          />

          <div className="grid gap-32">
            {/* Ceremonia Religiosa */}
            <motion.div 
              className="relative grid grid-cols-[1fr,auto,1fr] items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-right">
                <p className="gold-text font-bold">17:30 HRS</p>
                <h4 className="text-lg">Ceremonia Religiosa</h4>
              </div>
              
              <motion.div 
                className="w-20 h-20 bg-[#dea8ab] rounded-full flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-white text-xl">🙏</span>
              </motion.div>
              
              <div />
            </motion.div>

            {/* Cocktail */}
            <motion.div 
              className="relative grid grid-cols-[1fr,auto,1fr] items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div />
              
              <motion.div 
                className="w-20 h-20 bg-[#dea8ab] rounded-full flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-white text-xl">🥂</span>
              </motion.div>
              
              <div className="text-left">
                <p className="gold-text font-bold">19:30 HRS</p>
                <h4 className="text-lg">Cocktail</h4>
              </div>
            </motion.div>

            {/* Celebración */}
            <motion.div 
              className="relative grid grid-cols-[1fr,auto,1fr] items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-right">
                <p className="gold-text font-bold">21:00 HRS</p>
                <h4 className="text-lg">Celebración</h4>
              </div>
              
              <motion.div 
                className="w-20 h-20 bg-[#dea8ab] rounded-full flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-white text-xl">🍽️</span>
              </motion.div>
              
              <div />
            </motion.div>

            {/* A bailar */}
            <motion.div 
              className="relative grid grid-cols-[1fr,auto,1fr] items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div />
              
              <motion.div 
                className="w-20 h-20 bg-[#dea8ab] rounded-full flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-white text-xl">🎵</span>
              </motion.div>
              
              <div className="text-left">
                <p className="gold-text font-bold">22:00 HRS</p>
                <h4 className="text-lg">A bailar</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    

      {/* RSVP section */}
      <motion.div
        className="py-12 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
      >
        <h2 className="section-title">Invitación para:</h2>
        <div className="max-w-md mx-auto text-center mb-8">
          <h3 className="text-2xl mb-4">Nombre</h3>
          <h4 className="text-lg mb-4">Asistencias confirmadas</h4>

          <button
            className="gold-button w-full py-3 mt-4"
            onClick={handleOpenRsvp}
          >
            Haz clic para confirmar tus datos
          </button>
        </div>

        <AnimatePresence>
          {isRsvpOpen && <RsvpForm isOpen={isRsvpOpen} onClose={handleCloseRsvp} />}
        </AnimatePresence>
      </motion.div>

      {/* Dress code section */}
      <motion.div
        className="py-12 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl gold-text mb-4">Código de vestimenta</h3>
          <p className="text-3xl font-serif mb-4">FORMAL</p>
          <div className="flex justify-center items-center mb-6 rounded-lg overflow-hidden">
            <img
              src="/dress-code.jpg"
              alt="Código de vestimenta"
              className="sm:h-[200px] w-auto object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Gifts section */}
      <motion.div
        className="py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl gold-text mb-4">Regalos</h3>
          <p className="mb-6 text-gray-700">
            El regalo es opcional, la asistencia obligatoria pero si quieres tener un
            detalle conmigo te doy algunas ideas
          </p>

          <button className="gold-button px-8 py-3">
            Ver mesa de regalos
          </button>
        </div>
      </motion.div>

      {/* Hashtag section */}
      <motion.div
          className="text-center py-20 px-6 text-white"
          style={{ backgroundColor: '#dea8ab' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
            Etiqueta las fotos de mis xv años con este hashtag<br /><br />
            <span className="text-2xl font-semibold">#misxvvalentina</span>
          </motion.p>
      </motion.div>

      {/* Thank you section */}
      <motion.div
        className="py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <h2 className="text-2xl gold-text mb-8">
          Gracias por acompañarme en este día tan especial
        </h2>

        {/* Gallery section */}
        <div className="max-w-md mx-auto space-y-6 mb-12">
          <motion.div
            className="w-full h-[300px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/gallery-1.jpg"
              alt="Galería 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full h-[300px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/gallery-2.jpg"
              alt="Galería 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full h-[300px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/gallery-3.jpg"
              alt="Galería 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="text-sm mt-12 text-gray-500">
          <p>Copyright 2025 | Diseño de Invitación Digital por Kendyr Quintanilla</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
