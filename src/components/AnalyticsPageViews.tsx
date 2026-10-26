import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

// gtag only records the first page load on its own. This sends a page view on
// every later in-app navigation (only when the visitor has accepted analytics).
const AnalyticsPageViews = () => {
  const { pathname, search } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
};

export default AnalyticsPageViews;
