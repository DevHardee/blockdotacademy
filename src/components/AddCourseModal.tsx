import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  
  export default function AddCourseModal({ open, onClose, onAdd }: any) {
    const [form, setForm] = useState({
      title: "",
      description: "",
      category: "",
      level: "",
    });
  
    const handleSubmit = () => {
      onAdd(form);
      onClose();
    };
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="bg-card-gradient border-border/30">
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
          </DialogHeader>
  
          <div className="space-y-3">
            {["title", "category", "level", "description"].map((field) => (
              <input
                key={field}
                placeholder={field}
                className="w-full p-2 rounded-xl border bg-background"
                onChange={(e) =>
                  setForm({ ...form, [field]: e.target.value })
                }
              />
            ))}
          </div>
  
          <Button className="w-full mt-4" onClick={handleSubmit}>
            Add Course
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  