import { motion } from 'motion/react';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'EduTrack - Sistema de Gestión Académica',
      category: 'fullstack',
      description: 'Plataforma integral para gestión de estudiantes, calificaciones, asistencia y comunicación entre docentes, estudiantes y padres.',
      longDescription: 'Sistema completo desarrollado con React y Node.js que permite a instituciones educativas gestionar todos los aspectos académicos. Incluye dashboard analítico, sistema de notificaciones en tiempo real, generación de reportes automatizados y módulo de planificación curricular.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      features: [
        'Dashboard interactivo con métricas en tiempo real',
        'Sistema de calificaciones y evaluaciones automatizado',
        'Módulo de asistencia con reconocimiento biométrico',
        'Portal de comunicación padres-docentes',
        'Generación de reportes y certificados PDF',
        'Planificación curricular y horarios optimizados',
      ],
      github: 'https://github.com/jd7271790-ai/edutrack',
      demo: '#',
      impact: '500+ estudiantes beneficiados',
      status: 'completed',
    },
    {
      title: 'MathSolver AI - Asistente de Matemáticas',
      category: 'ai',
      description: 'Aplicación de IA que resuelve problemas matemáticos paso a paso, explicando cada procedimiento con lenguaje natural.',
      longDescription: 'Sistema inteligente que utiliza OCR para detectar problemas escritos a mano o impresos, los resuelve utilizando algoritmos simbólicos y presenta soluciones detalladas con explicaciones pedagógicas.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
      technologies: ['Python', 'TensorFlow', 'SymPy', 'FastAPI', 'React', 'OpenCV'],
      features: [
        'Reconocimiento de texto matemático (OCR)',
        'Resolución simbólica de ecuaciones',
        'Explicaciones paso a paso',
        'Visualización de gráficas 2D y 3D',
        'Historial de problemas resueltos',
        'Modo de práctica con ejercicios generados',
      ],
      github: 'https://github.com/jd7271790-ai/mathsolver-ai',
      demo: '#',
      impact: '1000+ problemas resueltos',
      status: 'in-progress',
    },
    {
      title: 'TutorMatch - Plataforma de Tutorías',
      category: 'fullstack',
      description: 'Marketplace que conecta estudiantes con tutores especializados, incluyendo sistema de pagos, reservas y videoconferencias.',
      longDescription: 'Plataforma completa tipo marketplace que facilita la conexión entre estudiantes y tutores. Incluye perfiles verificados, sistema de calificaciones, reserva de sesiones, integración de pagos y sala de videoconferencia integrada.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'WebRTC', 'Tailwind CSS'],
      features: [
        'Perfiles de tutores con verificación',
        'Sistema de búsqueda y filtros avanzados',
        'Calendario de disponibilidad integrado',
        'Videollamadas integradas con pizarra',
        'Sistema de pagos seguro con Stripe',
        'Reseñas y sistema de calificación',
      ],
      github: 'https://github.com/jd7271790-ai/tutormatch',
      demo: '#',
      impact: '80+ tutores registrados',
      status: 'completed',
    },
    {
      title: 'AlgorithmVisualizer - Visualización de Algoritmos',
      category: 'educational',
      description: 'Herramienta interactiva para visualizar algoritmos de ordenamiento, búsqueda, grafos y estructuras de datos en tiempo real.',
      longDescription: 'Aplicación educativa que permite a estudiantes visualizar el funcionamiento interno de algoritmos clásicos. Incluye animaciones paso a paso, control de velocidad, explicaciones contextuales y comparación de rendimiento.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
      technologies: ['React', 'D3.js', 'TypeScript', 'Framer Motion', 'Vite'],
      features: [
        'Visualización de algoritmos de ordenamiento',
        'Algoritmos de búsqueda y pathfinding',
        'Estructuras de datos animadas',
        'Control de velocidad de animación',
        'Comparación de complejidad',
        'Modo de práctica interactivo',
      ],
      github: 'https://github.com/jd7271790-ai/algorithm-visualizer',
      demo: '#',
      impact: '2000+ visualizaciones',
      status: 'completed',
    },
    {
      title: 'StudyPlanner - Organizador de Estudios',
      category: 'productivity',
      description: 'Aplicación de productividad para estudiantes con técnica Pomodoro, seguimiento de objetivos y análisis de rendimiento.',
      longDescription: 'Sistema completo de gestión de estudio que combina planificación, técnicas de productividad y análisis de datos. Ayuda a estudiantes a organizar su tiempo, establecer metas y mejorar sus hábitos de estudio.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'Chart.js'],
      features: [
        'Planificador semanal y mensual',
        'Temporizador Pomodoro personalizable',
        'Seguimiento de objetivos y metas',
        'Estadísticas de productividad',
        'Recordatorios inteligentes',
        'Sincronización en la nube',
      ],
      github: 'https://github.com/jd7271790-ai/study-planner',
      demo: '#',
      impact: '500+ descargas',
      status: 'completed',
    },
    {
      title: 'QuizMaster - Generador de Exámenes',
      category: 'educational',
      description: 'Sistema para crear, administrar y calificar exámenes automáticamente con análisis estadístico detallado.',
      longDescription: 'Plataforma para docentes que permite crear bancos de preguntas, generar exámenes aleatorios, administrarlos online y obtener análisis estadísticos de rendimiento por estudiante y por pregunta.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=500&fit=crop',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
      features: [
        'Banco de preguntas categorizado',
        'Generación aleatoria de exámenes',
        'Diferentes tipos de preguntas',
        'Calificación automática',
        'Análisis estadístico avanzado',
        'Prevención de trampas',
      ],
      github: 'https://github.com/jd7271790-ai/quiz-master',
      demo: '#',
      impact: '50+ exámenes creados',
      status: 'in-progress',
    },
    {
      title: 'CodeReview AI - Revisor de Código',
      category: 'ai',
      description: 'Herramienta de IA que analiza código, detecta bugs, sugiere mejoras y evalúa calidad siguiendo mejores prácticas.',
      longDescription: 'Sistema inteligente que utiliza modelos de lenguaje para revisar código automáticamente, identificar problemas potenciales, sugerir refactorizaciones y educar sobre mejores prácticas de programación.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      technologies: ['Python', 'GPT-4', 'FastAPI', 'React', 'Docker', 'GitHub API'],
      features: [
        'Análisis estático de código',
        'Detección de vulnerabilidades',
        'Sugerencias de refactorización',
        'Evaluación de complejidad',
        'Integración con GitHub',
        'Reportes detallados',
      ],
      github: 'https://github.com/jd7271790-ai/codereview-ai',
      demo: '#',
      impact: '100+ repositorios analizados',
      status: 'in-progress',
    },
    {
      title: 'DataViz Dashboard - Análisis de Datos Educativos',
      category: 'data',
      description: 'Dashboard analítico para instituciones educativas con visualizaciones interactivas y predicciones de rendimiento.',
      longDescription: 'Sistema de Business Intelligence especializado en educación que procesa datos académicos y genera insights accionables mediante visualizaciones interactivas y modelos predictivos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Scikit-learn', 'SQL'],
      features: [
        'Dashboards interactivos personalizables',
        'Análisis de tendencias académicas',
        'Predicción de rendimiento estudiantil',
        'Identificación de estudiantes en riesgo',
        'Comparación entre grupos',
        'Exportación de reportes',
      ],
      github: 'https://github.com/jd7271790-ai/dataviz-dashboard',
      demo: '#',
      impact: '10+ instituciones usando',
      status: 'completed',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'ai', label: 'Inteligencia Artificial' },
    { id: 'educational', label: 'Educativo' },
    { id: 'data', label: 'Data Science' },
    { id: 'productivity', label: 'Productividad' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6 bg-gradient-to-b from-background to-graphite">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Proyectos Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones innovadoras que combinan tecnología, educación y análisis de datos
            para resolver problemas reales del mundo académico.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-lg transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-background font-semibold glow-emerald'
                  : 'glass-effect hover:border-primary/50 border border-transparent'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:glow-emerald transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.status === 'completed' && (
                    <span className="px-3 py-1 bg-emerald-500 text-background text-xs font-semibold rounded-full">
                      Completado
                    </span>
                  )}
                  {project.status === 'in-progress' && (
                    <span className="px-3 py-1 bg-cyan-500 text-background text-xs font-semibold rounded-full">
                      En Progreso
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Star className="text-primary" size={16} />
                  <span>{project.impact}</span>
                </div>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:border-primary transition-all"
                  >
                    <Github size={18} />
                    <span className="text-sm">Código</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg hover:shadow-lg transition-all"
                  >
                    <Eye size={18} />
                    <span className="text-sm text-background font-semibold">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
