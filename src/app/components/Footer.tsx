import { motion } from 'motion/react';
import { Heart, Github, Instagram, Facebook, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = {
    navigation: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Sobre Mí', href: '#about' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Habilidades', href: '#skills' },
    ],
    resources: [
      { label: 'Certificaciones', href: '#certifications' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contacto', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jd7271790-ai', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/jose_romaleo10', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1CuRZV8GuC/', label: 'Facebook' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-dark-graphite border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <span className="font-bold text-xl text-background">JD</span>
              </div>
              <span className="text-xl font-bold text-gradient">José Diego</span>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-6">
              Estudiante de Ingeniería de Sistemas, educador apasionado y líder académico.
              Transformando la educación a través de la tecnología.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Navegación</h3>
            <ul className="space-y-2">
              {links.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-cyan">Recursos</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:jose.romaleo@unheval.edu.pe" className="hover:text-primary transition-colors">
                  jose.romaleo@unheval.edu.pe
                </a>
              </li>
              <li>
                <a href="tel:+51999888777" className="hover:text-primary transition-colors">
                  +51 999 888 777
                </a>
              </li>
              <li>Huánuco, Perú</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} José Diego. Desarrollado con{' '}
            <Heart className="inline w-4 h-4 text-red-500 animate-pulse" /> usando React + TypeScript + Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:glow-emerald transition-all"
          >
            <ArrowUp className="text-primary" size={20} />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500" />
    </footer>
  );
}
