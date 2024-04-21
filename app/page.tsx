import Image from "next/image";
import { Animation } from "./Animation";
import clsx from "clsx";

const MainUI = () => {
  return (
    <div className="relative">
      <h1 className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-emerald-50 to-emerald-700 bg-clip-text text-8xl not-italic text-transparent">
        Exotica
      </h1>
      <div
        className={clsx(
          "rounded-1/2 fixed left-1/2 top-1/2 -z-10 h-24 w-64 max-w-sm -translate-x-1/2 -translate-y-1/2 animate-pulse bg-blue-500/65 blur-[60px] filter transition-colors duration-1000 peer-hover:bg-blue-500",
        )}
      />
    </div>
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
