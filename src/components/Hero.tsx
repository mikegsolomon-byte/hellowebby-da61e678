import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Smart Websites that help your business grow{" "}
          <span className="gradient-text block mt-2">one fixed price</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Risk free Websites that look great and are designed to bring you customers
          - all done for you under one monthly subscription you can cancel anytime. Easy!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection("pricing")}>
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("how-it-works")}
          >
            See How it Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
