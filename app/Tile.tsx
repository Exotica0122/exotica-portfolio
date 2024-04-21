import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export type TileProps = {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
  glassColor?: string;
  position: string;
};

export const Tile = ({
  src,
  alt,
  width,
  height,
  glassColor,
  position,
}: TileProps) => {
  return (
    <Link
      className={clsx(
        `peer absolute -translate-x-1/2 -translate-y-1/2 rounded-sm duration-200 ease-in-out hover:scale-110`,
        position,
      )}
      href="/"
    >
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
          className="h-full w-full rounded-sm object-cover opacity-0 transition duration-700 hover:opacity-100"
        />
      </div>
    </Link>
  );
};
