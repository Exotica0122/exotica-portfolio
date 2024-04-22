import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export const FinappsterDialog = () => {
  return (
    <DialogContent className="border-slate-500 bg-slate-950">
      <DialogHeader>
        <DialogTitle>Finappster Team Delta v2</DialogTitle>
        <DialogDescription className="my-8">
          My final year university project showcase where we built a financial
          investment platform focused on sustainability.
        </DialogDescription>
        <Link
          href="https://finappster-delta-v2.netlify.app/"
          target="_blank"
          className="underline hover:text-emerald-600"
        >
          Go to project
        </Link>
      </DialogHeader>
    </DialogContent>
  );
};
