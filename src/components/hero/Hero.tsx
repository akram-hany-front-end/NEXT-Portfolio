"use client";

import HeroTitle from "./HeroTitle";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto flex w-[100%] max-w-7xl flex-row items-center justify-between gap-16 lg:flex-row">
        {/* Left */}
        <div className="w-1/2 max-w-2xl">
          <span className="font-medium uppercase tracking-[0.25em] text-cyan-300">
            Frontend Developer
          </span>

          <HeroTitle />

          <p className="mt-8 text-xl leading-8 text-gray-400">
            The one you wan't work with .
          </p>
          {/* BUTTONS */}
          <div className="mt-10 flex gap-5">
            <button
              className="
              rounded-full
              bg-black-400
              px-8
              py-4
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
            "
            >
              View Projects
            </button>

            <button
              className="
              rounded-full
              border
              border-white/20
              px-8
              py-4
              transition
              hover:border-cyan-400
            "
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-auto">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
