import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Star,
} from "lucide-react"
import { Link } from "react-router-dom"

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
    <section id="courses" className="px-8 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Featured Courses</h2>
          <p className="text-muted-foreground">Curated learning paths for every skill level</p>
        </div>
        <Link to="/courses">
          <Button variant="outline">View All Courses</Button>
        </Link>
      </div>
      
      <div className="flex space-x-6 overflow-x-auto pb-6">
        {[...featuredCourses, ...featuredCourses].map((course, index) => (
          <Card 
            key={`${course.id}-${index}`}
            className="min-w-[350px] bg-card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{course.image}</div>
                <Badge>{course.level}</Badge>
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
