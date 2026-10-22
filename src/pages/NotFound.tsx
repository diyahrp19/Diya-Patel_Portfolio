import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Soft ambient glows matching the main page backdrop. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl"></div>
      </div>

      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent sm:text-7xl">
          404
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Oops! Page not found
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-violet-700 hover:shadow-xl"
        >
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
