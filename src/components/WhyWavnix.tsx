import { useEffect, useRef, useState } from "react";
import { Crosshair, Zap, Network, Shield } from "lucide-react";

const advantages = [
  {
    num: "01",
    icon: Crosshair,
    title: "Human-Centered Product Design",
    desc: "Every interface we build starts with understanding real user needs. We research, prototype, and test until the experience feels intuitive — not just functional.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Business-Driven Engineering",
    desc: "We don't write code for its own sake. Every technical decision maps to a business outcome — faster workflows, lower costs, higher conversion, or better retention.",
  },
  {
    num: "03",
    icon: Network,
    title: "Connected Digital Systems",
    desc: "Your website, app, database, and automation tools should work as one system. We architect solutions where every component communicates seamlessly.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Long-Term Technical Support",
    desc: "We don't disappear after launch. Wavnix provides ongoing monitoring, maintenance, security updates, and feature development as your technology partner.",
  },
];

export default function WhyWavnix() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            // WHY WAVNIX
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            The Difference Is in{" "}
            <span className="text-gradient-accent">the Details</span>
          </h2>
          <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed">
            We combine deep technical expertise with genuine care for business
            outcomes. Here's what sets Wavnix apart.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {advantages.map((adv, idx) => {
            const AdvIcon = adv.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 bg-bg-elevated border border-white/[0.04] rounded-2xl hover:border-accent/15 transition-all duration-400"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(25px)",
                  transitionDelay: `${150 + idx * 100}ms`,
                }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-display font-black text-white/[0.03] group-hover:text-accent/[0.06] transition-colors duration-400 select-none">
                  {adv.num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent mb-5 group-hover:scale-105 group-hover:shadow-neon-subtle transition-all duration-300">
                    <AdvIcon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-main mb-3 group-hover:text-accent transition-colors duration-300">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
