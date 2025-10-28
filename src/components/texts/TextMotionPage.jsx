import { useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';
import InstallationLayout from "../../componentLayout/InstallationLayout";
import { useRef } from "react";

export default function TextMotionPage() {
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
        <h2 className="font-bold tracking-tight">Text Motion Effect</h2>
        <p className="text-foreground">
          Displays a flex like motion text effect.
        </p>
      </div>

      <CodeLayout filename='TextMotion.jsx' code={code}>
        <MotionOneText/>
      </CodeLayout>

      <div id='installation' className='scroll-mt-24'>
        <InstallationLayout />
      </div>
    </div>
  );
}

const code = `function MotionOneText() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[200px] px-4">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </div>
    </section>
  );
}

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => "$-{wrap(20, 45, v)}%");

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax relative w-full max-w-[1200px] mx-auto overflow-hidden">
      <motion.div className="scroller flex flex-nowrap gap-8 whitespace-nowrap" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
`;

function MotionOneText() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[200px] px-4">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </div>
    </section>
  );
}


function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(20, 45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax relative w-full max-w-[1200px] mx-auto overflow-hidden">
      <motion.div className="scroller flex flex-nowrap gap-8 whitespace-nowrap" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
