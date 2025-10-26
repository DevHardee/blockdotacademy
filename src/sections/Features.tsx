import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    Award,
    BookOpen,
    Zap,
    Shield,
    TrendingUp,
    Sparkles,
  } from "lucide-react"

const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Interactive Learning",
      description: "Hands-on coding exercises and real-world projects",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "Connect with thousands of Web3 developers and learners",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Learning",
      description: "Earn recognized certificates upon course completion",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Latest Technology",
      description: "Stay updated with cutting-edge Web3 developments",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Learn best practices for secure Web3 development",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Build skills that drive your Web3 career forward",
    },
  ]

const Features = () => {
  return (
    <section id="about" className="py-24 bg-muted/10">
      <div className="text-center mb-16">
        <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 text-sm px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Platform Advantages
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The most advanced Web3 education platform with industry-leading
          features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="group p-8 bg-card border border-border/30 hover:border-primary/60 hover:shadow-lg transition-all duration-500"
          >
            <div className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
  </section>
  )
}

export default Features
