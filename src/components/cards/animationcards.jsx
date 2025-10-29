import React from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

function TiltCards() {
  // Source cards (stable)
  const CARD_DATA = React.useMemo(
    () => [
      { t: "Badges",    c: "from-indigo-500 to-sky-400" },
      { t: "Buttons",   c: "from-fuchsia-500 to-pink-400" },
      { t: "Cards",     c: "from-emerald-500 to-lime-400" },
      { t: "Animation", c: "from-purple-500 to-violet-400" }
    ],
    []
  );

  // Circular queue of indexes into CARD_DATA
  const [queue, setQueue] = React.useState([0, 1, 2, 3]);
  const [exiting, setExiting] = React.useState(null); // index leaving (keyed by unique id)

  // Tilt based on pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-60, 60], [8, -8]);
  const ry = useTransform(mx, [-60, 60], [-8, 8]);

  function move(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  }
  function leave() {
    mx.set(0);
    my.set(0);
  }

  // Cycle front card to the back
  function cycle() {
    if (exiting !== null) return; // ignore if animating
    const [front, ...rest] = queue;
    setExiting(front);
    // After exit animation completes, push to back
    setTimeout(() => {
      setQueue([...rest, front]);
      setExiting(null);
    }, 420); // match exit transition duration
  }

  // Accessibility: keyboard activate on container
  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      cycle();
    }
  }

  // Layout constants for the stacked look
  const stackY = (i) => i * 8;              // vertical offset per depth
  const stackRot = (i) => -2 + i;           // slight rotation
  const z = (i) => 30 - i * 6;              // translateZ to keep 3D feel (cosmetic)

  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={leave}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Cycle cards"
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="relative h-[22rem] outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 rounded-xl"
      onClick={cycle}
    >
      <AnimatePresence initial={false}>
        {queue.map((idx, depth) => {
          const card = CARD_DATA[idx];
          const isFront = depth === 0;
          // Unique key tied to content order to allow exit/enter on the front
          const key = `${idx}-${depth}`;

          return (
            <motion.div
              key={key}
              initial={{
                y: 40 + depth * 12,
                opacity: 0,
                rotate: stackRot(depth),
                scale: 0.98
              }}
              animate={{
                y: stackY(depth),
                opacity: 1,
                rotate: stackRot(depth),
                scale: 1
              }}
              exit={
                isFront && exiting === idx
                  ? { y: -120, opacity: 0, rotate: -8, scale: 0.95 }
                  : undefined
              }
              transition={{
                duration: isFront && exiting === idx ? 0.42 : 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute left-1/2 top-1/2 w-[18rem] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d", zIndex: 100 - depth }}
            >
              <div
                className="rounded-2xl border border-foreground/15 bg-[var(--bg)] p-4 shadow-sm select-none"
                style={{ transform: `translateZ(${z(depth)}px)` }}
              >
                <div className={`mb-3 h-24 w-full rounded-xl bg-gradient-to-br ${card.c} opacity-30`} />
                <div className="text-sm font-semibold">{card.t}</div>
                <div className="text-xs text-foreground/70">
                  {isFront ? "Click / Press Space to cycle" : "Micro‑interactions"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Hint pill */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-foreground/15 bg-[var(--bg)] px-3 py-1 text-xs text-foreground/60">
        Click or press Space/Enter
      </div>
    </motion.div>
  );
}

export default TiltCards;
