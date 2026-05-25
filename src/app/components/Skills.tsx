import { motion } from 'motion/react';
import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Code, Database, Lightbulb, Users, TrendingUp, BookOpen } from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('technical');

  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'SQL/Databases', level: 80 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Algoritmos', level: 90 },
  ];

  const mathematicalSkills = [
    { name: 'Álgebra', level: 95 },
    { name: 'Cálculo', level: 90 },
    { name: 'Geometría', level: 85 },
    { name: 'Estadística', level: 80 },
    { name: 'Trigonometría', level: 92 },
    { name: 'Matemática Discreta', level: 88 },
  ];

  const softSkills = [
    { subject: 'Comunicación', value: 95 },
    { subject: 'Liderazgo', value: 88 },
    { subject: 'Trabajo en Equipo', value: 92 },
    { subject: 'Resolución de Problemas', value: 95 },
    { subject: 'Pensamiento Crítico', value: 90 },
    { subject: 'Adaptabilidad', value: 87 },
  ];

  const educationalSkills = [
    { name: 'Diseño Instruccional', level: 85 },
    { name: 'Evaluación', level: 88 },
    { name: 'Pedagogía Digital', level: 82 },
    { name: 'Gestión de Aula', level: 90 },
    { name: 'Mentoría', level: 92 },
    { name: 'Desarrollo Curricular', level: 80 },
  ];

  const categories = [
    { id: 'technical', label: 'Habilidades Técnicas', icon: Code, color: 'emerald' },
    { id: 'mathematical', label: 'Habilidades Matemáticas', icon: Lightbulb, color: 'cyan' },
    { id: 'soft', label: 'Habilidades Blandas', icon: Users, color: 'purple' },
    { id: 'educational', label: 'Habilidades Pedagógicas', icon: BookOpen, color: 'amber' },
  ];

  const getColorByCategory = (category: string) => {
    switch (category) {
      case 'technical': return '#10b981';
      case 'mathematical': return '#06b6d4';
      case 'soft': return '#8b5cf6';
      case 'educational': return '#f59e0b';
      default: return '#10b981';
    }
  };

  const renderSkillBars = (skills: Array<{ name: string; level: number }>) => (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-primary font-bold">{skill.level}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un conjunto integral de habilidades técnicas, matemáticas, pedagógicas y blandas
            que me permiten abordar desafíos complejos desde múltiples perspectivas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'glass-effect glow-emerald border-2 border-primary'
                  : 'glass-effect hover:border-primary/50 border-2 border-transparent'
              }`}
            >
              <category.icon size={20} />
              <span className="font-semibold">{category.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            {selectedCategory === 'technical' && renderSkillBars(technicalSkills)}
            {selectedCategory === 'mathematical' && renderSkillBars(mathematicalSkills)}
            {selectedCategory === 'educational' && renderSkillBars(educationalSkills)}
            {selectedCategory === 'soft' && (
              <div className="h-[400px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={softSkills}>
                    <PolarGrid stroke="#10b981" strokeOpacity={0.3} />
                    <PolarAngleAxis dataKey="subject" stroke="#e8ecf0" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#e8ecf0" />
                    <Radar
                      name="Habilidades"
                      dataKey="value"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Competencias Destacadas</h3>

            {selectedCategory === 'technical' && (
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">Desarrollo Full-Stack</h4>
                  <p className="text-sm text-muted-foreground">
                    Experiencia en desarrollo de aplicaciones web completas utilizando tecnologías modernas
                    como React, Node.js, y bases de datos SQL/NoSQL.
                  </p>
                </div>
                <div className="border-l-4 border-cyan pl-4">
                  <h4 className="font-bold mb-2">Algoritmos y Estructuras de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Sólido dominio de algoritmos, complejidad computacional y estructuras de datos avanzadas.
                    Participación activa en competencias de programación.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold mb-2">Arquitectura de Software</h4>
                  <p className="text-sm text-muted-foreground">
                    Conocimiento de patrones de diseño, principios SOLID, y mejores prácticas de desarrollo.
                  </p>
                </div>
              </div>
            )}

            {selectedCategory === 'mathematical' && (
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">Resolución de Problemas Complejos</h4>
                  <p className="text-sm text-muted-foreground">
                    Experiencia demostrada en la resolución de problemas matemáticos de alto nivel,
                    incluyendo olimpiadas y competencias académicas.
                  </p>
                </div>
                <div className="border-l-4 border-cyan pl-4">
                  <h4 className="font-bold mb-2">Análisis Matemático</h4>
                  <p className="text-sm text-muted-foreground">
                    Dominio de cálculo diferencial e integral, series, ecuaciones diferenciales
                    y análisis numérico aplicado.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold mb-2">Modelado Matemático</h4>
                  <p className="text-sm text-muted-foreground">
                    Capacidad para traducir problemas del mundo real en modelos matemáticos
                    y encontrar soluciones óptimas.
                  </p>
                </div>
              </div>
            )}

            {selectedCategory === 'soft' && (
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">Comunicación Efectiva</h4>
                  <p className="text-sm text-muted-foreground">
                    Habilidad excepcional para explicar conceptos complejos de manera simple y clara,
                    adaptándome a diferentes audiencias y niveles de conocimiento.
                  </p>
                </div>
                <div className="border-l-4 border-cyan pl-4">
                  <h4 className="font-bold mb-2">Liderazgo Transformador</h4>
                  <p className="text-sm text-muted-foreground">
                    Experiencia liderando equipos académicos y proyectos colaborativos,
                    inspirando a otros a alcanzar su máximo potencial.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold mb-2">Pensamiento Analítico</h4>
                  <p className="text-sm text-muted-foreground">
                    Capacidad para descomponer problemas complejos, identificar patrones
                    y desarrollar soluciones innovadoras y efectivas.
                  </p>
                </div>
              </div>
            )}

            {selectedCategory === 'educational' && (
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">Metodologías Activas</h4>
                  <p className="text-sm text-muted-foreground">
                    Implementación de metodologías de aprendizaje activo, incluyendo aprendizaje
                    basado en problemas, flipped classroom y gamificación.
                  </p>
                </div>
                <div className="border-l-4 border-cyan pl-4">
                  <h4 className="font-bold mb-2">Evaluación Formativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Diseño e implementación de sistemas de evaluación continua que promueven
                    el aprendizaje significativo y la retroalimentación constructiva.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold mb-2">Tecnología Educativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Integración efectiva de herramientas digitales y plataformas LMS
                    para potenciar el aprendizaje híbrido y a distancia.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl border border-primary/20">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <TrendingUp className="text-primary" size={20} />
                Aprendizaje Continuo
              </h4>
              <p className="text-sm text-muted-foreground">
                Constantemente actualizando y expandiendo mis habilidades a través de cursos,
                certificaciones y práctica deliberada. Comprometido con la excelencia y la mejora continua.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
