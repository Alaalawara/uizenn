import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';
import InstallationLayout from "../../componentLayout/InstallationLayout";

export default function TextBouncePage() {
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
        <h2 className="font-bold tracking-tight">Bounce Text Effect</h2>
        <p className="text-foreground">
          Displays a bounce effects.
        </p>
      </div>

      <CodeLayout filename='TextBounce.jsx' code={code}>
        <TextBounce />
      </CodeLayout>

      <div id='installation' className='scroll-mt-24'>
        <InstallationLayout />
      </div>
    </div>
  );
}

const code = `function TextBounce() {
  const [isReverse, setIsReverse] = useState(false);
  const variants = {
    slide: {
      x: [0, 10],
      transition: {
        duration: 1,

        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0
      }
    },

    slideReverse: {
      x: [null, 100],
      transition: {
        duration: 1
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <motion.div
        initial={{ opacity: 0, y: 600 }}
        animate={{ opacity: 1, y: 200 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 3 }}
        className="flex flex-row animate-bounce dalay-500">
        <Link to="/"><h1 className='text-black font-medium m-0'>uizenn</h1></Link>
      </motion.div>
      <motion.p
        variants={variants}
        animate={isReverse ? "slideReverse" : "slide"}
        className='min-w-[140px] h-1 bg-black absolute top-56'></motion.p>
    </div>
  );
}
`;

function TextBounce() {
  const [isReverse, setIsReverse] = useState(false);
  const variants = {
    slide: {
      x: [0, 10],
      transition: {
        duration: 1,

        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0
      }
    },

    slideReverse: {
      x: [null, 100],
      transition: {
        duration: 1
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <motion.div
        initial={{ opacity: 0, y: 600 }}
        animate={{ opacity: 1, y: 200 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 3 }}
        className="flex flex-row animate-bounce dalay-500">
        <Link to="/"><h1 className='text-black font-medium m-0'>uizenn</h1></Link>
      </motion.div>
      <motion.p
        variants={variants}
        animate={isReverse ? "slideReverse" : "slide"}
        className='min-w-[140px] h-1 bg-black absolute top-56'></motion.p>
    </div>
  );
}