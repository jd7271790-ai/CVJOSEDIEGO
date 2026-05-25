import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Especialización en Inteligencia Artificial',
      issuer: 'Stanford University Online',
      date: '2024',
      credential: 'CERT-AI-2024-8934',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python'],
      description: 'Programa intensivo de 6 meses sobre fundamentos y aplicaciones de IA, incluyendo procesamiento de lenguaje natural y visión por computadora.',
    },
    {
      title: 'Full Stack Web Development Professional Certificate',
      issuer: 'IBM - Coursera',
      date: '2023',
      credential: 'CERT-FS-2023-5621',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
      description: 'Certificación profesional en desarrollo web full-stack con enfoque en aplicaciones modernas y escalables.',
    },
    {
      title: 'Advanced Mathematics for Engineers',
      issuer: 'MIT OpenCourseWare',
      date: '2023',
      credential: 'CERT-MATH-2023-7412',
      skills: ['Cálculo Avanzado', 'Ecuaciones Diferenciales', 'Álgebra Lineal', 'Análisis Numérico'],
      description: 'Curso avanzado sobre matemáticas aplicadas a la ingeniería, incluyendo métodos numéricos y modelado matemático.',
    },
    {
      title: 'Data Science and Machine Learning Bootcamp',
      issuer: 'Udemy - José Portilla',
      date: '2023',
      credential: 'UC-DS-2023-9823',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization'],
      description: 'Bootcamp completo sobre ciencia de datos, análisis estadístico y machine learning con Python.',
    },
    {
      title: 'Metodologías Ágiles y Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2024',
      credential: 'CSM-2024-3456',
      skills: ['Scrum', 'Agile', 'Project Management', 'Team Leadership'],
      description: 'Certificación oficial de Scrum Master con enfoque en liderazgo de equipos ágiles y gestión de proyectos.',
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'Amazon Web Services (AWS)',
      date: '2023',
      credential: 'AWS-CLF-2023-7821',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
      description: 'Fundamentos de computación en la nube con AWS, incluyendo arquitectura, servicios y mejores prácticas.',
    },
    {
      title: 'Advanced Python Programming',
      issuer: 'Python Institute',
      date: '2022',
      credential: 'PCAP-2022-4521',
      skills: ['Python', 'OOP', 'Functional Programming', 'Design Patterns'],
      description: 'Certificación avanzada en programación con Python, patrones de diseño y mejores prácticas.',
    },
    {
      title: 'Database Design and SQL',
      issuer: 'Oracle Academy',
      date: '2022',
      credential: 'OCA-SQL-2022-6734',
      skills: ['SQL', 'Database Design', 'Normalization', 'Query Optimization'],
      description: 'Diseño de bases de datos relacionales, normalización y optimización de consultas SQL.',
    },
    {
      title: 'Pedagogía Digital y E-Learning',
      issuer: 'Universidad de Barcelona - Coursera',
      date: '2023',
      credential: 'CERT-PED-2023-2341',
      skills: ['Diseño Instruccional', 'LMS', 'Evaluación Digital', 'Gamificación'],
      description: 'Especialización en pedagogía digital, diseño de cursos online y herramientas de e-learning.',
    },
    {
      title: 'Git y GitHub para Desarrolladores',
      issuer: 'GitHub Education',
      date: '2022',
      credential: 'GH-DEV-2022-8912',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      description: 'Control de versiones con Git, flujos de trabajo colaborativos y mejores prácticas en GitHub.',
    },
    {
      title: 'Liderazgo y Gestión de Equipos',
      issuer: 'Universidad de Michigan - Coursera',
      date: '2024',
      credential: 'CERT-LEAD-2024-5634',
      skills: ['Leadership', 'Team Management', 'Communication', 'Conflict Resolution'],
      description: 'Desarrollo de habilidades de liderazgo, gestión de equipos y resolución de conflictos.',
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy - Maximilian Schwarzmüller',
      date: '2023',
      credential: 'UC-REACT-2023-7823',
      skills: ['React', 'Hooks', 'Context API', 'Redux', 'Next.js'],
      description: 'Guía completa de React desde fundamentos hasta tópicos avanzados como hooks, context y state management.',
    },
    {
      title: 'Algoritmos y Estructuras de Datos',
      issuer: 'Princeton University - Coursera',
      date: '2022',
      credential: 'CERT-ALG-2022-3421',
      skills: ['Algorithms', 'Data Structures', 'Complexity Analysis', 'Problem Solving'],
      description: 'Análisis de algoritmos, estructuras de datos fundamentales y técnicas de optimización.',
    },
    {
      title: 'Ciberseguridad Fundamentals',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      credential: 'CISCO-SEC-2023-9012',
      skills: ['Security', 'Network Security', 'Encryption', 'Risk Management'],
      description: 'Fundamentos de ciberseguridad, protección de redes y gestión de riesgos.',
    },
    {
      title: 'Inteligencia Emocional para Líderes',
      issuer: 'Case Western Reserve University',
      date: '2024',
      credential: 'CERT-EI-2024-1234',
      skills: ['Emotional Intelligence', 'Self-awareness', 'Empathy', 'Social Skills'],
      description: 'Desarrollo de inteligencia emocional para mejorar el liderazgo y las relaciones interpersonales.',
    },
  ];

  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Certificaciones y Formación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compromiso continuo con el aprendizaje y el desarrollo profesional a través de
            certificaciones reconocidas internacionalmente.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credential}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-effect rounded-xl p-6 hover:glow-emerald transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-background" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-cyan">{cert.issuer}</p>
                  </div>
                </div>
                <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {cert.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ExternalLink size={14} />
                  <span className="font-mono text-xs">{cert.credential}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                    +{cert.skills.length - 4} más
                  </span>
                )}
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.3, duration: 0.6 }}
                className="h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient">Educación Formal</span>
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <Award className="text-background" size={32} />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold">Ingeniería de Sistemas</h4>
                <p className="text-muted-foreground">Universidad Nacional Hermilio Valdizán (UNHEVAL)</p>
                <p className="text-sm text-primary">Último año - Graduación 2025</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Formación integral en desarrollo de software, análisis de sistemas, bases de datos,
              inteligencia artificial, y gestión de proyectos tecnológicos. Destacado por excelencia
              académica y participación activa en proyectos de investigación.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
