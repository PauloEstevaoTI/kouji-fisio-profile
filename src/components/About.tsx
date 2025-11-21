import { motion } from "motion/react";
import { Heart, Award, Users, Target } from "lucide-react";
import koujiAbout from 'figma:asset/11a1ceba87683747a5b548d247c9e205d7fea84e.png';

/**
 * About Component
 * Seção sobre o fisioterapeuta
 */

const highlights = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado focado nas necessidades individuais de cada paciente",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Atuação em instituições renomadas como Instituto Neurosoma e Hospital Universitário",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Formação Completa",
    description: "Graduado pela UEL, formação em biomecânica funcional",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Target,
    title: "Baseado em Evidências",
    description: "Experiência em pesquisa científica e aplicação de técnicas atualizadas",
    color: "from-orange-500 to-amber-500"
  }
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full mb-4 border border-teal-500/30">
            Sobre Mim
          </span>
          <h2 className="mb-4 text-gray-100">Conheça Minha Trajetória</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dedicação à excelência no cuidado com a saúde e reabilitação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-gray-800/50 h-[500px]">
              <img
                src={koujiAbout}
                alt="Kouji Kakazu - Fisioterapeuta"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-gray-100">Kouji Kakazu</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                
                Fisioterapeuta formado pela <strong className="text-teal-400">Universidade Estadual de Londrina (UEL)</strong>, 
                com experiência em fisioterapia traumato-ortopédica, esportiva e neurológica.
              </p>
              <p>
                Atualmente atuo no <strong className="text-teal-400">Instituto Neurosoma, RSF Fisioterapia e a domicílio</strong> em Londrina, 
                onde ofereço atendimento especializado e personalizado em tempo integral desde 2023.
              </p>
              <p>
                Minha trajetória inclui passagem pela <strong className="text-teal-400">Atlas Fisioterapia Avançada</strong>, 
                experiência hospitalar no <strong className="text-teal-400">Hospital Universitário Regional do Norte do Paraná</strong>, 
                e atividade em pesquisa científica como bolsista de iniciação científica no Laboratório de Fisioterapia Pulmonar (LFIP) da UEL.
              </p>
              <p>
                Acredito em um atendimento humanizado, baseado em evidências científicas e focado nas necessidades 
                individuais de cada paciente, buscando sempre os melhores resultados na reabilitação e qualidade de vida.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl">
                <span className="text-teal-400 text-sm">CREFITO-8</span>
              </div>
              <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl">
                <span className="text-teal-400 text-sm">UEL - Graduação</span>
              </div>
              <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl">
                <span className="text-teal-400 text-sm">3 Anos de Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-teal-500/20 transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-gray-100 mb-2 text-lg">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}