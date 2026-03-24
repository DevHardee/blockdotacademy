import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

const partners = [
  { name: "Ethereum Foundation", logo: "⟠", type: "Foundation" },
  { name: "Chainlink", logo: "🔗", type: "Oracle Network" },
  { name: "Uniswap", logo: "🦄", type: "DEX Protocol" },
  { name: "Aave", logo: "🏦", type: "DeFi Protocol" },
  { name: "Polygon", logo: "⬡", type: "Layer 2" },
  { name: "OpenZeppelin", logo: "🛡️", type: "Security" }
]

const stats = [
  { label: "Active Learners", value: "10,000+", icon: "👥" },
  { label: "Partner Companies", value: "50+", icon: "🤝" },
  { label: "Countries Reached", value: "120+", icon: "🌍" },
  { label: "Job Placements", value: "2,500+", icon: "💼" }
]

const Partners = () => {
  return (
    <section id="partners" className="py-10 md:py-20 p-3 bg-background border-y border-border/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 text-sm px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building the Future Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our curriculum is shaped by partnerships with leading Web3 companies and foundations
          </p>
        </div>

        {/* Partner Logos Carousel */}
        <div className="relative mb-16 overflow-hidden">
          <div className="carousel-track flex">
            {/* First set of partners */}
            {partners.map((partner) => (
              <div
                key={`first-${partner.name}`}
                className="shrink-0 w-48 mx-4 flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300 group md:w-40 sm:w-32"
              >
                <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="font-semibold text-center text-xs md:text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-muted-foreground text-center">{partner.type}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`second-${partner.name}`}
                className="shrink-0 w-48 mx-4 flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300 group md:w-40 sm:w-32"
              >
                <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="font-semibold text-center text-xs md:text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-muted-foreground text-center">{partner.type}</p>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-16 h-full bg-linear-to-r from-background to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-linear-to-l from-background to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 border border-border/20"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
