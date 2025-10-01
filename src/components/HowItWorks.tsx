import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Submit Your Request",
    description: "Describe your website needs through our simple request portal. No technical knowledge required."
  },
  {
    number: "2",
    title: "We Build It",
    description: "Our expert team designs and implements your custom site with precision and care."
  },
  {
    number: "3",
    title: "Get Results",
    description: "Reach more customers quickly and change/update as you need"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 section-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, efficient, and designed to scale with your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
