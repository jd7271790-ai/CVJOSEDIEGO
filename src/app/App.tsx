import { Toaster } from 'sonner';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Statistics } from './components/Statistics';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Statistics />
        <Certifications />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#131820',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            color: '#e8ecf0',
          },
        }}
      />
    </div>
  );
}