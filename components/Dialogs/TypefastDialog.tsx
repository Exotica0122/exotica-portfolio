import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export const TypefastDialog = () => {
  return (
    <DialogContent className="border-slate-500 bg-slate-950">
      <DialogHeader>
        <DialogTitle>Typefast - Monkeytype clone</DialogTitle>
        <DialogDescription className="my-8">
          A typing game made with React, Vite and Supabase. Made this because I
          was always curios how Monkeytype&apos;s UI was made
        </DialogDescription>

        <div className="flex items-center justify-start gap-4">
          <Link
            href="https://typefast-exotica.vercel.app"
            target="_blank"
            className="underline hover:text-emerald-600"
          >
            Visit
          </Link>
          <Link
            href="https://github.com/Exotica0122/Typefast"
            target="_blank"
            className="underline hover:text-emerald-600"
          >
            GitHub
          </Link>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};
