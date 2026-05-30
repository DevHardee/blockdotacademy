import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  Users,
  Clock,
  ArrowUpRight,
  Filter,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trafficData = [
  { name: "Mon", visits: 120, users: 45 },
  { name: "Tue", visits: 300, users: 110 },
  { name: "Wed", visits: 280, users: 95 },
  { name: "Thu", visits: 350, users: 130 },
  { name: "Fri", visits: 500, users: 210 },
  { name: "Sat", visits: 420, users: 180 },
  { name: "Sun", visits: 390, users: 155 },
];

const coursePopularity = [
  { name: "DeFi", students: 840, completion: 65 },
  { name: "Blockchain", students: 1200, completion: 82 },
  { name: "Security", students: 430, completion: 45 },
  { name: "NFTs", students: 650, completion: 58 },
  { name: "Dev Tools", students: 720, completion: 71 },
];

const COLORS = ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#8b5cf6"];

export default function AdminAnalytics() {
  return (
    <MaxWidthWrapper className="space-y-8 pb-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics Hub</h1>
          <p className="text-sm text-muted-foreground">Comprehensive insights into platform performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Traffic Chart */}
        <Card className="lg:col-span-2 p-6 border-border/40 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Active Engagement
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Platform visits vs active users</p>
            </div>
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Last 7 days
            </Badge>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '12px', border: '1px solid hsl(var(--border))' }}
                />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorVisits)"
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={0}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* User Stats Card */}
        <Card className="p-6 border-border/40 bg-linear-to-br from-primary/10 to-transparent flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Top Metrics</h3>
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4,128</div>
                    <div className="text-xs text-muted-foreground">New Registrations</div>
                  </div>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-none">+12.4%</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">42m</div>
                    <div className="text-xs text-muted-foreground">Avg. Session Time</div>
                  </div>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-none">+8.1%</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">87%</div>
                    <div className="text-xs text-muted-foreground">Course Completion Ratio</div>
                  </div>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-none">+2.5%</Badge>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-6 bg-transparent">
            View Reports
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>

        {/* Course Popularity & Roles */}
        <Card className="p-6 border-border/40 shadow-sm">
          <h3 className="font-semibold text-lg mb-6">Popularity by Category</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={coursePopularity}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} hide />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '12px', border: '1px solid hsl(var(--border))' }}
                />
                <Bar dataKey="students" radius={[6, 6, 0, 0]}>
                  {coursePopularity.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6 border-border/40 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-lg">User Role Distribution</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-blue-500" />
                <span className="text-xs text-muted-foreground">Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                <span className="text-xs text-muted-foreground">Admins</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="h-[220px] w-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Users", value: 3200 },
                      { name: "Admins", value: 120 },
                    ]}
                    dataKey="value"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={8}
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#10b981" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex-1 space-y-6 w-full max-w-sm">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Regular Users</span>
                  <span className="font-bold">3,200</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full">
                  <div className="h-full bg-blue-500 w-[96%] rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Admins</span>
                  <span className="font-bold">120</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full">
                  <div className="h-full bg-emerald-500 w-[4%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}
