import { useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdvancedComponent from "../components/AdvancedComponent";
import TiltCards from "../components/cards/animationcards";

export default function LandingPage() {
  const navigate = useNavigate();

  // Pointer parallax for decorative orbs
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const orb1x = useTransform(sx, (v) => v / 30);
  const orb1y = useTransform(sy, (v) => v / 30);
  const orb2x = useTransform(sx, (v) => -v / 40);
  const orb2y = useTransform(sy, (v) => -v / 40);

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  }

  return (
    <div onMouseMove={onMove} className="relative min-h-[100svh] bg-[var(--bg)] text-[var(--fg)] overflow-hidden py-10">

      {/* Parallax orbs */}
      <motion.div style={{ x: orb1x, y: orb1y }} className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-40">
        <div className="h-full w-full rounded-full" />
      </motion.div>
      <motion.div style={{ x: orb2x, y: orb2y }} className="absolute -bottom-56 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-40">
        <div className="h-full w-full rounded-full" />
      </motion.div>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid w-full grid-cols-1 gap-8 px-2 pt-4 md:grid-cols-12">
        <div className="col-span-7 flex flex-col items-start gap-6">
          <h1 className="text-4xl leading-[1.05] font-bold md:text-6xl lg:text-7xl">
            A minimalist UI kit that keeps developers in flow and products in harmony.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-xl text-base text-foreground/70"
          >
            The path of least resistance to great UI. Build faster with a focused, flow‑state toolkit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <MagneticButton onClick={() => navigate("/components")} label="Browse Components" />
            <GhostButton onClick={() => window.scrollTo({ top: innerHeight, behavior: "smooth" })} label="Learn more" />
          </motion.div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <FloatBadge>Framer Motion</FloatBadge>
            <FloatBadge delay={0.12}>Tailwind CSS</FloatBadge>
            <FloatBadge delay={0.22}>Dark Mode</FloatBadge>
            <FloatBadge delay={0.30}>Accessible</FloatBadge>
          </div>
        </div>

        {/* Visual: Tilt Parallax Cards */}
        <div className="col-span-5 hidden md:block">
          <TiltCards />
        </div>
      </section>

      {/* Animated marquee of categories */}
      <section className="relative z-10 mx-auto mt-12 w-full max-w-none overflow-hidden">
        <Marquee
          items={["Badges", "Buttons", "Cards", "Inputs", "Text", "Animation", "Pages", "Overlays", "Avatars", "Tabs"]}
        />
      </section>

      {/* Gradient divider */}
      <div className="relative z-10 mx-auto mt-14 h-[1px] w-full">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      </div>

      {/* Feature strip */}
      <section className="relative z-10 mx-auto mt-12 w-full px-5">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { t: "Pragmatic API", d: "Small surface area, quick to learn." },
            { t: "Composable", d: "Headless patterns with slots & tokens." },
            { t: "Polished", d: "Micro‑interactions that feel right." },
            { t: "Themeable", d: "Use CSS variables; light & dark out‑of‑box." }
          ].map((f) => (
            <motion.li key={f.t} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="rounded-xl border border-foreground/15 bg-[var(--bg)] p-4">
              <div className="text-sm font-semibold">{f.t}</div>
              <div className="mt-1 text-sm text-foreground/70">{f.d}</div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* CTA band */}
      <section className="relative z-10 mx-auto my-20 w-full px-5">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-foreground/15 bg-gradient-to-br from-foreground/5 to-transparent p-6 md:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold">Start building with flow</div>
              <div className="text-sm text-foreground/70">Pick a component, customize tokens, ship.</div>
            </div>
            <MagneticButton onClick={() => navigate("/components")} label="Open Library" />
          </div>
        </motion.div>
      </section>

      <AdvancedComponent />
    </div>
  );
}

/* ===== Micro UI ===== */

function MagneticButton({ label, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 150, damping: 12, mass: 0.2 });
  const ry = useSpring(y, { stiffness: 150, damping: 12, mass: 0.2 });

  function move(e) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 12);
  }
  function leave() {
    x.set(0); y.set(0);
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: rx, y: ry }}
      className="inline-flex select-none items-center gap-2 rounded-xl border-2 border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-[var(--bg)] shadow-sm transition-[box-shadow,transform] hover:shadow-md active:scale-[0.99]"
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-80">
        <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
      </svg>
    </motion.button>
  );
}

function GhostButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-foreground/25 px-4 py-2 text-[var(--fg)]/80 hover:bg-secondary transition-colors"
    >
      {label}
    </button>
  );
}

function FloatBadge({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-full border border-foreground/20 bg-[var(--bg)] px-3 py-1 text-xs text-foreground/70"
    >
      {children}
    </motion.span>
  );
}


function Marquee({ items }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative w-full py-3 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex gap-8 text-sm font-medium text-foreground/70"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {row.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <Dot /> {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/40" />;
}
