import logoMark from "@/assets/hellowebby-mark.png";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 px-4 border-t-2 border-foreground bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logoMark} alt="HelloWebby — small business websites Ireland" className="h-10 w-auto" />
              <span className="font-extrabold text-xl tracking-tight text-foreground">HelloWebby</span>
            </div>
            <p className="text-sm text-foreground/80 font-medium">
              Smart websites for Irish small businesses. Based in Ireland.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-foreground">Contact</h4>
            <a href="mailto:hello@hellowebby.com" className="text-sm text-foreground/80 hover:text-foreground font-medium">
              hello@hellowebby.com
            </a>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="/privacy" className="text-foreground/80 hover:text-foreground">Privacy Policy</a></li>
              <li><a href="/terms" className="text-foreground/80 hover:text-foreground">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-foreground/20 pt-6 text-sm text-foreground/80 text-center font-medium">
          © 2025 HelloWebby. Smart websites for small businesses.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
