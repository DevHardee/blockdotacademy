import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useMemo } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Users,
  BookOpen,
  Zap,
  ArrowUpRight,
  BarChart3,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AdminDashboard = () => {
  // mock global counts (in a real app you'd fetch)
  const totals = {
    users: 3214,
    courses: 42,
    tools: 12,
    active: 128,
  };

  const userGrowthData = useMemo(() => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        fill: true,
        label: "New Users",
        data: [120, 210, 180, 240, 300, 390],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }), []);

  const courseEngagement = useMemo(() => ({
    labels: ["Blockchain", "DeFi", "NFTs", "Security", "Dev"],
    datasets: [
      {
        label: "Enrollments",
        data: [1200, 900, 600, 450, 800],
        backgroundColor: [
          "#3b82f6",
          "#06b6d4",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
        ],
        borderRadius: 8,
      },
    ],
  }), []);

  return (
    <div className="min-h-screen bg-background ">
      <MaxWidthWrapper className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Overview of application activity</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/courses">
              <Button variant="outline">Manage Courses</Button>
            </Link>
            <Link to="/admin/users">
              <Button>Manage Users</Button>
            </Link>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Users", value: totals.users.toLocaleString(), icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10", trend: "+12%" },
            { label: "Total Courses", value: totals.courses, icon: BookOpen, color: "text-emerald-500", bgColor: "bg-emerald-500/10", trend: "+4" },
            { label: "Active Sessions", value: totals.active, icon: Zap, color: "text-amber-500", bgColor: "bg-amber-500/10", trend: "+18%" },
            { label: "Average Progress", value: "64%", icon: BarChart3, color: "text-purple-500", bgColor: "bg-purple-500/10", trend: "+5%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs font-medium text-emerald-500 bg-emerald-500/5 border-emerald-500/20">
                      {stat.trend}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-card-gradient border-border/30">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">User Growth</h3>
              <Badge className="bg-primary/10 text-primary">Last 6 months</Badge>
            </div>
            <div>
              <Line data={userGrowthData} />
            </div>
          </Card>

          <Card className="p-6 bg-card-gradient border-border/30">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Course Engagement</h3>
              <Badge className="bg-primary/10 text-primary">All time</Badge>
            </div>
            <div>
              <Bar data={courseEngagement} />
            </div>
          </Card>
        </div>

        {/* Recent Courses preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Active Course Performance</h3>
            </div>
            <Link to="/admin/courses">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View all courses
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Blockchain Fundamentals", students: 1200, status: "Published", completion: 78 },
              { id: 2, title: "Smart Contracts Mastery", students: 890, status: "Published", completion: 64 },
              { id: 3, title: "DeFi Protocols Deep Dive", students: 640, status: "Draft", completion: 0 },
            ].map((c) => (
              <Card key={c.id} className="border border-border/40 hover:border-primary/30 transition-all overflow-hidden bg-card">
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold line-clamp-1">{c.title}</h4>
                      <div className="text-sm text-muted-foreground mt-1">
                        {c.students} active students
                      </div>
                    </div>
                    <Badge variant={c.status === "Published" ? "default" : "secondary"} className="text-[10px] px-2 py-0">
                      {c.status}
                    </Badge>
                  </div>

                  {c.status === "Published" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Avg. Completion</span>
                        <span className="font-medium text-emerald-500">{c.completion}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 transition-all duration-500"
                          style={{ width: `${c.completion}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex justify-end">
                    <Link to={`/admin/courses`}>
                      <Button size="sm" variant="outline" className="h-8">
                        Manage
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AdminDashboard;
