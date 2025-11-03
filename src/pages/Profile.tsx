// import { useState, useEffect } from "react"
// import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Separator } from "@/components/ui/separator"
// import { useAuth } from "@/context/AuthContext"
// import { useNavigate } from "react-router-dom"

// const Profile = () => {
//   const { user, isAuthenticated, updateUser } = useAuth()
//   const navigate = useNavigate()
//   const [editing, setEditing] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     bio: "",
//   })

//   // Sync user data when component mounts or user changes
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login")
//       return
//     }
//     if (user) {
//       setFormData({
//         name: user.name || "",
//         email: user.email || "",
//         bio: user.bio || "",
//       })
//     }
//   }, [user, isAuthenticated, navigate])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSave = () => {
//     updateUser({
//       name: formData.name,
//       bio: formData.bio,
//     })
//     setEditing(false)
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <p className="text-muted-foreground">Loading your profile...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto py-10 max-w-3xl">
//       <Card className="shadow-(--shadow-card) border-border">
//         <CardHeader className="flex flex-col sm:flex-row items-center gap-6">
//           <Avatar className="h-24 w-24 border-2 border-primary shadow-(--shadow-primary)">
//             <AvatarImage src={user?.avatar || "/default-avatar.png"} alt={user?.name} />
//             <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
//           </Avatar>
//           <div className="text-center sm:text-left">
//             <CardTitle className="text-2xl font-semibold">{formData.name}</CardTitle>
//             <CardDescription className="text-muted-foreground">{formData.email}</CardDescription>
//           </div>
//         </CardHeader>

//         <Separator className="my-4" />

//         <CardContent className="space-y-6">
//           {!editing ? (
//             <>
//               <div>
//                 <h3 className="font-medium text-muted-foreground mb-1">Bio</h3>
//                 <p>{formData.bio || "No bio yet."}</p>
//               </div>

//               <Button variant="outline" onClick={() => setEditing(true)}>
//                 Edit Profile
//               </Button>
//             </>
//           ) : (
//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div>
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your full name"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   disabled
//                   className="opacity-70 cursor-not-allowed"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="bio">Bio</Label>
//                 <Input
//                   id="bio"
//                   name="bio"
//                   value={formData.bio}
//                   onChange={handleChange}
//                   placeholder="Tell us a bit about yourself"
//                 />
//               </div>
//               <div className="flex gap-3 pt-2">
//                 <Button
//                   type="button"
//                   onClick={handleSave}
//                   className="bg-primary text-primary-foreground shadow-(--shadow-primary)"
//                 >
//                   Save Changes
//                 </Button>
//                 <Button variant="outline" onClick={() => setEditing(false)}>
//                   Cancel
//                 </Button>
//               </div>
//             </form>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default Profile
