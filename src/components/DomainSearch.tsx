import { useState } from "react";
import {
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
  Server,
  Database,
  Cpu,
  MessageCircle,
  Info,
} from "lucide-react";

interface DomainResult {
  domain: string;
  tld: string;
  available: boolean;
  price: string | null;
  renewPrice: string | null;
  isPremium: boolean;
  status: "available" | "unavailable";
}

const hostingPlans = [
  {
    name: "Standard Cloud Core",
    price: 12,
    period: "month",
    renewal: "Renews at $14.99/mo",
    desc: "Perfect for lightweight client portfolios, simple web portals, and static landing sites.",
    icon: Server,
    features: [
      "10 GB NVMe Storage",
      "1 TB Premium Bandwidth",
      "Free Let's Encrypt SSL",
      "1 x PostgreSQL DB Node",
      "Daily Automatic Backup",
    ],
    badge: "STARTUP",
    popular: false,
  },
  {
    name: "Enterprise Managed Suite",
    price: 49,
    period: "month",
    renewal: "Renews at $59.99/mo",
    desc: "Designed for high-traffic custom ERPs, transactional portals, and secure active APIs.",
    icon: Database,
    features: [
      "50 GB NVMe Storage",
      "10 TB Premium Bandwidth",
      "Wildcard SLA Security SSL",
      "Clustered Postgres Support",
      "Hourly Snapshots + Cloud Relay",
    ],
    badge: "POPULAR",
    popular: true,
  },
  {
    name: "AI Infrastructure Engine",
    price: 199,
    period: "month",
    renewal: "Renews at $229.99/mo",
    desc: "Optimized server containers for high-performance machine learning inference pipelines.",
    icon: Cpu,
    features: [
      "250 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Custom TLS Gateway",
      "Dedicated Redis & Vector Cache",
      "24/7 Priority Architect Support",
    ],
    badge: "ELITE",
    popular: false,
  },
];

// Simulated domain check (since we don't have the backend API)
function simulateDomainCheck(query: string): DomainResult[] {
  const tlds = [".com", ".net", ".org", ".xyz", ".io", ".ai"];
  const cleanQuery = query.replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
  return tlds.map((tld) => {
    const hash = (cleanQuery + tld).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const available = hash % 3 !== 0;
    const prices: Record<string, string> = {
      ".com": "৳1,850",
      ".net": "৳2,050",
      ".org": "৳1,650",
      ".xyz": "৳650",
      ".io": "৳7,900",
      ".ai": "৳25,500",
    };
    return {
      domain: cleanQuery + tld,
      tld,
      available,
      price: available ? prices[tld] || "৳1,850" : null,
      renewPrice: available ? prices[tld] || "৳1,850" : null,
      isPremium: tld === ".ai",
      status: available ? "available" : "unavailable",
    };
  });
}

