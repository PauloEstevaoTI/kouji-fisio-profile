import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

/**
 * ServicesCarousel Component
 * Carrossel responsivo com animações de drag e swipe
 * Features: Navigation arrows, dots, auto-rotate, drag gestures, responsive
 */

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc2MzU1Nzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Terapia Manual",
    description: "Técnicas avançadas para alívio de dores e restauração de movimento"
  },
  {
    image: "https://images.unsplash.com/photo-1715333148714-a3d78fa13570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzYzNTU3OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Fisioterapia traumato ortopédica e esportiva",
    description: "Recuperação e prevenção de lesões para atletas"
  },
  {
    image: "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzYzNDk0NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Fisioterapia neurofuncional",
    description: "Programas personalizados de fortalecimento e condicionamento"
  }
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Calculate items per view based on screen (handled in grid)
  const totalSlides = carouselItems.length;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = totalSlides - 1;
      if (nextIndex >= totalSlides) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Tratamentos Especializados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais tratamentos e técnicas
          </p>
        </motion.div>

        {/* Desktop: Grid of 3 items */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative rounded-xl overflow-hidden shadow-lg shadow-black/50 group cursor-pointer ring-1 ring-white/10"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                srcSet={`${item.image}?w=640 640w, ${item.image}?w=1080 1080w`}
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative overflow-hidden">
          <div className="relative h-[450px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg mx-4">
                  <ImageWithFallback
                    src={carouselItems[currentIndex].image}
                    alt={carouselItems[currentIndex].title}
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                    srcSet={`${carouselItems[currentIndex].image}?w=640 640w, ${carouselItems[currentIndex].image}?w=1080 1080w`}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="mb-2 text-white">{carouselItems[currentIndex].title}</h3>
                    <p className="text-white/90 text-sm">{carouselItems[currentIndex].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 ml-2 shadow-lg transition-all hover:scale-110"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 mr-2 shadow-lg transition-all hover:scale-110"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-teal-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}