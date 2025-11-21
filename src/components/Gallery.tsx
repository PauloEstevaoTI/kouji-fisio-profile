import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

/**
 * Gallery Component
 * Galeria com lightbox e filtros por categoria
 * Features: Modal lightbox, navegação entre imagens, filtros, lazy-load
 */

type Category = "todos" | "consultorio" | "tratamentos" | "equipamentos";

interface GalleryItem {
  id: number;
  image: string;
  category: Category;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXBpc3QlMjBjbGluaWMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNTU3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "consultorio",
    title: "Consultório Moderno"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc2MzU1Nzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "tratamentos",
    title: "Terapia Manual"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzYzNDk0NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "tratamentos",
    title: "Exercícios Terapêuticos"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1715333148714-a3d78fa13570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzYzNTU3OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "tratamentos",
    title: "Reabilitação Esportiva"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwcmVoYWJpbGl0YXRpb258ZW58MXx8fHwxNzYzNTU3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "equipamentos",
    title: "Equipamentos Modernos"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1708596082257-d86701b84cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lZGljYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzYzNTU3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "consultorio",
    title: "Ambiente Acolhedor"
  }
];

const categories = [
  { value: "todos" as Category, label: "Todos" },
  { value: "consultorio" as Category, label: "Consultório" },
  { value: "tratamentos" as Category, label: "Tratamentos" },
  { value: "equipamentos" as Category, label: "Equipamentos" }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("todos");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const currentIndex = lightboxImage !== null 
    ? filteredItems.findIndex(item => item.id === lightboxImage) 
    : -1;

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setLightboxImage(filteredItems[currentIndex + 1].id);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setLightboxImage(filteredItems[currentIndex - 1].id);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-gray-100">Galeria</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Conheça nosso espaço, equipamentos e momentos dos tratamentos
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                variant={selectedCategory === cat.value ? "default" : "outline"}
                className={`rounded-lg transition-all ${
                  selectedCategory === cat.value 
                    ? "bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg shadow-teal-500/30" 
                    : "border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-teal-400"
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="relative rounded-xl overflow-hidden shadow-lg shadow-black/50 cursor-pointer group ring-1 ring-white/10"
                onClick={() => setLightboxImage(item.id)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  srcSet={`${item.image}?w=640 640w, ${item.image}?w=1080 1080w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-6">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Fechar lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  className="absolute left-4 text-white hover:text-gray-300 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>
              )}

              {currentIndex < filteredItems.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-4 text-white hover:text-gray-300 transition-colors"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
              )}

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-6xl w-full"
              >
                <img
                  src={filteredItems[currentIndex].image}
                  alt={filteredItems[currentIndex].title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                />
                <p className="text-white text-center mt-4">
                  {filteredItems[currentIndex].title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}