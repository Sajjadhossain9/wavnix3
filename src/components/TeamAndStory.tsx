import { useState, useEffect, useRef } from "react";
import { X, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Arafat Hossain",
    position: "Founder & CEO",
    role: "Leadership, vision, and strategic direction for Wavnix",
    initials: "AH",
    isLeadership: true,
  },
  {
    name: "Nafis Rahman",
    position: "CTO & Tech Lead",
    role: "Technical architecture, system design, and engineering leadership",
    initials: "NR",
    isLeadership: true,
  },
  {
    name: "Tanvir Ahmed",
    position: "Project Manager",
    role: "Client coordination, timeline management, and delivery oversight",
    initials: "TA",
    isLeadership: false,
  },
  {
    name: "Sajjad Hossain",
    position: "Backend Developer",
    role: "Server-side architecture, database design, and API development",
    initials: "SH",
    isLeadership: false,
  },
  {
    name: "Mahin Hasan",
    position: "Frontend Developer",
    role: "User interface development, component architecture, and UX implementation",
    initials: "MH",
    isLeadership: false,
  },
  {
    name: "Fahim Islam",
    position: "Full-Stack & AI Engineer",
    role: "End-to-end development and AI/ML integration",
    initials: "FI",
    isLeadership: false,
  },
  {
    name: "Sakib Rahman",
    position: "QA & Software Test Engineer",
    role: "Quality assurance, testing automation, and bug tracking",
    initials: "SR",
    isLeadership: false,
  },
  {
    name: "Rafi Ahmed",
    position: "UI/UX Designer",
    role: "User research, wireframing, prototyping, and visual design",
    initials: "RA",
    isLeadership: false,
  },
  {
    name: "Shafin Hasan",
    position: "Business Development & Sales",
    role: "Client relationships, partnerships, and business growth",
    initials: "SH",
    isLeadership: false,
  },
  {
    name: "Nabil Hossain",
    position: "Digital Marketing & SEO",
    role: "Search optimization, content strategy, and digital presence",
    initials: "NH",
    isLeadership: false,
  },
];

const storyParagraphs = [
  "Wavnix didn't start in a corporate boardroom or a sleek glass skyscraper. It began in a quiet, dark room under the soft hum of cooling fans, fueled by nothing but cold coffee, curiosity, and an absolute obsession with making systems run faster.",
  "We spent years experimenting with low-level compilers, analyzing Postgres index queries, and designing user interfaces that felt alive. We saw a software landscape saturated with lazy templates, slow WordPress engines, and unverifiable statistics. We knew businesses deserved a technical partner who treats code as a premium digital asset.",
  "Today, Wavnix operates as a focused team of engineers and product strategists. We build high-availability software platforms that support clients from early blueprints to scale, ensuring that every deployment remains secure, fast, and remarkably robust.",
];

export default function TeamAndStory() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Focus trap for modal
  useEffect(() => {
    if (isStoryModalOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsStoryModalOpen(false);
      };
      document.addEventListener("keydown", handleEscape);
      // Focus the modal
      setTimeout(() => modalRef.current?.focus(), 100);
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isStoryModalOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 sm:py-28 relative overflow-hidden bg-bg-elevated border-t border-white/[0.04]"
      >
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
              // THE TEAM
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
              The People Behind{" "}
              <span className="text-gradient-accent">Wavnix</span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`group p-6 bg-bg-primary border rounded-2xl transition-all duration-300 ${
                  member.isLeadership
                    ? "border-accent/15 hover:border-accent/30"
                    : "border-white/[0.04] hover:border-white/[0.08]"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${200 + idx * 80}ms`,
                  transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease",
                }}
              >
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-display font-bold mb-4 ${
                    member.isLeadership
                      ? "bg-accent/10 border border-accent/20 text-accent"
                      : "bg-white/[0.04] border border-white/[0.06] text-text-muted"
                  }`}
                >
                  {member.initials}
                </div>

                <h3 className="text-base font-display font-bold text-text-main mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-accent/70 uppercase tracking-wider mb-3">
                  {member.position}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Story Teaser */}
          <div
            className="max-w-3xl bg-bg-primary border border-white/[0.04] rounded-2xl p-6 sm:p-8 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "500ms",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent/60 mb-4">
              // OUR STORY
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
              {storyParagraphs[0]}
            </p>
            <button
              onClick={() => setIsStoryModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
            >
              Read the full story
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {isStoryModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Wavnix origin story"
        >
          <div
            className="absolute inset-0 bg-bg-primary/90 backdrop-blur-xl"
            onClick={() => setIsStoryModalOpen(false)}
          />
          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-bg-elevated border border-white/[0.06] rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-accent hover:bg-white/[0.04] rounded-lg transition-colors"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
              // THE WAVNIX STORY
            </p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-main mb-6">
              From Curiosity to Code
            </h3>

            <div className="flex flex-col gap-5">
              {storyParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-text-muted text-sm sm:text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
