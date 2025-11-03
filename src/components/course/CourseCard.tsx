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
      "group flex flex-col justify-between h-full border border-border/30 hover:border-primary/60 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card",
      enrolled && "ring ring-primary/40"
    )}
  >
    <div className="flex-1 flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="text-xl md:text-2xl">{course.image}</div>
          <div className="flex gap-2">
            <Badge variant="outline">{course.category}</Badge>
            <Badge
              variant={"secondary"}
            >
              {course.level}
            </Badge>
          </div>
        </div>

        <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>

        <CardDescription className="text-sm line-clamp-2 mb-2">
          {course.description}
        </CardDescription>

        <p className="text-sm text-muted-foreground">
          Instructor: {course.instructor}
        </p>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </span>
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {course.students}
          </span>
          <span className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-accent text-accent" />
            {course.rating}
          </span>
        </div>

        {/* Price + Button anchored at bottom */}
        <div className="mt-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">{course.price}</div>
          {enrolled ? (
            <Link to={`/course/${course.id}`}>
              <Button className="bg-primary text-primary-foreground">
                <PlayCircle className="h-4 w-4 mr-2" /> Continue
              </Button>
            </Link>
          ) : (
            <Button onClick={onEnroll}>
              <PlayCircle className="h-4 w-4 mr-2" /> Enroll
            </Button>
          )}
        </div>
      </CardContent>
    </div>
  </Card>
)
