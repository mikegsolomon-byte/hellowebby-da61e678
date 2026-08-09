import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to the top of the page on route (pathname) changes. Without this,
// React Router keeps the previous scroll position, so navigating from a section
// partway down one page lands you partway down the next. Hash links (e.g. /#pricing)
// are left alone so in-page anchors still scroll to their target.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
