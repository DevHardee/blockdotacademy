import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TabsContent } from "@/components/ui/tabs"
import { Award } from "lucide-react"
import { cn } from "@/lib/utils"

const ProfileAchievements = () => {
    const achievements = [
        { name: "First Course", description: "Completed your first course", earned: true, icon: "🎓" },
        { name: "Speed Learner", description: "Completed 3 courses in one month", earned: true, icon: "⚡" },
        { name: "Community Helper", description: "Helped 10+ students in chat", earned: true, icon: "🤝" },
        { name: "Smart Contract Expert", description: "Complete all Solidity courses", earned: false, icon: "🔧" },
        { name: "DeFi Master", description: "Master all DeFi protocols", earned: false, icon: "🏦" },
        { name: "Security Specialist", description: "Complete all security courses", earned: false, icon: "🛡️" }
      ];

  return (
    <TabsContent value="achievements" className="space-y-6">
      {achievements && achievements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {achievements.map((achievement, index) => (
           <Card
             key={index}
             className={cn(
             "bg-card border border-border/50 transition-all duration-300",
              achievement.earned
                ? "ring-2 ring-primary/30 shadow-lg"
                : "opacity-70 hover:opacity-100"
             )}
                 >
                <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h4 className="font-bold mb-2 text-foreground">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        {achievement.description}
                    </p>
                        {achievement.earned ? (
                        <Badge className="bg-primary/20 text-primary text-xs md:text-sm!">Earned</Badge>
                        ) : (
                        <Badge variant="outline" className="text-muted-foreground text-xs md:text-sm! border-border">
                            Locked
                        </Badge>
                    )}
                </CardContent>
              </Card>
            ))}
         </div>
         ) : (
        <Card className="bg-card border border-border/50 text-center py-10">
          <CardContent>
            <Award className="w-10 h-10 mx-auto text-primary mb-2" />
            <h4 className="font-semibold text-lg mb-2 text-foreground">No achievements yet</h4>
            <p className="text-muted-foreground text-sm">
            Complete more courses to earn badges and achievements.
            </p>
          </CardContent>
         </Card>
        )}
    </TabsContent>
  )
}

export default ProfileAchievements
