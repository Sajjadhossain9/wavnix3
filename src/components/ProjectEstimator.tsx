import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Code,
  Cpu,
  Globe,
  Smartphone,
  GraduationCap,
  Server,
  Send,
  MessageCircle,
} from "lucide-react";

const segments = [
  { id: "web", name: "Web Application", icon: Globe, basePrice: 2000 },
  { id: "mobile", name: "Mobile App", icon: Smartphone, basePrice: 3500 },
  { id: "ai", name: "AI / Automation", icon: Cpu, basePrice: 4000 },
  { id: "software", name: "Custom Software", icon: Code, basePrice: 5000 },
  { id: "education", name: "Education Platform", icon: GraduationCap, basePrice: 4500 },
  { id: "infrastructure", name: "Cloud / Infrastructure", icon: Server, basePrice: 3000 },
];

const scales = [
  { id: "starter", name: "Starter", multiplier: 1, desc: "MVP, basic features, single platform" },
  { id: "growth", name: "Growth", multiplier: 1.8, desc: "Full feature set, integrations, testing" },
  { id: "enterprise", name: "Enterprise", multiplier: 3, desc: "Complex systems, high availability, compliance" },
];

const addons = [
  { id: "auth", name: "Authentication System", price: 500 },
  { id: "payments", name: "Payment Integration", price: 800 },
  { id: "analytics", name: "Analytics Dashboard", price: 600 },
  { id: "notifications", name: "Push Notifications", price: 400 },
  { id: "api", name: "Third-party API Integration", price: 700 },
  { id: "admin", name: "Admin Panel", price: 900 },
  { id: "seo", name: "SEO Optimization", price: 350 },
  { id: "testing", name: "Automated Testing Suite", price: 650 },
];

