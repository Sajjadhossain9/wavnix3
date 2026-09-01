import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Code,
  MessageSquare,
  Headphones,
  Lock,
  Eye,
} from "lucide-react";

const trustPoints = [
  {
    icon: Code,
    title: "Clean, Owned Code",
    desc: "Every line of code we write is yours. Full source ownership, documented architecture, and no vendor lock-in.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Regular progress updates, direct access to your engineering team, and no hidden surprises. You always know where your project stands.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    desc: "We don't disappear after deployment. Ongoing monitoring, bug fixes, security updates, and feature development as your technology partner.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    desc: "Every system we build follows security best practices from day one. Encrypted data, secure authentication, and regular vulnerability assessments.",
  },
  {
    icon: Eye,
    title: "Full Visibility",
    desc: "Access to staging environments, test results, deployment logs, and project management tools. No black boxes.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    desc: "Your business data and intellectual property are treated with the highest confidentiality. We follow strict data handling protocols.",
  },
];

export default function TrustSection() {
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
      className="py-20 sm:py-28 relative overflow-hidden bg-bg-elevated border-t border-white/[0.04]"
    >
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

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
            // HOW WE WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            Built on{" "}
            <span className="text-gradient-accent">Trust & Transparency</span>
          </h2>
          <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed">
            We believe great partnerships are built on clear communication,
            shared ownership, and mutual respect. Here's what you can expect
            working with Wavnix.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point, idx) => {
            const PointIcon = point.icon;
            return (
              <div
                key={idx}
                className="group p-6 bg-bg-primary border border-white/[0.04] rounded-2xl hover:border-accent/10 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${150 + idx * 80}ms`,
                  transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease",
                }}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent mb-4 group-hover:scale-105 transition-transform duration-300">
                  <PointIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-text-main mb-2 group-hover:text-accent transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
