"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "./ShinyText";
import { useTheme } from "next-themes";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
    SiTypescript,
  SiNextdotjs,
  SiDotnet,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];
export default function SkillsCircle() {
  const { resolvedTheme } = useTheme();
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
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tl.to(itemsRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "back.out(1.4)",
      });

      // Orbital Animation (اللف الدائري)
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
      className="h-screen py-20 flex items-center justify-center overflow-hidden relative bg-background"
    >
      <div className="relative mx-auto">
        {/* Center Photo */}
        <div
          ref={centerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20">
            <img
              src="/man2.png"
              alt="Your Photo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col text-center mt-6">
            <ShinyText
              text="Akram Hany"
              speed={2}
              className="text-4xl font-bold font-sans mb-2 text-foreground"
              delay={0}
              color="currentColor"
              shineColor={resolvedTheme === "dark" ? "#FFFFFF20" : "#00000030"}
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={true}
              disabled={false}
            />
            <ShinyText
              text="Fullstack Developer"
              speed={2}
              className="text-md font-normal font-sans text-primary"
              delay={0}
              color="currentColor"
              shineColor={resolvedTheme === "dark" ? "#FFFFFF" : "#111111"}
              spread={120}
              direction="right"
              yoyo={false}
              pauseOnHover={true}
              disabled={true}
            />
          </div>
        </div>

        {/* Orbit Container */}
        <div
          ref={orbitContainerRef}
          className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 origin-center"
          style={{ zIndex: 1000 }}
        >
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
                  className="flex flex-col w-20 h-20 px-6 py-3 rounded-full items-center gap-0 hover:scale-110 transition-transform duration-300 border border-border bg-card text-foreground shadow-md"
                  style={{
                    transform: `rotate(-${angle}deg)`,
                  }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-sm mt-1 text-muted-foreground">{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}