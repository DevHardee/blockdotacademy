import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {BookOpen, TrendingUp, Trophy, Award} from "lucide-react"

import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"
import ProfileAchievements from "@/components/profile/ProfileAchievements"
import ProfileActivity from "@/components/profile/ProfileActivity"
import ProfileHeader from "@/components/profile/ProfileHeader"
import ProfileCourses from "@/components/profile/ProfileCourses"

const Profile = () => {
  const { user, isAuthenticated, updateUser } = useAuth()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    avatar: "",
  })

  useEffect(() => {
    console.log("Auth check:", { isAuthenticated, user })
    if (!isAuthenticated) {
      navigate("/login")
      return
    }

    if (user) {
      console.log("Loaded user:", user)
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        avatar: user.avatar || "",
      })
    } else {
      console.log("No user found in context.")
    }
  }, [user, isAuthenticated, navigate])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSave = () => {
//     updateUser({
//       name: formData.name,
//       bio: formData.bio,
//       avatar: formData.avatar,
//     })
//     setEditing(false)
//   }

  if (!user) {
    console.log("User not yet loaded – showing placeholder screen.")
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading your profile...</p>
      </div>
    )
  }

  // Demo data
  const stats = [
    { label: "Courses Completed", value: 4, icon: BookOpen },
    { label: "XP Points", value: 1250, icon: TrendingUp },
    { label: "Rank", value: "#142", icon: Trophy },
    { label: "Streak", value: "7 days", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-background py-10 pt-20">
    {/* Profile Header */}
      <ProfileHeader/>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Profile Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
              <Card key={i} className="text-center p-6 border border-border/30 hover:border-primary/60 hover:shadow-lg hover:scale-105 hover:shadow-card transition-all duration-300">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

            {/* Profile Tabs */}
          <Tabs defaultValue="courses" className="space-y-8">
            <TabsList
                 className="
                    w-full
                    h-full
                    grid grid-cols-3
                    border border-border
                    rounded-lg
                    bg-muted/20
                    overflow-hidden
                    text-xs md:text-base
                    "
                >
                <TabsTrigger
                value="courses"
                className="
                    data-[state=active]:bg-primary/10
                    data-[state=active]:text-primary
                    data-[state=active]:font-semibold
                    hover:bg-muted/40
                    transition-all
                    py-2
                    text-sm md:text-base
                "
                >
                My Courses
                </TabsTrigger>

                <TabsTrigger
                value="achievements"
                className="
                    data-[state=active]:bg-primary/10
                    data-[state=active]:text-primary
                    data-[state=active]:font-semibold
                    hover:bg-muted/40
                    transition-all
                    py-2
                    text-sm md:text-base
                    "
                >
                Achievement
                </TabsTrigger>

                <TabsTrigger
                value="activity"
                className="
                    data-[state=active]:bg-primary/10
                    data-[state=active]:text-primary
                    data-[state=active]:font-semibold
                    hover:bg-muted/40
                    transition-all
                    py-2
                    text-sm md:text-base
                     "
                >
                Activity
                </TabsTrigger>
            </TabsList>

            {/* COURSES */}
            <ProfileCourses/>

            {/* ACHIEVEMENTS */}
            <ProfileAchievements/>

            {/* Activity */}
            <ProfileActivity/>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

export default Profile
