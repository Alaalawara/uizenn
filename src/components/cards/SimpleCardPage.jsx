import { useState } from "react";
import { Link } from "react-router-dom";

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
          <button className="mt-2 rounded-full px-4 py-1 font-medium cursor-pointer bg-black text-white hover:opacity-80">more</button>
        </span>
      </div>
    </Link>
  );
}
`;

export default function SimpleCardPage() {
  const [tab, setTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch { }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 items-start">
        <h2 className="font-bold tracking-tight text-2xl">Simple Card</h2>
        <p className="text-foreground">Interactive simple card with Tailwind CSS and Framer Motion.</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-4 text-sm">
          <button
            className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
            onClick={() => setTab('preview')}
          >
            Preview
          </button>
          <button
            className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-gray-500'}`}
            onClick={() => setTab('code')}
          >
            Code
          </button>
        </div>

        {/* Panel */}
        {tab === 'preview' ? (
          <div className="rounded-lg items-center justify-center flex border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
            <div className="relative w-full h-[250px]">
              <div className="absolute inset-0 flex justify-center items-center">
                <SimpleCard />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border h-[400px] min-h-[400px] max-h-[400px] border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
            <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
              <span className="text-xs font-medium text-foreground">simple-card.jsx</span>
              <button
                type="button"
                onClick={copy}
                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
              <code1>{Code1}</code1>
            </pre>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-medium tracking-tight text-xl">Installation</h3>
        <div className="rounded-lg border border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
          <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
            <span className="text-xs font-medium text-foreground">npm</span>
            <button
              type="button"
              onClick={copy}
              className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
            npm i framer-motion tailwindcss
          </pre>
        </div>
      </div>

      {/* example 2 */}
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-medium tracking-tight text-xl">Scale up</h3>
      </div>
      <div className="flex flex-col gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-4 text-sm">
          <button
            className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
            onClick={() => setTab('preview')}
          >
            Preview
          </button>
          <button
            className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-gray-500'}`}
            onClick={() => setTab('code')}
          >
            Code
          </button>
        </div>
        {/* Panel */}
        {tab === 'preview' ? (
          <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 grid place-items-center">
                <SimpleCard2 />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border h-[400px] min-h-[400px] max-h-[400px] border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
            <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
              <span className="text-xs font-medium text-foreground">3d-button.jsx</span>
              <button
                type="button"
                onClick={copy}
                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
              <code>{Code2}</code>
            </pre>
          </div>
        )}
      </div>

      {/* example 3 */}
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-medium tracking-tight text-xl">Button Link</h3>
      </div>
      <div className="flex flex-col gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-4 text-sm">
          <button
            className={`font-medium cursor-pointer ${tab === 'preview' ? '' : 'text-foreground'}`}
            onClick={() => setTab('preview')}
          >
            Preview
          </button>
          <button
            className={`font-medium cursor-pointer ${tab === 'code' ? '' : 'text-gray-500'}`}
            onClick={() => setTab('code')}
          >
            Code
          </button>
        </div>
        {/* Panel */}
        {tab === 'preview' ? (
          <div className="rounded-lg border border-foreground max-w-[800px] h-[400px] min-h-[400px] max-h-[400px]">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 grid place-items-center">
                <SimpleCard3 />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border h-[400px] min-h-[400px] max-h-[400px] border-foreground max-w-[800px] w-[800px] bg-secondary overflow-hidden">
            <div className="flex items-center justify-between border-b border-foreground px-3 py-2">
              <span className="text-xs font-medium text-foreground">3d-button.jsx</span>
              <button
                type="button"
                onClick={copy}
                className="rounded-lg border cursor-pointer border-foreground bg-secondary px-2 py-1 text-xs font-semibold hover:opacity-70 active:translate-y-[1px] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="max-w-[800px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none][scrollbar-width:none] p-3 text-sm dark:bg-[var(--bg)] dark:text-[var(--fg)]">
              <code3>{Code3}</code3>
            </pre>
          </div>
        )}
      </div>

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
        <img className="w-50 h-30 max-h-30 max-w-50 rounded-lg" src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg"/>
        </span>
        <span className="flex flex-col">
          <h4 className="font-medium tracking-tight text-blue-500">Simple Card</h4>
          <p className="text-blue-300">you description here</p>
          <button className="mt-2 rounded-full px-4 py-1 font-medium cursor-pointer bg-blue-500 text-white hover:opacity-80">more</button>
        </span>
      </div>
    </Link>
  );
}


//Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
