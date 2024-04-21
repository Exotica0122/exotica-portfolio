"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { Tile } from "./Tile";
import { Cursor } from "./Cursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Animation = () => {
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const [mouseY, setMouseY] = useState(window.innerHeight / 2);
  const slidingWindow = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.fromTo(
        slidingWindow.current,
        { opacity: 0 },
        { opacity: 1, delay: 1 },
      );
    },
    { scope: slidingWindow },
  );

  useEffect(() => {
    if (!slidingWindow.current) {
      return;
    }

    const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

    const maxX = slidingWindow.current.offsetWidth - window.innerWidth,
      maxY = slidingWindow.current.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

    slidingWindow.current.animate(
      {
        transform: `translate(${panX}px, ${panY}px)`,
      },
      {
        duration: 4000,
        fill: "forwards",
        easing: "ease",
        delay: 100,
      },
    );
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div className="window" onMouseMove={handleMouseMove}>
      <div
        id="sliding-window"
        className="absolute h-[140vmax] w-[140vmax] -translate-x-[15%] -translate-y-[30%]"
        ref={slidingWindow}
      >
        <Tile
          src={
            "https://images.unsplash.com/photo-1713453321322-28ef26986cc0?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Living Room"
          width={200}
          height={10}
          glassColor="bg-slate-500/10"
          position="left-[50%] top-[50%]"
        />
        <Tile
          src={
            "https://images.unsplash.com/photo-1713453321322-28ef26986cc0?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Living Room"
          width={200}
          height={10}
          glassColor="bg-slate-500/10"
          position="left-[45%] top-[45%]"
        />
        <Tile
          src={
            "https://images.unsplash.com/photo-1713453321322-28ef26986cc0?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Living Room"
          width={200}
          height={10}
          glassColor="bg-slate-500/10"
          position="left-[30%] top-[30%]"
        />
        <Tile
          src={
            "https://images.unsplash.com/photo-1713453321322-28ef26986cc0?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Living Room"
          width={200}
          height={10}
          glassColor="bg-slate-500/10"
          position="left-[50%] top-[50%]"
        />
      </div>
      <Cursor x={mouseX} y={mouseY} />
    </div>
  );
};
