import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, BookOpen, Award, Lock, CheckCircle } from "lucide-react"

interface CurriculumProps {
  course: any
  isLessonUnlocked: (id: number) => boolean
  enrolledLessons: number[]
}

const CourseCurriculum = ({ course, isLessonUnlocked }: CurriculumProps) => {
  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="h-4 w-4" />
      case "quiz":
        return <BookOpen className="h-4 w-4" />
      case "lab":
        return <Award className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-4">
      {course.curriculum.map((module: any, moduleIndex: number) => (
        <Card key={moduleIndex}>
          <CardHeader>
            <CardTitle className="text-lg">{module.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {module.lessons.map((lesson: any) => (
                <div
                  key={lesson.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    isLessonUnlocked(lesson.id)
                      ? "bg-muted/30 border-primary/20"
                      : "bg-muted/10 border-border"
                  }`}
                >
                  <div className="flex items-center">
                    {isLessonUnlocked(lesson.id) ? (
                      <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    ) : (
                      <Lock className="h-4 w-4 text-muted-foreground mr-3" />
                    )}
                    {getLessonIcon(lesson.type)}
                    <span
                      className={`ml-2 ${
                        !isLessonUnlocked(lesson.id) ? "text-muted-foreground" : ""
                      }`}
                    >
                      {lesson.title}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-3">
                      {lesson.duration}
                    </span>
                    {isLessonUnlocked(lesson.id) && (
                      <Button size="sm" variant="ghost">
                        <PlayCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CourseCurriculum
