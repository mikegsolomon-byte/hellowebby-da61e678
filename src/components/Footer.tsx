const Footer = () => {
  return (
    <footer className="pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff6b35] to-[#e84393]" />
              <span className="font-extrabold text-xl tracking-tight">HelloWebby</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart websites for Irish small businesses. Based in Ireland.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <a href="mailto:hello@hellowebby.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              hello@hellowebby.com
            </a>
          </div>
          <div>
            <h4 className="font-bold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-muted-foreground text-center">
          © 2025 HelloWebby. Smart websites for small businesses.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
