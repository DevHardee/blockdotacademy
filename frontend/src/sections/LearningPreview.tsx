import { BookOpen, Play, Code, Trophy } from "lucide-react"
import { motion, useScroll, useSpring } from "motion/react"
import { useRef } from "react"

const journeySteps = [
  {
    title: "Learn",
    description: "Access curated, high-quality material from academic + industry professionals.",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-blue-500",
    shadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]"
  },
  {
    title: "Apply",
    description: "Test your knowledge with hands-on practice and real-time data simulations.",
    icon: <Play className="h-6 w-6" />,
    color: "bg-blue-500",
    border: "border-white/10"
  },
  {
    title: "Build",
    description: "Execute real-world projects, developing a portfolio of algorithms and systems.",
    icon: <Code className="h-6 w-6" />,
    color: "bg-blue-500",
    border: "border-white/10"
  },
  {
    title: "Grow",
    description: "Connect with global opportunities through our partner network and talent pools.",
    icon: <Trophy className="h-6 w-6" />,
    color: "bg-blue-500",
    shadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]"
  }
]

const LearningPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="journey" className="py-24 px-4 bg-[#030303] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight tracking-tighter">
            Your Journey to<br />
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Mastery.</span>
          </h2>
          <p className="text-xl text-white/40 max-w-xl mx-auto leading-relaxed font-medium">
            A comprehensive four-stage methodology from academic theory to industry professional.
          </p>
        </motion.div>

        <div className="relative space-y-32">
          {/* Vertical Line Background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />

          {/* Animated Vertical Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary to-accent -translate-x-1/2 hidden md:block"
          />

          {journeySteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className={`relative z-10 flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:text-right md:flex-row" : "md:text-left md:flex-row-reverse"}`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-4xl font-black text-white">{step.title}</h3>
                <p className="text-white/40 text-lg font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${step.color} ${step.shadow || ""} ${step.border || ""} border z-20 relative transition-all duration-500`}
                >
                  {step.icon}
                </motion.div>
                {/* Pulse effect */}
                <div className={`absolute inset-0 rounded-2xl ${step.color} opacity-20 blur-xl animate-pulse scale-150`} />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPreview
