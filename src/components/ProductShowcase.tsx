import { useState } from "react";
import {
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Users,
  Activity,
  DollarSign,
  BarChart3,
  Calendar,
  MessageSquare,
  FileText,
  Bell,
  CheckCircle2,
} from "lucide-react";

interface ProductModule {
  id: string;
  name: string;
  status: "Live" | "Beta" | "Development" | "Concept";
  statusColor: string;
  tagline: string;
  description: string;
  features: string[];
  useCase: string;
  stats: { label: string; value: string }[];
  icon: typeof ShieldCheck;
  dashboardItems: { icon: typeof Activity; label: string; value: string }[];
}

const modules: ProductModule[] = [
  {
    id: "admin",
    name: "Administrative Console",
    status: "Beta",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    tagline: "Total control over fiscal pipelines, staff rosters, and compliance metrics.",
    description:
      "Our Central Administrative Workspace streamlines back-office operational bottlenecks. It automates financial ledger balance sheets, coordinates student registrations, and processes end-of-term results securely.",
    features: [
      "Automated Financial Invoice Engine",
      "Dynamic Staff Roster Schedulers",
      "GDPR-Compliant Student Records",
      "Custom Data Query Exports",
    ],
    useCase: "Currently deployed at Madrasah Darul Huda for core registrar functions.",
    stats: [
      { label: "Admin Overhead Reduction", value: "-45%" },
      { label: "Query Speed Index", value: "0.2s" },
    ],
    icon: ShieldCheck,
    dashboardItems: [
      { icon: DollarSign, label: "Revenue This Term", value: "$48,200" },
      { icon: Users, label: "Active Staff", value: "32" },
      { icon: GraduationCap, label: "Enrolled Students", value: "486" },
      { icon: BarChart3, label: "Reports Generated", value: "1,240" },
    ],
  },
  {
    id: "teacher",
    name: "Teacher Gradebook Hub",
    status: "Live",
    statusColor: "text-accent bg-accent/10 border-accent/20",
    tagline: "Optimized grading workflows that give hours back to instructors.",
    description:
      "A fast, modern portal allowing teachers to input grades, track attendance, and record behavior notes directly from mobile or desktop, even on weak Wi-Fi networks.",
    features: [
      "Offline-Resilient Grade Syncing",
      "Multi-Standard Grading Systems",
      "Rapid Absence Logging",
      "Direct Parent Chat Integrations",
    ],
    useCase: "Active use by 30+ faculty members tracking weekly student achievements.",
    stats: [
      { label: "Grading Efficiency Boost", value: "+300%" },
      { label: "Attendance Capture Time", value: "2 min" },
    ],
    icon: BookOpen,
    dashboardItems: [
      { icon: CheckCircle2, label: "Classes Today", value: "6" },
      { icon: Users, label: "Students Managed", value: "142" },
      { icon: Calendar, label: "Attendance Rate", value: "96%" },
      { icon: FileText, label: "Assignments Due", value: "8" },
    ],
  },
  {
    id: "student",
    name: "Student Portal Core",
    status: "Development",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    tagline: "A unified workspace where students coordinate tasks and view reviews.",
    description:
      "Empowers learners with a structured learning dashboard. Students can view curriculum benchmarks, submit files, download lesson sheets, and read direct comments from teachers.",
    features: [
      "Central Task Management Desk",
      "Digital Resource Locker",
      "Real-Time Grade Analytics",
      "Automated Homework Alerts",
    ],
    useCase: "Under active testing with select student cohorts. Full release slated Q3 2026.",
    stats: [
      { label: "Assignment Completion", value: "94%" },
      { label: "Active Engagement Rate", value: "High" },
    ],
    icon: GraduationCap,
    dashboardItems: [
      { icon: FileText, label: "Pending Tasks", value: "5" },
      { icon: BarChart3, label: "Current GPA", value: "3.7" },
      { icon: Calendar, label: "Next Exam", value: "3 days" },
      { icon: Bell, label: "New Notifications", value: "4" },
    ],
  },
  {
    id: "guardian",
    name: "Guardian Security App",
    status: "Beta",
    statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    tagline: "Transparency and peace of mind delivered directly to families.",
    description:
      "An interactive, lightweight dashboard that keeps families securely updated about student arrival check-ins, financial billings, automated exam results cards, and school closures.",
    features: [
      "Immediate Safety Alert SMS",
      "Direct Tuition Payment Gateway",
      "Digital Term Report Cards",
      "Teacher Message Channels",
    ],
    useCase: "In-beta trial with parent-teacher association groups to verify security triggers.",
    stats: [
      { label: "Parent Safety Assurance", value: "100%" },
      { label: "Billing Payment Speed", value: "Instant" },
    ],
    icon: Users,
    dashboardItems: [
      { icon: ShieldCheck, label: "Safety Status", value: "Safe" },
      { icon: DollarSign, label: "Balance Due", value: "$240" },
      { icon: MessageSquare, label: "Messages", value: "3" },
      { icon: Activity, label: "Attendance", value: "98%" },
    ],
  },
];

