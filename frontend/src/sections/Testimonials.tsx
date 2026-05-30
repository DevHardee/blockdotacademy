import { motion } from "motion/react"

const successStories = [
  {
    name: "William Doe",
    quote: "The Blockdot training path was a game changer - I went from learning about decentralized apps to building full-stack financial protocols."
  },
  {
    name: "Sarah Chen",
    quote: "Exceptional curriculum. The hands-on projects gave me the confidence to transition into Web3 full-time. Highly recommended for anyone serious."
  },
  {
    name: "Michael Ross",
    quote: "The depth of the technical sessions is unmatched. I finally understood how to audit multi-sig wallets and complex yield aggregators."
  },
  {
    name: "Elena Gomez",
    quote: "Blockdot didn't just teach me code; they taught me the logic of the digital economy. It's the most valuable investment I've made for my career."
  },
  {
    name: "David Park",
    quote: "A transformative experience. The network of mentors and peers I built here is incredible. It's more than an academy, it's a launchpad."
  },
  {
    name: "James Wilson",
    quote: "Finally, a place that values substance over hype. The depth of insights and technical rigor here is simply unmatched in the industry."
  },
  {
    name: "Amina Yusuf",
    quote: "The frameworks for smart contract security are exactly what's being done at the top tier. No fluff, just pure architectural knowledge."
  }
]

const Testimonials = () => {
  const doubleStories = [...successStories, ...successStories];

  const QuoteIcon = () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:text-white transition-colors duration-500">
      <path d="M0 18V9.45C0 6.57 0.6 4.29 1.8 2.61C3 0.87 4.89 0 7.47 0V4.05C6.27 4.05 5.37 4.41 4.77 5.13C4.17 5.79 3.87 6.84 3.87 8.28H7.47V18H0ZM13.86 18V9.45C13.86 6.57 14.46 4.29 15.66 2.61C16.86 0.87 18.75 0 21.33 0V4.05C20.13 4.05 19.23 4.41 18.63 5.13C18.03 5.79 17.73 6.84 17.73 8.28H21.33V18H13.86Z" fill="currentColor" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            Success <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Stories</span>
          </h2>
          <p className="text-sm md:text-base text-white/30 max-w-2xl mx-auto uppercase tracking-[0.2em] font-black">
            Voices from the Decentralized Frontier
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 py-10 px-4"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubleStories.map((story, i) => (
            <div
              key={i}
              className="inline-block w-[320px] md:w-[400px]"
            >
              <div className="h-[400px] md:h-[420px] p-8 md:p-12 rounded-3xl bg-[#080808] border border-white/[0.03] hover:border-primary/40 transition-all duration-500 relative flex flex-col group overflow-hidden shadow-2xl">
                {/* Selection Highlight (Matching image style) */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/0 group-hover:bg-primary/[0.05] blur-3xl transition-colors duration-500 rounded-full" />

                <div className="mb-10">
                  <QuoteIcon />
                </div>

                <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed tracking-tight mb-auto group-hover:text-white transition-colors duration-500 line-clamp-6">
                  {story.quote}
                </p>

                <div className="mt-8 pt-8 border-t border-white/[0.05]">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-px bg-primary" />
                    <span className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-primary group-hover:text-white transition-colors">
                      {story.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mask Fades */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}

export default Testimonials
