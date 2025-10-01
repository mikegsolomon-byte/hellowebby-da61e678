const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <span className="text-2xl">🌐</span>
            </div>
            <span className="font-bold text-xl">hellowebby</span>
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
