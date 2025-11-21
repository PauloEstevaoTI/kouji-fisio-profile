import { motion } from "motion/react";
import { Activity, Heart, Zap, Shield, Users, Sparkles } from "lucide-react";

/**
 * Services Component - Dinâmica de Fisioterapia
 * Seção de serviços com animações stagger e ícones
 */

const services = [
  {
    icon: Activity,
    title: "Avaliação Completa",
    description: "Análise detalhada da sua condição física com testes especializados e diagnóstico preciso."
  },
  {
    icon: Heart,
    title: "Tratamento Personalizado",
    description: "Plano terapêutico individualizado baseado nas suas necessidades e objetivos específicos."
  },

  {
    icon: Shield,
    title: "Prevenção de Lesões",
    description: "Orientações e exercícios preventivos para evitar futuras lesões e manter sua saúde."
  },
  {
    icon: Users,
    title: "Acompanhamento Contínuo",
    description: "Monitoramento regular da sua evolução com ajustes no tratamento quando necessário."
  },

];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-slate-950 to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full mb-4 border border-teal-500/30">
            Nossos Serviços
          </span>
          <h2 className="mb-4 text-gray-100">Dinâmica de Fisioterapia</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma abordagem completa e integrada para sua recuperação e bem-estar
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-teal-500/20 transition-all border border-gray-700 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/30">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-gray-100">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg shadow-black/50 border border-gray-700"
        >
          <h3 className="text-center mb-12 text-gray-100">Como Funciona o Tratamento</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Agendamento", desc: "Marque sua consulta pelo WhatsApp ou formulário" },
              { step: "02", title: "Avaliação", desc: "Primeira consulta com análise detalhada" },
              { step: "03", title: "Tratamento", desc: "Início das sessões personalizadas" },
              { step: "04", title: "Resultados", desc: "Acompanhamento e melhora contínua" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-teal-500/30">
                  {item.step}
                </div>
                <h4 className="mb-2 text-gray-100">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}