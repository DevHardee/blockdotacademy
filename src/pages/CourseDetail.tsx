"use client";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CourseHeader from "@/components/course/CourseHeader";
import CourseProgress from "@/components/course/CourseProgress";
import CourseTabs from "@/components/course/CourseTabs";
import CourseSidebar from "@/components/course/CourseSidebar";
import { courseMockData } from "@/lib/courses";
import { useAuth } from "@/context/AuthContext";

const CourseDetail = () => {
  const { id } = useParams();
  const [enrolledLessons,] = useState<number[]>([1, 2]);

  const {isAuthenticated} = useAuth()

  const course = courseMockData.find((c) => c.id === Number(id)) || courseMockData[0];

  const isLessonUnlocked = (lessonId: number) => enrolledLessons.includes(lessonId);

  const getCompletionProgress = () => {
    const total = course.curriculum.reduce((a, m) => a + m.lessons.length, 0);
    return Math.round((enrolledLessons.length / total) * 100);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={isAuthenticated ? "min-h-screen pt-20 bg-background" : "min-h-screen bg-background" }>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <MaxWidthWrapper>
          <div className="py-4">
            {isAuthenticated ? 
            <Link
              to="/my-courses"
              className="inline-flex pl-3 items-center text-secondary! hover:text-primary-foreground!"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </Link> 
            : 
            <Link
            to="/#courses"
            className="inline-flex pl-3 items-center text-secondary! hover:text-primary-foreground!"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Link>}
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper className="py-3 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CourseHeader course={course} />

            {isAuthenticated && enrolledLessons.length > 0 && (
              <CourseProgress progress={getCompletionProgress()} />
            )}

            <CourseTabs
              course={course}
              isLessonUnlocked={isLessonUnlocked}
              enrolledLessons={enrolledLessons}
            />
          </div>

          <div className="lg:col-span-1">
            <CourseSidebar
              course={course}
              enrolled={true}
              onEnroll={() => console.log("Enroll clicked")}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CourseDetail;
