// Navbar — Fixed top navigation with responsive mobile menu and call-to-action buttons
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import VoltCareLogo from "./VoltCareLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 md:h-20 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <VoltCareLogo scrolled={scrolled} size="sm" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Call Button — dials 9970174508 */}
        <a
          href="tel:+919970174508"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded text-[13px] font-semibold tracking-wide transition-all ${
            scrolled
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          CALL NOW
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <div className="px-4 py-5 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919970174508"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded text-sm font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
