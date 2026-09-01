import { useEffect, useRef, useState } from "react";
import {
  Search,
  PenTool,
  Code,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    num: "01",
    name: "Discover",
    subtitle: "Research & Requirements",
    desc: "We dive deep into your business workflows, existing systems, and technical constraints. Through structured interviews and audits, we map every requirement before writing a single line of code.",
    outputs: [
      "Technical Requirements Document",
      "System Architecture Blueprint",
      "Project Timeline & Milestones",
    ],
    icon: Search,
  },
  {
    num: "02",
    name: "Design",
    subtitle: "Architecture & Prototypes",
    desc: "We create high-fidelity wireframes, database schemas, API specifications, and interactive prototypes. Every design decision is validated against user needs and technical feasibility.",
    outputs: [
      "Interactive Figma Prototypes",
      "Database Schema Design",
      "API Specification Documents",
    ],
    icon: PenTool,
  },
  {
    num: "03",
    name: "Build",
    subtitle: "Development & Testing",
    desc: "Our engineers craft production-grade code with comprehensive testing. We use modern frameworks, automated CI/CD pipelines, and rigorous code reviews to ensure quality at every commit.",
    outputs: [
      "Staging Environment Access",
      "Automated Test Suite",
      "CI/CD Pipeline Configuration",
    ],
    icon: Code,
  },
  {
    num: "04",
    name: "Launch & Grow",
    subtitle: "Deployment & Optimization",
    desc: "We coordinate zero-downtime deployments, implement monitoring and alerting, and continuously optimize performance. Post-launch, we provide ongoing support and feature development.",
    outputs: [
      "Production Deployment",
      "24/7 Monitoring Setup",
      "Performance Reports",
    ],
    icon: Rocket,
  },
];

export default function WorkingProcess() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div
          className="mb-14 sm:mb-20 max-w-2xl transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            // DELIVERY PIPELINE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            How Wavnix{" "}
            <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed">
            Engineering premium software demands a rigorous, repeatable protocol.
            Here is how we guarantee zero-risk delivery from exploration to launch.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

          <div className="flex flex-col gap-8 lg:gap-0">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    idx < steps.length - 1 ? "lg:pb-16" : ""
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${200 + idx * 150}ms`,
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                  }}
                >
                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-bg-primary border-2 border-accent/30 flex items-center justify-center">
                      <span className="text-xs font-mono font-bold text-accent">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`${
                      isEven ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"
                    }`}
                  >
                    <div className="p-6 sm:p-7 bg-bg-elevated border border-white/[0.04] rounded-2xl hover:border-accent/10 transition-all duration-300">
                      {/* Mobile number */}
                      <div className="flex items-center gap-3 mb-4 lg:hidden">
                        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <span className="text-[10px] font-mono font-bold text-accent">
                            {step.num}
                          </span>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/[0.06] border border-accent/10 text-accent">
                          <StepIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Desktop icon */}
                      <div className="hidden lg:flex items-center gap-2 mb-4 justify-end">
                        {isEven && (
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/[0.06] border border-accent/10 text-accent">
                            <StepIcon className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-bold text-text-main mb-1">
                        {step.name}
                      </h3>
                      <p className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed mb-5">
                        {step.desc}
                      </p>

                      {/* Outputs */}
                      <div className="border-t border-white/[0.04] pt-4">
                        <p className="text-[9px] font-mono uppercase tracking-[0.15em] text-text-main/40 mb-2">
                          Tangible Outputs:
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {step.outputs.map((output, oIdx) => (
                            <div
                              key={oIdx}
                              className={`flex items-center gap-2 text-xs text-text-muted/70 ${
                                isEven ? "lg:justify-end" : ""
                              }`}
                            >
                              {isEven && (
                                <span>{output}</span>
                              )}
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent/40 flex-shrink-0" />
                              {!isEven && <span>{output}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
