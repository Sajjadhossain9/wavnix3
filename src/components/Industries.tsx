import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Heart,
  ShoppingCart,
  Building2,
  Truck,
  Landmark,
  Factory,
  Plane,
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    name: "Education",
    problem: "Fragmented student data, manual grading, and disconnected parent communication.",
    services: ["Campus Management Systems", "Student Portals", "Learning Analytics"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    problem: "Paper-based records, scheduling inefficiencies, and compliance complexity.",
    services: ["Patient Management", "Appointment Systems", "Health Data Platforms"],
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-Commerce",
    problem: "Inventory chaos, poor online presence, and manual order processing.",
    services: ["E-Commerce Platforms", "Inventory Systems", "Payment Integration"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    problem: "Lead management gaps, property listing inefficiencies, and slow client response.",
    services: ["Property Platforms", "CRM Systems", "Lead Management"],
  },
  {
    icon: Truck,
    name: "Logistics",
    problem: "Tracking blind spots, route inefficiencies, and manual dispatch processes.",
    services: ["Fleet Management", "Route Optimization", "Tracking Dashboards"],
  },
  {
    icon: Landmark,
    name: "Finance",
    problem: "Legacy systems, security vulnerabilities, and slow transaction processing.",
    services: ["Financial Dashboards", "Secure Payment Systems", "Compliance Tools"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    problem: "Production visibility gaps, quality control challenges, and supply chain opacity.",
    services: ["Production Monitoring", "Quality Systems", "Supply Chain Tools"],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    problem: "Booking complexity, customer experience gaps, and seasonal demand management.",
    services: ["Booking Platforms", "Customer Portals", "Revenue Management"],
  },
];

export default function Industries() {
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
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

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
            // INDUSTRIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            Solutions Across{" "}
            <span className="text-gradient-accent">Every Sector</span>
          </h2>
          <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed">
            We understand that each industry has unique challenges. Our solutions
            are tailored to address specific sector requirements.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <div
                key={idx}
                className="group p-5 sm:p-6 bg-bg-primary border border-white/[0.04] rounded-xl hover:border-accent/15 hover:bg-bg-card transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${100 + idx * 60}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/[0.06] border border-accent/10 text-accent/70 group-hover:text-accent transition-colors">
                    <IndIcon className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-display font-bold text-text-main group-hover:text-accent transition-colors">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-text-main mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {ind.problem}
                </p>

                <div className="flex flex-col gap-1.5">
                  {ind.services.map((service, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-[11px] text-text-muted/70"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/30 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
