"use client";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";
import ShinyText from "./ShinyText";
import { useTheme } from "next-themes";

export default function Projects() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      id="projects"  
      className="min-h-screen relative flex flex-col items-center gap-8 flex-wrap justify-center overflow-hidden py-20 bg-background text-foreground"
    >
      <ShinyText
        text="My Projects"
        speed={2}
        className="text-4xl font-bold font-sans text-foreground"
        delay={0}
        color="currentColor"
        shineColor={resolvedTheme === "dark" ? "#FFFFFF40" : "#00000030"}
        spread={120}
        direction="left"
        yoyo={true}
        pauseOnHover={true}
        disabled={false}
      />

      <div className="flex flex-row items-center gap-3 flex-wrap justify-center">
        {[...Array(5)].map((_, i) => (
          <SpotlightCard
            key={i}
            className="custom-spotlight-card"
         spotlightColor={
    resolvedTheme === "dark" 
      ? "#FFFFFF40" 
      : "#00000030"
  }
          >
            <div className="flex flex-col gap-5">
              <Image 
                src="/man2.png" 
                alt="Project Image" 
                width={200} 
                height={200}
                className="rounded-xl"
              />
              <span className="text-xl font-semibold text-foreground">
                Project name
              </span>
              <p className="text-xs font-normal text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </p>
              <Link 
                className="text-sm text-black hover:underline  self-end" 
                href="/"
              >
                Browse Project
              </Link>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}