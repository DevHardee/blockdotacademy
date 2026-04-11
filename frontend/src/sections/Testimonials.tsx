import { Quote } from "lucide-react"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"

const successStories = [
  {
    name: "William Doe",
    role: "Full-stack Developer",
    quote: "The Blockdot training path was a game changer - I went from learning about decentralized apps to building full-stack financial protocols.",
    image: "/assets/landing_page_success_story1.png"
  },
  {
    name: "Sarah Chen",
    role: "Smart Contract Engineer",
    quote: "Exceptional curriculum. The hands-on projects gave me the confidence to transition into Web3 full-time. Highly recommended for anyone serious about blockchain.",
    image: "/assets/landing_page_success_story2.png"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Success Stories</h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
            Real stories from developers who've transformed their careers through Blockdot Academy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="relative group p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 overflow-hidden h-full flex flex-col justify-between">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />

                <p className="text-xl font-bold text-white mb-8 leading-relaxed relative z-10 italic">
                  "{story.quote}"
                </p>

                <div className="flex items-center gap-4 relative z-10 mt-auto">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white">{story.name}</h4>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">{story.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
