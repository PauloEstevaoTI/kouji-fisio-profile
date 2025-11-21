import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase, Star, BookOpen } from "lucide-react";

/**
 * Timeline Component
 * Linha do tempo com formações acadêmicas e cursos
 */

const timelineItems = [
  {
    year: "2024",
    icon: BookOpen,
    title: "Programa de Formação Complementar: Temas em Neurociências",
    institution: "Instituição de Ensino Superior",
    type: "Formação Complementar",
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    icon: Briefcase,
    title: "Teleatendimento na Atenção Básica",
    institution: "Instituição de Saúde",
    type: "Curso de Curta Duração",
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2023",
    icon: BookOpen,
    title: "Jornada de Casos Clínicos",
    institution: "Centro de Estudos Médicos",
    type: "Curso de Curta Duração",
    color: "from-cyan-500 to-blue-500"
  },
  {
    year: "2022",
    icon: Briefcase,
    title: "Fisioterapia em Terapia Intensiva",
    institution: "Instituto de Especialização",
    type: "Curso de Curta Duração",
    color: "from-teal-500 to-cyan-500"
  },
  {
    year: "2022",
    icon: BookOpen,
    title: "Avaliação do Paciente Hospitalar",
    institution: "Centro de Capacitação Profissional",
    type: "Curso de Curta Duração",
    color: "from-blue-500 to-teal-500"
  },
  {
    year: "2020",
    icon: Award,
    title: "Biomecânica Funcional",
    institution: "Centro de Estudos em Biomecânica",
    type: "Curso de Especialização",
    color: "from-emerald-500 to-green-500"
  },
  {
    year: "2014-2018",
    icon: GraduationCap,
    title: "Graduação em Fisioterapia",
    institution: "Universidade Estadual de Londrina (UEL)",
    type: "Bacharelado",
    color: "from-orange-500 to-red-500"
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full mb-4 border border-teal-500/30">
            Formação Acadêmica
          </span>
          <h2 className="mb-4 text-gray-100">Trajetória Profissional</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma jornada de aprendizado contínuo e dedicação à excelência no cuidado com pacientes
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 -translate-x-1/2"></div>

            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg shadow-black/50 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm mb-3">
                        {item.type}
                      </span>
                      <h3 className="mb-2 text-gray-100">{item.title}</h3>
                      <p className="text-gray-400 mb-1">{item.institution}</p>
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md whitespace-nowrap"
                    >
                      <span className="text-gray-100">{item.year}</span>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            <div className="relative pl-12">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500"></div>

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-12"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`absolute -left-8 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg shadow-black/50 ml-4">
                    <span className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm mb-3">
                      {item.year} • {item.type}
                    </span>
                    <h3 className="mb-2 text-gray-100">{item.title}</h3>
                    <p className="text-gray-400">{item.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}