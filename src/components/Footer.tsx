import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Globe,
} from "lucide-react";

const services = [
  "Custom Software",
  "AI & Automation",
  "Web Development",
  "UI/UX Design",
  "Cloud Infrastructure",
  "Digital Growth",
];

const company = [
  "About Us",
  "Our Story",
  "Team",
  "Careers",
  "Contact",
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-bg-elevated border-t border-white/[0.04]" role="contentinfo">
      {/* CTA Banner */}
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="relative bg-bg-primary border border-white/[0.05] rounded-2xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/[0.03] rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
                // READY TO BUILD?
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-main mb-3">
                Let's create something extraordinary.
              </h3>
              <p className="text-text-muted text-sm sm:text-base max-w-lg">
                Whether you need custom software, AI integration, or a complete
                digital transformation — we're ready to engineer your vision.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 active:scale-[0.97] flex-shrink-0"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group mb-4"
              aria-label="Wavnix Home"
            >
              <div className="relative w-8 h-8 flex items-center justify-center bg-bg-primary border border-white/[0.08] rounded-lg group-hover:border-accent/30 transition-colors">
                <svg
                  viewBox="0 0 100 100"
                  className="w-4.5 h-4.5 fill-none stroke-[10] stroke-accent"
                >
                  <path
                    d="M10 20 L40 80 L60 40 L75 70 L90 20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-text-main">
                WAV<span className="text-accent">NIX</span>
              </span>
            </button>
            <p className="text-sm text-text-muted leading-relaxed mb-5 max-w-xs">
              We build digital systems that move businesses forward. Custom
              software, AI agents, web platforms, and digital infrastructure.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Sajjadhossain9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-muted hover:text-accent hover:border-accent/20 transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-muted hover:text-accent hover:border-accent/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-muted hover:text-accent hover:border-accent/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://wavnix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-muted hover:text-accent hover:border-accent/20 transition-all duration-200"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-display font-bold text-text-main mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-display font-bold text-text-main mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-bold text-text-main mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@wavnix.com"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                contact@wavnix.com
              </a>
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="w-3.5 h-3.5" />
                Dhaka, Bangladesh
              </div>
              <a
                href="https://wavnix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                wavnix.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted/60">
            &copy; {new Date().getFullYear()} Wavnix. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted/40 font-mono">
              wavnix.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