export default function ProjectEstimator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [selectedScale, setSelectedScale] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    brief: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const segmentData = segments.find((s) => s.id === selectedSegment);
  const scaleData = scales.find((s) => s.id === selectedScale);
  const basePrice = segmentData?.basePrice || 0;
  const multiplier = scaleData?.multiplier || 1;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = addons.find((a) => a.id === id);
    return sum + (addon?.price || 0);
  }, 0);
  const estimatedTotal = Math.round(basePrice * multiplier + addonsTotal);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return !!selectedSegment;
    if (currentStep === 2) return !!selectedScale;
    if (currentStep === 3) return true;
    if (currentStep === 4)
      return contactInfo.name && contactInfo.email && contactInfo.brief;
    return false;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const generateWhatsApp = () => {
    const segmentName = segmentData?.name || "Not selected";
    const scaleName = scaleData?.name || "Not selected";
    const addonNames = selectedAddons
      .map((id) => addons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const message = `Hi Wavnix! I'd like to estimate a project:

Segment: ${segmentName}
Scale: ${scaleName}
Add-ons: ${addonNames || "None"}
Estimated Budget: ~$${estimatedTotal.toLocaleString()}

Name: ${contactInfo.name}
Business: ${contactInfo.business || "N/A"}
Email: ${contactInfo.email}
Phone: ${contactInfo.phone || "N/A"}

Brief: ${contactInfo.brief}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801XXXXXXXXX?text=${encoded}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <section id="estimate" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
              Estimate Received!
            </h3>
            <p className="text-text-muted mb-8">
              Thank you, {contactInfo.name}. We've received your project estimate
              request. Our team will review your requirements and get back to you
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generateWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-xl shadow-neon transition-all active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setSelectedSegment(null);
                  setSelectedScale(null);
                  setSelectedAddons([]);
                  setContactInfo({ name: "", business: "", email: "", phone: "", brief: "" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-text-main bg-white/[0.04] border border-white/[0.08] rounded-xl transition-all hover:bg-white/[0.08]"
              >
                Start New Estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="estimate"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden bg-bg-light"
    >
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div
          className="mb-14 sm:mb-20 max-w-2xl transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-dim mb-4">
            // PROJECT ESTIMATOR
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-dark tracking-tight">
            Estimate Your{" "}
            <span className="text-accent-dim">Project</span>
          </h2>
          <p className="mt-5 text-text-dark-muted text-base sm:text-lg leading-relaxed">
            Get a rough cost estimate for your project in four simple steps.
            Every project is allocated dedicated senior architects.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex-1 flex items-center gap-2">
                <div
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    step <= currentStep
                      ? "bg-accent"
                      : "bg-text-dark/[0.06]"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["Segment", "Scale", "Add-ons", "Contact"].map((label, idx) => (
              <span
                key={label}
                className={`text-[10px] font-mono uppercase tracking-wider ${
                  idx + 1 <= currentStep ? "text-accent-dim" : "text-text-dark-muted/40"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-3xl mx-auto bg-white border border-text-dark/[0.06] rounded-2xl p-6 sm:p-8 shadow-lg">
          {/* Step 1: Segment */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-display font-bold text-text-dark mb-2">
                Select Your Project Type
              </h3>
              <p className="text-sm text-text-dark-muted mb-6">
                Choose the category that best describes your project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {segments.map((seg) => {
                  const SegIcon = seg.icon;
                  const isSelected = selectedSegment === seg.id;
                  return (
                    <button
                      key={seg.id}
                      onClick={() => setSelectedSegment(seg.id)}
                      className={`flex items-center gap-3 p-4 border rounded-xl text-left transition-all duration-200 ${
                        isSelected
                          ? "bg-accent/[0.04] border-accent/25"
                          : "bg-bg-light border-text-dark/[0.06] hover:border-text-dark/[0.12]"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? "bg-accent/10 text-accent-dim"
                            : "bg-text-dark/[0.03] text-text-dark-muted"
                        }`}
                      >
                        <SegIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-display font-bold text-text-dark">
                          {seg.name}
                        </span>
                        <span className="block text-[10px] font-mono text-text-dark-muted mt-0.5">
                          From ${seg.basePrice.toLocaleString()}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Scale */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-display font-bold text-text-dark mb-2">
                Define the Scope & Scale
              </h3>
              <p className="text-sm text-text-dark-muted mb-6">
                Scaling modifies depth of deployment, testing, compliance, and
                redundancy.
              </p>
              <div className="flex flex-col gap-3">
                {scales.map((sc) => {
                  const isSelected = selectedScale === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setSelectedScale(sc.id)}
                      className={`flex items-center justify-between p-5 border rounded-xl text-left transition-all duration-200 ${
                        isSelected
                          ? "bg-accent/[0.04] border-accent/25"
                          : "bg-bg-light border-text-dark/[0.06] hover:border-text-dark/[0.12]"
                      }`}
                    >
                      <div>
                        <span className="text-base font-display font-bold text-text-dark">
                          {sc.name}
                        </span>
                        <span className="block text-xs text-text-dark-muted mt-1">
                          {sc.desc}
                        </span>
                      </div>
                      <span className="text-sm font-mono font-bold text-accent-dim">
                        {sc.multiplier}x
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Add-ons */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-display font-bold text-text-dark mb-2">
                Optional Specialized Modules
              </h3>
              <p className="text-sm text-text-dark-muted mb-6">
                Upgrade your base platform with industry-standard features.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addons.map((add) => {
                  const isSelected = selectedAddons.includes(add.id);
                  return (
                    <button
                      key={add.id}
                      onClick={() => toggleAddon(add.id)}
                      className={`flex items-center justify-between p-4 border rounded-xl text-left transition-all duration-200 ${
                        isSelected
                          ? "bg-accent/[0.04] border-accent/25"
                          : "bg-bg-light border-text-dark/[0.06] hover:border-text-dark/[0.12]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? "bg-accent border-accent"
                              : "border-text-dark/20"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-bg-primary" />}
                        </div>
                        <span className="text-sm font-display font-medium text-text-dark">
                          {add.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-accent-dim font-bold">
                        +${add.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-xl font-display font-bold text-text-dark mb-2">
                Your Contact Information
              </h3>
              <p className="text-sm text-text-dark-muted mb-6">
                Tell us about yourself so we can prepare a detailed proposal.
              </p>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-text-dark-muted uppercase tracking-wider mb-1.5 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.name}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bg-light border border-text-dark/[0.08] rounded-xl text-sm text-text-dark placeholder:text-text-dark-muted/40 focus:border-accent-dim focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-text-dark-muted uppercase tracking-wider mb-1.5 block">
                      Business / Organization
                    </label>
                    <input
                      type="text"
                      value={contactInfo.business}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, business: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bg-light border border-text-dark/[0.08] rounded-xl text-sm text-text-dark placeholder:text-text-dark-muted/40 focus:border-accent-dim focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-text-dark-muted uppercase tracking-wider mb-1.5 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bg-light border border-text-dark/[0.08] rounded-xl text-sm text-text-dark placeholder:text-text-dark-muted/40 focus:border-accent-dim focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-text-dark-muted uppercase tracking-wider mb-1.5 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bg-light border border-text-dark/[0.08] rounded-xl text-sm text-text-dark placeholder:text-text-dark-muted/40 focus:border-accent-dim focus:outline-none transition-colors"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-text-dark-muted uppercase tracking-wider mb-1.5 block">
                    Project Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactInfo.brief}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, brief: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-bg-light border border-text-dark/[0.08] rounded-xl text-sm text-text-dark placeholder:text-text-dark-muted/40 focus:border-accent-dim focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project goals, key features, and timeline..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-text-dark/[0.06]">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-dark-muted hover:text-text-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {/* Price Display */}
            <div className="text-center">
              <p className="text-[10px] font-mono text-text-dark-muted uppercase tracking-wider">
                Estimated Budget
              </p>
              <p className="text-2xl font-display font-bold text-accent-dim">
                ${estimatedTotal.toLocaleString()}
              </p>
            </div>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-bg-primary bg-accent hover:bg-accent-dim disabled:opacity-40 rounded-lg shadow-neon transition-all active:scale-[0.97]"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-bg-primary bg-accent hover:bg-accent-dim disabled:opacity-40 rounded-lg shadow-neon transition-all active:scale-[0.97]"
              >
                <Send className="w-4 h-4" />
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
