import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import LearningPreview from "@/sections/LearningPreview"
import FeaturedCourses from "@/sections/FeaturedCourses"
import Testimonials from "@/sections/Testimonials"
import Partners from "@/sections/Partners"
import CTA from "@/sections/CTA"

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="relative flex flex-col justify-center w-full bg-background text-foreground">
      {/* Hero Section */}
      <Hero/>

      {/* Our Features Section */}
      <Features/>

      {/* Learning Preview Section */}
      <LearningPreview/>

      {/* Featured Courses Section */}
      <FeaturedCourses/>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* Partners Section */}
      <Partners/>

      {/* CTA Section */}
      <CTA/>
    </div>
  )
}

export default Home
