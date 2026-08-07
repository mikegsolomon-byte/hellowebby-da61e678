import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import RecentWork from "@/components/RecentWork";
import WhatYouGet from "@/components/WhatYouGet";
import FAQ from "@/components/FAQ";
import NewsletterCTA from "@/components/NewsletterCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      <Hero />
      <WhoIsThisFor />
      <WhatYouGet />
      <HowItWorks />
      <Pricing />
      <RecentWork />
      <FAQ />
      <NewsletterCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
