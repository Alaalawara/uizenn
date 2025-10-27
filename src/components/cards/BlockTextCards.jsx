import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from "../../contexts/TocContext";

const Code1 = `const Example = () => {
  return (
    <div className="flex items-center justify-center py-16 text-neutral-800">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any issue you may face.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How does seat based pricing work?",
          "What's the meaning of life?",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-xl space-y-9">
      <div>
        <p className="text-sm font-light uppercase text-[var(--fg)]">{tag}</p>
        <hr className="border-foreground" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed text-[var(--fg)]">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-foreground" />
      </div>
      <button className="w-full rounded-lg border border-neutral-950 py-2 text-sm font-medium transition-colors bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-80">
        Contact Support
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3 text-[var(--fg)]">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={$-{exampleIndex}-{i}}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
`;

const Code2 = `npm i framer-motion tailwindcss`

export default function BlockTextCardPage() {
  const [copied, setCopied] = useState(false);
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

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(Code2);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch { }
  };

  return (
    <div className="flex flex-col gap-10">
      <div id="usage" className="flex flex-col gap-4 items-start scroll-mt-24">
        <h2 className="font-bold tracking-tight text-2xl">Animated Block Text Card</h2>
        <p className="text-foreground">Interactive on tap button built with Framer Motion.</p>
      </div>

      <CodeLayout filename="AnimatedBlockTextCard.jsx" code={Code1}>
        <Example />
      </CodeLayout>

      <div id="installation" className="flex flex-col gap-4 items-start scroll-mt-24">
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
            {Code2}
          </pre>
        </div>
      </div>

    </div>
  );
}


const Example = () => {
  return (
    <div className="flex items-center justify-center py-16 text-neutral-800">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any issue you may face.
          </>
        }
        examples={[
          "Does your product work for SMBs?",
          "Can I pause my membership without losing my data?",
          "How does seat based pricing work?",
          "What's the meaning of life?",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-xl space-y-9">
      <div>
        <p className="text-sm font-light uppercase text-[var(--fg)]">{tag}</p>
        <hr className="border-foreground" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed text-[var(--fg)]">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-foreground" />
      </div>
      <button className="w-full rounded-lg border border-neutral-950 py-2 text-sm font-medium transition-colors bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-80">
        Contact Support
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3 text-[var(--fg)]">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};