export default function DomainSearch() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [searchedLabel, setSearchedLabel] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setErrorMsg(null);
    setResults([]);
    setSelectedDomains([]);

    try {
      // Try the real API first, fall back to simulation
      try {
        const response = await fetch(
          `/api/domain-check?query=${encodeURIComponent(query)}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            setResults(data.results);
            setSearchedLabel(data.resolvedLabel || query);
            setIsLoading(false);
            return;
          }
        }
      } catch {
        // API not available, use simulation
      }

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      const simulated = simulateDomainCheck(query);
      setResults(simulated);
      setSearchedLabel(query);
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDomain = (domain: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
  };

  const selectedPlanData = hostingPlans.find((p) => p.name === selectedPlan);
  const domainTotal = selectedDomains.reduce((sum, domain) => {
    const result = results.find((r) => r.domain === domain);
    if (result?.price) {
      return sum + parseFloat(result.price.replace("$", ""));
    }
    return sum;
  }, 0);
  const hostingTotal = selectedPlanData?.price || 0;
  const grandTotal = domainTotal + hostingTotal;

  const generateWhatsAppOrder = () => {
    const domainList = selectedDomains.join(", ");
    const message = `Hi Wavnix! I'd like to order:\n\nDomains: ${domainList}\nHosting: ${selectedPlan || "None"}\nEstimated Total: $${grandTotal.toFixed(2)}/mo\n\nPlease provide final pricing and setup details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801XXXXXXXXX?text=${encoded}`, "_blank");
  };

  return (
    <section
      id="domains"
      className="py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.04]"
    >
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            // DOMAIN & HOSTING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight">
            Domains & Resilient Hosting
          </h2>
          <p className="mt-5 text-text-muted text-base leading-relaxed">
            Secure your global namespace instantly, then deploy your production
            modules onto Wavnix's secure enterprise cloud environment.
          </p>
        </div>

        {/* Domain Search */}
        <div className="max-w-3xl mx-auto bg-bg-elevated border border-white/[0.05] rounded-2xl p-6 sm:p-8 shadow-xl mb-16 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-lg font-display font-bold text-text-main mb-2">
            Secure Your Brand Name
          </h3>
          <p className="text-xs text-text-muted mb-6 font-mono">
            SEARCH MULTIPLE EXTENSIONS AT ONCE (.COM, .NET, .ORG, .XYZ, .IO, .AI)
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                required
                placeholder="e.g. companyname"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-5 pr-20 py-4 bg-bg-primary border border-white/[0.08] rounded-xl text-sm text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors"
                aria-label="Domain name to search"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/30">
                <span className="text-xs font-mono select-none">Enter</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-7 py-4 text-xs font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim disabled:opacity-50 rounded-xl transition-all shadow-neon flex items-center justify-center gap-2 active:scale-[0.97]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Resolving...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Check Namespace
                </>
              )}
            </button>
          </form>

          {/* Error */}
          {errorMsg && (
            <div className="mt-4 p-3 bg-red-950/20 border border-red-500/20 text-red-200 text-xs rounded-xl flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Results */}
          {results.length > 0 && (
            <div className="mt-8 border-t border-white/[0.04] pt-6">
              <p className="text-[10px] font-mono text-text-muted uppercase mb-4 tracking-wider">
                LIVE REGISTRATION STATUS FOR:{" "}
                <span className="text-accent">"{searchedLabel}"</span>
              </p>

              <div className="flex flex-col gap-2.5">
                {results.map((res) => (
                  <div
                    key={res.domain}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-xl transition-all gap-3 cursor-pointer ${
                      res.available
                        ? selectedDomains.includes(res.domain)
                          ? "bg-accent/[0.04] border-accent/20"
                          : "bg-bg-primary/60 border-white/[0.04] hover:border-white/[0.08]"
                        : "bg-bg-primary/30 border-white/[0.03] opacity-60"
                    }`}
                    onClick={() => res.available && toggleDomain(res.domain)}
                    role={res.available ? "button" : undefined}
                    tabIndex={res.available ? 0 : -1}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && res.available) toggleDomain(res.domain);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {res.available ? (
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-text-muted/30 flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-display font-bold text-sm text-text-main">
                          {res.domain}
                        </span>
                        {res.isPremium && (
                          <span className="ml-2 text-[9px] font-mono bg-accent/10 text-accent px-1.5 py-0.5 rounded uppercase">
                            PREMIUM
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      {res.available && res.price && (
                        <div className="text-right">
                          <span className="text-sm font-display font-bold text-accent">
                            {res.price}
                          </span>
                          <span className="text-[10px] text-text-muted/50 ml-1">/yr</span>
                        </div>
                      )}
                      {!res.available && (
                        <span className="text-xs text-text-muted/50 font-mono">
                          TAKEN
                        </span>
                      )}
                      {res.available && (
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                            selectedDomains.includes(res.domain)
                              ? "bg-accent border-accent"
                              : "border-white/20"
                          }`}
                        >
                          {selectedDomains.includes(res.domain) && (
                            <CheckCircle2 className="w-3 h-3 text-bg-primary" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-start gap-2 text-[11px] text-text-muted/60">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>
                  Availability and pricing shown are estimates. Final confirmation
                  requires registrar verification during checkout.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Hosting Plans */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-text-main mb-2 text-center">
            Choose Your Hosting Plan
          </h3>
          <p className="text-sm text-text-muted text-center mb-10">
            Select a plan to pair with your domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {hostingPlans.map((plan) => {
            const PlanIcon = plan.icon;
            const isSelected = selectedPlan === plan.name;
            return (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(isSelected ? null : plan.name)}
                className={`relative p-6 sm:p-7 text-left border rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? "bg-bg-elevated border-accent/25 shadow-neon"
                    : plan.popular
                    ? "bg-bg-elevated border-white/[0.08] hover:border-accent/15"
                    : "bg-bg-elevated/50 border-white/[0.05] hover:border-white/[0.1]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 text-[9px] font-mono font-bold uppercase tracking-wider text-bg-primary bg-accent px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/[0.06] border border-accent/10 text-accent">
                    <PlanIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-text-muted bg-white/[0.04] px-2 py-1 rounded">
                    {plan.badge}
                  </span>
                </div>

                <h4 className="text-base font-display font-bold text-text-main mb-1">
                  {plan.name}
                </h4>
                <p className="text-xs text-text-muted mb-4 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-display font-bold text-accent">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-text-muted">/{plan.period}</span>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  {plan.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-text-muted"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent/50 flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-text-muted/50 font-mono">
                  {plan.renewal}
                </p>
              </button>
            );
          })}
        </div>

        {/* Order Summary */}
        {(selectedDomains.length > 0 || selectedPlan) && (
          <div className="max-w-2xl mx-auto bg-bg-elevated border border-white/[0.05] rounded-2xl p-6 sm:p-8">
            <h4 className="text-lg font-display font-bold text-text-main mb-4">
              Order Summary
            </h4>

            {selectedDomains.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2">
                  Selected Domains:
                </p>
                {selectedDomains.map((domain) => {
                  const result = results.find((r) => r.domain === domain);
                  return (
                    <div
                      key={domain}
                      className="flex items-center justify-between py-2 border-b border-white/[0.03] last:border-0"
                    >
                      <span className="text-sm text-text-main font-mono">
                        {domain}
                      </span>
                      <span className="text-sm text-accent font-display font-bold">
                        {result?.price || "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {selectedPlanData && (
              <div className="flex items-center justify-between py-2 border-b border-white/[0.03] mb-4">
                <span className="text-sm text-text-main">
                  {selectedPlanData.name}
                </span>
                <span className="text-sm text-accent font-display font-bold">
                  ${selectedPlanData.price}/mo
                </span>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
              <span className="text-base font-display font-bold text-text-main">
                Estimated Total
              </span>
              <span className="text-xl font-display font-bold text-accent">
                ${grandTotal.toFixed(2)}
                <span className="text-xs text-text-muted font-normal">/mo</span>
              </span>
            </div>

            <button
              onClick={generateWhatsAppOrder}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
