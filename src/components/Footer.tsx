import logoMark from "@/assets/hellowebby-mark.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-12 pb-8 px-4 border-t-2 border-foreground bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logoMark} alt="hellowebby — small business websites" className="h-10 w-auto" />
              <span className="font-extrabold text-xl tracking-tight text-foreground">hellowebby</span>
            </div>
            <p className="text-sm text-foreground/80 font-medium max-w-md">
              Professional websites for small businesses. Built in days, not months.
            </p>
            <a href="mailto:hello@hellowebby.com" className="mt-3 inline-block text-sm text-foreground/80 hover:text-foreground font-semibold">
              hello@hellowebby.com
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end text-sm font-semibold">
            <button onClick={() => scrollToSection("hero")} className="text-foreground/80 hover:text-foreground">Home</button>
            <button onClick={() => scrollToSection("pricing")} className="text-foreground/80 hover:text-foreground">Pricing</button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-foreground/80 hover:text-foreground">How it works</button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground/80 hover:text-foreground">FAQ</button>
            <a href="mailto:hello@hellowebby.com" className="text-foreground/80 hover:text-foreground">Contact</a>
            <a href="/privacy" className="text-foreground/80 hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="text-foreground/80 hover:text-foreground">Terms of Service</a>
          </nav>
        </div>
        <div className="border-t border-foreground/20 pt-6 flex flex-col md:flex-row gap-3 md:justify-between md:items-center text-sm text-foreground/80 font-medium">
          <div>GDPR compliant &nbsp;|&nbsp; Irish support</div>
          <div>© 2025 hellowebby. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
