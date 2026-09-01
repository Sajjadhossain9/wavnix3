import { useState } from "react";
import {
  Code,
  Cpu,
  Globe,
  Palette,
  Server,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: "software",
    num: "01",
    icon: Code,
    tag: "CUSTOM SOFTWARE",
    headline: "Tailored Software Engineering",
    description:
      "We architect and build custom software systems designed around your exact business logic. From internal tools to customer-facing platforms, every line of code is purpose-built for performance, reliability, and growth.",
    deliverables: [
      "Full-stack web applications",
      "Custom ERP & CRM systems",
      "API design and integration",
      "Database architecture",
      "Automated testing suites",
      "CI/CD pipeline setup",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
    visualType: "code",
  },
  {
    id: "ai",
    num: "02",
    icon: Cpu,
    tag: "AI & AUTOMATION",
    headline: "Intelligent Systems & Automation",
    description:
      "We integrate artificial intelligence and automation into your workflows to eliminate repetitive tasks, surface insights from data, and create intelligent user experiences that adapt and improve over time.",
    deliverables: [
      "AI agent development",
      "Natural language processing",
      "Predictive analytics engines",
      "Workflow automation systems",
      "Document processing pipelines",
      "Intelligent chatbots",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "FastAPI", "Redis"],
    visualType: "neural",
  },
  {
    id: "web",
    num: "03",
    icon: Globe,
    tag: "WEB DEVELOPMENT",
    headline: "High-Performance Web Platforms",
    description:
      "We build fast, accessible, and conversion-optimized web experiences. Every site we ship scores high on Core Web Vitals and is engineered for search visibility, user engagement, and business results.",
    deliverables: [
      "Corporate websites & portals",
      "E-commerce platforms",
      "Progressive web applications",
      "Headless CMS integration",
      "SEO-optimized architecture",
      "Performance optimization",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Sanity", "Stripe"],
    visualType: "web",
  },
  {
    id: "design",
    num: "04",
    icon: Palette,
    tag: "UI/UX & PRODUCT DESIGN",
    headline: "Human-Centered Product Design",
    description:
      "We design interfaces that feel intuitive from the first interaction. Our design process combines user research, information architecture, and visual craft to create products people genuinely enjoy using.",
    deliverables: [
      "User research & personas",
      "Wireframes & prototypes",
      "Design system creation",
      "Interactive Figma deliverables",
      "Usability testing",
      "Brand identity alignment",
    ],
    technologies: ["Figma", "Framer", "Storybook", "Design Tokens", "Accessibility", "Motion"],
    visualType: "education",
  },
  {
    id: "cloud",
    num: "05",
    icon: Server,
    tag: "CLOUD & INFRASTRUCTURE",
    headline: "Scalable Cloud Infrastructure",
    description:
      "We design, deploy, and manage cloud infrastructure that scales with your business. From containerized microservices to serverless architectures, we ensure your systems are resilient and performant.",
    deliverables: [
      "Cloud architecture design",
      "Container orchestration",
      "Serverless deployment",
      "Database management",
      "Security hardening",
      "Monitoring & alerting",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "Redis"],
    visualType: "cloud",
  },
  {
    id: "growth",
    num: "06",
    icon: TrendingUp,
    tag: "DIGITAL GROWTH",
    headline: "Strategic Digital Growth",
    description:
      "We help businesses grow their digital presence through data-driven strategies. From search engine optimization to conversion rate optimization, we focus on measurable outcomes that drive revenue.",
    deliverables: [
      "SEO strategy & execution",
      "Content marketing systems",
      "Analytics & tracking setup",
      "Conversion optimization",
      "Performance reporting",
      "Growth experimentation",
    ],
    technologies: ["Google Analytics", "Search Console", "Ahrefs", "Hotjar", "A/B Testing", "CRM"],
    visualType: "growth",
  },
];

const visualContent: Record<string, { lines: string[] }> = {
  code: {
    lines: [
      "// BUILD STATUS: SUCCESS",
      "npm run build:prod",
      "▶ Compiling TypeScript modules...",
      "▶ Database migration completed",
      "✓ Server initialized on port 3000",
    ],
  },
  neural: {
    lines: [
      "// AI INFERENCE RUNNING",
      "context_length: 128k tokens",
      "▶ Analyzing unstructured data...",
      "✓ Intent classified [99.4% confidence]",
      "✓ Response generated in 120ms",
    ],
  },
  web: {
    lines: [
      "// CORE WEB VITALS",
      "▶ LCP: 0.8s (Excellent)",
      "▶ CLS: 0.00 // FID: 12ms",
      "✓ Performance score: 100/100",
      "✓ Accessibility: AAA compliant",
    ],
  },
  education: {
    lines: [
      "// DESIGN SYSTEM ACTIVE",
      "▶ 48 components documented",
      "▶ Color tokens synchronized",
      "✓ Accessibility audit passed",
      "✓ Prototype ready for review",
    ],
  },
  cloud: {
    lines: [
      "// CLOUD INFRASTRUCTURE",
      "▶ Load balancing active (3 pods)",
      "▶ Auto-scaling threshold: 75% CPU",
      "✓ All systems operational",
      "✓ Uptime: 99.99%",
    ],
  },
  growth: {
    lines: [
      "// ANALYTICS TELEMETRY",
      "▶ Organic traffic: trending up",
      "▶ Bounce rate: 21% (improved)",
      "✓ Search authority boosted",
      "✓ Conversion rate: +18%",
    ],
  },
};

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState("software");
  const [expandedMobile, setExpandedMobile] = useState<string | null>("software");
  const selectedService = services.find((s) => s.id === activeTab) || services[0];
  const visual = visualContent[selectedService.visualType];

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            // CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            Comprehensive Engineering for{" "}
            <span className="text-gradient-accent">Digital Growth</span>
          </h2>
          <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed">
            We operate across the complete technology stack, transforming business
            requirements into high-performance, maintainable software systems.
          </p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {/* Left: Service Navigation */}
          <div className="col-span-4 flex flex-col gap-2">
            {services.map((svc) => {
              const TabIcon = svc.icon;
              const isActive = svc.id === activeTab;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-bg-elevated border border-accent/20 shadow-neon-subtle"
                      : "bg-transparent border border-transparent hover:bg-white/[0.02] hover:border-white/[0.04]"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <span
                    className={`text-2xl font-display font-black transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-white/[0.08]"
                    }`}
                  >
                    {svc.num}
                  </span>
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "bg-accent/10 border-accent/20 text-accent"
                          : "bg-white/[0.02] border-white/[0.06] text-text-muted"
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-sm font-display font-semibold transition-colors duration-300 ${
                        isActive ? "text-text-main" : "text-text-muted"
                      }`}
                    >
                      {svc.headline.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive
                        ? "text-accent translate-x-0 opacity-100"
                        : "text-transparent -translate-x-2 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Service Detail */}
          <div className="col-span-8">
            <div className="relative bg-bg-elevated border border-white/[0.05] rounded-2xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent bg-accent/[0.08] border border-accent/15 px-3 py-1 rounded-md mb-5">
                  {selectedService.tag}
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
                  {selectedService.headline}
                </h3>

                <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                  {selectedService.description}
                </p>

                {/* Deliverables */}
                <div className="mb-8">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-main/50 mb-3">
                    Core Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.deliverables.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 text-sm text-text-muted"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-[11px] font-mono font-medium text-text-muted bg-white/[0.03] border border-white/[0.06] rounded-md hover:border-accent/20 hover:text-accent transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visual Terminal */}
                <div className="bg-bg-primary border border-white/[0.04] rounded-xl p-5 font-mono text-xs mb-8">
                  {visual.lines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`py-0.5 ${
                        idx === 0
                          ? "text-accent/60"
                          : line.startsWith("✓")
                          ? "text-accent"
                          : "text-text-muted/70"
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      window.scrollTo({
                        top: elementRect - bodyRect - offset,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 active:scale-[0.97]"
                >
                  Discuss This Service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden flex flex-col gap-3">
          {services.map((svc) => {
            const TabIcon = svc.icon;
            const isExpanded = expandedMobile === svc.id;
            const visual = visualContent[svc.visualType];

            return (
              <div
                key={svc.id}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "bg-bg-elevated border-accent/15"
                    : "bg-transparent border-white/[0.05]"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedMobile(isExpanded ? null : svc.id)
                  }
                  className="w-full flex items-center gap-3 p-4 text-left"
                  aria-expanded={isExpanded}
                >
                  <span className="text-xl font-display font-black text-accent/30">
                    {svc.num}
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] text-accent/70">
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span className="flex-1 text-sm font-display font-semibold text-text-main">
                    {svc.headline}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5">
                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {svc.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-main/50 mb-2">
                        Core Deliverables:
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {svc.deliverables.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-xs text-text-muted"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {svc.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] font-mono text-text-muted bg-white/[0.03] border border-white/[0.06] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="bg-bg-primary border border-white/[0.04] rounded-lg p-4 font-mono text-[11px] mb-4">
                      {visual.lines.map((line, idx) => (
                        <div
                          key={idx}
                          className={`py-0.5 ${
                            idx === 0
                              ? "text-accent/60"
                              : line.startsWith("✓")
                              ? "text-accent"
                              : "text-text-muted/70"
                          }`}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
