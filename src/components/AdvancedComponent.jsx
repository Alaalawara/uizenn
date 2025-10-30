import { Roadmap } from "./animation/RoadMapPage";
import { FAQ } from './accordion/SimpleAccordionPage';
import { RailAnimaton } from "./animation/RailAnimation";
import { useMotionValue } from "framer-motion";

export default function AdvancedComponent() {
   const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  }

  return (
    <div onMouseMove={onMove} className="relative bg-[var(--bg)] text-[var(--fg)] overflow-hidden">

      <section className="relative z-10 mx-auto py-6 w-full max-w-6xl px-5">
        <Roadmap />
      </section>

      <section className="relative z-10 mx-auto py-6 w-full max-w-6xl px-5">
        <FAQ />
      </section>

      <section className="relative z-10 mx-auto py-6 w-full max-w-6xl px-5">
        <RailAnimaton />
      </section>
    </div>
  );
}
