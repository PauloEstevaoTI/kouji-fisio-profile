import { motion } from "motion/react";
import koujiFoto from 'figma:asset/d76cfa44aa1157a07ea4802960ed603d44941845.png';

/**
 * Hero Component
 * Banner full screen com foto de fundo e nome do fisioterapeuta
 */

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={koujiFoto}
          alt="Kouji Kakazu - Fisioterapeuta"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80"></div>
        {/* Bottom shadow gradient - darker at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
      </div>

      {/* Content - Name and Title Only */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto">
          {/* Introduction line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gray-300 text-lg md:text-xl mb-6"
          >
            Olá! Meu nome é <span className="text-teal-400">Kouji Kakazu</span> e sou
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white mb-8 text-5xl md:text-6xl lg:text-7xl"
          >
            Fisioterapeuta
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
          >
            Transformo vidas através da fisioterapia traumato-ortopédica, esportiva e neurológica. Desenvolvo tratamentos personalizados através da minha experiência clínica e hospitalar, contribuindo com soluções inovadoras e eficazes para desafios complexos de mobilidade e qualidade de vida.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-teal-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}