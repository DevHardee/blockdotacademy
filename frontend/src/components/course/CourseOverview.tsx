import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const CourseOverview = ({ course }: { course: any }) => {
  return (
    <div className="space-y-6">
      {/* Intro Video */}
      <Card>
        <CardHeader>
          <CardTitle>Course Introduction</CardTitle>
          <CardDescription>Get started with this quick introduction video</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DyUDgJJw2Ps?modestbranding=1&rel=0"
              title="Course Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle>What You’ll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {course.whatYoullLearn?.length ? (
                <ul className="space-y-2">
                {course.whatYoullLearn.map((item: string, i: number) => (
                <li key={i} className="text-muted-foreground flex items-start md:items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    {item}
                </li>
                ))}
                </ul>
                ) : (
                <p className="text-muted-foreground">No learning outcomes available yet.</p>
                )}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseOverview
