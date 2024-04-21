"use client";

import React, { useRef } from "react";
import clsx from "clsx";
import { ExoticaLogo } from "./ExoticaLogo";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiAmazonaws,
  SiSupabase,
} from "react-icons/si";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const iconItems = {
  nextjs: <SiNextdotjs />,
  react: <SiReact />,
  tailwind: <SiTailwindcss />,
  aws: <SiAmazonaws />,
  supabase: <SiSupabase />,
  typescript: <SiTypescript />,
} as const;

const icons = [
  "nextjs",
  "react",
  "tailwind",
  "aws",
  "supabase",
  "typescript",
] as const;

export const TechStacks = () => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          y: 100,
          ease: "power2.in",
        },
        {
          opacity: 1,
          y: 0,
          delay: 3,
          duration: 2,
        },
      );

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
        delay: 4,
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            {
              backgroundPosition: "0% 0%",
            },
            {
              backgroundPosition: "100% 100%",
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );
  return (
    <div
      className="pointer-events-none fixed bottom-[5%] left-1/2 z-40 flex -translate-x-1/2 scale-75 flex-col items-center md:scale-100"
      ref={container}
    >
      <div className="flex items-center">
        {icons.map((icon, index) => {
          return (
            <React.Fragment key={index}>
              {index === Math.floor(icons.length / 2) && (
                <>
                  <div className="glass-container rounded-sm bg-slate-300/5">
                    <ExoticaLogo />
                  </div>
                  <div className="signal-line hidden rotate-180 bg-gradient-to-t md:block" />
                </>
              )}
              <div className="pulsing-icon hidden aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 sm:flex md:text-4xl lg:text-5xl">
                {iconItems[icon]}
              </div>
              {index !== icons.length - 1 && (
                <div
                  className={clsx(
                    "signal-line hidden md:block",
                    index >= Math.floor(icon.length / 2)
                      ? "rotate-180"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
