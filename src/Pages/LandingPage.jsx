import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdvancedComponent from "../components/AdvancedComponent";
import { TiltCards } from '../components/cards/TiltCardPage'
import { MagneticButton } from "../components/buttons/MagneticButtonPage";
import { Marquee } from "../components/texts/TextMotionPage";
import { FloatBadge } from "../components/badges/FloatBadgePage";

export default function LandingPage() {
  const navigate = useNavigate();

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
    <main onMouseMove={onMove} className="relative bg-[var(--bg)] text-[var(--fg)] overflow-hidden py-10">

      <motion.div style={{ x: orb1x, y: orb1y }} className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-40">
        <div className="h-full w-full rounded-full" />
      </motion.div>
      <motion.div style={{ x: orb2x, y: orb2y }} className="absolute -bottom-56 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-40">
        <div className="h-full w-full rounded-full" />
      </motion.div>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid w-full grid-cols-1 gap-8 px-2 pt-10 md:grid-cols-12">
        <div className="col-span-7 flex flex-col items-start gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl leading-[1.05] font-medium md:text-6xl lg:text-7xl">
            A minimalist UI kit that keeps developers in flow and products in harmony.
          </motion.h2>
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
          </motion.div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <FloatBadge>Framer Motion</FloatBadge>
            <FloatBadge delay={0.12}>Tailwind CSS</FloatBadge>
            <FloatBadge delay={0.22}>Dark Mode</FloatBadge>
            <FloatBadge delay={0.30}>Accessible</FloatBadge>
          </div>
        </div>

        <div className="col-span-5 hidden md:block">
          <TiltCards />
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-12 w-full max-w-none overflow-hidden">
        <Marquee
          items={["Badges", "Buttons", "Cards", "Inputs", "Text", "Animation", "Pages"]}
        />
      </section>

      <div className="relative z-10 mx-auto mt-14 h-[1px] w-full">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      </div>

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
            { t: "Composable", d: "Headless patterns with slots." },
            { t: "Polished", d: "Micro‑interactions that feels right." },
            { t: "Themeable", d: "Use CSS variables; light & dark out‑of‑box." }
          ].map((f) => (
            <motion.li key={f.t} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="rounded-xl border border-foreground/15 bg-[var(--bg)] p-4">
              <div className="text-sm font-semibold">{f.t}</div>
              <div className="mt-1 text-sm text-foreground/70">{f.d}</div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="relative z-10 mx-auto my-10 w-full px-5">
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
              <div className="text-sm text-foreground/70">Pick a component, customize, ship.</div>
            </div>
            <MagneticButton onClick={() => navigate("/components")} label="Open Library" />
          </div>
        </motion.div>
      </section>

      <AdvancedComponent />
    </main>
  );
}



