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
  Home,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { title: "Home", url: "/", icon: Home },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Community", url: "/community", icon: Users },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
      <Sidebar className="w-64 border-r border-sidebar-border/40 bg-sidebar shadow-sm">
      {/* Header */}
      <SidebarHeader className="border-b border-sidebar-border/40 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center">
            <Code className="h-3 w-3 md:w-5 md:h-5 text-secondary" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-base md:text-lg bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blockdot
            </h2>
            <p className="text-xs text-muted-foreground">Academy</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="p-3">
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
                        "group w-full flex items-center rounded-xl px-3 py-2 text-xs md:text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/20 text-primary border hover:bg-primary/30 border-primary/30 font-semibold!"
                          : "hover:bg-primary/10 text-white!"
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
                        {active && (
                          <ChevronRight className="h-4 w-4 ml-auto opacity-70" />
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
        <div className="text-left">
          <ThemeToggle />
        </div>
      </SidebarFooter>
      </Sidebar>
  );
}
