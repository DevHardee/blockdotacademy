import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const featuredCourses = [
  {
    id: 1,
    category: "QUANT RESEARCH",
    title: "Quant Research Fundamentals",
    description: "Master the statistical model move for the hedge funds.",
    status: "In progress",
    progress: 65,
    image: "/assets/featured_courses1.png",
    color: "from-purple-500/20 to-indigo-500/10",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: 2,
    category: "PYTHON FOR FINANCE",
    title: "Python for Finance",
    description: "Modern approach with data analysis.",
    level: "BEGINNER",
    duration: "12 HOURS",
    image: "/assets/featured_courses2.png",
    color: "from-cyan-500/20 to-blue-500/10",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  }
]

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-24 px-4 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Featured Courses</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/course/${course.id}`} className="block">
                <Card className="group relative h-[420px] bg-[#0a0a0a] border-white/5 hover:border-white/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-8">
                  {/* Background Pattern/Graphic */}
                  <div className={`absolute inset-0 bg-linear-to-b ${course.color} opacity-40`} />
                  <div className="absolute top-0 right-0 w-full h-[220px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center translate-y-[-10%] group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0a0a]" />
                  </div>

                  <div className="relative z-10">
                    <Badge className={`mb-6 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] border ${course.badgeColor}`}>
                      {course.category}
                    </Badge>

                    <h3 className="text-3xl font-bold mb-4 text-white leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-white/50 mb-8 text-base leading-relaxed font-medium">
                      {course.description}
                    </p>

                    {course.status === "In progress" ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                          <span>In progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${course.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-linear-to-r from-primary to-secondary"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                        <span>{course.level}</span>
                        <span className="text-white/10">•</span>
                        <span>{course.duration}</span>
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
