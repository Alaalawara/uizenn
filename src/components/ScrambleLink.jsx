import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>@#%&";

export default function ScrambleLink({
  text,
  href,
  duration = 900,
  fps = 60,
  className = "relative inline-block text-white cursor-pointer",
  target = "_blank",
  rel = "noreferrer",
}) {
  const [display, setDisplay] = useState(text);
  const runningRef = useRef(false);
  const rafRef = useRef(null);
  const planRef = useRef(null);

  const run = () => {
    if (runningRef.current) return;
    runningRef.current = true;

    const now = performance.now();
    const len = text.length;

    planRef.current = Array.from({ length: len }).map((_, i) => {
      const start = (i / Math.max(1, len)) * (duration * 0.5);
      const end = start + duration * 0.5;
      return { start, end, from: display[i] ?? " ", to: text[i] ?? " " };
    });

    const frameMs = 1000 / fps;

    const tick = () => {
      const t = performance.now() - now;
      let out = "";
      let done = 0;

      const plan = planRef.current || [];
      for (let i = 0; i < plan.length; i++) {
        const { start, end, to, from } = plan[i];
        if (t < start) {
          out += from;
        } else if (t >= end) {
          out += to;
          done++;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplay(out);

      if (done === plan.length) {
        setDisplay(text);
        runningRef.current = false;
        rafRef.current = null;
        return;
      }

      rafRef.current = setTimeout(() => {
        requestAnimationFrame(tick);
      }, frameMs);
    };

    tick();
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, []);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseEnter={run}
      onFocus={run}
    >
      {display}
    </a>
  );
}
