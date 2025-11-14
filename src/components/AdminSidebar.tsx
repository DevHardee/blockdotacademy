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
  Home,
  Users,
  BookOpen,
  BarChart2,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

const adminNav = [
  { title: "Dashboard", url: "/admin/dashboard", icon: Home },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Courses", url: "/admin/courses", icon: BookOpen },
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
            <SidebarMenu className="space-y-1">
              {adminNav.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "group w-full flex items-center rounded-xl px-3 py-2 text-xs md:text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/20 text-primary-foreground! border hover:bg-primary/30 border-primary/30 font-semibold!"
                          : "hover:bg-primary/10 text-sidebar-foreground!"
                      )}
                    >
                      <Link to={item.url}>
                        <item.icon
                          className={cn(
                            "h-5 w-5 shrink-0 mr-3 transition-transform",
                            active && "scale-110 text-primary"
                          )}
                        />
                        <span>{item.title}</span>
                        {active && <ChevronRight className="h-4 w-4 ml-auto opacity-70" />}
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
        <div className="flex flex-col space-x-3">
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

          <div className="flex items-center gap-2">
            <Button onClick={logout} className="flex items-center gap-2">
              <span className="hidden md:inline">Logout</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M15 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 16l5-4-5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;
