import { useEffect } from "react";
import CodeLayout from "../../componentLayout/CodeLayout";
import { useToc } from "../../contexts/TocContext";

export default function PlanetAnimationPage() {
   const types = ["earth", "mars", "moon", "saturn", "sun", "neptune"];
  const { setItems } = useToc();

  const hasInstallation = true;
  const hasUsage = true;
  const hasExamples = true;

  useEffect(() => {
    const list = [
      { id: "usage", label: "Usage" },
      { id: "examples", label: "Examples" }
    ]
      .filter((s) =>
        (s.id === "usage" && hasUsage) ||
        (s.id === "examples" && hasExamples)
      );
    setItems?.(list);
    return () => setItems?.([]);
  }, [setItems, hasInstallation, hasUsage, hasExamples]);

  return (
    <div className="flex flex-col gap-10">
      <div id="usage" className="flex flex-col gap-4 items-start scroll-mt-24">
        <h2 className="font-bold tracking-tight text-2xl">Hover Animation</h2>
        <p className="text-foreground">Interactive hover animation. Credit: @samirande_</p>
      </div>

      <CodeLayout filename="PlanetAnimaton.jsx" code={Code1}>
        <section className="relative z-10 mx-auto py-6 w-full max-w-6xl px-5">
          <div className="flex flex-wrap gap-8 justify-center items-center p-6">
            {types.map(type => (
              <div key={type} className="flex flex-col items-center gap-2">
                <PlanetDynamic type={type} size={120} speed={16 + Math.random() * 12} />
              </div>
            ))}
          </div>
        </section>
      </CodeLayout>

    </div>
  );
}


