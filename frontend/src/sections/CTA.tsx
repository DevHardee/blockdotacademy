import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const handleAction = () => {
    if (!isAuthenticated) {
      navigate("/signup")
      return
    }
    navigate("/my-courses")
  }

  return (
    <section id="contact" className="py-32 px-4 bg-[#030303] relative overflow-hidden">
      {/* Deep Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      {/* Dynamic Moving Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden p-12 md:p-24 rounded-[3.5rem] bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-2xl shadow-2xl text-center space-y-10 group">

            {/* Visual Flare lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Ready to start your<br />
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">next chapter?</span>
              </h2>

              <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed font-medium">
                Direct, effective lessons designed to help you master the markets. Join thousands of students building their future today.
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                onClick={handleAction}
                className="bg-linear-to-r from-primary to-accent w-full hover:scale-105 transition-all duration-500 font-bold px-16 py-8 rounded-[2rem] text-lg! md:text-2xl! shadow-[0_0_40px_rgba(41,98,255,0.4)] group h-14 md:h-20"
              >
                Get Started Now <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-accent/30 rounded-br-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}

export default CTA