import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import Footer from "../components/Footer";

interface UserLayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: UserLayoutProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const isMobile = useIsMobile(1024);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Sidebar */}
      <AppSidebar/>

      {/* Main Content */}
      <div
        className={cn(
          "flex flex-col min-h-screen transition-all duration-300 ease-in-out",
          !isMobile && !collapsed ? "ml-64" : "ml-0"
        )}
      >
       <header
        className={cn(
          "fixed top-0 w-full transition-all pt-4 ml-2 duration-300 bg-card/10 h-16 z-50 backdrop-blur-sm",
          collapsed ? "left-4" : "left-64",
          isMobile ? "left-4" : ""

        )}
      >
        <div className="text-left">
            <SidebarTrigger className="h-8 w-8 hover:bg-primary! text-black bg-gray-200! dark:bg-[#1c1c1c]! dark:text-white" title="Open/Close Sidebar"/>
        </div>
      </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="w-full h-full">{children}</div>
        </main>

        <Footer/>
      </div>
    </div>
  );
}

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}