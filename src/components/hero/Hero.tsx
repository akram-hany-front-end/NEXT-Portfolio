'use client';
import HeroTitle from "./HeroTitle";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen relative flex items-center justify-center overflow-hidden sm:py-20 "
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-8">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 max-w-2xl">
          <span className="font-medium uppercase tracking-[0.25em] text-cyan-300">
            Frontend Developer
          </span>
          
          <HeroTitle />
          
          <p className="mt-8 text-xl leading-8 text-gray-400">
            The one you want to work with.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 active:scale-95"
            >
              View Projects
            </button>
            <button
              className="rounded-full border border-white/30 px-8 py-4 text-white transition hover:border-cyan-400 "
            >
              Contact Me
            </button>
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