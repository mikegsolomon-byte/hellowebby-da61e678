import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SmartWebsiteFeatures from "@/components/SmartWebsiteFeatures";
import Pricing from "@/components/Pricing";

import WhoIsThisFor from "@/components/WhoIsThisFor";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import WhySubscription from "@/components/WhySubscription";
import FAQ from "@/components/FAQ";
import NewsletterCTA from "@/components/NewsletterCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      <Hero />
      <SmartWebsiteFeatures />
      <Pricing />
      
      <WhoIsThisFor />
      <HowItWorks />
      <WhatYouGet />
      <WhySubscription />
      <FAQ />
      <NewsletterCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
