"use client";

import { useEffect, useState } from "react";

const title = "I Build Modern Web Experiences.";

export default function HeroTitle() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setText(title.slice(0, i + 1));
      i++;

      if (i === title.length) {
        clearInterval(timer);
      }
    }, 90); 

    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
      {text}
      <span className="ml-2 animate-pulse text-cyan-400">|</span>
    </h1>
  );
}