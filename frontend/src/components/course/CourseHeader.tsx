import { Badge } from "@/components/ui/badge";
import { Users, Star, Clock } from "lucide-react";

const CourseHeader = ({ course }: { course: any }) => (
  <div>
    <div className="flex items-center gap-4 mb-4 p-3">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">{course.category}</Badge>
          <Badge
              variant={"secondary"}
            >
              {course.level}
            </Badge>
          <div className="text-xl md:text-2xl">{course.image}</div>
        </div>
        <h1 className="text-xl! md:text-4xl font-bold mb-2">{course.title}</h1>
        <p className="text-base md:text-lg text-muted-foreground mb-4">{course.description}</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" /> {course.students} students
          </span>
          <span className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-accent text-accent" /> {course.rating}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" /> {course.duration}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default CourseHeader;
