import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses as mockCourses } from "@/lib/courses";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { DeleteCourseModal } from "@/components/DeleteCourseModal";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Users,
  Clock,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

const AdminCourses = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    setDeleteModalOpen(false);
  };

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MaxWidthWrapper className="space-y-8 pb-10">
      <DeleteCourseModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={() => courseToDelete && handleDelete(courseToDelete)}
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage your curriculum and content</p>
        </div>
        <Link to="/admin/courses/add">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
            <Plus className="mr-2 h-4 w-4" /> Add New Course
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by course title..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Badge variant="secondary" className="px-3 py-1 flex items-center">
            {filteredCourses.length} Courses
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group border border-border/40 hover:border-primary/40 transition-all overflow-hidden bg-card h-full flex flex-col">
              <div className="p-5 space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                    {c.category}
                  </Badge>
                  <Badge className={c.status === "Published" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"}>
                    {c.status || "Published"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {c.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    <span>{c.students} Students</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{c.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{c.level}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-border/40 bg-muted/20 flex items-center justify-between">
                <div className="text-sm font-bold text-primary">{c.price}</div>
                <div className="flex items-center gap-2">
                  <Link to={`/admin/courses/edit/${c.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-red-500/10 hover:text-red-500"
                    onClick={() => {
                      setCourseToDelete(c.id);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Link to={`/admin/courses/manage/${c.id}`}>
                    <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                      Manage
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="py-20 text-center">
          <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-30" />
          <p className="text-muted-foreground">No courses found matching your search</p>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default AdminCourses;
