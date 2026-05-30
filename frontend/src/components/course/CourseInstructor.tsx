import { Card, CardContent } from "@/components/ui/card"

const CourseInstructor = ({ instructor }: { instructor: any }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div className="text-6xl">{instructor.avatar}</div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
          <p className="text-muted-foreground mb-3">{instructor.title}</p>
          <p>{instructor.bio}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default CourseInstructor
