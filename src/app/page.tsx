'use client';
import { useEffect } from 'react';
import Hero from '@/components/hero/Hero';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';

export default function Home() {
  useEffect(() => {
    // إزالة أي تأثيرات سابقة
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
          <div className="text-center px-6 max-w-3xl">
            <h2 className="text-6xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300">
              اكتب هنا محتوى الـ About section
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-6xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-cyan-400 text-3xl">تواصل معي</p>
          </div>
        </section>
      </main>
    </>
  );
}