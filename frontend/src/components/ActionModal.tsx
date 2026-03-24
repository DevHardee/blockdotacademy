import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Target, Trophy, Users, Calendar, TrendingUp } from "lucide-react"
import { toast } from "sonner"
import ProfileAchievements from "./profile/ProfileAchievements"
import { Tabs } from "@/components/ui/tabs"

interface ActionModalProps {
    isOpen: boolean
    onClose: () => void
    type: "achievements" | "community" | "leaderboard" | "goals" | "study-plan"
}

export const ActionModal = ({ isOpen, onClose, type }: ActionModalProps) => {
    const [weeklyGoal, setWeeklyGoal] = useState("12")

    const renderContent = () => {
        switch (type) {
            case "achievements":
                return (
                    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                        <Tabs defaultValue="achievements" className="w-full">
                            <ProfileAchievements />
                        </Tabs>
                    </div>
                )
            case "community":
                return (
                    <div className="text-center py-8 space-y-4">
                        <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center mx-auto">
                            <Users className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-xl">Join the Builder Community</h3>
                            <p className="text-muted-foreground">
                                Connect with 10,000+ Web3 developers on Discord and Telegram.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 pt-4">
                            <Button className="bg-[#5865F2] hover:bg-[#4752C4]">Join Discord</Button>
                            <Button variant="outline">Join Telegram</Button>
                        </div>
                    </div>
                )
            case "leaderboard":
                const leaders = [
                    { name: "Alex Rivera", xp: "15,420", rank: 1, avatar: "AR" },
                    { name: "Sarah Chen", xp: "14,850", rank: 2, avatar: "SC" },
                    { name: "Mike Johnson", xp: "13,900", rank: 3, avatar: "MJ" },
                    { name: "You", xp: "1,250", rank: 142, avatar: "U", isUser: true },
                ]
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            {leaders.map((leader, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center justify-between p-3 rounded-lg border ${leader.isUser ? "bg-primary/5 border-primary/30" : "border-border/40"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`w-6 font-bold ${leader.rank <= 3 ? "text-yellow-500" : "text-muted-foreground"}`}>
                                            #{leader.rank}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-medium">
                                            {leader.avatar}
                                        </div>
                                        <span className="font-medium">{leader.name}</span>
                                    </div>
                                    <span className="font-bold text-primary">{leader.xp} XP</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full">View Full Leaderboard</Button>
                    </div>
                )
            case "goals":
                return (
                    <div className="space-y-6 py-4">
                        <div className="space-y-2">
                            <Label>Weekly Lesson Target</Label>
                            <div className="flex gap-4">
                                <Input
                                    type="number"
                                    value={weeklyGoal}
                                    onChange={(e) => setWeeklyGoal(e.target.value)}
                                    className="text-lg font-bold"
                                />
                                <Button onClick={() => {
                                    toast.success("Learning goal updated!")
                                    onClose()
                                }}>Save Goal</Button>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Current average: 8 lessons/week. Setting a higher goal increases XP multipliers!
                            </p>
                        </div>
                    </div>
                )
            case "study-plan":
                return (
                    <div className="space-y-4 py-4">
                        <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/20 space-y-3">
                            <div className="flex items-center gap-2 text-orange-500">
                                <Calendar className="h-5 w-5" />
                                <span className="font-semibold">Smart Path AI</span>
                            </div>
                            <p className="text-sm">
                                Based on your interest in <b>DeFi</b> and <b>Security</b>, we've generated a 4-week path:
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    <span>Week 1: Advanced Solidity Patterns</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                                    <span>Week 2: Flash Loan Mechanics</span>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Activate Plan</Button>
                    </div>
                )
        }
    }

    const getTitle = () => {
        switch (type) {
            case "achievements": return "Your Achievements"
            case "community": return "Web3 Community"
            case "leaderboard": return "Global Leaderboard"
            case "goals": return "Set Learning Goals"
            case "study-plan": return "Personal Study Plan"
        }
    }

    const getIcon = () => {
        switch (type) {
            case "achievements": return <Trophy className="h-5 w-5 text-yellow-500" />
            case "community": return <Users className="h-5 w-5 text-purple-500" />
            case "leaderboard": return <TrendingUp className="h-5 w-5 text-emerald-500" />
            case "goals": return <Target className="h-5 w-5 text-primary" />
            case "study-plan": return <Calendar className="h-5 w-5 text-orange-500" />
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-accent/50">
                            {getIcon()}
                        </div>
                        <DialogTitle className="text-2xl">{getTitle()}</DialogTitle>
                    </div>
                    <DialogDescription>
                        {type === "achievements" && "Track your progress and unlocked milestones."}
                        {type === "community" && "Don't build alone. Join our global network."}
                        {type === "leaderboard" && "See how you stack up against other builders."}
                        {type === "goals" && "Define your pace and stay accountable."}
                        {type === "study-plan" && "AI-powered learning path tailored for you."}
                    </DialogDescription>
                </DialogHeader>
                {renderContent()}
            </DialogContent>
        </Dialog>
    )
}
