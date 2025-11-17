import React, { useEffect, useState } from "react";

const LEGO_COLORS = [
  "#5187C4", "#FFCF2F", "#38C172", "#F2545B", "#18A4F5", "#333", "#A678DD", "#FC9642"
];

function shuffleBlocks(arr) {
  return arr
    .map((v) => [Math.random(), v])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

export default function LegoFooter() {
  const [assembled, setAssembled] = useState(true);
  const [order, setOrder] = useState(shuffleBlocks([...Array(LEGO_COLORS.length).keys()]));

  useEffect(() => {
    const interval = setInterval(() => {
      setAssembled((a) => !a);
      setOrder(shuffleBlocks([...Array(LEGO_COLORS.length).keys()]));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full flex items-end justify-center py-12 relative overflow-x-hidden bg-zinc-900">
      <div
        className="flex gap-1 select-none"
        style={{ height: 60 }}
      >
        {order.map((i, idx) => (
          <div
            key={i}
            className="rounded shadow-md transition-all duration-700 lego-brick"
            style={{
              // Animate as scattered pieces or stacked footer
              background: LEGO_COLORS[i],
              width: 48,
              height: 48,
              transform: assembled
                ? "translateY(0) scale(1)"
                : `translateY(${Math.sin(i) * 80 + 48}px) scale(${0.8 + Math.sin(i)*0.03}) rotate(${(i%2)*20-10}deg)`,
              opacity: assembled ? 1 : 0.6,
              zIndex: LEGO_COLORS.length - idx,
              transitionDelay: `${idx * 60}ms`
            }}
          />
        ))}
      </div>
      <p className="absolute bottom-2 left-0 w-full text-center text-zinc-200 text-sm tracking-wide animate-fadein">
        Assembled with uizenn · <span className="font-mono text-yellow-300">v1.0</span>
      </p>
      <style>{`
        .lego-brick {
          box-shadow: 0 2px 14px 0 #0002;
        }
        @keyframes fadein { 0% { opacity: 0; } 100%{ opacity: 1; } }
        .animate-fadein { 
          animation: fadein 1.6s cubic-bezier(.45,1.78,.36,1) 1800ms both; 
        }
      `}</style>
    </footer>
  );
}
