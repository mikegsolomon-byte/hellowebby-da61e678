import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import SmartWebsiteFeatures from "@/components/SmartWebsiteFeatures";
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
      <WhoIsThisFor />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <SmartWebsiteFeatures />
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
