import React, { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function AdvancedComponent() {

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  }

  return (
    <div onMouseMove={onMove} className="relative min-h-[100svh] bg-[var(--bg)] text-[var(--fg)] overflow-hidden">

      {/* NEW: Stats band with animated counters */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <StatsBand />
      </section>

      {/* NEW: Roadmap timeline */}
      <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-5">
        <Roadmap />
      </section>


      {/* NEW: FAQ */}
      <section className="relative z-10 mx-auto mb-16 mt-8 w-full max-w-6xl px-5">
        <FAQ />
      </section>

      {/* Logo cloud */}
      <section className="relative z-10 mx-auto mb-16 w-full max-w-6xl px-5">
        <LogoCloud />
      </section>
    </div>
  );
}

/* ===== NEW: Stats band ===== */

function StatsBand() {
  const stats = [
    { label: "Components", to: 120 },
    { label: "Downloads", to: 48_000 },
    { label: "Stars", to: 3_200 },
    { label: "Examples", to: 275 }
  ];
  return (
    <div className="rounded-xl border border-foreground/15 p-4 md:p-5">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Counter key={s.label} to={s.to} delay={i * 0.1} label={s.label} />
        ))}
      </div>
    </div>
  );
}
function Counter({ to, label, delay = 0 }) {
  const v = useMotionValue(0);
  const sv = useSpring(v, { stiffness: 120, damping: 20 });
  useEffect(() => {
    const controls = animate(v, to, { duration: 1.2, delay, ease: "easeOut" });
    return () => controls.stop();
  }, [to, delay, v]);
  const text = useTransform(sv, (n) =>
    Intl.NumberFormat("en", { notation: "compact" }).format(Math.round(n))
  );
  return (
    <div className="flex flex-col">
      <motion.span className="text-2xl font-semibold">{text}</motion.span>
      <span className="text-sm text-foreground/70">{label}</span>
    </div>
  );
}

/* ===== NEW: Roadmap timeline ===== */

function Roadmap() {
  const items = [
    { q: "Q4 2025", t: "Themes + Tokens", d: "Color tokens and density presets." },
    { q: "Q1 2026", t: "Data‑rich Inputs", d: "Combobox, Command, File Upload." },
    { q: "Q2 2026", t: "Charts", d: "Primitives for data viz, headless + Motion." }
  ];
  return (
    <div className="relative">
      <div className="absolute left-1 top-0 bottom-0 w-px bg-foreground/15" />
      <ul className="space-y-6">
        {items.map((it, i) => (
          <motion.li
            key={it.q}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="relative pl-8"
          >
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-foreground/30" />
            <div className="text-sm font-semibold">{it.q} — {it.t}</div>
            <div className="text-sm text-foreground/70">{it.d}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ===== NEW: FAQ ===== */

function FAQ() {
  const faqs = [
    { q: "Can I use it commercially?", a: "Yes. Components are MIT‑licensed—use freely in commercial projects." },
    { q: "Does it support dark mode?", a: "Fully. The system is driven by CSS variables that flip with data‑theme." },
    { q: "What about accessibility?", a: "ARIA landmarks, keyboard focus, and motion preferences are considered." }
  ];
  return (
    <div className="rounded-xl border border-foreground/15">
      {faqs.map((f, i) => (
        <AccordionItem key={i} title={f.q} text={f.a} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
function AccordionItem({ title, text, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="border-b last:border-b-0 border-foreground/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-medium">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4 text-sm text-foreground/70">{text}</div>
      </motion.div>
    </div>
  );
}

/* ===== Logo cloud ===== */

function LogoCloud() {
  const logos = ["U", "I", "Z", "E", "N","N"];
  return (
    <div className="rounded-xl border border-foreground/15 p-4">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {logos.map((L, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid h-16 place-content-center rounded-lg bg-secondary/70 text-foreground"
          >
            <span className="text-lg font-semibold">{L}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