export default function ProductShowcase() {
  const [activeModuleId, setActiveModuleId] = useState("admin");
  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <section id="product" className="py-20 sm:py-28 relative overflow-hidden bg-bg-light">
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-dim mb-4">
            // PROPRIETARY EDTECH SUITE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-dark tracking-tight">
            Wavnix Campus Management Suite
          </h2>
          <p className="mt-5 text-text-dark-muted text-base sm:text-lg leading-relaxed">
            One unified campus. Four connected experiences. We are developing the
            definitive software standard to digitize academic environments, ensuring
            absolute synchronization between administrators, teachers, students, and
            parents.
          </p>
        </div>

        {/* Module Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {modules.map((mod) => {
            const isSelected = mod.id === activeModuleId;
            const ModIcon = mod.icon;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`p-4 sm:p-5 text-left border rounded-xl transition-all duration-300 focus:outline-none flex flex-col gap-3 ${
                  isSelected
                    ? "bg-white border-accent/30 shadow-neon-subtle"
                    : "bg-white/50 border-text-dark/[0.06] hover:border-text-dark/[0.12] hover:bg-white"
                }`}
                role="tab"
                aria-selected={isSelected}
              >
                <div className="flex items-center justify-between">
                  <ModIcon
                    className={`w-5 h-5 ${
                      isSelected ? "text-accent-dim" : "text-text-dark-muted"
                    }`}
                  />
                  <span
                    className={`text-[9px] font-mono border px-2 py-0.5 rounded uppercase font-bold ${mod.statusColor}`}
                  >
                    {mod.status}
                  </span>
                </div>
                <span className="font-display font-bold text-sm tracking-tight text-text-dark">
                  {mod.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white border border-text-dark/[0.06] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-44 h-44 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

          {/* Left: Module Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs font-mono tracking-widest text-accent-dim uppercase">
                  WAVNIX CAMPUS // MODULE_{activeModule.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-dark">
                {activeModule.name}
              </h3>
              <p className="text-sm text-accent-dim font-mono mt-1 font-semibold">
                {activeModule.tagline}
              </p>

              <p className="mt-4 text-text-dark-muted text-sm leading-relaxed">
                {activeModule.description}
              </p>

              {/* Features */}
              <div className="mt-6">
                <p className="text-[10px] font-mono text-text-dark/50 uppercase tracking-[0.15em] mb-3">
                  Module Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModule.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-sm text-text-dark-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-dim flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Case */}
              <div className="mt-6 p-4 bg-bg-light rounded-xl border border-text-dark/[0.04]">
                <p className="text-[10px] font-mono text-text-dark/50 uppercase tracking-[0.15em] mb-1">
                  Deployment Status:
                </p>
                <p className="text-sm text-text-dark-muted">{activeModule.useCase}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-6">
              {activeModule.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 p-4 bg-bg-light rounded-xl border border-text-dark/[0.04]"
                >
                  <p className="text-2xl font-display font-bold text-accent-dim">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-mono text-text-dark-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="lg:col-span-6">
            <div className="bg-bg-primary rounded-xl border border-white/[0.06] p-5 sm:p-6 h-full">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-mono text-accent/60 uppercase tracking-wider">
                    Dashboard Preview
                  </p>
                  <p className="text-lg font-display font-bold text-text-main mt-1">
                    {activeModule.name}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-accent/70">LIVE</span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {activeModule.dashboardItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-bg-elevated border border-white/[0.04] rounded-xl hover:border-accent/10 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <ItemIcon className="w-3.5 h-3.5 text-accent/60" />
                        <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-xl font-display font-bold text-text-main">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Activity Feed */}
              <div className="border-t border-white/[0.04] pt-4">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-3">
                  Recent Activity
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "New student registration completed",
                    "Term report cards generated",
                    "Staff attendance synced",
                    "Parent notification sent",
                  ].map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-text-muted/70"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/40" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo CTA */}
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
                className="w-full mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-lg shadow-neon transition-all duration-300 active:scale-[0.97]"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
