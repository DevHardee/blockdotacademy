"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useLocation, useNavigate } from "react-router-dom";

type NavLinkItem = {
  label: string;
  id: string;
};

export function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks: NavLinkItem[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Courses", id: "courses" },
  ];

  const handleScrollOrNavigate = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed bg-[#030303]/80 top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center gap-1 group"
          >
            <h2 className="font-black text-xl md:text-2xl tracking-tighter">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Blockdot
              </span>
              <span className="text-foreground">Academy</span>
            </h2>
          </div>
          {/* <img
            src="/assets/logo4.png"
            alt="logo"
            className="w-[20%] bg-background "
          /> */}

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:gap-8 lg:gap-20">
            {navLinks.map(({ label, id }) => (
              <div
                key={id}
                onClick={() => handleScrollOrNavigate(id)}
                className="relative bg-none! py-2 text-sm font-medium text-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-primary after:bottom-0 after:left-0 after:transition-transform after:duration-500 after:origin-left hover:after:scale-x-100 cursor-pointer"
              >
                {label}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-1">
            <Button variant="outline" size="sm" className="text-sm" onClick={() => navigate("/login")}>
              Log in
            </Button>
            <Button variant="outline" size="sm" className="text-sm ring ring-primary" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
            {/* <ThemeToggle /> */}
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
                  {navLinks.map(({ label, id }) => (
                    <div
                      key={id}
                      onClick={() => {
                        handleScrollOrNavigate(id);
                        setOpen(false);
                      }}
                      className="text-lg font-medium text-foreground transition-colors"
                    >
                      {label}
                    </div>
                  ))}
                  <div>
                    <Button
                      variant="outline"
                      className="mt-4 w-full"
                      onClick={() => {
                        navigate("/login");
                        setOpen(false);
                      }}
                    >
                      Log In
                    </Button>
                    <Button
                      variant="outline"
                      className="mt-4 w-full ring ring-primary"
                      onClick={() => {
                        navigate("/signup");
                        setOpen(false);
                      }}
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
  );
}

export default NavBar;
