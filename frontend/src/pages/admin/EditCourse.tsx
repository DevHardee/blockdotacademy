import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { courses as mockCourses } from "@/lib/courses";
import { CourseBuilder } from "@/components/admin/CourseBuilder";
import type { CourseData } from "@/components/admin/CourseBuilder";
import { toast } from "sonner";

const AdminEditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState<CourseData | null>(null);

  useEffect(() => {
    const found = mockCourses.find(c => c.id === Number(id));
    if (found) {
      // Mapping mock data to CourseData structure
      setCourse({
        title: found.title,
        description: found.description,
        category: found.category,
        level: found.level,
        price: found.price || "Free",
        // @ts-ignore - found.sections might not match exactly yet, but we'll adapt
        sections: found.sections || [],
      });
    }
  }, [id]);

  if (!course) {
    return (
      <MaxWidthWrapper className="py-20 text-center">
        <p className="text-muted-foreground">Course not found.</p>
      </MaxWidthWrapper>
    );
  }

  const handleSave = (data: CourseData) => {
    console.log("Saving updated course:", data);
    toast.success("Course updated successfully!");
    navigate("/admin/courses");
  };

  return (
    <CourseBuilder
      title="Edit Course"
      initialData={course}
      onSave={handleSave}
    />
  );
};

export default AdminEditCourse;
