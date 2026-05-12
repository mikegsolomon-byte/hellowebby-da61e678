const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent shadow-lg shadow-primary/30">
              <span className="text-xl">🌐</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight">hellowebby</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 hellowebby. Smart websites for small businesses.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
