// src/components/AdminSidebar.tsx
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LogOut,
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart2,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";
import { motion } from "motion/react";

const adminNav = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Courses", url: "/admin/courses", icon: BookOpen },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart2 },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout, isAdmin, toggleAdmin } = useAuth();

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <Sidebar className="w-64 border-r border-sidebar-border/40 bg-sidebar shadow-sm">
      <SidebarHeader className="border-b border-sidebar-border/40 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center">
            <svg className="h-4 w-4 text-secondary" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h12M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-base md:text-lg bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blockdot Admin
            </h2>
            <p className="text-xs text-muted-foreground">Control Panel</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {adminNav.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "group relative w-full flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                        active
                          ? "bg-primary/15 text-primary border border-primary/20"
                          : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Link to={item.url} className="flex items-center w-full">
                        <item.icon
                          className={cn(
                            "h-4.5 w-4.5 shrink-0 mr-3.5 transition-all duration-300",
                            active ? "text-primary scale-110" : "group-hover:text-foreground"
                          )}
                        />
                        <span className="flex-1">{item.title}</span>
                        {active && (
                          <motion.div
                            layoutId="active-indicator"
                            className="absolute left-0 w-1 h-6 bg-primary rounded-full"
                          />
                        )}
                        {active && <ChevronRight className="h-4 w-4 opacity-50 ml-2" />}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/40 p-4 mt-auto">
        <div className="flex flex-col space-y-3">
          {/* Simple mode dropdown */}
          <div className="relative">
            <select
              value={isAdmin ? "admin" : "user"}
              onChange={(e) => toggleAdmin(e.target.value === "admin")}
              className="rounded-md border border-border/30 px-3 py-2 text-sm bg-card text-foreground"
              aria-label="Select Mode"
            >
              <option value="user">User Mode</option>
              <option value="admin">Admin Mode</option>
            </select>
          </div>

          <Button
            onClick={logout}
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;
