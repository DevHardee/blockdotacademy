import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type NavLinkItem = {
  label: string;
  id?: string;
  path?: string;
};

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Courses", path: "/courses" },
    { label: "Jobs", path: "/jobs" },
    { label: "Blog", path: "/blog" },
  ];

  const handleScrollOrNavigate = (link: NavLinkItem) => {
    if (link.path) {
      if (location.pathname === link.path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(link.path);
      }
      return;
    }

    const sectionId = link.id || "";
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
      isScrolled
        ? "bg-[#030303]/80 border-white/5 backdrop-blur-xl py-0"
        : "bg-transparent border-transparent py-2"
    )}>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div
            onClick={() => handleScrollOrNavigate({ label: "Home", id: "home" })}
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

          <nav className="hidden lg:flex md:gap-8 lg:gap-20">
            {navLinks.map((link) => {
              const isActive = link.path
                ? location.pathname === link.path
                : location.pathname === "/" && (!link.id || location.hash === `#${link.id}`);

              return (
                <div
                  key={link.label}
                  onClick={() => handleScrollOrNavigate(link)}
                  className={cn(
                    "relative bg-none! py-2 text-sm font-medium transition-colors cursor-pointer",
                    "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-primary after:bottom-0 after:left-0 after:transition-transform after:duration-500 after:origin-left hover:after:scale-x-100",
                    isActive ? "text-primary after:scale-x-100" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-1">
            <Button variant="outline" size="sm" className="text-sm ring ring-primary" onClick={() => navigate("/login")}>
              Log in
            </Button>
            <Button variant="outline" size="sm" className="text-sm ring ring-primary bg-primary/80! hover:bg-primary!" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-6">
                <nav className="flex flex-col mt-6 space-y-6">
                  {navLinks.map((link) => (
                    <div
                      key={link.label}
                      onClick={() => {
                        handleScrollOrNavigate(link);
                        setOpen(false);
                      }}
                      className="text-lg font-medium text-foreground transition-colors"
                    >
                      {link.label}
                    </div>
                  ))}
                  <div>
                    <Button
                      variant="outline"
                      className="mt-4 w-full ring ring-primary"
                      onClick={() => {
                        navigate("/login");
                        setOpen(false);
                      }}
                    >
                      Log In
                    </Button>
                    <Button
                      variant="outline"
                      className="mt-4 w-full ring ring-primary bg-primary/80! hover:bg-primary!"
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