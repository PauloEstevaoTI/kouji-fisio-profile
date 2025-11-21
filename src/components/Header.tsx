import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Header Component
 * Header fixo e responsivo com navegação suave
 * Features: Sticky header, mobile menu, scroll effect, smooth navigation
 */

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={
        "bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-black/10"
      }
    >
      <nav
        className="container mx-auto px-4"
        aria-label="Navegação principal"
      >
        <div className="flex items-center justify-between h-20">
      

          {/* Desktop Navigation */}
         <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative group text-gray-300 hover:text-teal-400 transition-colors"
            >
              {item.label}
        
              <span
                className="
                  absolute -bottom-1 left-0 right-0 
                  h-0.5 bg-teal-400 
                  origin-left 
                  scale-x-0 
                  transition-transform duration-400 
                  group-hover:scale-x-100
                "
              />
            </motion.a>
          ))}
        </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 rounded-lg transition-all shadow-lg shadow-teal-500/20"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="md:hidden z-50 p-2 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-colors"
            aria-label={
              isMobileMenuOpen ? "Fechar menu" : "Abrir menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gray-800 rounded-b-2xl shadow-xl border-t border-gray-700"
            >
              <div className="py-6 px-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    className="block py-3 px-4 text-gray-300 hover:bg-gray-700 hover:text-teal-400 rounded-lg transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => scrollToSection("#contato")}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 rounded-lg shadow-lg shadow-teal-500/20"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar Consulta
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}