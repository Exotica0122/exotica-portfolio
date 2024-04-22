import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ProfileDialog = () => {
  return (
    <DialogContent className="border-slate-500 bg-slate-950">
      <DialogHeader>
        <DialogTitle>Hello!</DialogTitle>
        <DialogDescription className="my-8">
          Hi it&apos;s me! This is a photo from a careers expo at my university.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};
