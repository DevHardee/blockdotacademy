import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses as mockCourses, type Course } from "@/lib/courses";
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
  const [courses, setCourses] = useState<Course[]>(mockCourses);
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
    <MaxWidthWrapper className="space-y-12 pb-20 selection:bg-primary/30">
      <DeleteCourseModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={() => courseToDelete && handleDelete(courseToDelete)}
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Curriculum</h1>
          <p className="text-lg text-white/40 font-medium">Manage your educational content and student tracks</p>
        </div>
        <Link to="/admin/courses/add">
          <Button className="rounded-xl px-8 h-12 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-bold uppercase tracking-widest text-[10px] border-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Plus className="mr-2 h-4 w-4" /> New Course
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 group w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search by course title..."
            className="bg-white/5 border-white/5 rounded-2xl h-14 pl-12 text-white font-medium focus:border-primary/50 focus:ring-0 placeholder:text-white/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button variant="outline" className="bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 border-white/10 transition-all">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Badge className="bg-accent/10 text-accent border-accent/20 rounded-full px-4 h-14 flex items-center text-[10px] font-black tracking-[0.2em] uppercase">
            {filteredCourses.length} Courses
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group relative flex flex-col justify-between h-full bg-[#0a0a0a] border-white/5 hover:border-white/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden p-8">
              <div className="space-y-6 flex-1">
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-widest">
                    {c.category}
                  </Badge>
                  <Badge className={c.status === "Published" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 rounded-full text-[8px] font-black uppercase tracking-widest" : "bg-amber-500/10 text-amber-500 border-amber-500/20 rounded-full text-[8px] font-black uppercase tracking-widest"}>
                    {c.status || "Published"}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-2xl leading-tight group-hover:text-primary transition-colors text-white">
                    {c.title}
                  </h3>
                  <p className="text-sm text-white/40 line-clamp-2 leading-relaxed font-medium">
                    {c.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <Users className="h-4 w-4" />
                    <span>{c.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <Clock className="h-4 w-4" />
                    <span>{c.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <BookOpen className="h-4 w-4" />
                    <span>{c.level}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between gap-4 border-t border-white/5 mt-8">
                <div className="text-2xl font-black text-white tracking-tight">{c.price}</div>
                <div className="flex items-center gap-2">
                  <Link to={`/admin/courses/edit/${c.id}`}>
                    <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-primary/10 hover:text-primary rounded-xl border border-white/5 transition-all">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 bg-white/5 hover:bg-red-500/10 hover:text-red-500 rounded-xl border border-white/5 transition-all"
                    onClick={() => {
                      setCourseToDelete(c.id);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Link to={`/admin/courses/manage/${c.id}`}>
                    <Button variant="outline" className="h-10 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[9px] border-white/10 rounded-xl px-4">
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
        <div className="py-32 text-center">
          <BookOpen className="h-16 w-16 text-white/10 mx-auto mb-6" />
          <p className="text-xl font-bold text-white/20">No matching tracks</p>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default AdminCourses;
