import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import FeaturedCourses from "@/sections/FeaturedCourses"
import CTA from "@/sections/CTA"

const Home = () => {

  return (
    <div className="relative bg-background text-foreground overflow-hidden">
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

export default Home
