import { Calendar, Target, Search, Sparkles } from "lucide-react";

const SmartWebsiteFeatures = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What is a <span className="gradient-text">Smart Website?</span></h2>
        <p className="text-muted-foreground">Designed to work for you while you sleep.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Big card */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] glass p-10 hover:border-[#e84393]/50 transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e84393]/30 blur-[100px] -mr-32 -mt-32 group-hover:bg-[#e84393]/50 transition-all" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#6c5ce7]/20 border border-[#6c5ce7]/30 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-[#6c5ce7]" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Let customers book you 24/7</h3>
            <p className="text-muted-foreground text-lg max-w-md">
              Seamless scheduling so customers can book your services anytime, without back-and-forth.
            </p>
          </div>
        </div>

        {/* Side gradient card */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff6b35] to-[#f7931e] p-10 hover:shadow-[0_20px_50px_rgba(255,107,53,0.35)] transition-all">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Turn visitors into leads</h3>
          <p className="text-white/80">
            Strategically placed forms convert curious visitors into real business leads.
          </p>
        </div>

        {/* Square card */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] glass p-10 hover:border-[#6c5ce7]/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#6c5ce7]/20 border border-[#6c5ce7]/30 flex items-center justify-center mb-6">
            <Search className="w-6 h-6 text-[#6c5ce7]" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Get found on Google</h3>
          <p className="text-muted-foreground">
            Local SEO setup ensures your business appears when customers are searching nearby.
          </p>
        </div>

        {/* Long gradient card */}
        <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#e84393] to-[#6c5ce7] p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Everything built and managed for you
              </h3>
              <p className="text-white/85">
                We handle design, content, hosting, and ongoing updates — so you can focus on running your business.
              </p>
            </div>
            <div className="md:w-1/3 w-full grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20" />
              <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartWebsiteFeatures;
