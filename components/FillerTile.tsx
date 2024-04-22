import clsx from "clsx";

export type FillerTile = {
  position: string;
  glassColor: string;
  className: string;
};

export const FillerTile = ({ glassColor, position, className }: FillerTile) => {
  return (
    <div
      className={clsx(
        `peer absolute -translate-x-1/2 -translate-y-1/2 rounded-sm duration-200 ease-in-out hover:scale-110`,
        position,
      )}
    >
      <div
        className={clsx(
          "glass-container rounded-sm bg-slate-500/10",
          glassColor,
        )}
      >
        <div
          className={clsx(
            "select-none rounded-sm object-cover opacity-25 blur-sm transition duration-700 hover:opacity-100 hover:blur-none",
            className,
          )}
        />
      </div>
    </div>
  );
};
