import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { Link } from "react-router-dom"
import {
  PlayCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const Hero = () => {
  return (
    <section id="home" className="pt-10 pb-10 md:pb-10 md:py-20 relative">
          <div className="flex flex-col p-3 gap-16 items-center justify-center">
            <div className="space-y-8">

              <div className="flex flex-col items-center justify-center">

              <Badge className="bg-primary/10 text-white hover:bg-transparent! flex items-center! border-primary/30 w-fit px-3 py-2 rounded-full">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  Web3 Center of Learning
              </Badge>

                <h1 className="text-5xl! capitalize md:text-7xl lg:text-[70px]! font-extrabold leading-tight">
                  <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    Blockdot Academy
                  </span>
                </h1>

                <p className="text-lg md:text-2xl text-center text-muted-foreground max-w-xl leading-relaxed">
                  Master blockchain, smart contracts, and DeFi through immersive,
                  hands-on learning experiences.
                </p>
              </div>

              <div className="flex items-center justify-center flex-col md:flex-row gap-4">
                <Link to="/courses">
                  <Button
                    size="lg"
                    className="bg-primary-foreground! shadow-primary text-black! hover:bg-primary-foreground/95! shadow-lg px-8 py-6 text-base"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base hover:text-black hover:bg-primary-foreground! ring ring-primary px-8 py-6 border-primary/30 transition-colors"
                >
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center space-x-8 pt-8">
                <div>
                  <AnimatedCounter
                    end={10000}
                    suffix="+"
                    className="text-xl md:text-3xl font-bold text-primary"
                  />
                  <p className="text-xs md:text-sm ml-1 text-muted-foreground">Builders</p>
                </div>
                <div>
                  <AnimatedCounter
                    end={50}
                    suffix="+"
                    className="text-xl md:text-3xl font-bold text-accent"
                  />
                  <p className="text-xs md:text-sm text-muted-foreground">Courses</p>
                </div>
                <div>
                  <AnimatedCounter
                    end={95}
                    suffix="%"
                    className="text-xl md:text-3xl font-bold text-secondary"
                  />
                  <p className="text-xs md:text-sm text-muted-foreground">Success</p>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Hero
