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
          <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">The Digital Observatory</span>
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/courses" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full md:w-auto bg-linear-to-r from-primary to-accent hover:brightness-110 transition-all font-bold px-10 py-7 rounded-2xl text-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] group"
            >
              Start learning
            </Button>
          </Link>
          <Button
            size="lg"
            variant="ghost"
            className="w-full md:w-auto hover:bg-accent/10! border border-primary! font-bold px-10 py-7 rounded-2xl text-lg transition-all text-white/80"
          >
            Explore Learning Paths
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
