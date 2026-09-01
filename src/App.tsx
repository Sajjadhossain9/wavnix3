import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CapabilitiesMarquee from "./components/CapabilitiesMarquee";
import ServicesShowcase from "./components/ServicesShowcase";
import SelectedWork from "./components/SelectedWork";
import WorkingProcess from "./components/WorkingProcess";
import ProductShowcase from "./components/ProductShowcase";
import ProjectEstimator from "./components/ProjectEstimator";
import DomainSearch from "./components/DomainSearch";
import CompanyCredibility from "./components/CompanyCredibility";
import WhyWavnix from "./components/WhyWavnix";
import Industries from "./components/Industries";
import TeamAndStory from "./components/TeamAndStory";
import TrustSection from "./components/TrustSection";
import ProjectEnquiry from "./components/ProjectEnquiry";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-text-main bg-bg-primary overflow-hidden selection:bg-accent selection:text-bg-primary">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Capability Marquee */}
        <CapabilitiesMarquee />

        {/* 3. Services Showcase */}
        <ServicesShowcase />

        {/* 4. Selected Work / Case Studies */}
        <SelectedWork />

        {/* 5. Working Process */}
        <WorkingProcess />

        {/* 6. Education Management System */}
        <ProductShowcase />

        {/* 7. Project Estimator */}
        <ProjectEstimator />

        {/* 8. Domain & Hosting */}
        <DomainSearch />

        {/* 9. Company Credibility */}
        <CompanyCredibility />

        {/* 10. Why Wavnix */}
        <WhyWavnix />

        {/* 11. Industries */}
        <Industries />

        {/* 12. Team & Story */}
        <TeamAndStory />

        {/* 13. Trust & Transparency */}
        <TrustSection />

        {/* 14. Project Enquiry */}
        <ProjectEnquiry />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
