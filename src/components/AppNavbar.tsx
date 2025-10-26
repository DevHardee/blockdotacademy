"use client"

import { useState } from "react"
import { Link } from "react-scroll"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useNavigate } from "react-router-dom"

export function NavBar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const navLinks = ["home", "about", "courses",]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border/20 bg-card/60 backdrop-blur-xl">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')}
            className="flex flex-col md:flex-row cursor-pointer items-start md:items-end gap-1">
            <h2 className="font-semibold text-base md:text-2xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blockdot
            </h2>
            <p className="text-xs md:text-base text-muted-foreground">Academy</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8 lg:gap-20">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                className="relative py-2 text-sm font-medium text-secondary! hover:text-foreground transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-primary after:bottom-0 after:left-0 after:transition-transform after:duration-500 after:origin-left hover:after:scale-x-100 cursor-pointer"
                 >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm"
              onClick={() => navigate('/login')}
              >
              Log in
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm ring ring-primary"
              onClick={() => navigate('/signup')}
              >
              Sign up
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-6">
                <nav className="flex flex-col mt-6 space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link}
                      to={link}
                      smooth={true}
                      duration={500}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-secondary! transition-colors"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Link>
                  ))}
                 <div>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => navigate('/login')}
                    >
                    Log In
                  </Button>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full ring ring-primary"
                    onClick={() => navigate('/signup')}
                    >
                    Sign up
                  </Button>
                 </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default NavBar
