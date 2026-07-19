"use client";
import Image from "next/image";
import ElectricBorder from "../ElectricBorder";
import { useTheme } from "next-themes";

export default function ProfileCard() {
  const { resolvedTheme } = useTheme();

  return (
    <ElectricBorder
      color={resolvedTheme === "dark" ? "#7df9ff" : "#06b6d4"}
      speed={1}
      chaos={0.1}
      className=""
      style={{ borderRadius: 16 }}
    >
      <div className="relative h-[600px] w-[400px] overflow-hidden rounded-3xl border border-border bg-card">
        {/* Glow */}
        <div className="absolute inset-0 bg-primary/10 blur-3xl" />

        {/* Image */}
        <Image
          src="/man2.png"
          alt="Akram"
          fill
          className="object-cover object-top"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Extra Border */}
        <div className="absolute inset-0 rounded-3xl border border-primary/30" />
      </div>
    </ElectricBorder>
  );
}