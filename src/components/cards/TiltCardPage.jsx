import React from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from "../../contexts/TocContext";
import InstallationLayout from '../../componentLayout/InstallationLayout';

export default function TiltCardsPage() {
    const { setItems } = useToc();

    const hasInstallation = true;
    const hasUsage = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "installation", label: "Installation" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "installation" && hasInstallation)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasInstallation, hasUsage]);

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasUsage]);


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Tilt Cards</h2>
                <p className="text-foreground">
                    Displays a TiltCards a UI effect where a card follows a 3D tilt effect.
                </p>
            </div>

            <CodeLayout filename='TiltCards.jsx' code={code}>
                <TiltCards />
            </CodeLayout>

            <div id='installation' className='scroll-mt-24'>
                <InstallationLayout />
            </div>
        </div>
    );
}


const code = `function MagneticButton() {
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
            onClick={""}
            onMouseMove={move}
            onMouseLeave={leave}
            style={{ x: rx, y: ry }}
            className="inline-flex select-none items-center gap-2 rounded-xl border-2 border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-[var(--bg)] shadow-sm transition-[box-shadow,transform] hover:shadow-md active:scale-[0.99]"
        >
            Button
        </motion.button>
    );
}
`;


export function TiltCards() {
  const CARD_DATA = React.useMemo(
    () => [
      { t: "Badges",    c: "from-indigo-500 to-sky-400" },
      { t: "Buttons",   c: "from-fuchsia-500 to-pink-400" },
      { t: "Cards",     c: "from-emerald-500 to-lime-400" },
      { t: "Animation", c: "from-purple-500 to-violet-400" }
    ],
    []
  );

  const [queue, setQueue] = React.useState([0, 1, 2, 3]);
  const [exiting, setExiting] = React.useState(null);

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

  function cycle() {
    if (exiting !== null) return;
    const [front, ...rest] = queue;
    setExiting(front);
    setTimeout(() => {
      setQueue([...rest, front]);
      setExiting(null);
    }, 420);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      cycle();
    }
  }

  const stackY = (i) => i * 8;
  const stackRot = (i) => -2 + i;
  const z = (i) => 30 - i * 6;       

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
                  {isFront ? "Click / Press Space to stack them" : "uizenn"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
