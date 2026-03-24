import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import FeaturedCourses from "@/sections/FeaturedCourses"
import CTA from "@/sections/CTA"

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        // Delay a bit to ensure DOM has rendered fully
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
      
      {/* Featured Courses Section */}
      <FeaturedCourses/>

      {/* CTA Section */}
      <CTA/>
    </div>
  )
}

export default Index
