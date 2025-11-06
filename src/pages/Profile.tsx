"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const { user, isAuthenticated, updateUser, logout } = useAuth()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    avatar: "",
  })

  useEffect(() => {
    console.log("Auth state:", {isAuthenticated, user})

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
        console.log("No user found")
    }
  }, [user, isAuthenticated, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    updateUser({
      name: formData.name,
      bio: formData.bio,
      avatar: formData.avatar,
    })
    setEditing(false)
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading your profile...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <Card className="shadow-lg border-border">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-2 border-primary shadow-md">
            <AvatarImage src={formData.avatar || "/default-avatar.png"} alt={formData.name} />
            <AvatarFallback>{formData.name?.[0] || "U"}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl font-semibold">{formData.name}</CardTitle>
            <CardDescription className="text-muted-foreground">{formData.email}</CardDescription>
          </div>
        </CardHeader>

        <Separator className="my-4" />

        <CardContent className="space-y-6">
          {!editing ? (
            <>
              <div>
                <h3 className="font-medium text-muted-foreground mb-1">Bio</h3>
                <p>{formData.bio || "No bio yet."}</p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setEditing(true)}>
                  Edit Profile
                </Button>
                <Button variant="destructive" onClick={logout}>
                  Log out
                </Button>
              </div>
            </>
          ) : (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="opacity-70 cursor-not-allowed"
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us a bit about yourself"
                />
              </div>

              <div>
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  placeholder="Paste an image URL"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={handleSave}
                  className="bg-primary text-primary-foreground shadow-md"
                >
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
