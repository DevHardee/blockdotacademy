import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, MessageSquare } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

interface CourseSidebarProps {
  course: any
  enrolled: boolean
  onEnroll?: () => void
}

const CourseSidebar = ({ course, enrolled, onEnroll }: CourseSidebarProps) => {
  const {isAuthenticated} = useAuth()
  const navigate = useNavigate()

  const handleEnroll = () => {
    if(!isAuthenticated) {
      navigate("/login")
      return
    }
    onEnroll?.()
  }

  const handleDiscussion = () => {
    if(!isAuthenticated) {
      navigate("/login")
      return
    }
    navigate("/community")
  }

  const handleDownloadSyllabus = () => {
    if(!isAuthenticated) {
      navigate("/login")
      return
    }
    null
  }

  return (
    <Card className="sticky top-4">
      <CardContent className="p-6">
        {/* --- Price Section --- */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <span className="text-3xl font-bold text-primary">{course.price}</span>
            {course.originalPrice && (
              <span className="text-lg text-muted-foreground line-through ml-2">
                {course.originalPrice}
              </span>
            )}
          </div>
          {course.price === "Free" && (
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Limited Time Free
            </Badge>
          )}
        </div>

        {/* --- Buttons --- */}
        <div className="space-y-3 mb-6">
          <Button
            size="lg"
            className="w-full bg-primary-foreground! text-black! hover:bg-primary-foreground/95! shadow-lg"
            onClick={handleEnroll}
          >
            {isAuthenticated && enrolled ? "Continue Learning" : "Enroll Now"}
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="w-full hover:text-black hover:bg-primary-foreground!"
            onClick={handleDownloadSyllabus}
            >
            <Download className="h-4 w-4 mr-2" />
            Download Syllabus
          </Button>
        </div>

        {/* --- Course Info --- */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Duration</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Level</span>
            <span>{course.level}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Students</span>
            <span>{course.students}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Certificate</span>
            <span>Yes</span>
          </div>
        </div>

        {/* --- Discussion Button --- */}
        <div className="pt-6 mt-6 border-t border-border">
            <Button 
              variant="outline" 
              className="w-full text-accent" 
              onClick={handleDiscussion}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Join Course Discussion
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseSidebar
