import { useEffect, useState, useMemo } from "react"
import { useAuth } from "@/context/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, TrendingUp, ChevronRight, Award, Zap, Share2, BookOpen, Clock, Star } from "lucide-react"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { courses } from "@/lib/courses"

// A Helper Component for circular progress
const CircularProgress = ({
  value,
  label,
  strokeColor
}: {
  value: number;
  label: string;
  strokeColor: string;
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-3">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-white/5 stroke-current"
            strokeWidth="8"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
          />
          <circle
            className={`${strokeColor} stroke-current drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            style={{ strokeDashoffset, strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base font-bold text-white">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">{label}</span>
    </div>
  )
}

const UserDashboard = () => {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<number[]>([])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
      return
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fetch enrolled courses from localStorage
    const stored = localStorage.getItem("enrolledCourses")
    if (stored) setEnrolledCourseIds(JSON.parse(stored))
  }, []);

  const enrolledCourses = useMemo(
    () => courses.filter((c) => enrolledCourseIds.includes(c.id)),
    [enrolledCourseIds]
  )

  // if (!user) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-[#0f0f11]">
  //       <p className="text-muted-foreground animate-pulse">Loading your personalized dashboard...</p>
  //     </div>
  //   )
  // }

  if (!user) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 w-16 h-16">
        <div className="lg:col-span-2"></div>
        <div></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#030303] py-12 pt-28 text-white selection:bg-primary/30">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Content Area (Left/Top) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Welcome Header */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-blue-600/20 to-purple-600/5 p-8 md:p-12 border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32" />
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
                  Welcome back, <span className="text-blue-500">{user.name.split(' ')[0]}</span>.
                </h1>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                  You've completed {enrolledCourseIds.length > 0 ? '45%' : '0%'} of your learning path. {enrolledCourseIds.length > 0 ? "You're making great progress towards your certification." : "Start your journey today and master the blockchain."}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild className="rounded-full px-8 py-6 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white! border-0 shadow-lg shadow-primary/20 transition-all font-black uppercase tracking-widest text-xs">
                    <Link to="/my-courses">Continue Learning</Link>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full px-8 py-6 border-white/10 bg-white/5 hover:bg-white/10 text-white! font-black uppercase tracking-widest text-xs">
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Knowledge Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1a1b1e]/60 backdrop-blur-xl border-white/5 rounded-[2rem] overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Learning Progress
                  </h3>
                  <div className="flex justify-around items-center">
                    <CircularProgress value={enrolledCourseIds.length > 0 ? 70 : 0} label="BLOCKCHAIN" strokeColor="text-primary" />
                    <CircularProgress value={enrolledCourseIds.length > 0 ? 45 : 0} label="DEFI MASTERY" strokeColor="text-accent" />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Resume Card (only if enrolled) */}
              {enrolledCourses.length > 0 ? (
                <Card className="bg-[#151b2b] border-blue-500/20 rounded-[2rem] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">RESUME COURSE</p>
                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {enrolledCourses[0].title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                        <PlayCircle className="h-4 w-4" /> Next: {enrolledCourses[0].category} Introduction
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="w-full flex items-center justify-between gap-4">
                        <div className="flex-1 h-2 bg-blue-950 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        </div>
                        <span className="text-xs font-bold text-blue-400">65%</span>
                      </div>
                      <Button asChild className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white! h-12">
                        <Link to={`/course/${enrolledCourses[0].id}`}>Continue Session</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-[#1a1b1e]/60 backdrop-blur-xl border-white/5 border-dashed border-2 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center">
                  <BookOpen className="w-12 h-12 text-slate-600 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">No active courses</h3>
                  <p className="text-sm text-slate-500 mb-6 max-w-[200px]">Enroll in your first course to track your progress here.</p>
                  <Button asChild variant="link" className="text-blue-500">
                    <Link to="/my-courses">Browse Catalog</Link>
                  </Button>
                </Card>
              )}
            </div>

            {/* Enrolled Courses Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center px-2">
                <h2 className="text-2xl font-bold">Your Enrolled Courses</h2>
                <Link to="/my-courses" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                  View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {enrolledCourses.slice(0, 4).map((course) => (
                    <Card key={course.id} className="bg-[#1a1b1e]/40 border-white/5 rounded-2xl hover:bg-[#202125]/60 transition-colors cursor-pointer group">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                          {course.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white truncate">{course.title}</h4>
                          <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> {course.rating}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-blue-500 transition-colors" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-[#1a1b1e]/20 border border-white/5 rounded-[2rem] p-12 text-center">
                  <p className="text-slate-500 italic">You haven't enrolled in any courses yet. Start your journey today!</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Area (Right/Bottom) */}
          <div className="lg:col-span-4 space-y-8">

            {/* Stats Overview */}
            <Card className="bg-[#1a1b1e]/90 border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Learning Stats</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ENGAGEMENT SCORE</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-bold bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    <TrendingUp className="w-3 h-3" /> +12%
                  </div>
                </div>

                <div className="text-5xl font-black text-white tracking-tighter mb-8 tabular-nums">
                  2,840<span className="text-2xl text-blue-500 ml-1">XP</span>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Current Streak</span>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2.5 h-2.5 rounded-full ${i < 3 ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]' : 'bg-white/10'}`} />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#111113] p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Completed</p>
                      <p className="text-xl font-bold text-white tabular-nums">12</p>
                    </div>
                    <div className="bg-[#111113] p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Certificates</p>
                      <p className="text-xl font-bold text-white tabular-nums">3</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-[#1a1b1e]/60 backdrop-blur-xl border-white/5 rounded-[2rem] overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-white">Achievements</h3>
                  <Link to="/profile" className="text-xs font-bold text-blue-500 hover:text-blue-400">All</Link>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group hover:bg-blue-500/20 transition-colors">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-tighter text-slate-500 text-center">EARLY ADOPTER</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <Zap className="w-6 h-6 text-orange-400 fill-orange-400/20" />
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-tighter text-slate-500 text-center">10 DAY STREAK</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-30 grayscale">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                      <Share2 className="w-6 h-6 text-slate-500" />
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-tighter text-slate-500 text-center">VALIDATOR</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Next */}
            <Card className="bg-[#1a1b1e]/60 backdrop-blur-xl border-white/5 rounded-[2rem] overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Recommended</h3>
                <div className="space-y-5">
                  <Link to="/my-courses" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                      <PlayCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">Deploy Test Smart Contract</h4>
                      <p className="text-[10px] text-slate-500">Earn 500 XP • Project</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                  </Link>

                  <Link to="/my-courses" className="flex items-center gap-4 group border-t border-white/5 pt-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">Audit Security Patterns</h4>
                      <p className="text-[10px] text-slate-500">Weekly Challenge • Lab</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default UserDashboard
