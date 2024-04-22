import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const AUTDialog = () => {
  return (
    <DialogContent className="border-slate-500 bg-slate-950">
      <DialogHeader>
        <DialogTitle>Auckland University of Technology</DialogTitle>
        <DialogDescription className="my-8">
          This is my university that I graduated from.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};
