"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const cursorTrails = [...Array(20)];

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement[] | null[]>([]);
  const [clicked, setClicked] = useState(false);

  const animationCursor = (x: number, y: number) => {
    if (!cursorRef.current || !cursorTrailRef.current) return;

    cursorRef.current.animate(
      {
        transform: `translate3d(${x - cursorRef.current.offsetWidth / 2}px, ${y - cursorRef.current.offsetHeight / 2}px, 0)`,
      },
      {
        fill: "forwards",
      },
    );

    cursorTrailRef.current.map((cursorTrail, i) => {
      setTimeout(() => {
        if (!cursorTrail) return;
        cursorTrail.animate(
          {
            transform: `translate3d(${x - cursorTrail.offsetWidth / 2}px, ${y - cursorTrail.offsetHeight / 2}px, 0)`,
          },
          {
            fill: "forwards",
          },
        );
      }, 5 * i);
    });
  };

  useEffect(() => {
    window.addEventListener("mousedown", () => {
      setClicked(true);
    });

    window.addEventListener("mouseup", () => {
      setClicked(false);
    });

    window.addEventListener("mousemove", (e) => {
      const { x, y } = e;
      void animationCursor(x, y);
    });

    window.addEventListener("touchmove", (e) => {
      const { clientX: x, clientY: y } = e.touches[0];
      void animationCursor(x, y);
    });
  }, []);

  return (
    <>
      <div
        className={clsx(
          "cursor pointer-events-none fixed left-0 top-0 z-[100] h-5 w-5 rounded-full blur-[3px] transition-opacity duration-500",
          clicked ? "bg-emerald-400 " : "bg-slate-300",
        )}
        ref={cursorRef}
      />
      {cursorTrails.map((_, i) => (
        <div
          key={i}
          className={clsx(
            "cursor-trail pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full blur-[3px]",
            clicked ? "bg-emerald-400 " : "bg-slate-300",
          )}
          ref={(el) => (cursorTrailRef.current[i] = el)}
        />
      ))}
    </>
  );
};
