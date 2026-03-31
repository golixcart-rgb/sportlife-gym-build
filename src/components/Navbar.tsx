import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="text-xl md:text-2xl font-extrabold tracking-tight">
          SPORT<span className="text-primary">LIFE</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+916303889740"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-gym-red-glow transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+916303889740"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-bold text-sm mt-2"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
