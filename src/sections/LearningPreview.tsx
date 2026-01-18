import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Code, BookOpen, Users, Trophy } from "lucide-react"
import { Link } from "react-router-dom"

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Interactive Coding",
    description: "Write, test, and deploy smart contracts directly in your browser",
    preview: "Live coding environment with instant feedback"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Structured Learning Path",
    description: "Follow curated learning paths designed by industry experts",
    preview: "Progressive skill building with clear milestones"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Projects",
    description: "Collaborate on real-world projects with fellow developers",
    preview: "Team-based learning with peer code reviews"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Gamified Learning",
    description: "Earn points, badges, and certificates as you progress",
    preview: "Achievement system that motivates continuous learning"
  }
]

const LearningPreview = () => {
  return (
    <section id="preview" className="py-10 md:py-20 p-3 bg-muted/10 bg-linear-to-br from-primary/5 via-transparent to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 text-sm px-4 py-2">
            <Play className="w-4 h-4 mr-2" />
            Experience Our Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Blockdot in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our interactive learning platform accelerates your Web3 development journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-border/30 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎥</div>
                <p className="text-lg font-semibold">Platform Demo</p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border/30 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Preview</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="border border-border/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{feature.description}</p>
                  <p className="text-sm text-primary font-medium">{feature.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of Web3 education?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Courses
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Full Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningPreview
