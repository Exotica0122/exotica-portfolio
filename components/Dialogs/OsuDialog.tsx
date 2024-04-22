import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export const OsuDialog = () => {
  return (
    <DialogContent className="border-slate-500 bg-slate-950">
      <DialogHeader>
        <DialogTitle>My Game of choice</DialogTitle>
        <DialogDescription className="my-8">
          I&apos;ve been playing it since 2017 and enjoyed playing Osu. Wish I
          could be like worst hr player...
          <br />
          <br />
          The cursor in this site is inspired from the skin that I use.
        </DialogDescription>
        <Link
          href="https://osu.ppy.sh/users/9710804"
          target="_blank"
          className="underline hover:text-emerald-600"
        >
          Profile
        </Link>
      </DialogHeader>
    </DialogContent>
  );
};
