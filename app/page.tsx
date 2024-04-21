import Image from "next/image";
import { Animation } from "./Animation";
import clsx from "clsx";
import { TechStacks } from "./TechStacks";

const MainUI = () => {
  return (
    <>
      <h1 className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-emerald-50 to-emerald-700 bg-clip-text text-4xl not-italic text-transparent md:text-6xl lg:text-8xl">
        Exotica
      </h1>
      <div
        className={clsx(
          "rounded-1/2 fixed left-1/2 top-1/2 -z-10 h-24 w-64 max-w-sm -translate-x-1/2 -translate-y-1/2 animate-pulse bg-blue-500/65 blur-[60px] filter transition-colors duration-1000 peer-hover:bg-blue-500",
        )}
      />
      <TechStacks />
    </>
  );
};

export default function Home() {
  return (
    <main>
      <MainUI />
      <Animation />
    </main>
  );
}
