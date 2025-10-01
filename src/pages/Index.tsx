import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SmartWebsiteFeatures from "@/components/SmartWebsiteFeatures";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import WhySubscription from "@/components/WhySubscription";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SmartWebsiteFeatures />
      <WhatYouGet />
      <HowItWorks />
      <WhySubscription />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
