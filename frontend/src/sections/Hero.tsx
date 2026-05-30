import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion, type Variants } from "motion/react"

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative flex items-center justify-center py-14 md:py-28 bg-[#030303] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-6xl mx-auto px-4 relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-primary mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-[0.2em]">The Digital Observatory</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-white"
        >
          Learn. <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Build.</span><br />
          Grow.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Master trading, build real-world skills, and unlock global opportunities in the new digital economy.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-6 px-4"
        >
          <Link to="/courses" className="w-full md:w-auto">
            <Button
              size="lg"
              className="w-full md:w-72 bg-linear-to-r from-primary to-accent hover:brightness-110 hover:scale-105 transition-all duration-300 font-bold px-10 py-8 rounded-2xl text-lg shadow-[0_0_30px_rgba(41,98,255,0.3)] hover:shadow-[0_0_40px_rgba(41,98,255,0.5)] group h-12"
            >
              Start Learning
            </Button>
          </Link>
          <Button
            size="lg"
            variant="ghost"
            className="w-full md:w-72 hover:bg-white/5! border-2 border-primary! hover:border-accent! font-bold px-4 py-8 rounded-2xl text-lg transition-all duration-300 text-white/80 hover:text-white h-12"
          >
            Explore Learning Paths
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero