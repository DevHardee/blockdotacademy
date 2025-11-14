import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Line } from "react-chartjs-2";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const trafficData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Visits",
      data: [120, 300, 280, 350, 500, 420, 390],
      borderColor: "#4facfe",
      backgroundColor: "rgba(79,172,254,0.2)",
      tension: 0.4,
    },
  ],
};

const coursePopularity = [
  { name: "DeFi", students: 840 },
  { name: "Blockchain", students: 1200 },
  { name: "Security", students: 430 },
  { name: "NFTs", students: 650 },
];

const COLORS = ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b"];

export default function AdminAnalytics() {
  return (
    <MaxWidthWrapper className="space-y-8 pb-14">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Application insights & statistics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <Card className="p-6 bg-card-gradient border-border/30">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Weekly Traffic</h3>
            <Badge className="bg-primary/10 text-primary">Last 7 days</Badge>
          </div>
          <Line data={trafficData} />
        </Card>

        {/* Course Popularity */}
        <Card className="p-6 bg-card-gradient border-border/30">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Course Popularity</h3>
            <Badge className="bg-primary/10 text-primary">Enrollments</Badge>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={coursePopularity}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* User Distribution Pie */}
      <Card className="p-6 bg-card-gradient border-border/30">
        <h3 className="font-semibold mb-4">User Roles Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: "Admins", value: 4 },
                { name: "Users", value: 3200 },
              ]}
              dataKey="value"
              outerRadius={120}
              label
            >
              {COLORS.map((c, i) => (
                <Cell key={i} fill={c} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </MaxWidthWrapper>
  );
}
