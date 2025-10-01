import { Calendar, Target, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Easy Booking Tools",
    description: "Seamless scheduling and booking systems that make it simple for customers to connect with you and book your services.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Optimised to Capture Leads",
    description: "We strategically place forms and call-to-actions to turn more of your website visitors into customers.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Bot,
    title: "Integrated Automation and AI",
    description: "Save time with smart tools that automatically follow up with potential customers, helping you get more business.",
    gradient: "from-purple-500 to-pink-500"
  }
];

const SmartWebsiteFeatures = () => {
  return (
    <section id="features" className="py-20 px-4 section-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What is a Smart Website?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto`}>
                  <feature.icon className="w-8 h-8 text-white" />
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
