import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courses as mockCourses } from "@/lib/courses";

const AdminEditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const found = mockCourses.find(c => c.id === Number(id));
    setCourse(found);
  }, [id]);

  if (!course) {
    return (
      <MaxWidthWrapper>
        <p className="text-muted-foreground">Course not found.</p>
      </MaxWidthWrapper>
    );
  }

  const updateField = (key: string, value: string) => {
    setCourse((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Save logic (API call later)
    console.log("Updated course:", course);

    navigate("/admin/courses");
  };

  return (
    <MaxWidthWrapper className="py-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Course</h1>
        <p className="text-sm text-muted-foreground">Update course content and metadata</p>
      </div>

      <Card className="p-6 bg-card-gradient border-border/30 space-y-4">

        <div className="space-y-3">
          <input
            value={course.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Title"
            className="w-full p-2 rounded-xl border bg-background"
          />

          <input
            value={course.category}
            onChange={(e) => updateField("category", e.target.value)}
            placeholder="Category"
            className="w-full p-2 rounded-xl border bg-background"
          />

          <input
            value={course.level}
            onChange={(e) => updateField("level", e.target.value)}
            placeholder="Level"
            className="w-full p-2 rounded-xl border bg-background"
          />

          <textarea
            value={course.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Description"
            rows={4}
            className="w-full p-2 rounded-xl border bg-background"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>

      </Card>
    </MaxWidthWrapper>
  );
};

export default AdminEditCourse;
