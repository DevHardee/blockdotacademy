import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  TrendingUp,
  Trophy,
  Award,
  Clock,
  Target,
  Zap,
  Calendar,
  ArrowRight,
  Star,
  CheckCircle2,
  PlayCircle,
} from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { courses } from "@/lib/courses"

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<number[]>([])
  const [activeStreak] = useState(7)
  const [todayProgress, setTodayProgress] = useState(0)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
      return
    }

    const stored = localStorage.getItem("enrolledCourses")
    if (stored) setEnrolledCourseIds(JSON.parse(stored))

    // Simulate daily progress
    const lastVisit = localStorage.getItem("lastVisit")
    const today = new Date().toDateString()
    if (lastVisit !== today) {
      localStorage.setItem("lastVisit", today)
      setTodayProgress(0)
    } else {
      setTodayProgress(65) // Demo progress
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-muted-foreground">Loading your dashboard...</p>
      </div>
    )
  }

  const enrolledCourses = courses.filter((c) => enrolledCourseIds.includes(c.id))
  const inProgressCourses = enrolledCourses.slice(0, 2) // Demo: first 2 are in progress

  // Stats
  const stats = [
    { 
      label: "Courses Enrolled", 
      value: enrolledCourses.length, 
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    { 
      label: "XP Points", 
      value: "1,250", 
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    { 
      label: "Current Streak", 
      value: `${activeStreak} days`, 
      icon: Award,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    { 
      label: "Global Rank", 
      value: "#142", 
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
  ]

  // Recent achievements
  const recentAchievements = [
    { title: "First Steps", description: "Complete your first lesson", date: "2 days ago", icon: "🎯" },
    { title: "Speed Learner", description: "Complete 3 lessons in one day", date: "5 days ago", icon: "⚡" },
    { title: "Week Warrior", description: "Maintain a 7-day streak", date: "1 week ago", icon: "🔥" },
  ]

  // Learning goals
  const weeklyGoal = { current: 8, target: 12, unit: "lessons" }
  const monthlyGoal = { current: 25, target: 50, unit: "hours" }

  return (
    <div className="min-h-screen bg-background py-8 pt-20">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl! md:text-4xl font-bold">
              Welcome back, <span className="text-primary">{user.name || "Builder"}!</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Ready to continue your Web3 journey? Let's keep building! 🚀
            </p>
          </div>
          <Badge className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border-primary/30">
            <Zap className="h-4 w-4" />
            Level 5
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border border-border/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Progress & Streak */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Today's Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Daily Goal: 2 lessons</span>
                  <span className="text-sm font-medium">{todayProgress}%</span>
                </div>
                <Progress value={todayProgress} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>1 lesson completed today</span>
              </div>
              <Button className="w-full" size="sm">
                <PlayCircle className="h-4 w-4 mr-2" />
                Continue Learning
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-border/40 bg-linear-to-br from-orange-500/10 via-transparent to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-500" />
                Active Streak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-orange-500">{activeStreak}</div>
                <div className="text-sm text-muted-foreground">
                  days in a row!<br />Keep it up! 🔥
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full ${
                      i < activeStreak ? "bg-orange-500" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 inline mr-1" />
                Next milestone: 14 days
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning */}
        {inProgressCourses.length > 0 && (
          <Card className="border border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Continue Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inProgressCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg border border-border/40 hover:border-primary/60 hover:bg-accent/5 transition-all"
                  >
                    <div className="text-xl md:text-4xl">{course.image}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{course.title}</h4>
                      <div className="flex items-center gap-4 mt-2">
                        <Progress value={35} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground">35%</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3 inline mr-1" />
                        Last studied: 2 hours ago
                      </p>
                    </div>
                    <Link to={`/course/${course.id}`}>
                      <Button size="sm" variant="outline">
                        Resume
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Learning Goals & Achievements */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Weekly & Monthly Goals */}
          <Card className="border border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Weekly Goal</span>
                  <span className="text-sm text-muted-foreground">
                    {weeklyGoal.current}/{weeklyGoal.target} {weeklyGoal.unit}
                  </span>
                </div>
                <Progress value={(weeklyGoal.current / weeklyGoal.target) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Monthly Goal</span>
                  <span className="text-sm text-muted-foreground">
                    {monthlyGoal.current}/{monthlyGoal.target} {monthlyGoal.unit}
                  </span>
                </div>
                <Progress value={(monthlyGoal.current / monthlyGoal.target) * 100} className="h-2" />
              </div>
              <Button variant="outline" className="w-full" size="sm">
                Update Goals
              </Button>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="border border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAchievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-border/30"
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-sm">{achievement.title}</h5>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                    </div>
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                ))}
              </div>
              <Link to="/profile">
                <Button variant="link" className="w-full mt-4 text-primary" size="sm">
                  View All Achievements
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border border-border/40">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/my-courses">
                <Button variant="outline" className="w-full h-full flex flex-col gap-2 py-6">
                  <BookOpen className="h-6 w-6" />
                  <span className="text-sm">Browse Courses</span>
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline" className="w-full h-full flex flex-col gap-2 py-6">
                  <Trophy className="h-6 w-6" />
                  <span className="text-sm">Achievements</span>
                </Button>
              </Link>
              <Button variant="outline" className="w-full h-full flex flex-col gap-2 py-6">
                <Target className="h-6 w-6" />
                <span className="text-sm">Set Goals</span>
              </Button>
              <Button variant="outline" className="w-full h-full flex flex-col gap-2 py-6">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Study Plan</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard