"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ProfileCard from "./ProfileCard";
import SpecularButton from "../SpecularButton";
import TextType from "@/components/TextType";
import Link from "next/link";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="hero"
      className="h-screen relative flex items-center justify-center overflow-hidden sm:py-20 bg-background"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-row lg:flex-row items-center justify-between gap-16 px-6 lg:px-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 max-w-2xl">
          <span className="block font-medium uppercase tracking-[0.25em] text-primary">
            Fullstack Developer
          </span>

          <TextType
            className="md:text-6xl sm:text-2xl text-foreground"
            text={[
              "Hi I'm Akram Full Stack Developer",
              "building fast, scalable, and modern web applications.",
              "I transform ideas into clean, responsive, and high-performance digital experiences using the latest web technologies.",
              "Explore my work and see how I bring design and functionality together",
            ]}
            variableSpeed=""
            onSentenceComplete={false}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            texts={[
              "Welcome to React Bits! Good to see you!",
              "Build some amazing experiences!",
            ]}
            deletingSpeed={30}
            cursorBlinkDuration={1.5}
          />

          <p className="mt-8 text-xl leading-8 text-muted-foreground">
            The one you can trust
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="#projects">
              {" "}
              <SpecularButton
                size="md"
                radius={50}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor={isDark ? "#f5f5f5" : "#111111"}
                lineColor={isDark ? "#ffffff" : "#111111"}
                baseColor={isDark ? "#ffffff" : "#000000"}
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log("clicked")}
              >
                View Projects
              </SpecularButton>
            </Link>
            <Link href="#contact">
              <SpecularButton
                size="md"
                radius={50}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor={isDark ? "#f5f5f5" : "#111111"}
                lineColor={isDark ? "#ffffff" : "#111111"}
                baseColor={isDark ? "#ffffff" : "#000000"}
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log("clicked")}
              >
                Find me here
              </SpecularButton>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
