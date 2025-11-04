import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';
import InstallationLayout from "../../componentLayout/InstallationLayout";

export default function RailAnimationPage() {
  const { setItems } = useToc();

  const hasUsage = true;
  const hasInstallation = true;

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


  return (
    <div className="flex flex-col gap-10">
      <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
        <h2 className="font-bold tracking-tight">Rail Animation</h2>
        <p className="text-foreground">
          Display a Rail like animation.
        </p>
      </div>

      <CodeLayout filename='RailAnimation.jsx' code={code} enableRefresh>
           {({ refreshKey }) => (
                    <div key={refreshKey} className="lg:w-[600px] w-[200px]">
                         <RailAnimaton />
                    </div>
                )}
      </CodeLayout>

      <div id='installation' className='scroll-mt-24'>
        <InstallationLayout />
      </div>
    </div>
  );
}

const code = `function RailAnimaton() {
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

`;


export function RailAnimaton() {
  const logos = ["U", "I", "Z", "E", "N", "N"];
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
            className="grid h-16 place-content-center rounded-lg bg-foreground/20 text-[var(--fg)]"
          >
            <span className="text-lg font-semibold">{L}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
