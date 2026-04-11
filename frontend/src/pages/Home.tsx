import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "motion/react"
import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import LearningPreview from "@/sections/LearningPreview"
import FeaturedCourses from "@/sections/FeaturedCourses"
import Testimonials from "@/sections/Testimonials"
import Partners from "@/sections/Partners"
import CTA from "@/sections/CTA"

const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
)

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
    <div className="relative flex flex-col justify-center w-full bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - Animates on load */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Our Features Section */}
      <SectionWrapper>
        <Features />
      </SectionWrapper>

      {/* Featured Courses Section */}
      <SectionWrapper>
        <FeaturedCourses />
      </SectionWrapper>

      {/* Journey Section */}
      <div className="w-full">
        <LearningPreview />
      </div>

      {/* Testimonials Section */}
      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      {/* Partners Section */}
      <SectionWrapper delay={0.2}>
        <Partners />
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <CTA />
      </SectionWrapper>
    </div>
  )
}

export default Home
