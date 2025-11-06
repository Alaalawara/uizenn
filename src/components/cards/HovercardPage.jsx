import { useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from "../../contexts/TocContext";
import InstallationLayout from '../../componentLayout/InstallationLayout';
import HoverCard from "./Hovercard?raw";

export default function HoverCardPage() {
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


  return (
    <div className="flex flex-col gap-10">
      <div id="usage" className="flex flex-col gap-4 items-start scroll-mt-24">
        <h2 className="font-bold tracking-tight text-2xl">Hover Card 3D</h2>
        <p className="text-foreground">Interactive 3D hover card built with Framer Motion and Tailwind CSS.</p>
      </div>

      <CodeLayout filename="hoverCard3d.jsx" code={HoverCard}>
        <Example1 />
      </CodeLayout>

      <div id='installation' className='scroll-mt-24'>
        <InstallationLayout />
      </div>

    </div>
  );
}

const Example1 = () => {
  return (
    <div className="grid w-full max-w-[800px] h-[400px] min-h-[400px] max-h-[400px] place-content-center px-4 py-12">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-50 w-50 rounded-full bg-gradient-to-br from-gray-300 to-slate-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-full  bg-gradient-to-br from-gray-200 to-slate-300 shadow-lg"
      >
        <span className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-800"><path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
        </span>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-slate-800 text-lg font-bold"
        >
          INNER PEACE
        </p>
      </div>
    </motion.div>
  );
};
