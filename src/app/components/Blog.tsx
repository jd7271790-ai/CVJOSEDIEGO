import { motion } from 'motion/react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export function Blog() {
  const articles = [
    {
      title: 'El Futuro de la Educación: IA y Aprendizaje Personalizado',
      excerpt: 'Explorando cómo la inteligencia artificial está revolucionando la educación mediante sistemas adaptativos que personalizan el aprendizaje para cada estudiante.',
      content: 'La inteligencia artificial está transformando radicalmente el panorama educativo. Los sistemas de aprendizaje adaptativo pueden analizar patrones de comportamiento, identificar dificultades específicas y ajustar el contenido en tiempo real...',
      date: '2024-05-15',
      readTime: '8 min',
      category: 'Tecnología Educativa',
      tags: ['IA', 'Educación', 'Machine Learning', 'Innovación'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    },
    {
      title: 'Metodologías Ágiles en el Desarrollo de Software Educativo',
      excerpt: 'Cómo aplicar Scrum y Kanban para crear plataformas educativas exitosas, manteniendo el foco en las necesidades reales de estudiantes y docentes.',
      content: 'Las metodologías ágiles no son solo para el desarrollo de software corporativo. En el ámbito educativo, Scrum y Kanban ofrecen frameworks perfectos para iterar rápidamente y responder a las necesidades cambiantes...',
      date: '2024-05-10',
      readTime: '6 min',
      category: 'Desarrollo de Software',
      tags: ['Agile', 'Scrum', 'Software', 'Educación'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
    },
    {
      title: 'Matemáticas Visuales: Enseñando Conceptos Complejos con Animaciones',
      excerpt: 'Técnicas y herramientas para crear visualizaciones matemáticas que hacen que conceptos abstractos sean tangibles y comprensibles.',
      content: 'Las matemáticas a menudo se perciben como abstractas y difíciles. Sin embargo, con las herramientas digitales modernas, podemos crear visualizaciones dinámicas que revelan la belleza y lógica detrás de cada concepto...',
      date: '2024-05-05',
      readTime: '10 min',
      category: 'Matemáticas',
      tags: ['Matemáticas', 'Visualización', 'Pedagogía', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
    },
    {
      title: 'React y TypeScript: Construyendo Aplicaciones Educativas Escalables',
      excerpt: 'Guía completa sobre arquitectura, patrones de diseño y mejores prácticas para desarrollar plataformas educativas robustas con React y TypeScript.',
      content: 'React combinado con TypeScript ofrece una base sólida para construir aplicaciones educativas complejas. La tipificación estática previene errores, mejora la mantenibilidad y facilita la colaboración en equipo...',
      date: '2024-04-28',
      readTime: '12 min',
      category: 'Desarrollo Web',
      tags: ['React', 'TypeScript', 'Arquitectura', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    },
    {
      title: 'Gamificación en el Aula: Más Allá de los Puntos y Badges',
      excerpt: 'Estrategias avanzadas de gamificación que realmente motivan el aprendizaje profundo y el pensamiento crítico, no solo la participación superficial.',
      content: 'La gamificación efectiva va mucho más allá de añadir puntos y medallas. Se trata de diseñar sistemas que aprovechen los principios psicológicos de motivación intrínseca, progresión y dominio...',
      date: '2024-04-20',
      readTime: '7 min',
      category: 'Pedagogía',
      tags: ['Gamificación', 'Motivación', 'Diseño Instruccional'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
    },
    {
      title: 'Análisis de Datos Educativos: De Números a Insights Accionables',
      excerpt: 'Cómo extraer conocimiento valioso de datos académicos para mejorar resultados de aprendizaje y tomar decisiones informadas.',
      content: 'Los datos educativos son una mina de oro de información, pero solo si sabemos cómo analizarlos correctamente. Este artículo explora técnicas de análisis que transforman números en estrategias concretas...',
      date: '2024-04-15',
      readTime: '9 min',
      category: 'Data Science',
      tags: ['Data Analytics', 'Educación', 'Python', 'Visualización'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'Algoritmos de Pathfinding: Implementación y Visualización',
      excerpt: 'Una exploración profunda de A*, Dijkstra y otros algoritmos de búsqueda de caminos, con implementaciones en Python y visualizaciones interactivas.',
      content: 'Los algoritmos de pathfinding son fundamentales en ciencias de la computación. Este artículo desglosa su funcionamiento interno, compara su rendimiento y muestra cómo visualizarlos efectivamente...',
      date: '2024-04-08',
      readTime: '15 min',
      category: 'Algoritmos',
      tags: ['Algoritmos', 'Pathfinding', 'Python', 'Visualización'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    },
    {
      title: 'Liderazgo en Equipos Técnicos: Lecciones de la Coordinación Académica',
      excerpt: 'Principios de liderazgo efectivo aplicables tanto a equipos de desarrollo como a grupos académicos, basados en experiencia real.',
      content: 'Liderar equipos técnicos requiere un balance único entre expertise técnico, inteligencia emocional y visión estratégica. Mis experiencias en coordinación académica me han enseñado lecciones valiosas...',
      date: '2024-04-01',
      readTime: '8 min',
      category: 'Liderazgo',
      tags: ['Liderazgo', 'Gestión', 'Equipos', 'Desarrollo Profesional'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    },
    {
      title: 'Testing en React: De Unit Tests a E2E con Jest y Playwright',
      excerpt: 'Guía práctica sobre estrategias de testing para aplicaciones React, desde pruebas unitarias hasta tests end-to-end automatizados.',
      content: 'El testing es crucial para mantener aplicaciones React confiables y mantenibles. Este artículo cubre desde los fundamentos de Jest hasta estrategias avanzadas de E2E testing...',
      date: '2024-03-25',
      readTime: '11 min',
      category: 'Testing',
      tags: ['Testing', 'Jest', 'Playwright', 'Quality Assurance'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
    },
  ];

  return (
    <section id="blog" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Blog Técnico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reflexiones, tutoriales y análisis profundos sobre tecnología, educación,
            matemáticas y desarrollo de software.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden hover:glow-emerald transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-background text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Leer más
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect rounded-lg font-semibold hover:border-primary transition-all"
          >
            Ver todos los artículos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
