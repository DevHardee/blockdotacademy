import { Card } from "@/components/ui/card"
import { motion } from "motion/react"
import {
  BookOpen,
  TrendingUp,
  ArrowRight,
  Cpu
} from "lucide-react"

// const features = [
//   {
//     icon: <BookOpen className="h-6 w-6" />,
//     title: "Interactive Learning",
//     description: "Hands-on coding exercises and real-world projects",
//   },
//   {
//     icon: <Users className="h-6 w-6" />,
//     title: "Community Driven",
//     description: "Connect with thousands of Web3 developers and learners",
//   },
//   {
//     icon: <Award className="h-6 w-6" />,
//     title: "Certified Learning",
//     description: "Earn recognized certificates upon course completion",
//   },
//   {
//     icon: <Zap className="h-6 w-6" />,
//     title: "Latest Technology",
//     description: "Stay updated with cutting-edge Web3 developments",
//   },
//   {
//     icon: <Shield className="h-6 w-6" />,
//     title: "Security First",
//     description: "Learn best practices for secure Web3 development",
//   },
//   {
//     icon: <TrendingUp className="h-6 w-6" />,
//     title: "Career Growth",
//     description: "Build skills that drive your Web3 career forward",
//   },
// ]

const learningPaths = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    level: "BEGINNER",
    price: "$100",
    title: "Trading Foundations",
    description: "Understand markets, price action, and basic technical frameworks essential for consistent success.",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400"
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    level: "INTER/ADV",
    price: "$400",
    title: "Advanced Trading Strategy",
    description: "Build, backtest, and optimize risk management system and sophisticated execution frameworks.",
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400"
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    level: "EXPERT",
    price: "$600",
    title: "Machine Learning Systems",
    description: "Build AI-powered systems for sequence prediction, sentiment analysis and market modeling.",
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-400"
  }
]

const Features = () => {
  return (
    <section id="about" className="py-24 px-4 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Learning Paths</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Structured curriculum designed for your goal. Each level is built for results in modern system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPaths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group relative h-full bg-[#0a0a0a] border border-accent/50 hover:border-accent transition-all duration-500 p-8 rounded-[2.5rem] overflow-hidden">
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 ${path.iconColor}`}>
                    {path.icon}
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-accent/80">
                      {path.level}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-accent/80">
                      {path.price}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-primary transition-colors leading-tight">
                    {path.title}
                  </h3>

                  <p className="text-white/40 mb-10 text-base leading-relaxed font-medium">
                    {path.description}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-bold text-white group/btn">
                    View Syllabus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