const Code1 = `const PLANET_DESIGNS = {
  earth: {
    bg: "radial-gradient(circle at 60% 30%, #143951cc 65%, #2f87d6 100%)",
    rim: "#71d9ff",
    lines: "#44d9ff",
    meridians: "#8bfdfe",
    shadow: "#229af9",
    highlight: "#8ff",
    wirefx: { l: 9, m: 10 },
  },
  mars: {
    bg: "radial-gradient(circle at 60% 30%, #56402c 70%, #d76d42 110%)",
    rim: "#fba97b",
    lines: "#d9a044",
    meridians: "#ffddb2",
    shadow: "#a64b24",
    highlight: "#fffadd",
    wirefx: { l: 7, m: 9 },
  },
  moon: {
    bg: "radial-gradient(circle at 60% 30%, #5e616d 65%, #d2d8e6 100%)",
    rim: "#d6dce7",
    lines: "#bfc7d8",
    meridians: "#e6e9ef",
    shadow: "#96a0b5",
    highlight: "#fff",
    wirefx: { l: 7, m: 8 },
  },
  saturn: {
    bg: "radial-gradient(circle at 60% 35%, #79593a 60%, #eddb9d 110%)",
    rim: "#f0e9c3",
    lines: "#feebae",
    meridians: "#eed585",
    shadow: "#b09355",
    highlight: "#fff7d7",
    wirefx: { l: 8, m: 12 },
  },
  sun: {
    bg: "radial-gradient(circle at 50% 32%, #ffc47d 60%, #ff914c 100%)",
    rim: "#ffe08f",
    lines: "#ffedb0",
    meridians: "#ffe4a3",
    shadow: "#fcba57",
    highlight: "#fffbe8",
    wirefx: { l: 10, m: 10 },
  },
  neptune: {
    bg: "radial-gradient(circle at 60% 30%, #274673 60%, #45daf9 100%)",
    rim: "#1afaf9",
    lines: "#54e5fa",
    meridians: "#a9fdfe",
    shadow: "#0a5d8a",
    highlight: "#fff",
    wirefx: { l: 8, m: 10 },
  },
};

export function PlanetDynamic({ size = 200, type = "earth", speed = 16 }) {
  const {
    bg, rim, lines, meridians, shadow, highlight, wirefx: { l: linesN, m: mediansN }
  } = PLANET_DESIGNS[type] || PLANET_DESIGNS.earth;
  const R = size / 2 - 8;

  return (
    <div className="relative inline-block" tabIndex={0}
      style={{
        background: bg, borderRadius: "1000px",
        boxShadow: "0 4px 38px #1198e70d",
        width: size, height: size, overflow: "hidden",
      }}
    >
      {/* Saturn ring */}
      {type === "saturn" && (
        <svg width={size} height={size} style={{ position: "absolute", left: 0, top: 0, zIndex: 0, pointerEvents: "none" }}>
          <ellipse
            cx={size / 2}
            cy={size / 2}
            rx={R + 24}
            ry={R * 0.6 + 11}
            fill="none"
            stroke="#ffe7b6"
            strokeWidth="7"
            opacity="0.4"
            filter="blur(2px)"
          />
          <ellipse
            cx={size / 2}
            cy={size / 2}
            rx={R + 20}
            ry={R * 0.6 + 9}
            fill="none"
            stroke="#d6c597"
            strokeWidth="3"
            opacity="0.8"
            filter="blur(1px)"
          />
        </svg>
      )}
      <svg
        width={size}
        height={size}
        viewBox={"0 0 ${size} ${size}"} //--replace "" to ``
        style={{
          display: "block",
          transformOrigin: "50% 50%",
          animation: "planet-rotate ${speed}s linear infinite", //--replace "" to ``
          position: "relative",
          zIndex: 1,
        }}
      >
        <defs>
          <radialGradient id={"shadowGr-${type}"} cx="50%" cy="70%" r="50%"> //--replace "" to ``
            <stop offset="0%" stopColor={shadow} stopOpacity="0.19" />
            <stop offset="100%" stopColor="#091a29" stopOpacity="0.25" />
          </radialGradient>
        </defs>
        {/* Rim */}
        <ellipse cx={size / 2} cy={size / 2} rx={R} ry={R}
          stroke={rim} strokeWidth="2.5" fill="none" opacity="0.50" />
        {/* Latitude rings */}
        {Array.from({ length: linesN - 1 }, (_, i) => {
          const phi = ((i + 1) * Math.PI) / linesN;
          const r = R * Math.sin(phi);
          const y = R * Math.cos(phi);
          return (
            <ellipse
              key={"lat-${i}"} //--change here also
              cx={size / 2}
              cy={size / 2 - y}
              rx={r}
              ry={r * 0.34 + 0.1}
              stroke={lines}
              strokeWidth="1.1"
              fill="none"
              opacity="0.28"
            />
          );
        })}
        {/* Longitude */}
        {Array.from({ length: mediansN }, (_, k) => {
          const theta = (k * 2 * Math.PI) / mediansN;
          const x = Math.sin(theta) * R;
          const y = Math.cos(theta) * R;
          return (
            <path
              key={"long-${k}"} //--change here also
              d={"M${size / 2 - x},${size / 2 - y} Q${size / 2},${size / 2} ${size / 2 + x},${size / 2 - y}"}
              stroke={meridians}
              opacity="0.13"
              strokeWidth="1.1"
              fill="none"
            />
          );
        })}
        {/* Shadow & highlight */}
        <ellipse cx={size / 2} cy={size / 2 + R * 0.36}
          rx={R * 0.8} ry={R * 0.18}
          fill={"url(#shadowGr-${type})"} //--replace "" to ``
          opacity="0.21"
        />
        <ellipse
          cx={size / 2 + R * 0.44}
          cy={size / 2 - R * 0.5}
          rx={R * 0.16}
          ry={R * 0.1}
          fill={highlight}
          opacity="0.11"
        />
        {/* Sun rays for sun */}
        {type === "sun" && (
          Array.from({ length: 22 }, (_, n) => {
            const angle = (360 / 22) * n;
            return (
              <line
                key={n}
                x1={size / 2}
                y1={size / 2}
                x2={size / 2 + Math.cos((angle * Math.PI) / 180) * (R + 36)}
                y2={size / 2 + Math.sin((angle * Math.PI) / 180) * (R + 36)}
                stroke="#fff9df"
                strokeWidth="3"
                opacity="0.22"
                strokeLinecap="round"
              />
            );
          })
        )}
      </svg>
      <style>{"@keyframes planet-rotate { to { transform: rotate(360deg); } }"}</style> //--replace "" to ``
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[10px] text-white/60 tracking-wider pointer-events-none" style={{ letterSpacing: "0.12em"}}>
        {(type[0].toUpperCase() + type.slice(1))}
      </div>
    </div>
  );
}
}`


const PLANET_DESIGNS = {
  earth: {
    bg: "radial-gradient(circle at 60% 30%, #143951cc 65%, #2f87d6 100%)",
    rim: "#71d9ff",
    lines: "#44d9ff",
    meridians: "#8bfdfe",
    shadow: "#229af9",
    highlight: "#8ff",
    wirefx: { l: 9, m: 10 },
  },
  mars: {
    bg: "radial-gradient(circle at 60% 30%, #56402c 70%, #d76d42 110%)",
    rim: "#fba97b",
    lines: "#d9a044",
    meridians: "#ffddb2",
    shadow: "#a64b24",
    highlight: "#fffadd",
    wirefx: { l: 7, m: 9 },
  },
  moon: {
    bg: "radial-gradient(circle at 60% 30%, #5e616d 65%, #d2d8e6 100%)",
    rim: "#d6dce7",
    lines: "#bfc7d8",
    meridians: "#e6e9ef",
    shadow: "#96a0b5",
    highlight: "#fff",
    wirefx: { l: 7, m: 8 },
  },
  saturn: {
    bg: "radial-gradient(circle at 60% 35%, #79593a 60%, #eddb9d 110%)",
    rim: "#f0e9c3",
    lines: "#feebae",
    meridians: "#eed585",
    shadow: "#b09355",
    highlight: "#fff7d7",
    wirefx: { l: 8, m: 12 },
  },
  sun: {
    bg: "radial-gradient(circle at 50% 32%, #ffc47d 60%, #ff914c 100%)",
    rim: "#ffe08f",
    lines: "#ffedb0",
    meridians: "#ffe4a3",
    shadow: "#fcba57",
    highlight: "#fffbe8",
    wirefx: { l: 10, m: 10 },
  },
  neptune: {
    bg: "radial-gradient(circle at 60% 30%, #274673 60%, #45daf9 100%)",
    rim: "#1afaf9",
    lines: "#54e5fa",
    meridians: "#a9fdfe",
    shadow: "#0a5d8a",
    highlight: "#fff",
    wirefx: { l: 8, m: 10 },
  },
};

