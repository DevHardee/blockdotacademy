import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TabsContent } from "@/components/ui/tabs"
import { Award, Star } from "lucide-react"

const ProfileCourses = () => {
    const completedCourses = [
        { id: 1, title: "React Fundamentals", rating: 5, completed: "2 weeks ago" },
        { id: 2, title: "Advanced JS Patterns", rating: 4, completed: "1 month ago" },
      ]

  return (
    <TabsContent value="courses" className="space-y-6">
        <h3 className="text-xl font-semibold">Completed Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((c) => (
            <Card key={c.id} className="border border-border/30 hover:border-primary/60 hover:shadow-lg hover:scale-105 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                  <CardDescription>Completed {c.completed}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                       {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                         key={i}
                         className={`h-4 w-4 ${
                         i < c.rating ? "fill-accent text-accent" : "text-muted-foreground"
                         }`}
                        />
                        ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                    <Award className="h-3 w-3 mr-1" />
                        Certified
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Certificate
                  </Button>
                </CardContent>
            </Card>
            ))}
        </div>
    </TabsContent>
  )
}

export default ProfileCourses
