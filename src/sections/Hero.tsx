import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { Link } from "react-router-dom"
import {
  PlayCircle,
  ArrowRight,
} from "lucide-react"

// const featuredCourses = [
//     {
//       id: 1,
//       title: "Blockchain Fundamentals",
//       description:
//         "Master the core concepts of blockchain technology and distributed systems",
//       duration: "8 weeks",
//       level: "Beginner",
//       students: 1247,
//       rating: 4.9,
//       image: "🔗",
//       price: "Free",
//     },
//     {
//       id: 2,
//       title: "Smart Contract Development",
//       description:
//         "Build and deploy smart contracts using Solidity and modern development tools",
//       duration: "12 weeks",
//       level: "Intermediate",
//       students: 892,
//       rating: 4.8,
//       image: "⚡",
//       price: "$99",
//     },
//     {
//       id: 3,
//       title: "DeFi Protocol Design",
//       description:
//         "Learn to design and implement decentralized finance protocols",
//       duration: "10 weeks",
//       level: "Advanced",
//       students: 634,
//       rating: 4.9,
//       image: "🏦",
//       price: "$149",
//     },
//   ]

const Hero = () => {
  return (
    <section id="home" className="py-10 md:py-20 relative">
          <div className="flex flex-col p-3 gap-16 items-center justify-center">
            {/* Left Text */}
            <div className="space-y-8">
              {/* <Badge className="bg-primary/10 text-primary border-primary/30 w-fit">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary Platform
              </Badge> */}

              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl! capitalize md:text-7xl lg:text-[70px]! font-extrabold leading-tight">
                  <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    Build the Future
                  </span>
                </h1>

                <p className="text-lg md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                  Master blockchain, smart contracts, and DeFi through immersive,
                  hands-on learning experiences.
                </p>
              </div>

              <div className="flex items-center justify-center flex-col md:flex-row gap-4">
                <Link to="/courses">
                  <Button
                    size="lg"
                    className="bg-primary-foreground! text-black! hover:bg-primary-foreground/95! shadow-lg px-8 py-6 text-base"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base hover:text-black hover:bg-primary-foreground! ring ring-primary px-8 py-6 border-primary/30"
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
                  <p className="text-xs md:text-sm text-muted-foreground">Builders</p>
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

            {/* Right Cards */}
            {/* <div className="relative space-y-6">
              {featuredCourses.map((course, i) => (
                <Card
                  key={course.id}
                  className={`bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:shadow-lg transition-all duration-500 ${
                    i % 2 === 0 ? "translate-x-0" : "translate-x-4"
                  }`}
                >
                  <CardContent className="p-6 flex gap-4 items-center">
                    <div className="text-3xl">{course.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {course.level} • {course.students} students
                      </p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        <span className="text-sm ml-1">{course.rating}</span>
                        <span className="ml-auto text-lg font-bold text-primary">
                          {course.price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
    </section>
  )
}

export default Hero
