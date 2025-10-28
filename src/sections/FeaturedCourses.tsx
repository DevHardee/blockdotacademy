import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Star,
} from "lucide-react"

const featuredCourses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description:
        "Master the core concepts of blockchain technology and distributed systems",
      duration: "8 weeks",
      level: "Beginner",
      students: 1247,
      rating: 4.9,
      image: "🔗",
      price: "Free",
    },
    {
      id: 2,
      title: "Smart Contract Development",
      description:
        "Build and deploy smart contracts using Solidity and modern development tools",
      duration: "12 weeks",
      level: "Intermediate",
      students: 892,
      rating: 4.8,
      image: "⚡",
      price: "$99",
    },
    {
      id: 3,
      title: "DeFi Protocol Design",
      description:
        "Learn to design and implement decentralized finance protocols",
      duration: "10 weeks",
      level: "Advanced",
      students: 634,
      rating: 4.9,
      image: "🏦",
      price: "$149",
    },
  ]

const FeaturedCourses = () => {
  return (
    <section id="courses" className="px-0 md:px-8 py-20">
    <div className="mx-auto">
      <div className="flex items-center justify-center mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive Web3 courses designed by industry experts
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full pb-6">
        {[...featuredCourses, ...featuredCourses].map((course, index) => (
          <Card 
            key={`${course.id}-${index}`}
            className="w-full md:min-w-[300px] bg-card-gradient border border-border/30 hover:border-primary/60 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{course.image}</div>
                <Badge className="text-secondary">{course.level}</Badge>
              </div>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students}
                </span>
                <span className="flex items-center text-sm">
                  <Star className="h-4 w-4 mr-1 fill-accent text-accent" />
                  {course.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">{course.price}</div>
                <Button size="sm">Enroll</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
</section>
  )
}

export default FeaturedCourses
