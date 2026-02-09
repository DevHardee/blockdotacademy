import type { CourseData } from "@/components/admin/CourseBuilder";
import { CourseBuilder } from "@/components/admin/CourseBuilder";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminAddCourse = () => {
  const navigate = useNavigate();

  const handleSave = (data: CourseData) => {
    console.log("Saving new course:", data);
    toast.success("Course created successfully!");
    navigate("/admin/courses");
  };

  return (
    <CourseBuilder
      title="Create New Course"
      onSave={handleSave}
    />
  );
};

export default AdminAddCourse;
