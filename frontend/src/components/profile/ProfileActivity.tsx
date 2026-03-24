import { Card, CardContent } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

const ProfileActivity = () => {
  return (
    <TabsContent value="activity" className="space-y-6">
    <Card>
      <CardContent className="py-10 text-center">
        <Clock className="w-10 h-10 mx-auto text-primary mb-2" />
        <h4 className="font-semibold text-lg mb-2">Activity Feed</h4>
        <p className="text-muted-foreground text-sm">
          Your learning activity will appear here
        </p>
      </CardContent>
    </Card>
  </TabsContent>
  )
}

export default ProfileActivity
