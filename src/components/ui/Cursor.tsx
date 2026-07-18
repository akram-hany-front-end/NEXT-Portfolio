"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(cursor.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  return (
    <div
      ref={cursor}
      className="
        fixed
        left-0
        top-0
        z-[9999]
        flex
        h-7
        w-7
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400
        bg-cyan-400/10
        backdrop-blur-xs
        pointer-events-none
      "
    >
      <span className="text-xs font-bold text-cyan-300">
        {"</>"}
      </span>
    </div>
  );
}