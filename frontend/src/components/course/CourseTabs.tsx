import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CourseOverview from "./CourseOverview"
import CourseCurriculum from "./CourseCurriculum"
import CourseInstructor from "./CourseInstructor"

interface CourseTabsProps {
  course: any
  isLessonUnlocked: (id: number) => boolean
  enrolledLessons: number[]
}

const CourseTabs = ({ course, isLessonUnlocked, enrolledLessons }: CourseTabsProps) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      {/* Tabs List */}
      <TabsList
        className="
          w-full
          h-full
          grid grid-cols-3
          border border-border
          rounded-lg
          bg-muted/20
          overflow-hidden
        "
      >
        <TabsTrigger
          value="overview"
          className="
            data-[state=active]:bg-primary/10
            data-[state=active]:text-primary
            data-[state=active]:font-semibold
            hover:bg-muted/40
            transition-all
            py-2
            text-sm md:text-base
          "
        >
          Overview
        </TabsTrigger>

        <TabsTrigger
          value="curriculum"
          className="
            data-[state=active]:bg-primary/10
            data-[state=active]:text-primary
            data-[state=active]:font-semibold
            hover:bg-muted/40
            transition-all
            py-2
            text-sm md:text-base
          "
        >
          Curriculum
        </TabsTrigger>

        <TabsTrigger
          value="instructor"
          className="
            data-[state=active]:bg-primary/10
            data-[state=active]:text-primary
            data-[state=active]:font-semibold
            hover:bg-muted/40
            transition-all
            py-2
            text-sm md:text-base
          "
        >
          Instructor
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <TabsContent value="overview" className="mt-6">
        <CourseOverview course={course} />
      </TabsContent>

      <TabsContent value="curriculum" className="mt-6">
        <CourseCurriculum
          course={course}
          isLessonUnlocked={isLessonUnlocked}
          enrolledLessons={enrolledLessons}
        />
      </TabsContent>

      <TabsContent value="instructor" className="mt-6">
        <CourseInstructor instructor={course.instructor} />
      </TabsContent>
    </Tabs>
  )
}

export default CourseTabs
