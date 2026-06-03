import { motion } from "motion/react"
import { Shield, Users, Building2, Globe, Briefcase } from "lucide-react"

const partners = [
  { name: "Ethereum Foundation", type: "Foundation" },
  { name: "Chainlink", type: "Oracle Network" },
  { name: "Uniswap", type: "DEX Protocol" },
  { name: "Aave", type: "DeFi Protocol" },
  { name: "Polygon", type: "Layer 2" },
  { name: "OpenZeppelin", type: "Security" },
  { name: "Solana", type: "Layer 1" },
  { name: "Coinbase", type: "Exchange" }
]

const stats = [
  { label: "Active Learners", value: "10,000+", icon: <Users /> },
  { label: "Partner Companies", value: "50+", icon: <Building2 /> },
  { label: "Countries Reached", value: "120+", icon: <Globe /> },
  { label: "Job Placements", value: "2,500+", icon: <Briefcase /> }
]

const Partners = () => {
  const doublePartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Trusted Network</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Powering the <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Industry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl mx-auto font-medium"
          >
            Collaborating with world-class protocols and platforms to build the standard for blockchain education.
          </motion.p>
        </div>

        {/* Partner Logos Carousel (Animated on all screens) */}
        <div className="relative mb-20 md:mb-32 group overflow-hidden">
          <motion.div
            className="flex items-center gap-6 md:gap-12 py-10"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {doublePartners.map((partner, i) => (
              <div
                key={i}
                className="shrink-0 group/partner"
              >
                <div className="px-6 py-4 md:px-10 md:py-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/[0.07] transition-all duration-500 backdrop-blur-sm">
                  <h3 className="text-lg md:text-2xl font-black text-white/80 group-hover/partner:text-white transition-colors tracking-tighter uppercase italic">
                    {partner.name}
                  </h3>
                  <div className="mt-1 h-0.5 w-0 group-hover/partner:w-full bg-primary transition-all duration-500 rounded-full" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade Overlays */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden group/stat shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 to-transparent scale-x-0 group-hover/stat:scale-x-100 transition-transform origin-left duration-500" />
              <div className="mb-6 text-primary scale-110 group-hover/stat:scale-125 transition-transform duration-500 opacity-90 group-hover/stat:opacity-100">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/20 group-hover/stat:text-white/40 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
