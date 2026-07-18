"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = RefObject<HTMLElement | null>;

export default function useOrbitAnimation(sectionRef: Props) {
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".orbit-item");

      if (!items.length) return;

      const orbitData = items.map((item) => ({
        element: item,
        radius: Number(item.dataset.radius),
        angle: Number(item.dataset.angle),
        speed: item.classList.contains("inner-item")
          ? 0.008
          : -0.004,
      }));

      // الحركة المستمرة
      const animate = () => {
        orbitData.forEach((item) => {
          item.angle += item.speed;

          const x = Math.cos(item.angle) * item.radius;

          const y = Math.sin(item.angle) * item.radius;

          gsap.set(item.element, {
            x,
            y,
              transformOrigin: "center center",
          });
        });
      };

      gsap.ticker.add(animate);


      // Cleanup
      return () => {
        gsap.ticker.remove(animate);
      };
    },
    {
      scope: sectionRef,
    }
  );
}