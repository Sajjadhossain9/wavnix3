import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

function TechOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 400;
    let h = 400;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);

    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      label: string;
      color: string;
    }[] = [
      { x: 200, y: 100, vx: 0.3, vy: 0.15, r: 6, label: "AI", color: "#B9FF31" },
      { x: 120, y: 180, vx: -0.2, vy: 0.25, r: 5, label: "Cloud", color: "#B9FF31" },
      { x: 280, y: 180, vx: 0.15, vy: -0.2, r: 5, label: "Data", color: "#B9FF31" },
      { x: 160, y: 270, vx: -0.25, vy: -0.15, r: 5, label: "Web", color: "#B9FF31" },
      { x: 240, y: 270, vx: 0.2, vy: 0.2, r: 5, label: "API", color: "#B9FF31" },
      { x: 200, y: 200, vx: 0.1, vy: -0.1, r: 7, label: "Core", color: "#B9FF31" },
      { x: 100, y: 130, vx: -0.15, vy: 0.3, r: 4, label: "DevOps", color: "#8ACC1A" },
      { x: 300, y: 130, vx: 0.25, vy: -0.15, r: 4, label: "Mobile", color: "#8ACC1A" },
    ];

    const connections = [
      [0, 1], [0, 2], [0, 5], [1, 3], [1, 5], [2, 4], [2, 5],
      [3, 4], [3, 5], [4, 5], [0, 6], [0, 7], [6, 1], [7, 2],
    ];

    const signals: { from: number; to: number; progress: number; speed: number }[] = [];

    function spawnSignal() {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      signals.push({
        from: conn[0],
        to: conn[1],
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
      });
    }

    let time = 0;

    function animate() {
      time += 0.01;
      ctx!.clearRect(0, 0, w, h);

      // Mouse influence
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update nodes
      nodes.forEach((node) => {
        const dx = (mx - 0.5) * 15;
        const dy = (my - 0.5) * 15;
        node.x += node.vx + dx * 0.01;
        node.y += node.vy + dy * 0.01;

        // Bounce
        if (node.x < 40 || node.x > w - 40) node.vx *= -1;
        if (node.y < 40 || node.y > h - 40) node.vy *= -1;
        node.x = Math.max(40, Math.min(w - 40, node.x));
        node.y = Math.max(40, Math.min(h - 40, node.y));
      });

      // Draw connections
      connections.forEach(([a, b]) => {
        const na = nodes[a];
        const nb = nodes[b];
        ctx!.beginPath();
        ctx!.moveTo(na.x, na.y);
        ctx!.lineTo(nb.x, nb.y);
        ctx!.strokeStyle = "rgba(185, 255, 49, 0.08)";
        ctx!.lineWidth = 1;
        ctx!.stroke();
      });

      // Draw signals
      if (Math.random() < 0.03) spawnSignal();
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;
        if (s.progress >= 1) {
          signals.splice(i, 1);
          continue;
        }
        const na = nodes[s.from];
        const nb = nodes[s.to];
        const px = na.x + (nb.x - na.x) * s.progress;
        const py = na.y + (nb.y - na.y) * s.progress;
        const alpha = s.progress < 0.2 ? s.progress * 5 : s.progress > 0.8 ? (1 - s.progress) * 5 : 1;
        ctx!.beginPath();
        ctx!.arc(px, py, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(185, 255, 49, ${alpha * 0.8})`;
        ctx!.fill();
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Glow
        const gradient = ctx!.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 4);
        gradient.addColorStop(0, "rgba(185, 255, 49, 0.15)");
        gradient.addColorStop(1, "rgba(185, 255, 49, 0)");
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.r * 4, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Core
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx!.fillStyle = node.color;
        ctx!.fill();

        // Label
        ctx!.font = "500 9px 'JetBrains Mono', monospace";
        ctx!.fillStyle = "rgba(245, 248, 242, 0.6)";
        ctx!.textAlign = "center";
        ctx!.fillText(node.label, node.x, node.y + node.r + 14);
      });

      // Orbiting ring
      ctx!.beginPath();
      ctx!.arc(w / 2, h / 2, 140 + Math.sin(time) * 5, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(185, 255, 49, 0.04)";
      ctx!.lineWidth = 1;
      ctx!.setLineDash([4, 8]);
      ctx!.stroke();
      ctx!.setLineDash([]);

      // Orbiting dot
      const orbitAngle = time * 0.5;
      const orbitR = 140 + Math.sin(time) * 5;
      const ox = w / 2 + Math.cos(orbitAngle) * orbitR;
      const oy = h / 2 + Math.sin(orbitAngle) * orbitR;
      ctx!.beginPath();
      ctx!.arc(ox, oy, 3, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(185, 255, 49, 0.6)";
      ctx!.fill();

      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Upload the background video as public/videos/hero-background.mp4. */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/hero-background.mp4`}
          type="video/mp4"
        />
      </video>

      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-16 lg:pt-32 lg:pb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/[0.06] border border-accent/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono font-medium text-accent tracking-wider uppercase">
                Software · AI · Digital Growth
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-bold text-text-main leading-[1.1] mb-6">
              We build digital systems that move businesses{" "}
              <span className="text-gradient-accent">forward.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-8">
              Wavnix transforms ambitious ideas into intelligent software,
              high-impact digital experiences, and scalable business systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary bg-accent hover:bg-accent-dim rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 active:scale-[0.97]"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-text-main bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-xl transition-all duration-300 active:scale-[0.97]"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="text-lg font-display font-bold text-accent">100%</span>
                <span className="text-xs text-text-muted">Production Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-display font-bold text-accent">24/7</span>
                <span className="text-xs text-text-muted">System Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-display font-bold text-accent">Full</span>
                <span className="text-xs text-text-muted">Lifecycle Support</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tech Visual */}
          <div
            className="hidden lg:flex items-center justify-center transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "300ms",
            }}
          >
            <TechOrb />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
