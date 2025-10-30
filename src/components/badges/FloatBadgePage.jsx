import { motion } from "framer-motion";
import { useEffect } from "react";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';
import InstallationLayout from "../../componentLayout/InstallationLayout";

export default function FloatBadgenPage() {
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
        <h2 className="font-bold tracking-tight">Float Badge</h2>
        <p className="text-foreground">
          Displays a animated statistics or number.
        </p>
      </div>

      <CodeLayout filename='FloatBadge.jsx' code={code} enableRefresh>
        {({ refreshKey }) => (
          <div key={refreshKey}>
            <div className="flex flex-wrap items-center gap-2">
              <FloatBadge>Framer Motion</FloatBadge>
              <FloatBadge delay={0.12}>Tailwind CSS</FloatBadge>
              <FloatBadge delay={0.22}>Dark Mode</FloatBadge>
              <FloatBadge delay={0.30}>Accessible</FloatBadge>
            </div>
          </div>
        )}
      </CodeLayout>

      <div id='installation' className='scroll-mt-24'>
        <InstallationLayout />
      </div>
    </div>
  );
}

const code = `function FloatBadge({ children, delay = 0 }) {
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
`;

export function FloatBadge({ children, delay = 0 }) {
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