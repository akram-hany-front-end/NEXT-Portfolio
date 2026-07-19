'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "test", icon: '⚡' },
  { name: "test", icon: '⚛️' },
  { name: "test", icon: '💙' },
  { name: "test", icon: '🌊' },
  { name: "test", icon: '🎥' },
  { name: "test", icon: '✨' },
  { name: "test", icon: '🟢' },
  { name: "test", icon: '🍃' },
];

export default function SkillsCircle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(itemsRef.current, {
        opacity: 0,
        scale: 0.3,
        rotation: -20,
      });

      // Main entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          scrub: 1,
          pin: false,
        },
      });

      tl.to(itemsRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'back.out(1.4)',
      });

      // Z-index animation during scroll
      gsap.fromTo(sectionRef.current,
        { zIndex: 1 },
        {
          zIndex: 50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          }
        }
      );

      // Orbital Animation - الـ Container كله يلف
      gsap.to(orbitContainerRef.current, {
        rotation: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
className="h-screen py-20 flex items-center justify-center overflow-hidden relative "    >
      <div className="relative mx-auto">
        {/* Center Photo */}
        <div
          ref={centerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-cyan-400 shadow-2xl shadow-cyan-300/20">
            <img
              src="/man2.png"
              alt="Your Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h2 className="text-4xl mt-10 font-bold text-white">Your Name</h2>
            <p className="text-cyan-200 text-xl">Full Stack Developer</p>
          </div>
        </div>

        {/* Orbit Container */}
        <div
          ref={orbitContainerRef}
          className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 origin-center"
          style={{ zIndex: 1000 }}
        >
          {/* Skills Circle */}
          {skills.map((skill, i) => {
            const angle = (i * 360) / skills.length;
            return (
              <div
                key={i}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className="absolute left-1/2 top-1/2 w-28 h-28 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center origin-center"
                style={{
                  transform: `rotate(${angle}deg) translateY(-280px)`,
                }}
              >
                <div
                  className="flex flex-col w-20 h-20 text-white px-6 py-3 rounded-full items-center gap-0 hover:scale-110 transition-transform duration-300 border border-white/20"
                  style={{
                    transform: `rotate(-${angle}deg)`,
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}