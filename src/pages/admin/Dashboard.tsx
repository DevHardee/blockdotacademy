import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useMemo } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

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
        label: "New Users",
        data: [120, 210, 180, 240, 300, 390],
        borderColor: "rgb(68,138,255)",
        backgroundColor: "rgba(68,138,255,0.15)",
        tension: 0.3,
      },
    ],
  }), []);

  const courseEngagement = useMemo(() => ({
    labels: ["Blockchain", "DeFi", "NFTs", "Security", "Dev"],
    datasets: [
      {
        label: "Enrollments",
        data: [1200, 900, 600, 450, 800],
        backgroundColor: ["#0288d1", "#4dd0e1", "#00897b", "#ffd54f", "#8e44ad"],
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
          <Card className="p-6 bg-card-gradient border border-primary/60 shadow-card hover:border-primary hover:shadow-lg ">
            <div className="text-muted-foreground">Users</div>
            <div className="text-3xl font-bold text-primary">{totals.users.toLocaleString()}</div>
          </Card>
          <Card className="p-6 bg-card-gradient border-primary/60 shadow-card hover:border-primary hover:shadow-lg">
            <div className="text-muted-foreground">Courses</div>
            <div className="text-3xl font-bold text-primary">{totals.courses}</div>
          </Card>
          <Card className="p-6 bg-card-gradient border-primary/60 shadow-card hover:border-primary hover:shadow-lg">
            <div className="text-muted-foreground">Tools</div>
            <div className="text-3xl font-bold text-primary">{totals.tools}</div>
          </Card>
          <Card className="p-6 bg-card-gradient border-primary/60 shadow-card hover:border-primary hover:shadow-lg">
            <div className="text-muted-foreground">Active Sessions</div>
            <div className="text-3xl font-bold text-primary">{totals.active}</div>
          </Card>
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
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Recent Courses</h3>
            <Link to="/admin/courses">
              <Button variant="outline">View all courses</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* simple static preview; you can map real data here */}
            {[
              { id: 1, title: "Blockchain Fundamentals", students: 1200 },
              { id: 2, title: "Smart Contracts", students: 890 },
              { id: 3, title: "DeFi Protocols", students: 640 },
            ].map((c) => (
              <Card key={c.id} className="p-4 bg-card-gradient border-border/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.students} enrollments</div>
                  </div>
                  <div>
                    <Link to={`/admin/courses`}>
                      <Button size="sm">Manage</Button>
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
