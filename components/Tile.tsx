import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ReactNode } from "react";

export type TileProps = {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
  glassColor?: string;
  position: string;
  children?: ReactNode;
};

export const Tile = ({
  src,
  alt,
  width,
  height,
  glassColor,
  position,
  children,
}: TileProps) => {
  return (
    <Dialog>
      <div
        className={clsx(
          `peer absolute -translate-x-1/2 -translate-y-1/2 rounded-sm duration-200 ease-in-out hover:scale-110`,
          position,
        )}
      >
        <DialogTrigger className="outline-none">
          <div
            className={clsx(
              "glass-container rounded-sm bg-slate-500/10",
              glassColor,
            )}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-full w-full select-none rounded-sm object-cover opacity-25 blur-sm transition duration-700 hover:opacity-100 hover:blur-none"
            />
          </div>
        </DialogTrigger>
        {children}
      </div>
    </Dialog>
  );
};
