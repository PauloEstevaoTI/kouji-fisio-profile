import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

/**
 * ContactForm Component
 * Seção de contato com link direto para WhatsApp
 */

export function ContactForm() {
  const whatsappNumber = "5543999104133"; // Número do WhatsApp (adicionar DDD + número)
  const whatsappMessage =
    "Olá! Gostaria de agendar uma consulta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-gray-100">
            Entre em Contato
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Agende sua consulta ou tire suas dúvidas. Estou à
            disposição para ajudá-lo.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 shadow-2xl shadow-black/50 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-teal-500/50"
            >
              <MessageCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="mb-4 text-gray-100">Fale Conosco</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Entre em contato diretamente pelo WhatsApp para
              agendar sua consulta, tirar dúvidas ou saber mais
              sobre nossos tratamentos.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 rounded-xl shadow-lg shadow-teal-500/30 text-lg px-8 py-6"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </motion.div>

            <p className="text-gray-500 text-sm mt-6">
              Respondo o mais rápido possível
            </p>
          </motion.div>

          {/* Horários 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg shadow-black/50 mt-8"
          >
            <h4 className="mb-4 text-gray-100 text-center">Horário de Atendimento</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="text-teal-400">8h - 19h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-teal-400">8h - 13h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-gray-500">Fechado</span>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}