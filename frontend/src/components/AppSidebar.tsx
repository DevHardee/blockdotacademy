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
import { ThemeToggle } from "./ThemeToggle";
import {
  Code,
  BookOpen,
  Users,
  Trophy,
  User,
  ArrowRightToLine,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

const navigation = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "My Courses", url: "/my-courses", icon: BookOpen },
  { title: "Community", url: "/community", icon: Users },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const { logout, isAdmin, toggleAdmin } = useAuth()

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <Sidebar className="w-64 border-r border-white/5 bg-[#030303] shadow-2xl">
      {/* Header */}
      <SidebarHeader className="border-b border-white/5 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <Code className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col items-start px-1">
            <h2 className="font-black text-xl tracking-tight text-white leading-none">
              Blockdot
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-1">Academy</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "group w-full flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                        active
                          ? "bg-accent text-white! shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                          : "hover:bg-white/5 text-white/50! hover:text-white!"
                      )}
                    >
                      <Link to={item.url}>
                        <item.icon
                          className={cn(
                            "h-5 w-5 shrink-0 mr-3 transition-all duration-300",
                            active && "scale-110"
                          )}
                        />
                        <span className={cn(active && "font-bold")}>{item.title}</span>
                        {active && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-sidebar-border/40 p-4 mt-auto">
        <div className="flex items-center justify-between">
          <ThemeToggle />

          <div className="flex flex-col">
            <Button
              onClick={() => toggleAdmin()}
              variant="ghost"
              className="w-full justify-start text-white/40 hover:text-white hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              {isAdmin ? "Exit Admin" : "Admin Mode"}
            </Button>

            <Button
              onClick={logout}
              className="flex items-center gap-2">
              <p>Logout</p>
              <ArrowRightToLine />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
