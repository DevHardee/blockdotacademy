import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"
import { User, Mail, Edit, Save, X, Camera } from "lucide-react"
import { toast } from "sonner"

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
    if (!isAuthenticated) {
      navigate("/login")
      return
    }

    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        avatar: user.avatar || "",
      })
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

  const handleCancel = () => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        avatar: user.avatar || "",
      })
    }
    setEditing(false)
  }

  const handleAvatarUpload = () => {
    // Simulated avatar upload
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`
    setFormData({ ...formData, avatar: avatarUrl })
    toast.success("Avatar updated!")
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#030303]">
        <p className="text-white/40 animate-pulse">Loading your profile...</p>
      </div>
    )
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white py-12 pt-28 selection:bg-primary/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Profile Settings</h1>
          <p className="text-lg text-white/40 font-medium">
            Manage your account information and preferences
          </p>
        </div>

        {/* Profile Card */}
        <Card className="bg-[#0a0a0a] border-white/5 rounded-[2.5rem] p-4 md:p-8 overflow-hidden relative">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:items-center justify-between mb-12 border-b border-white/5 pb-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <Avatar className="h-24 w-24 border-4 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <AvatarImage src={formData.avatar} alt={formData.name} />
                  <AvatarFallback className="text-2xl font-black bg-linear-to-br from-primary to-accent text-white">
                    {getInitials(formData.name)}
                  </AvatarFallback>
                </Avatar>
                {editing && (
                  <button
                    onClick={handleAvatarUpload}
                    className="absolute bottom-0 right-0 p-2.5 bg-primary rounded-full hover:brightness-110 transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] border-2 border-[#0a0a0a]"
                  >
                    <Camera className="h-4 w-4 text-white" />
                  </button>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{formData.name || "Academy Member"}</h3>
                <p className="text-sm font-medium text-white/40">{formData.email}</p>
              </div>
            </div>

            {!editing ? (
              <Button onClick={() => setEditing(true)} size="lg" className="rounded-xl px-8 h-14 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-xs border border-white/10 transition-all">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-3">
                <Button onClick={handleSave} size="lg" className="rounded-xl px-8 h-14 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-black uppercase tracking-widest text-xs border-0 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} size="lg" className="rounded-xl px-8 h-14 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-xs border border-white/10 transition-all">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!editing}
                    placeholder="Enter your full name"
                    className="bg-white/5 border-white/5 rounded-2xl h-14 pl-12 text-white font-medium focus:border-primary/50 focus:ring-0 disabled:opacity-100 disabled:cursor-default"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    disabled
                    className="bg-white/5 border-white/5 rounded-2xl h-14 pl-12 text-white/30 font-medium disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2 space-y-3">
                <Label htmlFor="bio" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!editing}
                  placeholder="Tell us about yourself and your digital journey..."
                  rows={4}
                  className="bg-white/5 border-white/5 rounded-[1.5rem] p-5 text-white font-medium leading-relaxed resize-none focus:border-primary/50 focus:ring-0 disabled:opacity-100 disabled:cursor-default"
                />
                <div className="flex justify-end pr-2 font-bold text-[10px] text-white/20 uppercase tracking-widest">
                  {formData.bio.length}/500
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-[#0a0a0a] border-white/5 rounded-[2rem] p-8">
            <h4 className="text-xl font-bold text-white mb-2">Account Security</h4>
            <p className="text-sm text-white/40 mb-8 font-medium">Update your password or enable FA.</p>
            <Button variant="outline" className="w-full rounded-xl h-14 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[10px] border-white/10 transition-all">
              Security Portal
            </Button>
          </Card>

          <Card className="bg-[#0a0a0a] border-red-500/10 rounded-[2rem] p-8">
            <h4 className="text-xl font-bold text-red-500 mb-2">Danger Zone</h4>
            <p className="text-sm text-white/40 mb-8 font-medium">Irreversible account actions.</p>
            <Button variant="destructive" className="w-full rounded-xl h-14 bg-red-500/5 hover:bg-red-500/10 text-red-500 font-bold uppercase tracking-widest text-[10px] border-red-500/10 transition-all">
              Delete Account
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile