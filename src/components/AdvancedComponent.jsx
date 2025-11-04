import { Roadmap } from "./animation/RoadMapPage";
import { FAQ } from './accordion/SimpleAccordionPage';
import { RailAnimaton } from "./animation/RailAnimation";
import { useMotionValue } from "framer-motion";
import PlanetDynamic from "./animation/PlanetDyanmic";

export default function AdvancedComponent() {
  const types = ["earth", "mars", "moon", "saturn", "sun", "neptune"];
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
        <div className="flex flex-wrap gap-8 justify-center items-center p-6">
          {types.map(type => (
            <div key={type} className="flex flex-col items-center gap-2">
              <PlanetDynamic type={type} size={120} speed={16 + Math.random() * 12} />
            </div>
          ))}
        </div>
      </section>

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
