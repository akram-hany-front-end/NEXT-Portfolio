'use client';
import { useEffect } from 'react';
import Hero from '@/components/hero/Hero';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import  Contact  from '@/components/Contact';
export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.overflowX = 'hidden';
  }, []);

  return (

    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section id="about" className="min-h-screen h-screen ">
          <Hero />
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen h-screen ">
          <Skills />
        </section>

        {/* About */}
        <section id="projects" className="min-h-screen h-screen  flex items-center justify-center">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen h-screen flex items-center justify-center">
     <Contact />
        </section>
      </main>
    </>
  );
}