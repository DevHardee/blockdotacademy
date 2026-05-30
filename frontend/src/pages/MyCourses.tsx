"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { courses } from "@/lib/courses"
import { CourseCard } from "@/components/course/CourseCard"
import { toast } from "sonner"

const MyCourses = () => {
  const { isAuthenticated } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<number[]>([])


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // Simulate fetching enrolled courses from localStorage
    const stored = localStorage.getItem("enrolledCourses")
    if (stored) setEnrolledCourseIds(JSON.parse(stored))
  }, [])

  const handleEnroll = (courseId: number) => {
    const updated = [...new Set([...enrolledCourseIds, courseId])]
    setEnrolledCourseIds(updated)
    localStorage.setItem("enrolledCourses", JSON.stringify(updated))
    toast.success("Enrolled successfully!")
  }

  // Categorize
  const enrolledCourses = useMemo(
    () => courses.filter((c) => enrolledCourseIds.includes(c.id)),
    [courses, enrolledCourseIds]
  )

  const availableCourses = useMemo(
    () => courses.filter((c) => !enrolledCourseIds.includes(c.id)),
    [courses, enrolledCourseIds]
  )

  // Filtering logic
  const filterCourses = (list: typeof courses) =>
    list.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
      return matchesSearch && matchesLevel && matchesCategory
    })

  //const filteredEnrolled = filterCourses(enrolledCourses)
  const filteredAvailable = filterCourses(availableCourses)

  const categories = ["all", "Blockchain", "Development", "DeFi", "NFTs", "Security"]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary/30">
      {/* Header */}
      <section className="bg-[#030303] py-20 border-b border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="capitalize text-5xl md:text-7xl font-black mt-6 mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
            Our Courses
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Master the digital economy with industry experts in blockchain, DeFi, and Web3.
          </p>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level} className="">
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      {isAuthenticated && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black tracking-tight mb-12">Your Enrolled Tracking</h2>
            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} enrolled />
                ))}
              </div>
            ) : (
              <div className="p-12 bg-white/5 border border-white/5 rounded-[2.5rem] text-center">
                <p className="text-white/40 font-medium">You haven’t enrolled in any courses yet.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Courses */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black tracking-tight mb-12">
            Available curriculum
          </h2>
          {filteredAvailable.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredAvailable.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={() => handleEnroll(course.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white/5 border border-white/5 rounded-[2.5rem]">
              <Filter className="h-16 w-16 mx-auto text-white/10 mb-6" />
              <h3 className="text-2xl font-bold mb-2">No matching tracks</h3>
              <p className="text-white/30 font-medium">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default MyCourses
