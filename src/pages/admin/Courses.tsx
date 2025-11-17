import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses as mockCourses } from "@/lib/courses"; 
import { Link } from "react-router-dom";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { DeleteCourseModal } from "@/components/DeleteCourseModal";

const AdminCourses = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [deleteCourseOPen, setDeleteCourseOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<any>(null);

  const handleDelete = () => setCourses(prev => prev.filter(c => c.id !== currentCourse.id));

  return (
    <MaxWidthWrapper>

      <DeleteCourseModal open={deleteCourseOPen} onClose={() => setDeleteCourseOpen(false)} courseTitle={currentCourse?.title} onConfirm={handleDelete} />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manage Courses</h1>
          <p className="text-sm text-muted-foreground">Add, edit, publish or remove courses</p>
        </div>
        <div className="flex gap-3">
          <Link to={`/admin/courses/add`}>
             <Button>Add Course</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <Card key={c.id} className="p-4 bg-card-gradient border-border/30">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.level} • {c.category}</div>
                <div className="text-sm text-muted-foreground mt-2">{c.description}</div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <Link to={`/admin/courses/${c.id}/edit`}>
                  <Button size="sm">Edit</Button>
                </Link>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => { setCurrentCourse(c); setDeleteCourseOpen(true); }}
                  >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default AdminCourses;
