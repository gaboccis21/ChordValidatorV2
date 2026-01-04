import logo from "@/assets/harmoniq-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary dark:bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="HarmoniQ" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg text-white dark:text-foreground">HarmoniQ</span>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="/" className="text-sm text-white/70 dark:text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-white/70 dark:text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#features" className="text-sm text-white/70 dark:text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-white/70 dark:text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-white/60 dark:text-muted-foreground">
              © 2024 HarmoniQ. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
