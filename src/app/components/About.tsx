import { motion } from 'motion/react';
import { BookOpen, Target, Heart, Trophy, Lightbulb, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      description: 'Creo firmemente en el poder del aprendizaje continuo y la mejora constante, tanto en tecnología como en pedagogía.',
    },
    {
      icon: Target,
      title: 'Orientación a Resultados',
      description: 'Cada proyecto y clase que imparto está diseñado con objetivos claros y medibles para garantizar el éxito.',
    },
    {
      icon: Heart,
      title: 'Pasión por Enseñar',
      description: 'La educación es mi vocación. Disfruto simplificando conceptos complejos y viendo a los estudiantes alcanzar sus metas.',
    },
    {
      icon: Trophy,
      title: 'Excelencia Académica',
      description: 'Me esfuerzo por mantener los más altos estándares en todo lo que hago, desde el desarrollo de software hasta la docencia.',
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Busco constantemente nuevas metodologías y herramientas para mejorar los procesos de enseñanza y desarrollo.',
    },
    {
      icon: Users,
      title: 'Liderazgo Colaborativo',
      description: 'Creo en el poder del trabajo en equipo y en crear ambientes donde todos puedan crecer y destacar.',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Sobre Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 glow-emerald">
              <h3 className="text-3xl font-bold mb-4 text-primary">Mi Historia</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soy estudiante de último año de Ingeniería de Sistemas en la Universidad Nacional Hermilio Valdizán (UNHEVAL),
                con una trayectoria que combina la pasión por la tecnología con el amor por la enseñanza.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Durante mi formación académica, descubrí que mi verdadera vocación va más allá del código: está en ayudar
                a otros a comprender conceptos complejos y alcanzar su máximo potencial. He dedicado más de 3 años a la
                docencia de matemáticas, tutorías personalizadas y administración educativa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi enfoque combina el pensamiento analítico de un ingeniero con la empatía y paciencia de un educador,
                lo que me permite abordar problemas desde múltiples perspectivas y encontrar soluciones innovadoras.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 glow-cyan">
              <h3 className="text-3xl font-bold mb-4 text-cyan">Filosofía de Enseñanza</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creo que cada estudiante tiene un potencial único y mi rol es ser el facilitador que lo desbloquea.
                Mi metodología se basa en tres pilares fundamentales:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Personalización:</strong> Adapto mi enseñanza al ritmo y estilo de aprendizaje de cada estudiante.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Práctica:</strong> Enfatizo la resolución de problemas reales y aplicaciones prácticas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Motivación:</strong> Inspiro confianza y fomento una mentalidad de crecimiento continuo.
                  </span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4">Objetivos Profesionales</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mi visión es combinar mis habilidades técnicas en ingeniería de sistemas con mi experiencia en educación
                para desarrollar plataformas tecnológicas que revolucionen la forma en que aprendemos. Aspiro a liderar
                proyectos que integren IA, análisis de datos y pedagogía moderna para crear experiencias de aprendizaje
                personalizadas y efectivas.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Mis Valores</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-xl p-6 hover:glow-emerald transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-background" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
