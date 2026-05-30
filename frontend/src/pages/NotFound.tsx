import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="pt-8 md:pt-36 h-full lg:min-h-screen pb-40 flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mt-8">
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-primary! text-white font-medium px-6 py-2"
          >
            Return Home
          </Button>

          <Button
            variant="outline"
            onClick={() => (window.history.back())}
            className="font-medium px-6 py-2"
          >
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
