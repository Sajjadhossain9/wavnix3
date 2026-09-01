import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.target);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Services", target: "services" },
    { label: "Work", target: "work" },
    { label: "Education", target: "product" },
    { label: "Domains", target: "domains" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050706]/80 backdrop-blur-xl border-b border-white/[0.04] py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
        role="banner"
      >
        <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Wavnix Home"
          >
            <div className="relative w-9 h-9 flex items-center justify-center bg-bg-elevated border border-white/[0.08] rounded-lg group-hover:border-accent/30 transition-all duration-300">
              <svg
                viewBox="0 0 100 100"
                className="w-5 h-5 fill-none stroke-[10] stroke-accent group-hover:scale-110 transition-transform duration-300"
              >
                <path
                  d="M10 20 L40 80 L60 40 L75 70 L90 20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 bg-accent/8 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-text-main group-hover:text-accent transition-colors duration-300">
              WAV<span className="text-accent">NIX</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.target
                    ? "text-accent bg-accent/[0.06]"
                    : "text-text-muted hover:text-text-main hover:bg-white/[0.04]"
                }`}
                aria-current={activeSection === item.target ? "true" : undefined}
              >
                {item.label}
                {activeSection === item.target && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 active:scale-[0.97]"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-muted hover:text-accent hover:bg-white/[0.04] rounded-lg transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div
          className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative flex flex-col h-full justify-between p-6 pt-24">
          <nav className="flex flex-col gap-2 text-center">
            {navItems.map((item, idx) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="py-3 text-xl font-display font-medium text-text-muted hover:text-accent rounded-xl hover:bg-white/[0.03] transition-all"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : "0ms",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(10px)",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full justify-center inline-flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-xl shadow-neon text-center transition-all active:scale-[0.97]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-text-muted">
              Ready to build something extraordinary?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
