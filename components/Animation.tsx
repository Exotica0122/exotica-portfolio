"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { Tile } from "./Tile";
import { Cursor } from "./Cursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { OsuDialog } from "./Dialogs/OsuDialog";
import { FillerTile } from "./FillerTile";
import { AWSDialog } from "./Dialogs/AWSDialog";
import { ProfileDialog } from "./Dialogs/ProfileDialog";
import { AUTDialog } from "./Dialogs/AUTDialog";
import { TypefastDialog } from "./Dialogs/TypefastDialog";
import { FinappsterDialog } from "./Dialogs/FinappsterDialog";

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
          src={"/images/osu-logo.png"}
          alt="osu"
          width={100}
          height={100}
          glassColor="bg-slate-500/10"
          position="left-[75%] top-[40%]"
        >
          <OsuDialog />
        </Tile>

        <Tile
          src={"/images/aws-developer-associate.png"}
          alt="aws developer associate"
          width={100}
          height={100}
          glassColor="bg-slate-500/10"
          position="left-[25%] top-[60%]"
        >
          <AWSDialog />
        </Tile>

        <Tile
          src={"/images/typefast.png"}
          alt="Typefast"
          width={200}
          height={100}
          glassColor="bg-slate-500/10"
          position="left-[50%] top-[35%]"
        >
          <TypefastDialog />
        </Tile>

        <Tile
          src={"/images/finappster.png"}
          alt="finappster"
          width={400}
          height={200}
          glassColor="bg-slate-500/10"
          position="left-[20%] top-[40%]"
        >
          <FinappsterDialog />
        </Tile>

        <Tile
          src={"/images/peter.jpeg"}
          alt="me"
          width={100}
          height={100}
          glassColor="bg-slate-500/10"
          position="left-[50%] top-[63%]"
        >
          <ProfileDialog />
        </Tile>

        <Tile
          src={"/images/covid-bot.png"}
          alt="AUT"
          width={100}
          height={100}
          glassColor="bg-slate-500/10"
          position="left-[25%] top-[20%]"
        >
          <OsuDialog />
        </Tile>

        <Tile
          src={"/images/aut-logo.jpeg"}
          alt="AUT"
          width={100}
          height={100}
          glassColor="bg-slate-500/10"
          position="left-[75%] top-[60%]"
        >
          <AUTDialog />
        </Tile>

        {/* Filler tiles */}
        <FillerTile
          className="h-36 w-24"
          position="left-[85%] top-[25%]"
          glassColor="bg-emerald-500/50 hover:bg-emerald-500"
        />
        <FillerTile
          className="h-36 w-44"
          position="left-[15%] top-[75%]"
          glassColor="bg-red-500/50 hover:bg-red-500"
        />
        <FillerTile
          className="h-52 w-52"
          position="left-[80%] top-[85%]"
          glassColor="bg-orange-500/50 hover:bg-orange-500"
        />

        <FillerTile
          className="h-32 w-80"
          position="left-[65%] top-[15%]"
          glassColor="bg-rose-500/50 hover:bg-rose-500"
        />
        <FillerTile
          className="h-20 w-44"
          position="left-[35%] top-[90%]"
          glassColor="bg-pink-500/50 hover:bg-pink-500"
        />
        <FillerTile
          className="h-36 w-56"
          position="left-[60%] top-[90%]"
          glassColor="bg-blue-500/50 hover:bg-blue-500"
        />
        {/* <FillerTile
          className="h-36 w-24"
          position="left-[15%] top-[90%]"
          glassColor="bg-cyan-500/50 hover:bg-cyan-500"
        /> */}
      </div>
      <Cursor />
    </div>
  );
};
