"use client";
import Image from "next/image";
import ElectricBorder from "../ElectricBorder";

export default function ProfileCard() {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.1}
      className=""
      style={{ borderRadius: 16 }}
    >
      <div className="relative h-[600px] w-[400px] overflow-hidden rounded-3xl border bg-zinc-950">
        {/* Glow */}
        <div className="absolute inset-0 bg-gray-500/10 blur-3xl" />

        {/* Image */}
        <Image
          src="/man2.png"
          alt="Akram"
          fill
          className="object-cover object-top opacity-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Extra Border */}
        <div className="absolute inset-0 rounded-3xl border border-cyan-400/20" />
      </div>
    </ElectricBorder>
  );
}
