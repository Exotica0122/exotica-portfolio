import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export const AWSDialog = () => {
  return (
    <DialogContent className="border-slate-500 bg-slate-950">
      <DialogHeader>
        <DialogTitle>AWS Develop Associate</DialogTitle>
        <DialogDescription className="my-8">
          My very very proud AWS Develop Associate certification.
        </DialogDescription>
        <Link
          href="https://www.credly.com/badges/744cc198-6d12-41c1-bf2f-1dd46f32f703"
          target="_blank"
          className="underline hover:text-emerald-600"
        >
          Credly Link
        </Link>
      </DialogHeader>
    </DialogContent>
  );
};
