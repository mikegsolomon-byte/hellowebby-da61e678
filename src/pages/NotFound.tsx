import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import { isTrackablePath, trackEvent } from "@/lib/analytics";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Report real misses only; platform URLs land here too and are just noise.
    if (isTrackablePath(location.pathname)) {
      trackEvent("page_not_found", {
        page_path: location.pathname,
        referrer: document.referrer || "(none)",
      });
    }
  }, [location.pathname]);

  return (
    <>
    <PageMeta
      title="Page not found | hellowebby"
      description="This page doesn't exist. Head back to hellowebby for professional small business websites from €49/month."
      path="/404"
      noindex
    />
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
