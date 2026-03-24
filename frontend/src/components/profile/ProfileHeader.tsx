import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, Edit3} from "lucide-react"

const ProfileHeader = () => {
    const [formData] = useState({
        name: "",
        email: "",
        bio: "",
        avatar: "",
      })


  return (
    <section className="border-b border-border/30 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <Avatar className="w-14 h-14 md:w-28 md:h-28 border-4 border-primary/30 shadow-md">
              <AvatarImage src={formData.avatar || "/default-avatar.png"} />
              <AvatarFallback className="bg-primary/20 text-primary text-xl md:text-3xl font-bold">
                {formData.name?.[0] || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div>
                  <h1 className="text-3xl! md:text-4xl! lg:text-6xl! font-bold">{formData.name}</h1>
                  <p className="text-muted-foreground">{formData.email}</p>
                </div>

                <Button
                  variant="outline"
                  className="lg:ml-auto"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                {formData.bio || "You haven’t added a bio yet."}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Lagos, Nigeria
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined October 2025
                </span>
                <Badge className="bg-primary/20 rounded-full text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-sm md:text-base!">Active Learner</Badge>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Experience Progress</span>
                  <span className="text-sm text-muted-foreground">1250 / 2000 XP</span>
                </div>
                <Progress value={62.5} className="h-2" />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProfileHeader
