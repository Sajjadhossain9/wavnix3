import { useState } from "react";
import {
  Globe,
  GraduationCap,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const caseStudies = [
  {
    id: "mdh",
    client: "Madrasah Darul Huda",
    title: "Institutional Education Website",
    type: "Education Technology",
    icon: GraduationCap,
    year: "2025",
    mockUrl: "madrasahdarulhuda.com",
    mockStatus: "LIVE",
    challenge:
      "The institution needed a modern digital presence to present academic programs, admission information, and communicate with students and parents. The previous system relied on manual communication and paper-based processes.",
    solution:
      "Wavnix designed and built a focused institutional website presenting academic programs, admission information, and the madrasah's digital presence with responsive design and information architecture optimized for their community.",
    features: [
      "Responsive institutional design",
      "Academic program showcase",
      "Admission information system",
      "Mobile-optimized experience",
    ],
    tags: ["Responsive Design", "Information Architecture", "Web Development"],
    link: "https://madrasahdarulhuda.com",
  },
  {
    id: "aim",
    client: "AIM Construction & Design",
    title: "Corporate Web Platform",
    type: "Corporate Website",
    icon: Globe,
    year: "2025",
    mockUrl: "aimconstructiondesignltd.com",
    mockStatus: "LIVE",
    challenge:
      "A construction and architectural design company needed a conversion-led website to showcase their services, generate project enquiries, and establish credibility in a competitive market.",
    solution:
      "Wavnix built a conversion-led company website for construction, architectural design, property discovery and project enquiries. The platform features service showcases, project galleries, and integrated contact systems.",
    features: [
      "Service showcase system",
      "Lead generation forms",
      "Project portfolio display",
      "Conversion-optimized layout",
    ],
    tags: ["Corporate Website", "Lead Generation", "Service Showcase"],
    link: "https://aimconstructiondesignltd.com",
  },
  {
    id: "blood-connect",
    client: "AAUB Blood Connect",
    title: "Community Web Application",
    type: "Community Platform",
    icon: Heart,
    year: "2025",
    mockUrl: "aaub-blood-connect.pages.dev",
    mockStatus: "LIVE",
    challenge:
      "A university community needed a platform to connect people around urgent blood donation needs. The existing process relied on social media posts and word-of-mouth, which was slow and unreliable during emergencies.",
    solution:
      "Wavnix created a community-focused digital platform designed to help people connect around urgent blood donation needs. The application is mobile-ready and optimized for quick access during critical situations.",
    features: [
      "Blood donor matching system",
      "Urgent request notifications",
      "Mobile-ready interface",
      "Community connection tools",
    ],
    tags: ["Web Application", "Community Platform", "Mobile-Ready"],
    link: "https://aaub-blood-connect.pages.dev",
  },
];

export default function SelectedWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            // SELECTED WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            Real Projects,{" "}
            <span className="text-gradient-accent">Real Engineering</span>
          </h2>
          <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed">
            No fake testimonials, no simulated metrics. Explore real technology
            built by Wavnix for partners who value precision, uptime, and growth.
          </p>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col gap-8">
          {caseStudies.map((cs, idx) => {
            const CaseIcon = cs.icon;
            const isEven = idx % 2 === 0;
            const isHovered = hoveredId === cs.id;
            const isDominant = idx === 0;

            return (
              <div
                key={cs.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 bg-bg-elevated border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-500 ${
                  isHovered ? "border-accent/10 shadow-neon-subtle" : ""
                } ${isDominant ? "lg:min-h-[420px]" : ""}`}
                onMouseEnter={() => setHoveredId(cs.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Preview */}
                <div
                  className={`relative p-6 sm:p-8 flex flex-col justify-between ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  {/* Browser Chrome Mockup */}
                  <div className="bg-bg-primary border border-white/[0.06] rounded-xl overflow-hidden">
                    {/* Browser Bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] bg-bg-primary/80">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>
                      <div className="flex-1 mx-3 px-3 py-1 bg-white/[0.03] rounded-md text-[10px] font-mono text-text-muted/60 truncate">
                        {cs.mockUrl}
                      </div>
                      <span className="text-[9px] font-mono text-accent/60 bg-accent/[0.06] px-2 py-0.5 rounded">
                        {cs.mockStatus}
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
                          <CaseIcon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-accent/60 uppercase tracking-wider">
                            {cs.client}
                          </p>
                          <p className="text-sm font-display font-bold text-text-main">
                            {cs.title}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <p className="text-[9px] font-mono text-text-muted/50 uppercase tracking-wider mb-2">
                          System Protocols:
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {cs.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs text-text-muted/70"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent/40" />
                              {feat}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-accent/40 border-t border-white/[0.03] pt-3">
                        HOSTED ARCHITECTURE: SECURE — Wavnix Verified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Details */}
                <div
                  className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <span className="text-[10px] font-mono text-accent/60 uppercase tracking-[0.2em] mb-3">
                    // CASE STUDY {String(idx + 1).padStart(2, "0")}
                  </span>

                  <span className="inline-block w-fit text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-md mb-4">
                    {cs.type}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-text-main mb-6">
                    Powering {cs.client}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-5">
                    <p className="text-[10px] font-mono text-accent/60 uppercase tracking-[0.15em] mb-2">
                      The Challenge:
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <p className="text-[10px] font-mono text-accent/60 uppercase tracking-[0.15em] mb-2">
                      The Wavnix Solution:
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-[10px] font-mono font-medium text-text-muted bg-white/[0.03] border border-white/[0.06] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {cs.link && (
                    <a
                      href={cs.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
                    >
                      View Live Project
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
