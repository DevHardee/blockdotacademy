import type { ReactNode } from "react"
import NavBar from "../AppNavbar"
import { cn } from "@/lib/utils"
import Footer from "../Footer"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 w-full pt-20 transition-all duration-300"
        )}
      >
        {children}
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
