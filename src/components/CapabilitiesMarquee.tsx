import {
  Code,
  Cpu,
  Globe,
  Smartphone,
  GraduationCap,
  Database,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  { name: "Custom Software", icon: Code },
  { name: "Web Applications", icon: Globe },
  { name: "AI Agents", icon: Cpu },
  { name: "Business Automation", icon: Workflow },
  { name: "Mobile Experiences", icon: Smartphone },
  { name: "Education Technology", icon: GraduationCap },
  { name: "Domain & Hosting", icon: Database },
  { name: "Digital Growth", icon: Sparkles },
];

export default function CapabilitiesMarquee() {
  const items = [...capabilities, ...capabilities, ...capabilities, ...capabilities];

  return (
    <section
      className="relative py-6 bg-bg-elevated border-y border-white/[0.04] overflow-hidden z-20"
      aria-label="Capabilities"
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-bg-elevated to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-bg-elevated to-transparent z-10 pointer-events-none" />

      <div className="flex select-none overflow-hidden">
        <div className="flex gap-10 sm:gap-14 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-1">
          {items.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={`${cap.name}-${idx}`}
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-200 cursor-default"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-md bg-bg-primary border border-white/[0.06] text-accent/70">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13px] font-display font-medium tracking-wide uppercase">
                  {cap.name}
                </span>
                <span className="text-white/[0.06] font-mono text-[10px] select-none">
                  //
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
