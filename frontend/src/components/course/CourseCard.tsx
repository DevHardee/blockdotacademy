import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { PlayCircle, Users, Star, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

interface CourseCardProps {
  course: any
  enrolled?: boolean
  onEnroll?: () => void
}

export const CourseCard = ({ course, enrolled = false, onEnroll }: CourseCardProps) => (
  <Card
    className={cn(
      "group relative flex flex-col justify-between h-full bg-[#0a0a0a] border-white/5 hover:border-white/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden p-6",
      enrolled && "ring-1 ring-primary/40"
    )}
  >
    <div className="flex-1 flex flex-col relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="text-3xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-500">{course.image}</div>
        <div className="flex gap-2">
          <Badge className="bg-white/5 text-white/50 border-white/10 hover:bg-white/10 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
            {course.category}
          </Badge>
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
            {course.level}
          </Badge>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight">
        {course.title}
      </h3>

      <p className="text-sm text-white/40 line-clamp-2 mb-6 leading-relaxed font-medium">
        {course.description}
      </p>

      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-white/20 mb-8 border-t border-white/5 pt-6">
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {course.duration}
        </span>
        <span className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          {course.students}
        </span>
        <span className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          {course.rating}
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 pt-2">
        <div className="text-2xl font-black text-white leading-none tracking-tight">
          {course.price}
        </div>
        {enrolled ? (
          <Link to={`/course/${course.id}`} className="flex-1">
            <Button className="w-full bg-linear-to-r from-primary to-accent text-white font-black uppercase tracking-widest text-[10px] rounded-xl h-12 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:brightness-110 transition-all border-0">
              <PlayCircle className="h-4 w-4 mr-2" /> Resume
            </Button>
          </Link>
        ) : (
          <Button onClick={onEnroll} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-xl h-12 border border-white/10 transition-all">
            <PlayCircle className="h-4 w-4 mr-2" /> Enroll Now
          </Button>
        )}
      </div>
    </div>
  </Card>
)
