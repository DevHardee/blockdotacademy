import { Card } from "@/components/ui/card";
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
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary/30">
      <MaxWidthWrapper className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Admin Dashboard</h1>
            <p className="text-lg text-white/40 font-medium">Overview of application activity and performance</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admin/courses">
              <Button variant="outline" className="rounded-xl px-6 h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[10px]">Manage Courses</Button>
            </Link>
            <Link to="/admin/users">
              <Button className="rounded-xl px-6 h-12 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-bold uppercase tracking-widest text-[10px] border-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]">Manage Users</Button>
            </Link>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Users", value: totals.users.toLocaleString(), icon: Users, color: "text-primary", bgColor: "bg-primary/10", trend: "+12%" },
            { label: "Total Courses", value: totals.courses, icon: BookOpen, color: "text-accent", bgColor: "bg-accent/10", trend: "+4" },
            { label: "Active Sessions", value: totals.active, icon: Zap, color: "text-orange-500", bgColor: "bg-orange-500/10", trend: "+18%" },
            { label: "Average Progress", value: "64%", icon: BarChart3, color: "text-purple-500", bgColor: "bg-purple-500/10", trend: "+5%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-[#0a0a0a] border-white/5 rounded-[2rem] hover:border-white/10 transition-all duration-500 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center border border-white/5`}>
                    <stat.icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                  <Badge className="bg-white/5 text-white/50 border-white/10 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest">
                    {stat.trend}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black tracking-tight">{stat.value}</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-[#0a0a0a] border-white/5 rounded-[2.5rem]">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight">User Growth</h3>
              <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">Last 6 months</Badge>
            </div>
            <div className="h-[300px]">
              <Line
                data={userGrowthData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "rgba(255,255,255,0.4)" } },
                    x: { grid: { display: false }, ticks: { color: "rgba(255,255,255,0.4)" } }
                  },
                  plugins: { legend: { display: false } }
                }}
              />
            </div>
          </Card>

          <Card className="p-8 bg-[#0a0a0a] border-white/5 rounded-[2.5rem]">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight">Course Engagement</h3>
              <Badge className="bg-accent/10 text-accent border-accent/20 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">All time</Badge>
            </div>
            <div className="h-[300px]">
              <Bar
                data={courseEngagement}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "rgba(255,255,255,0.4)" } },
                    x: { grid: { display: false }, ticks: { color: "rgba(255,255,255,0.4)" } }
                  },
                  plugins: { legend: { display: false } }
                }}
              />
            </div>
          </Card>
        </div>

        {/* Recent Courses preview */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Active Performance</h3>
            </div>
            <Link to="/admin/courses">
              <Button variant="ghost" className="text-white/40 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest text-[10px]">
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
              <Card key={c.id} className="bg-[#0a0a0a] border-white/5 rounded-[2rem] hover:border-white/10 transition-all p-8 group">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">{c.title}</h4>
                      <div className="text-xs font-medium text-white/30 mt-1">
                        {c.students} active students
                      </div>
                    </div>
                    <Badge className={c.status === "Published" ? "bg-primary/10 text-primary border-primary/20 rounded-full text-[8px] font-black uppercase tracking-widest px-2" : "bg-white/5 text-white/30 border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest px-2"}>
                      {c.status}
                    </Badge>
                  </div>

                  {c.status === "Published" && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-white/20">Avg. Completion</span>
                        <span className="text-primary">{c.completion}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-primary to-accent transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                          style={{ width: `${c.completion}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Link to={`/admin/courses`} className="w-full block">
                      <Button className="w-full rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[9px] border border-white/10 h-10">
                        Manage Course
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
