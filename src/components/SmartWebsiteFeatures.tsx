import { Calendar, Target, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Easy Booking Tools",
    description: "Seamless scheduling and booking systems that make it simple for customers to connect with you and book your services.",
  },
  {
    icon: Target,
    title: "Optimised to Capture Leads",
    description: "We strategically place forms and call-to-actions to turn more of your website visitors into customers.",
  },
  {
    icon: Bot,
    title: "Integrated Automation and AI",
    description: "Save time with smart tools that automatically follow up with potential customers, helping you get more business.",
  }
];

const SmartWebsiteFeatures = () => {
  return (
    <section id="features" className="relative py-24 px-4 section-light overflow-hidden">
      <div className="glow-orb bg-primary/20 w-[400px] h-[400px] top-0 right-0 animate-pulse-glow" />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          What is a Smart Website?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-foreground" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartWebsiteFeatures;
