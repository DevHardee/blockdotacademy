import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import AdminSidebar from "../components/AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: AdminLayoutProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const isMobile = useIsMobile(1024);

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        className={cn(
          "flex flex-col min-h-screen transition-all duration-300 ease-in-out",
          !isMobile && !collapsed ? "ml-64" : "ml-0"
        )}
      >
        <header
          className={cn(
            "fixed top-0 w-full transition-all pt-4 ml-0 duration-300 bg-[#030303]/80 h-16 z-50 backdrop-blur-md border-b border-white/5",
            collapsed ? "left-0" : "left-64",
            isMobile ? "left-0" : ""

          )}
        >
          <div className="flex items-center px-6 h-full">
            <SidebarTrigger className="h-10 w-10 hover:bg-white/10! bg-white/5 text-white border border-white/10 rounded-xl" title="Open/Close Sidebar" />
            <div className="ml-4 font-bold text-sm tracking-widest uppercase text-white/40">
              Management Portal
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="w-full h-full p-6 pt-24 pb-10 md:pb-10 md:py-20">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}