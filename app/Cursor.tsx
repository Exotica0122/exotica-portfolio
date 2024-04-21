"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export type CursorProps = {
  x: number;
  y: number;
};

const cursorTrails = [...Array(10)];

export const Cursor = ({ x, y }: CursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement[] | null[]>([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("mousedown", () => {
      console.log("down");

      setClicked(true);
    });

    window.addEventListener("mouseup", () => {
      setClicked(false);
    });

    if (!cursorRef.current || !cursorTrailRef.current) return;

    cursorRef.current.animate({ opacity: 1 }, { delay: 100 });
    // cursorRef.current.style.opacity = "1";

    // cursorTrailRef.current.forEach((trail) => {
    //   if (trail) trail.style.opacity = "1";
    // });
  }, []);

  useEffect(() => {
    if (!cursorRef.current || !cursorTrailRef.current) return;

    cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    cursorTrailRef.current.map((cursorTrail, i) => {
      setTimeout(() => {
        if (!cursorTrail) return;
        cursorTrail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }, 10 * i);
    });
  }, [x, y]);

  return (
    <>
      <div
        className={clsx(
          "pointer-events-none fixed z-50 h-5 w-5 rounded-full blur-[3px] transition-opacity duration-500",
          clicked ? "bg-emerald-400 " : "bg-slate-300",
        )}
        ref={cursorRef}
      />
      {cursorTrails.map((_, i) => (
        <div
          key={i}
          className={clsx(
            "pointer-events-none fixed z-50 h-5 w-5 rounded-full blur-[3px]",
            clicked ? "bg-emerald-400 " : "bg-slate-300",
          )}
          ref={(el) => (cursorTrailRef.current[i] = el)}
        />
      ))}
    </>
  );
};
