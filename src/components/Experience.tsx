import { motion } from "motion/react";
import { Briefcase, GraduationCap, Search } from "lucide-react";

/**
 * Experience Component
 * Linha do tempo de trajetória profissional
 */

const experiences = [
  {
    year: "2024",
    role: "Fisioterapeuta",
    company: "Instituto Neurosoma",
    period: "Mai 2024 - Presente",
    duration: "1 ano 7 meses",
    location: "Londrina, Paraná, Brasil",
    type: "Tempo Integral",
    description: "Atendimento em tempo integral com foco em reabilitação neurológica e funcional.",
    icon: Briefcase,
    color: "from-teal-500 to-blue-500"
  },
  {
    year: "2023-2024",
    role: "Fisioterapeuta",
    company: "Atlas Fisioterapia Avançada",
    period: "Ago 2023 - Abr 2024",
    duration: "9 meses",
    location: "Londrina, Paraná, Brasil",
    type: "Presencial",
    description: "Atendimento especializado em fisioterapia avançada e reabilitação.",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2023",
    role: "Fisioterapeuta",
    company: "Physioterapia & Consultórios",
    period: "Jan 2023 - Mai 2023",
    duration: "5 meses",
    location: "São Paulo, São Paulo, Brasil",
    type: "Presencial",
    description: "Atendimento clínico em consultório particular.",
    icon: Briefcase,
    color: "from-cyan-500 to-emerald-500"
  },
  {
    year: "2021-2022",
    role: "Estagiário",
    company: "Hospital Universitário Regional do Norte do Paraná",
    period: "Ago 2021 - Jun 2022",
    duration: "11 meses",
    location: "Londrina, Paraná, Brasil",
    type: "Estágio",
    description: "Estágio supervisionado com experiência em diversas áreas incluindo prescrição de exercícios e reabilitação ortopédica.",
    skills: ["Prescrição de exercícios", "Reabilitação ortopédica"],
    icon: GraduationCap,
    color: "from-emerald-500 to-green-500"
  },
  {
    year: "2021-2022",
    role: "Bolsista de Iniciação Científica",
    company: "UEL - Universidade Estadual de Londrina",
    period: "2021 - Jun 2022",
    duration: "1 ano 6 meses",
    location: "Londrina, Paraná, Brasil",
    type: "Pesquisa",
    description: "Bolsista de iniciação científica no Laboratório de pesquisa em fisioterapia pulmonar (LFIP).",
    skills: ["Pesquisa"],
    icon: Search,
    color: "from-green-500 to-lime-500"
  }
];

export function Experience() {
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
            Trajetória Profissional
          </span>
          <h2 className="mb-4 text-gray-100">Experiência de Trabalho</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma jornada de dedicação à excelência no cuidado com pacientes e desenvolvimento profissional
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-green-500 -translate-x-1/2"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
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
                        {exp.type}
                      </span>
                      <h3 className="mb-2 text-gray-100">{exp.role}</h3>
                      <p className="text-teal-400 mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period} • {exp.duration}</p>
                      <p className="text-gray-300 mb-3">{exp.description}</p>
                      
                      {exp.skills && (
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-sm border border-teal-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`w-20 h-20 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                    >
                      <exp.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md whitespace-nowrap"
                    >
                      <span className="text-gray-100">{exp.year}</span>
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
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-green-500"></div>

              {experiences.map((exp, index) => (
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
                    className={`absolute -left-8 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg shadow-black/50 ml-4">
                    <span className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm mb-3">
                      {exp.year} • {exp.type}
                    </span>
                    <h3 className="mb-2 text-gray-100">{exp.role}</h3>
                    <p className="text-teal-400 mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period} • {exp.duration}</p>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-lg text-sm border border-teal-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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