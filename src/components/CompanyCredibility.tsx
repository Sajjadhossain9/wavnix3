import { useEffect, useRef, useState } from "react";
import { Code, Cpu, Palette, Headphones } from "lucide-react";

const capabilities = [
  {
    icon: Code,
    label: "Software & Web Engineering",
    desc: "Full-stack applications built with modern frameworks, optimized for performance and maintainability.",
  },
  {
    icon: Cpu,
    label: "AI & Automation",
    desc: "Intelligent systems that learn, adapt, and automate complex business processes.",
  },
  {
    icon: Palette,
    label: "Product Design",
    desc: "Human-centered interfaces crafted through research, iteration, and usability testing.",
  },
  {
    icon: Headphones,
    label: "Deployment & Support",
    desc: "Zero-downtime launches, 24/7 monitoring, and ongoing technical partnership.",
  },
];

export default function CompanyCredibility() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden bg-bg-light"
    >
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Statement */}
        <div
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-dim mb-4">
            // OUR IDENTITY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-dark tracking-tight mb-6">
            Built from curiosity.{" "}
            <span className="text-accent-dim">
              Growing through every problem we solve.
            </span>
          </h2>
          <p className="text-text-dark-muted text-base sm:text-lg leading-relaxed">
            Wavnix didn't start in a corporate boardroom. It began in a quiet room
            under the soft hum of cooling fans, fueled by curiosity and an obsession
            with making systems run faster. We saw a software landscape saturated
            with lazy templates and unverifiable statistics. We knew businesses
            deserved a technical partner who treats code as a premium digital asset.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, idx) => {
            const CapIcon = cap.icon;
            return (
              <div
                key={idx}
                className="group p-6 bg-white border border-text-dark/[0.05] rounded-2xl hover:border-accent/20 hover:shadow-lg transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${200 + idx * 100}ms`,
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent-dim mb-4 group-hover:scale-105 transition-transform duration-300">
                  <CapIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-text-dark mb-2">
                  {cap.label}
                </h3>
                <p className="text-sm text-text-dark-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
