import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "DeFi Developer",
    company: "Uniswap Labs",
    image: "👩‍💻",
    rating: 5,
    review: "Blockdot Academy transformed my career. The smart contract course gave me the skills to land my dream job at a top DeFi protocol. The hands-on projects were invaluable.",
    achievement: "Built 3 production smart contracts"
  },
  {
    name: "Marcus Johnson",
    role: "Blockchain Engineer",
    company: "Chainlink",
    image: "👨‍🔬",
    rating: 5,
    review: "The community here is incredible. I went from zero blockchain knowledge to contributing to open-source projects in just 6 months. The mentorship program was a game-changer.",
    achievement: "Open-source contributor"
  },
  {
    name: "Elena Rodriguez",
    role: "Web3 Entrepreneur",
    company: "Self-employed",
    image: "👩‍🚀",
    rating: 5,
    review: "As someone with a traditional tech background, Blockdot made Web3 accessible. I launched my own NFT marketplace using the skills I learned here. Highly recommend!",
    achievement: "Launched NFT marketplace"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 md:py-20 p-3 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 text-sm px-4 py-2">
            <Quote className="w-4 h-4 mr-2" />
            Student Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from developers who've transformed their careers through Blockdot Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="relative bg-card border border-border/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300 p-6"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.review}"
                </p>

                <Badge variant="secondary" className="text-xs">
                  {testimonial.achievement}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
