import { Progress } from "@/components/ui/progress"

interface CourseProgressProps {
  progress: number
}

const CourseProgress = ({ progress }: CourseProgressProps) => {
  return (
    <div className="w-full border border-border/60 rounded-lg p-5 bg-muted/20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          Course Progress
        </h3>
        <span className="text-sm font-semibold text-accent!">
          {progress}% complete
        </span>
      </div>
      <Progress value={progress} className="h-3 bg-muted" />
      <p className="text-xs text-muted-foreground mt-2">
        {progress === 100
          ? "🎉 Congratulations! You’ve completed this course."
          : "Keep going — you’re doing great!"}
      </p>
    </div>
  )
}

export default CourseProgress
