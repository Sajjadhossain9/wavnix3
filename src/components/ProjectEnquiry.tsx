import { useState, useEffect, useRef } from "react";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Check,
  Loader2,
} from "lucide-react";

const serviceOptions = [
  "Custom Software Development",
  "AI & Automation",
  "Web Development",
  "UI/UX & Product Design",
  "Cloud & Infrastructure",
  "Digital Growth & SEO",
  "Education Platform",
  "Domain & Hosting",
  "Other",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

export default function ProjectEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    brief: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.brief.trim()) newErrors.brief = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generateWhatsApp = () => {
    const message = `Hi Wavnix! I have a project enquiry:

Name: ${formData.name}
Business: ${formData.business || "N/A"}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Service: ${formData.service || "Not specified"}
Budget: ${formData.budget || "Not specified"}

Project Brief:
${formData.brief}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801XXXXXXXXX?text=${encoded}`, "_blank");
  };

  const generateEmail = () => {
    const subject = encodeURIComponent(`Project Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nBusiness: ${formData.business || "N/A"}\nService: ${formData.service || "Not specified"}\nBudget: ${formData.budget || "Not specified"}\n\nProject Brief:\n${formData.brief}`
    );
    window.open(`mailto:contact@wavnix.com?subject=${subject}&body=${body}`);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
              Enquiry Received!
            </h3>
            <p className="text-text-muted mb-8">
              Thank you, {formData.name}. We've received your project enquiry and
              will get back to you within 24 hours. For faster response, reach us
              via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generateWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-xl shadow-neon transition-all active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                Follow up on WhatsApp
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    business: "",
                    email: "",
                    phone: "",
                    service: "",
                    budget: "",
                    brief: "",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-text-main bg-white/[0.04] border border-white/[0.08] rounded-xl transition-all hover:bg-white/[0.08]"
              >
                Send Another Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
              // START THE CONVERSATION
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight mb-6">
              Tell us what you want to{" "}
              <span className="text-gradient-accent">build.</span>
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-10">
              Whether you need an intelligent automation system, a custom web
              platform, or modern digital infrastructure — we engineer it to
              perfection. Let's start with a conversation.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-text-main">
                    Email Us
                  </p>
                  <a
                    href="mailto:contact@wavnix.com"
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    contact@wavnix.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-text-main">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/8801XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    Message us directly
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-text-main">
                    Primary Hub
                  </p>
                  <p className="text-sm text-text-muted">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "200ms",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-bg-elevated border border-white/[0.05] rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                    >
                      Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={`w-full px-4 py-3.5 bg-bg-primary border rounded-xl text-sm text-text-main placeholder:text-text-muted/40 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/[0.08] focus:border-accent"
                      }`}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-business"
                      className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                    >
                      Business / Organization
                    </label>
                    <input
                      id="enquiry-business"
                      type="text"
                      value={formData.business}
                      onChange={(e) => updateField("business", e.target.value)}
                      className="w-full px-4 py-3.5 bg-bg-primary border border-white/[0.08] rounded-xl text-sm text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                    >
                      Email *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={`w-full px-4 py-3.5 bg-bg-primary border rounded-xl text-sm text-text-main placeholder:text-text-muted/40 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/[0.08] focus:border-accent"
                      }`}
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                    >
                      Phone
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3.5 bg-bg-primary border border-white/[0.08] rounded-xl text-sm text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-service"
                      className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                    >
                      Service
                    </label>
                    <select
                      id="enquiry-service"
                      value={formData.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full px-4 py-3.5 bg-bg-primary border border-white/[0.08] rounded-xl text-sm text-text-main focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-budget"
                      className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="enquiry-budget"
                      value={formData.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className="w-full px-4 py-3.5 bg-bg-primary border border-white/[0.08] rounded-xl text-sm text-text-main focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-brief"
                    className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1.5 block"
                  >
                    Project Brief *
                  </label>
                  <textarea
                    id="enquiry-brief"
                    required
                    rows={5}
                    value={formData.brief}
                    onChange={(e) => updateField("brief", e.target.value)}
                    className={`w-full px-4 py-3.5 bg-bg-primary border rounded-xl text-sm text-text-main placeholder:text-text-muted/40 focus:outline-none transition-colors resize-none ${
                      errors.brief
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.08] focus:border-accent"
                    }`}
                    placeholder="Describe your project goals, key features, timeline, and any specific requirements..."
                    aria-invalid={!!errors.brief}
                    aria-describedby={errors.brief ? "brief-error" : undefined}
                  />
                  {errors.brief && (
                    <p id="brief-error" className="text-xs text-red-400 mt-1" role="alert">
                      {errors.brief}
                    </p>
                  )}
                </div>

                <p className="text-[11px] text-text-muted/50">
                  Your information is secure and will only be used to respond to
                  your enquiry. We never share client data with third parties.
                </p>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim disabled:opacity-50 rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 active:scale-[0.97]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Enquiry
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={generateWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-accent bg-accent/[0.06] border border-accent/15 hover:bg-accent/10 rounded-xl transition-all duration-300 active:scale-[0.97]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={generateEmail}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-text-main bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] rounded-xl transition-all duration-300 active:scale-[0.97]"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
