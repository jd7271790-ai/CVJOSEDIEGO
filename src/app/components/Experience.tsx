import { motion } from 'motion/react';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Brain,
} from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      icon: GraduationCap,
      title: 'Docente de Matemáticas',
      period: '2021 - Presente',
      organization: 'Academia Particular',
      description:
        'Impartición de clases de matemáticas avanzadas para estudiantes de secundaria y preparatoria, con enfoque en álgebra, trigonometría, geometría analítica y cálculo.',
      achievements: [
        'Incremento del 85% en las calificaciones promedio de los estudiantes',
        'Desarrollo de más de 200 ejercicios y problemas personalizados',
        'Implementación de metodologías de enseñanza visual y práctica',
        'Creación de material didáctico digital interactivo',
      ],
      skills: ['Pedagogía', 'Matemáticas', 'Comunicación', 'Planificación'],
    },
    {
      icon: Users,
      title: 'Tutor Académico Personalizado',
      period: '2020 - Presente',
      organization: 'Freelance',
      description:
        'Orientación académica individualizada para estudiantes universitarios y de secundaria en materias de ciencias exactas, programación y desarrollo de proyectos.',
      achievements: [
        'Asesoría exitosa a más de 150 estudiantes',
        'Tasa de aprobación del 95% en exámenes finales',
        'Desarrollo de planes de estudio personalizados',
        'Mentoría en proyectos de tesis y trabajos de investigación',
      ],
      skills: [
        'Mentoría',
        'Resolución de Problemas',
        'Adaptabilidad',
        'Empatía',
      ],
    },
    {
      icon: BookOpen,
      title: 'Coordinador de Actividades Académicas',
      period: '2022 - 2023',
      organization: 'UNHEVAL - Facultad de Ingeniería de Sistemas',
      description:
        'Coordinación y organización de eventos académicos, talleres de programación, y actividades de integración estudiantil.',
      achievements: [
        'Organización de 12 talleres técnicos con más de 300 participantes',
        'Coordinación de hackathons y competencias de programación',
        'Gestión de equipos de hasta 15 personas',
        'Desarrollo de programa de tutorías entre pares',
      ],
      skills: [
        'Liderazgo',
        'Gestión de Proyectos',
        'Trabajo en Equipo',
        'Organización',
      ],
    },
    {
      icon: Award,
      title: 'Instructor de Olimpiadas de Matemáticas',
      period: '2021 - 2022',
      organization: 'Programa de Excelencia Académica',
      description:
        'Preparación intensiva de estudiantes para competencias nacionales e internacionales de matemáticas, con enfoque en resolución de problemas complejos.',
      achievements: [
        '5 estudiantes clasificados a fase nacional',
        '2 medallas de bronce en competencias regionales',
        'Desarrollo de 50+ problemas de competencia originales',
        'Creación de material de entrenamiento especializado',
      ],
      skills: [
        'Matemática Avanzada',
        'Coaching',
        'Pensamiento Crítico',
        'Estrategia',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Administrador de Plataforma Educativa',
      period: '2022 - 2023',
      organization: 'Instituto de Tecnología Regional',
      description:
        'Gestión y administración de plataforma LMS (Learning Management System), soporte técnico a docentes, y análisis de métricas de aprendizaje.',
      achievements: [
        'Administración de plataforma con 500+ usuarios activos',
        'Reducción del 40% en tickets de soporte mediante documentación',
        'Implementación de sistema de reportes automatizados',
        'Capacitación de 30 docentes en uso de herramientas digitales',
      ],
      skills: [
        'Administración de Sistemas',
        'Análisis de Datos',
        'Soporte Técnico',
        'Capacitación',
      ],
    },
    {
      icon: Brain,
      title: 'Desarrollador de Contenido Educativo',
      period: '2020 - Presente',
      organization: 'Proyectos Independientes',
      description:
        'Creación de contenido educativo digital, videos tutoriales, y material de apoyo para estudiantes de matemáticas y programación.',
      achievements: [
        'Producción de 80+ videos educativos',
        'Desarrollo de 15 guías de estudio interactivas',
        'Creación de banco de ejercicios con 500+ problemas',
        'Implementación de sistema de evaluación automática',
      ],
      skills: [
        'Diseño Instruccional',
        'Producción de Contenido',
        'Edición',
        'Creatividad',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 px-6 bg-gradient-to-b from-background to-graphite"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">
              Experiencia Profesional
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 3 años de experiencia en docencia, tutoría académica y
            liderazgo educativo, impactando positivamente la vida de cientos
            de estudiantes.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block z-0">
            <div className="w-[2px] h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Icono timeline */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 items-center justify-center glow-emerald z-10 shadow-xl">
                  <exp.icon
                    className="text-background"
                    size={28}
                  />
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-4rem)] ${
                    index % 2 === 0
                      ? 'md:pr-20 md:text-right'
                      : 'md:pl-20'
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                    }}
                    className="glass-effect rounded-2xl p-8 hover:glow-emerald transition-all group"
                  >
                    {/* Mobile header */}
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <exp.icon
                          className="text-background"
                          size={24}
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Desktop header */}
                    <div className="hidden md:block mb-4">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-cyan font-semibold mb-3">
                      {exp.organization}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary">
                        Logros destacados:
                      </h4>

                      <ul className="space-y-2">
                        {exp.achievements.map(
                          (achievement, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm text-muted-foreground ${
                                index % 2 === 0
                                  ? 'md:flex-row-reverse'
                                  : ''
                              }`}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />

                              <span>{achievement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0
                          ? 'md:justify-end'
                          : ''
                      }`}
                    >
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}