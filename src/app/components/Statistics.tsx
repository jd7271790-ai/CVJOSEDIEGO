import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Users, Clock, Award, TrendingUp, BookOpen, Target } from 'lucide-react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ value, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [inView, count, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Statistics() {
  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: 'Estudiantes Orientados',
      description: 'Tutorías y clases personalizadas',
      color: 'emerald',
    },
    {
      icon: Clock,
      value: 2500,
      suffix: '+',
      label: 'Horas de Enseñanza',
      description: 'Docencia y mentoría académica',
      color: 'cyan',
    },
    {
      icon: Award,
      value: 95,
      suffix: '%',
      label: 'Tasa de Aprobación',
      description: 'Estudiantes que aprueban sus exámenes',
      color: 'purple',
    },
    {
      icon: TrendingUp,
      value: 85,
      suffix: '%',
      label: 'Mejora Promedio',
      description: 'Incremento en calificaciones',
      color: 'amber',
    },
    {
      icon: BookOpen,
      value: 12,
      suffix: '+',
      label: 'Talleres Organizados',
      description: 'Eventos académicos coordinados',
      color: 'rose',
    },
    {
      icon: Target,
      value: 500,
      suffix: '+',
      label: 'Problemas Creados',
      description: 'Ejercicios y material didáctico',
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return 'from-emerald-500 to-emerald-600';
      case 'cyan': return 'from-cyan-500 to-cyan-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'amber': return 'from-amber-500 to-amber-600';
      case 'rose': return 'from-rose-500 to-rose-600';
      case 'indigo': return 'from-indigo-500 to-indigo-600';
      default: return 'from-emerald-500 to-cyan-500';
    }
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-graphite to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Impacto en Números</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Métricas que reflejan mi compromiso con la excelencia educativa
            y el desarrollo académico de mis estudiantes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 hover:glow-emerald transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial opacity-20" />

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClasses(stat.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                <stat.icon className="text-white" size={32} />
              </div>

              <div className="text-5xl font-bold mb-2 text-gradient">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </h3>

              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                className={`h-1 bg-gradient-to-r ${getColorClasses(stat.color)} rounded-full mt-4`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">
                <Counter value={3} suffix="+" />
              </div>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">
                <Counter value={6} suffix="+" />
              </div>
              <p className="text-muted-foreground">Áreas de Especialización</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">
                <Counter value={98} suffix="%" />
              </div>
              <p className="text-muted-foreground">Satisfacción de Estudiantes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
