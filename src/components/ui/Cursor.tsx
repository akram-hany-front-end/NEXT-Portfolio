"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!cursor.current) return;

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

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      ref={cursor}
      className="fixed left-0 top-0 z-[9999] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full pointer-events-none backdrop-blur-xs"
      style={{
        border: `1px solid ${isDark ? "#fff" : "#000"}`,
        backgroundColor: isDark
          ? "rgba(255,255,255,.1)"
          : "rgba(0,0,0,.1)",
      }}
    >
      <span
        style={{
          color: isDark ? "#fff" : "#000",
        }}
        className="text-xs font-bold"
      >
        {"</>"}
      </span>
    </div>
  );
}