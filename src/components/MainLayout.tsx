import type { ReactNode } from "react"
import NavBar from "./AppNavbar"
import { cn } from "@/lib/utils"
import Footer from "./Footer"
import MaxWidthWrapper from "./MaxWidthWrapper"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 w-full pt-20",
          "px-4 md:px-8 lg:px-16 transition-all duration-300"
        )}
      >
        {children}
      </main>

      {/* Footer */}
      <Footer/>
    </div>
    </MaxWidthWrapper>
  )
}
