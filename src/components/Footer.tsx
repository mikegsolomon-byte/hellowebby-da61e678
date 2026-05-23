import logoMark from "@/assets/hellowebby-mark.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t-2 border-foreground bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img src={logoMark} alt="HelloWebby" className="h-10 w-auto" />
            <span className="font-extrabold text-xl tracking-tight text-foreground">HelloWebby</span>
          </div>

          <div className="text-sm text-foreground/80 text-center md:text-left font-medium">
            © 2025 HelloWebby. Smart websites for small businesses.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
