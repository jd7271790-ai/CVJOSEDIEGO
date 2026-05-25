import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Facebook, ChevronDown } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Ingeniero de Sistemas | Educador | Líder Académico';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
      }
    }
  }, [text, isTyping]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jd7271790-ai', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/jose_romaleo10', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1CuRZV8GuC/', label: 'Facebook' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-1 glow-emerald">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-7xl font-bold text-gradient">JD</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-primary rounded-full"
              style={{ padding: '10px' }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">José Diego</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="h-20 mb-8"
        >
          <p className="text-2xl md:text-3xl text-muted-foreground">
            {text}
            <span className="inline-block w-1 h-8 bg-primary ml-1 animate-pulse" />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Estudiante de último año de Ingeniería de Sistemas en la UNHEVAL.
          Apasionado por la tecnología, la educación y el liderazgo académico.
          Especializado en matemáticas, resolución de problemas y desarrollo de software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold glow-emerald hover:shadow-2xl transition-all"
          >
            Contáctame
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass-effect rounded-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-all"
          >
            Ver Proyectos
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center text-primary hover:glow-emerald transition-all group"
            >
              <social.icon className="group-hover:text-cyan transition-colors" size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-primary" size={40} />
      </motion.div>
    </section>
  );
}
