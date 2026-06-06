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

  return (
    <div className="relative flex flex-col justify-center w-full bg-background text-foreground overflow-clip">
      {/* Decorative Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-linear-to-r from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-linear-to-l from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

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
