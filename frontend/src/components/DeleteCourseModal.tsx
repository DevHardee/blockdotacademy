import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteCourseModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  courseTitle?: string;
}

export const DeleteCourseModal = ({ open, onClose, onConfirm, courseTitle }: DeleteCourseModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card-gradient border-border/30 max-w-sm">
        <DialogHeader>
          <DialogTitle>Delete Course</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mt-2">
          Are you sure you want to delete <strong>{courseTitle}</strong>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="destructive" onClick={() => { onConfirm(); onClose(); }}>Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
