import { useEffect } from "react";
import { Link } from "react-router-dom";
import CodeLayout from "../../componentLayout/CodeLayout";
import { useToc } from "../../contexts/TocContext";
import InstallationLayout from "../../componentLayout/InstallationLayout";

const Code1 = `import { motion } from 'framer-motion';

function SimpleCard() {
  return (
    <Link className="cursor-pointer" to={""}>
      <div className="flex flex-col gap-4 rounded-lg border-2 border-foreground p-2">
        {/* <img /> */}
        <span className="min-h-[100px] min-w-[200px] bg-foreground rounded-lg"></span>
        <span>
          <h4 className="font-medium tracking-tight">Simple Card</h4>
          <p className="text-foreground">you description here</p>
        </span>
      </div>
    </Link>
  );
}
`;

const Code2 = `import { motion } from 'framer-motion';

function OntapButton() {
  return (
         <span className='border-b-6 border-[#886372] rounded-b-2xl'>
            <motion.button
                whileHover={{ y: 3 }}
                whileTap={{ y: [0, 3] }}
                className="inline-flex items-center md:text-3xl sm:text-3xl justify-center cursor-pointer rounded-xl border-2 border-[#886372] bg-[#f9c4d2] text-[#886372] font-medium px-4 py-1.5 text-sm"
            >
                Button
            </motion.button>
         </span>
  );
}
`;

const Code3 = `import { motion } from 'framer-motion';

function SimpleCard() {
  return (
   <Link className="cursor-pointer" to={""}>
      <div className="flex flex-col gap-4 rounded-lg border-2  p-2">
        {/* <img /> */}
        <span className="min-h-[100px] min-w-[200px] bg-foreground rounded-lg"></span>
        <span className="flex flex-col">
          <h4 className="font-medium tracking-tight">Simple Card</h4>
          <p className="text-foreground">you description here</p>
          <button className="mt-2 rounded-lg px-4 py-1 font-medium cursor-pointer bg-black text-white hover:opacity-80">more</button>
        </span>
      </div>
    </Link>
  );
}
`;

export default function SimpleCardPage() {
  const { setItems } = useToc();

  const hasInstallation = true;
  const hasUsage = true;
  const hasExamples = true;

  useEffect(() => {
    const list = [
      { id: "usage", label: "Usage" },
      { id: "installation", label: "Installation" },
      { id: "examples", label: "Examples" }
    ]
      .filter((s) =>
        (s.id === "usage" && hasUsage) ||
        (s.id === "installation" && hasInstallation) ||
        (s.id === "examples" && hasExamples)
      );
    setItems?.(list);
    return () => setItems?.([]);
  }, [setItems, hasInstallation, hasUsage, hasExamples]);

  return (
    <div className="flex flex-col gap-10">
      <div id="usage" className="flex flex-col gap-4 items-start scroll-mt-24">
        <h2 className="font-bold tracking-tight text-2xl">Simple Card</h2>
        <p className="text-foreground">Interactive simple card with Tailwind CSS and Framer Motion.</p>
      </div>

      <CodeLayout filename="SimpleCard.jsx" code={Code1}>
        <SimpleCard />
      </CodeLayout>

      <div id='installation' className='scroll-mt-24'>
        <InstallationLayout />
      </div>

      {/* example 2 */}
      <div id="examples" className="flex flex-col gap-4 items-start scroll-mt-24">
        <h3 className="font-medium tracking-tight text-xl">Scale up</h3>
      </div>

      <CodeLayout filename="SimpleCard.jsx" code={Code2}>
        <SimpleCard2 />
      </CodeLayout>

      {/* example 3 */}
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-medium tracking-tight text-xl">Button Link</h3>
      </div>

      <CodeLayout filename="SimpleCard.jsx" code={Code3}>
        <SimpleCard3 />
      </CodeLayout>

    </div>
  );
}


//component code

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


function SimpleCard() {
  return (
    <Link className="cursor-pointer" to={""}>
      <div className="flex flex-col gap-4 rounded-lg border-2 border-foreground p-2">
        {/* <img /> */}
        <span className="min-h-[100px] min-w-[200px] bg-foreground rounded-lg"></span>
        <span>
          <h4 className="font-medium tracking-tight">Simple Card</h4>
          <p className="text-foreground">you description here</p>
        </span>
      </div>
    </Link>
  );
}

function SimpleCard2() {
  return (
    <Link
      alt="Profile"
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="cursor-pointer ease-in-out transition delay-150 duration-300 hover:-translate-y-1 hover:scale-100">
      <div className="flex flex-col gap-4 rounded-lg border-2 border-red-300 p-2">
        {/* <img /> */}
        <span className="min-h-[100px] min-w-[200px] bg-red-300 rounded-lg"></span>
        <span>
          <h4 className="font-medium tracking-tight text-red-400">Simple Card</h4>
          <p className="text-red-300">you description here</p>
        </span>
      </div>
    </Link>
  );
}

function SimpleCard3() {
  return (
    <Link className="cursor-pointer" to={""}>
      <div className="flex flex-col gap-4 rounded-lg border-2 border-blue-300  p-2">
        <span className="w-50 h-30 max-h-30 max-w-50 rounded-lg">
          <img className="w-50 h-30 max-h-30 max-w-50 rounded-lg" src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg" />
        </span>
        <span className="flex flex-col">
          <h4 className="font-medium tracking-tight text-blue-500">Simple Card</h4>
          <p className="text-blue-300">you description here</p>
          <button className="mt-2 rounded-lg px-4 py-1 font-medium cursor-pointer bg-blue-500 text-white hover:opacity-80">more</button>
        </span>
      </div>
    </Link>
  );
}


//Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