export function PlanetDynamic({ size = 200, type = "earth", speed = 16 }) {
  const {
    bg, rim, lines, meridians, shadow, highlight, wirefx: { l: linesN, m: mediansN }
  } = PLANET_DESIGNS[type] || PLANET_DESIGNS.earth;
  const R = size / 2 - 8;

  return (
    <div className="relative inline-block" tabIndex={0}
      style={{
        background: bg, borderRadius: "1000px",
        boxShadow: "0 4px 38px #1198e70d",
        width: size, height: size, overflow: "hidden",
      }}
    >
      {/* Saturn ring */}
      {type === "saturn" && (
        <svg width={size} height={size} style={{ position: "absolute", left: 0, top: 0, zIndex: 0, pointerEvents: "none" }}>
          <ellipse
            cx={size / 2}
            cy={size / 2}
            rx={R + 24}
            ry={R * 0.6 + 11}
            fill="none"
            stroke="#ffe7b6"
            strokeWidth="7"
            opacity="0.4"
            filter="blur(2px)"
          />
          <ellipse
            cx={size / 2}
            cy={size / 2}
            rx={R + 20}
            ry={R * 0.6 + 9}
            fill="none"
            stroke="#d6c597"
            strokeWidth="3"
            opacity="0.8"
            filter="blur(1px)"
          />
        </svg>
      )}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          display: "block",
          transformOrigin: "50% 50%",
          animation: `planet-rotate ${speed}s linear infinite`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <defs>
          <radialGradient id={`shadowGr-${type}`} cx="50%" cy="70%" r="50%">
            <stop offset="0%" stopColor={shadow} stopOpacity="0.19" />
            <stop offset="100%" stopColor="#091a29" stopOpacity="0.25" />
          </radialGradient>
        </defs>
        {/* Rim */}
        <ellipse cx={size / 2} cy={size / 2} rx={R} ry={R}
          stroke={rim} strokeWidth="2.5" fill="none" opacity="0.50" />
        {/* Latitude rings */}
        {Array.from({ length: linesN - 1 }, (_, i) => {
          const phi = ((i + 1) * Math.PI) / linesN;
          const r = R * Math.sin(phi);
          const y = R * Math.cos(phi);
          return (
            <ellipse
              key={`lat-${i}`}
              cx={size / 2}
              cy={size / 2 - y}
              rx={r}
              ry={r * 0.34 + 0.1}
              stroke={lines}
              strokeWidth="1.1"
              fill="none"
              opacity="0.28"
            />
          );
        })}
        {/* Longitude */}
        {Array.from({ length: mediansN }, (_, k) => {
          const theta = (k * 2 * Math.PI) / mediansN;
          const x = Math.sin(theta) * R;
          const y = Math.cos(theta) * R;
          return (
            <path
              key={`long-${k}`}
              d={`M${size / 2 - x},${size / 2 - y} Q${size / 2},${size / 2} ${size / 2 + x},${size / 2 - y}`}
              stroke={meridians}
              opacity="0.13"
              strokeWidth="1.1"
              fill="none"
            />
          );
        })}
        {/* Shadow & highlight */}
        <ellipse cx={size / 2} cy={size / 2 + R * 0.36}
          rx={R * 0.8} ry={R * 0.18}
          fill={`url(#shadowGr-${type})`}
          opacity="0.21"
        />
        <ellipse
          cx={size / 2 + R * 0.44}
          cy={size / 2 - R * 0.5}
          rx={R * 0.16}
          ry={R * 0.1}
          fill={highlight}
          opacity="0.11"
        />
        {/* Sun rays for sun */}
        {type === "sun" && (
          Array.from({ length: 22 }, (_, n) => {
            const angle = (360 / 22) * n;
            return (
              <line
                key={n}
                x1={size / 2}
                y1={size / 2}
                x2={size / 2 + Math.cos((angle * Math.PI) / 180) * (R + 36)}
                y2={size / 2 + Math.sin((angle * Math.PI) / 180) * (R + 36)}
                stroke="#fff9df"
                strokeWidth="3"
                opacity="0.22"
                strokeLinecap="round"
              />
            );
          })
        )}
      </svg>
      <style>{`
        @keyframes planet-rotate { to { transform: rotate(360deg); } }
      `}</style>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[10px] text-white/60 tracking-wider pointer-events-none" style={{ letterSpacing: "0.12em" }}>
        {(type[0].toUpperCase() + type.slice(1))}
      </div>
    </div>
  );
}
